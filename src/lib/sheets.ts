const PUBLISHED_SHEET_KEY =
  '2PACX-1vQeRQ5VAaQfGuBuOl1AKIktnCubBKhDAcGlQD5-1PyqIJ8P5VR6HKjRxkYBQZrWzeHs1QD5XlA54GGl';

export interface Yacht {
  id: string;
  name: string;
  countryName: string;
  countryId: string;
  length?: string;
  width?: string;
  year?: string;
  engines?: string;
  speed?: string;
  cabins?: string;
  capacity?: string;
  description: string;
  accommodation: string;
  toysAndEntertainment: string[];
  images: string[];
}

function parseCSVRow(rowText: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < rowText.length; i++) {
    const char = rowText[i];
    if (char === '"') {
      if (inQuotes && rowText[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
}

export async function getYachtsFromSheets(): Promise<Yacht[]> {
  const tabs = [
    { name: 'Египет', id: 'egypt' },
    { name: 'Мальдивы', id: 'maldives' },
    { name: 'Сейшелы', id: 'seychelles' },
    { name: 'Индонезия', id: 'indonesia' },
    { name: 'Галапагосы', id: 'galapagos' },
    { name: 'Оман', id: 'oman' },
    { name: 'Палау', id: 'palau' },
    { name: 'Коста-Рика', id: 'costa-rica' },
  ];

  const allYachts: Yacht[] = [];

  for (const tab of tabs) {
    try {
      const csvUrl = `https://docs.google.com/spreadsheets/d/e/${PUBLISHED_SHEET_KEY}/pub?sheet=${encodeURIComponent(tab.name)}&output=csv`;
      const res = await fetch(csvUrl);
      if (!res.ok) continue;

      const csvText = await res.text();
      const lines = csvText.split('\n').filter((l) => l.trim() !== '');
      if (lines.length <= 1) continue;

      let currentYacht: Yacht | null = null;

      for (let i = 1; i < lines.length; i++) {
        const row = parseCSVRow(lines[i]);
        const yachtName = row[0]?.trim();
        const desc = row[1]?.trim();
        const specName = row[2]?.trim();
        const specVal = row[3]?.trim();
        const accommodation = row[4]?.trim();
        const entertainment = row[5]?.trim();
        const photoUrl = row[6]?.trim();

        if (yachtName) {
          if (currentYacht) allYachts.push(currentYacht);
          currentYacht = {
            id: `${yachtName.toLowerCase().replace(/\s+/g, '-')}-${tab.id}`,
            name: yachtName,
            countryName: tab.name,
            countryId: tab.id,
            description: desc || '',
            accommodation: accommodation || '',
            toysAndEntertainment: entertainment ? [entertainment] : [],
            images: [],
          };
        }

        if (currentYacht) {
          if (specName && specVal) {
            const specLower = specName.toLowerCase();
            if (specLower.includes('длина')) currentYacht.length = specVal;
            else if (specLower.includes('ширина')) currentYacht.width = specVal;
            else if (specLower.includes('год')) currentYacht.year = specVal;
            else if (specLower.includes('двигател'))
              currentYacht.engines = specVal;
            else if (specLower.includes('скорост'))
              currentYacht.speed = specVal;
            else if (specLower.includes('кают')) currentYacht.cabins = specVal;
            else if (specLower.includes('вместимост'))
              currentYacht.capacity = specVal;
          }

          if (
            photoUrl &&
            photoUrl.startsWith('http') &&
            !currentYacht.images.includes(photoUrl)
          ) {
            currentYacht.images.push(photoUrl);
          }
          if (
            accommodation &&
            currentYacht.accommodation !== accommodation &&
            !currentYacht.accommodation.includes(accommodation)
          ) {
            currentYacht.accommodation += '\n' + accommodation;
          }
          if (
            entertainment &&
            !currentYacht.toysAndEntertainment.includes(entertainment)
          ) {
            currentYacht.toysAndEntertainment.push(entertainment);
          }
        }
      }

      if (currentYacht) {
        allYachts.push(currentYacht);
      }
    } catch (e) {
      console.error(`Ошибка загрузки листка ${tab.name}:`, e);
    }
  }

  return allYachts;
}
