export interface Country {
  id: string;
  name: string;
  flag: string;
  image: string;
  description: string;
  yachtCount: number;
  popularSeason: string;
}

export interface YachtSpecs {
  year: string;
  engines: string;
  nitrox: string;
  tender: string;
}

export interface Yacht {
  id: string;
  name: string;
  countryId: string;
  countryName: string;
  type: string;
  length: string;
  capacity: string;
  cabins: string;
  speed: string;
  crew: string;
  images: string[];
  description: string;
  accommodation?: string;
  toysAndEntertainment?: string[];
  driveFolderUrl?: string;
  specs: YachtSpecs;
  amenities: string[];
  waterSports: string[];
  price: string;
  pricePeriod?: string;
}

export interface Review {
  id: string;
  name: string;
  title: string;
  rating: number;
  text: string;
  avatar: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SheetDataResponse {
  source: string;
  updatedAt: string;
  countries: Country[];
  yachts: Yacht[];
  reviews: Review[];
  faqs: FAQItem[];
}

export const DEFAULT_COUNTRIES: Country[] = [
  {
    id: 'maldives',
    name: 'Мальдивы',
    flag: '🇲🇻',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
    description: 'Мальдивы - идеальное направление для премиального отдыха на яхте среди бирюзовых лагун, необитаемых островов и белоснежных пляжей. Лучший сезон длится с ноября по апрель, когда море спокойно, а погода солнечна. В остальное время погода тоже отличная, но более высока вероятность кратковременных дождей. Во время путешествия можно встретить дельфинов, мант, китовых акул и морских черепах, заниматься снорклингом, дайвингом, рыбалкой, кататься с водной горки прямо с борта яхты, устраивать пикники на песчаных косах и просто наслаждаться приватным отдыхом на просторах Индийского океана.',
    yachtCount: 5,
    popularSeason: 'Ноябрь - Апрель'
  },
  {
    id: 'indonesia',
    name: 'Индонезия',
    flag: '🇮🇩',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    description: 'Индонезия - крупнейший архипелаг мира, объединяющий тысячи островов, вулканические пейзажи, уединенные бухты и богатую культуру, что делает его одним из самых впечатляющих направлений для яхтенных путешествий. Направление круглогодичное - в морском национальном парке Комодо лушее время с мая по сентябрь, а в Раджа Ампат с октября по апрель, когда преобладает сухая и солнечная погода. Во время круиза можно встретить дельфинов, мант, морских черепах и китовых акул, заниматься снорклингом и дайвингом, исследовать необитаемые острова и посещать национальные парки (например, познакомиться с известными комодскими варанами).',
    yachtCount: 4,
    popularSeason: 'Круглый год'
  },
  {
    id: 'seychelles',
    name: 'Сейшелы',
    flag: '🇸🇨',
    image: 'https://images.unsplash.com/photo-1589553460732-58ef7a71fbb5?auto=format&fit=crop&w=1200&q=80',
    description: 'Сейшелы - архипелаг гранитных островов, скрытых бухт и нетронутой природы, идеально подходящий для неспешных яхтенных путешествий. Лучшее время для отдыха апрель-май и октябрь-ноябрь, когда море наиболее спокойное. Гостей ждут встречи с черепахами и китовыми акулами, снорклинг, каякинг, прогулки по национальным паркам, трекинги, знакомство с креольской кухней и отдых на одних из самых красивых пляжей мира.',
    yachtCount: 3,
    popularSeason: 'Апрель-Май, Октябрь-Ноябрь'
  },
  {
    id: 'galapagos',
    name: 'Галапагосы',
    flag: '🇪🇨',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    description: 'Галапагосы - одно из самых эксклюзивных экспедиционных направлений мира, где путешествие на яхте становится погружением в уникальную дикую природу. Здесь можно наблюдать китовых акул, морских львов, пингвинов и морских игуан, исследовать вулканические острова, заниматься снорклингом и дайвингом, посещать природные заповедники. К путешествию на яхте можно добавить наземную программу в Перу и познакомиться с культурным наследием инков.',
    yachtCount: 2,
    popularSeason: 'Июнь - Декабрь'
  },
  {
    id: 'oman',
    name: 'Оман',
    flag: '🇴🇲',
    image: 'https://images.unsplash.com/photo-1512632578553-199e35792597?auto=format&fit=crop&w=1200&q=80',
    description: 'Оман сочетает восточную культуру, дикие пляжи, фьорды и горные пейзажи, оставаясь одним из самых аутентичных направлений для яхтенного отдыха. Лучший сезон продолжается с октября по апрель. Во время путешествия можно наблюдать дельфинов, китовых акул и морских черепах, заниматься дайвингом и снорклингом, исследовать фьорды Мусандама, а также посетить древние форты, оазисы и заодно совершить сафари по пустыне.',
    yachtCount: 2,
    popularSeason: 'Октябрь - Апрель'
  },
  {
    id: 'palau',
    name: 'Палау',
    flag: '🇵🇼',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    description: 'Палау - часть Микронезии, удаленный архипелаг в Тихом океане с сотнями необитаемых островов и нетронутыми морскими заповедниками, созданный для ценителей приватных путешествий. Лучший период для посещения с ноября по апрель. Здесь можно встретить дельфинов, мант и морских черепах, исследовать скрытые лагуны, заниматься снорклингом и дайвингом, каякингом и рыбалкой, а на суше открывать тропические джунгли и уединенные пляжи.',
    yachtCount: 2,
    popularSeason: 'Ноябрь - Апрель'
  },
  {
    id: 'egypt',
    name: 'Египет',
    flag: '🇪🇬',
    image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1200&q=80',
    description: 'Египет - одно из самых доступных и комфортных направлений для яхтенных путешествий по Красному морю, где кристально чистая вода, живописные коралловые рифы и солнечная погода сочетаются с высоким уровнем сервиса наших яхт. Лучшее время для отдыха с марта по май и с сентября по ноябрь, хотя путешествия возможны практически круглый год. Во время круиза можно встретить дельфинов, морских черепах, скатов и множество ярких тропических рыб, заняться снорклингом, дайвингом и рыбалкой, посетить уединенные бухты, а на берегу познакомиться с древними памятниками, пустынными ландшафтами и восточной культурой.',
    yachtCount: 2,
    popularSeason: 'Март-Май, Сентябрь-Ноябрь'
  },
  {
    id: 'costa-rica',
    name: 'Коста-Рика',
    flag: '🇨🇷',
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80',
    description: 'Коста-Рика - направление для тех, кто хочет совместить яхтенный отдых с приключениями и богатой природой Центральной Америки. Лучший сезон длится с декабря по апрель. Во время путешествия можно наблюдать горбатых китов, дельфинов и морских черепах, заниматься дайвингом, снорклингом и спортивной рыбалкой, а на берегу исследовать национальные парки, вулканы, водопады и тропические леса.',
    yachtCount: 2,
    popularSeason: 'Декабрь - Апрель'
  },
  {
    id: 'primer',
    name: 'Пример',
    flag: '🧭',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    description: 'Направление для тестирования и демонстрации новых яхт.',
    yachtCount: 1,
    popularSeason: 'Круглый год'
  }
];

export const DEFAULT_YACHTS: Yacht[] = [
  {
    id: 'scubaspa-ying',
    name: 'Scubaspa Ying & Yang',
    countryId: 'maldives',
    countryName: 'Мальдивы',
    type: 'Суперяхта',
    length: '50 м',
    capacity: '38 гостей',
    cabins: '19 люкс-кают',
    speed: '12 узлов',
    crew: '25 человек',
    images: [
      'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Уникальное сочетание 5★ спа-курорта и высококлассного дайвинг-сафари. Джакузи на открытой палубе, фитнес-зал, ресторан авторской кухни и отдельный дайв-дони.',
    accommodation: '19 роскошных кают трех категорий: 1 Manta Suite (с двухспальной кроватью King и панорамным видом на океан), 9 Dolphin Suites (просторные каюты с двуспальными кроватями) и 9 Cowrie Suites (уютные твин/дабл каюты на нижней палубе). Каждая каюта оснащена приватной ванной комнатой, кондиционером и сейфом.',
    toysAndEntertainment: [
      'Спа-комплекс 300 м² (6 массажных кабинетов)',
      'Гигантское джакузи с баром на верхней палубе',
      'Сибобы (SeaBob F5 S)',
      'Надувная водная горка с борта яхты',
      'Каяки с прозрачным дном и сапборды',
      'Оборудование для дайвинга и сноркелинга Mares',
      'Спутники Starlink с высокой скоростью Wi-Fi'
    ],
    driveFolderUrl: 'https://disk.yandex.ru/d/scubaspa-maldives-photos',
    specs: {
      year: '2022 (Реновация)',
      engines: '2x MTU 1000 HP',
      nitrox: 'Есть (без ограничений)',
      tender: 'Дайв-дони 20 метров'
    },
    amenities: ['Спа-салон 300 м²', 'Джакузи на верхнем deck', 'Солярий', 'Йога-палуба', 'Бар с сомелье', 'Wi-Fi Starlink'],
    waterSports: ['Дайвинг', 'Каяки', 'Сапборды', 'Сноркелинг', 'Гидроциклы'],
    price: 'от $3,800 / чел. в неделю'
  },
  {
    id: 'emperor-serenity',
    name: 'Emperor Serenity Luxury',
    countryId: 'maldives',
    countryName: 'Мальдивы',
    type: 'Моторная яхта',
    length: '40 м',
    capacity: '26 гостей',
    cabins: '13 мастер-кают',
    speed: '13 узлов',
    crew: '16 человек',
    images: [
      'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Современная экспедиционная яхта класса Люкс. Большие панорамные окна в каютах, обеденная зона на открытом воздухе и профессиональная команда гидов.',
    accommodation: '13 кают класса Deluxe: 3 каюты Executive Suite на верхней палубе с собственной террасой, 2 каюты Upper Deck с панорамными окнами и 8 кают Lower Deck с трансформируемыми кроватями.',
    toysAndEntertainment: [
      'Подводные скутеры Seabob',
      'Комплекты для ночного дайвинга и фотосъемки',
      'Открытый кинотеатр на сан-деке',
      'Барбекю-зона для ужинов на диких островах'
    ],
    driveFolderUrl: 'https://disk.yandex.ru/d/emperor-serenity-photos',
    specs: {
      year: '2021',
      engines: '2x Caterpillar 800 HP',
      nitrox: 'Да',
      tender: 'Дайв-бот 18м'
    },
    amenities: ['Панорамный лаундж', 'Массажный кабинет', 'Кинотеатр под открытым небом', 'Мини-бар в каютах'],
    waterSports: ['Дайвинг', 'Сибобы (SeaBob)', 'Сноркелинг'],
    price: 'от $2,950 / чел. в неделю'
  },
  {
    id: 'prana-by-atizar',
    name: 'Prana by Atzaro',
    countryId: 'indonesia',
    countryName: 'Индонезия (Раджа-Ампат)',
    type: 'Парусная пиниси',
    length: '55 м',
    capacity: '18 гостей',
    cabins: '9 люксов',
    speed: '11 узлов',
    crew: '20 человек',
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Самая большая и роскошная тиковая парусная пиниси в мире. Эксклюзивные маршруты по Раджа-Ампат и островам Комодо.',
    accommodation: '9 супер-люксов: Главный мастер-сьют "Atzaro Suite" (67 м²) с круговым остеклением 270° и открытым балконом. 8 кают категории Deluxe & Family с отделкой из железного дерева и ценных пород тика.',
    toysAndEntertainment: [
      'Водные лыжи и уэйкборды',
      'Экспедиционные каяки и SUP-борды',
      'Спа-кабинет с массажистами с острова Бали',
      'Площадка для йоги под парусами',
      'Профессиональная дайв-станция Nitrox'
    ],
    driveFolderUrl: 'https://disk.yandex.ru/d/prana-atzaro-photos',
    specs: {
      year: '2020',
      engines: 'Yanmer 1200 HP',
      nitrox: 'Да',
      tender: '2x РИБ 7.5м'
    },
    amenities: ['4 палубы', 'Зал для йоги', 'Спа-комплекс', 'Звездный кинотеатр', 'Шеф-повар Мишлен уровня'],
    waterSports: ['Дайвинг', 'Уэйкбординг', 'Сибобы', 'Каяки', 'Водные лыжи'],
    price: 'от $15,500 / сутки (приватно)'
  },
  {
    id: 'galapagos-sky',
    name: 'Galapagos Sky Expedition',
    countryId: 'galapagos',
    countryName: 'Галапагосы',
    type: 'Моторная яхта',
    length: '33 м',
    capacity: '16 гостей',
    cabins: '8 кают',
    speed: '12 узлов',
    crew: '11 человек',
    images: [
      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Специализированное экспедиционное судно VIP-класса для погружений у островов Вольф и Дарвин с легендарными акулами-молотами.',
    accommodation: '8 элегантных кают (4 Master Staterooms на верхней палубе с большими окнами и 4 Deluxe Staterooms на нижней палубе). В каждой каюте кондиционер, индивидуальный санузел и ортопедические матрасы.',
    toysAndEntertainment: [
      '2 скоростных надувных бота Zodiac для высадок',
      'Сушильная комната для гидрокостюмов',
      'Специальная станция для обслуживания подводных камер',
      'Солярий с лежаками и панорамным баром'
    ],
    driveFolderUrl: 'https://disk.yandex.ru/d/galapagos-sky-photos',
    specs: {
      year: '2021 (Апгрейд)',
      engines: 'Caterpillar 1000 HP',
      nitrox: 'Бесплатно для сертификатов',
      tender: '2x Zodiac Master'
    },
    amenities: ['Солярий с баром', 'Мультимедиа центр', 'Сушильный шкаф для снаряжения', 'Камера-рум'],
    waterSports: ['Экспедиционный дайвинг', 'Сноркелинг с котиками'],
    price: 'от $6,495 / чел. в неделю'
  },
  {
    id: 'seychelles-pegasus',
    name: 'Pegasus Seychelles Luxury',
    countryId: 'seychelles',
    countryName: 'Сейшелы',
    type: 'Катамаран',
    length: '45 м',
    capacity: '44 гостя',
    cabins: '21 каюта с балконами',
    speed: '10 узлов',
    crew: '18 человек',
    images: [
      'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Премиальный моторный катамаран океанского класса. Прекрасная устойчивость, мини-осадка для входа в самые уединенные бухты.',
    accommodation: '21 внешняя каюта с окнами или приватными панорамными балконами. Каюты оснащены кондиционером, плазменным ТВ, сейфом и душевыми кабинами.',
    toysAndEntertainment: [
      'Плавательная кормовая платформа с прямым спуском в воду',
      'Оборудование для донного лова и троллинга',
      'Каяки, сапборды и ласты для сноркелинга',
      'Ресторан под открытым небом с видом на лагуны'
    ],
    driveFolderUrl: 'https://disk.yandex.ru/d/pegasus-seychelles-photos',
    specs: {
      year: '2023',
      engines: '2x Volvo Penta',
      nitrox: 'Да',
      tender: '2x Скоростных катера'
    },
    amenities: ['Плавающая платформа', 'Джакузи', 'Бар на корме', 'Шеф-меню из свежих морепродуктов'],
    waterSports: ['Дайвинг', 'Рыбалка', 'Каяки', 'Сноркелинг'],
    price: 'от $4,200 / чел. в неделю'
  },
  {
    id: 'jasmine-egypt',
    name: 'Jasmine',
    countryId: 'egypt',
    countryName: 'Египет',
    type: 'Премиум суперяхта',
    length: '56 м',
    capacity: '26 гостей',
    cabins: '13 кают с балконами',
    speed: '12 узлов',
    crew: 'Профессиональный экипаж',
    images: [
      'https://www.egyptiancruising.com/photos/banner/MY%20JASMIINE%201600%20X%20835_903c3__lg.jpg',
      'https://www.egyptiancruising.com/photos/boat/salon%202.2_c5daa__lg.jpg',
      'https://www.egyptiancruising.com/photos/boat/Twin%20stateroom_fd200__lg.jpg',
      'https://www.egyptiancruising.com/photos/boat/suite%20with%20balcony_ec867__lg.jpg',
      'https://www.egyptiancruising.com/photos/boat/bathroom_849a0__lg.jpg',
      'https://www.egyptiancruising.com/photos/boat/suite%203_7a475__lg.jpg',
      'https://www.egyptiancruising.com/photos/boat/Restroom%20suite_19f4c__lg.jpg',
      'https://www.egyptiancruising.com/photos/boat/sundeck%201_92ac7__lg.jpg',
      'https://www.egyptiancruising.com/photos/boat/swimming%20pool_20451__lg.jpg'
    ],
    description: 'Jasmine - новая элегантная яхта премиум-класса, созданная для комфортных путешествий по Красному морю. Благодаря гармоничному сочетанию современного дизайна, просторных общественных зон и камерной атмосферы на борту, яхта идеально подходит для гостей, которые ценят высокий уровень сервиса, приватность и отдых вдали от массового туризма. Просторные палубы позволяют наслаждаться панорамными видами, а продуманная планировка обеспечивает комфорт во время морских переходов и на якорных стоянках. Арендуется только под полный фрахт.',
    accommodation: 'Все каюты оборудованы индивидуальной системой кондиционирования, собственной ванной комнатой с душем и туалетом, местами для хранения вещей. Интерьеры выполнены в классическом морском стиле:\n- 10 стандартных кают с балконом и 2 кроватями (трансформируемыми в одну большой кровать)\n- 2 просторных каюты мастер-люкс с отдельной полноценной спальней и балконом\n- 1 каюта люкс с балконом.',
    toysAndEntertainment: [
      'Панорамные виды Красного моря',
      'Многофункциональная медиасистема',
      'Дайвинг и снорклинг на коралловых рифах',
      'Тренажерный зал и СПА',
      'Два бара и ресторан',
      'Водные развлечения'
    ],
    driveFolderUrl: 'https://drive.google.com/drive/folders/Jasmine-Egypt',
    specs: {
      year: '2026',
      engines: '3 x MAN 1550 л.с.',
      nitrox: 'Да',
      tender: 'Дайв-боты'
    },
    amenities: ['Тренажерный зал', 'СПА', 'Два бара', 'Ресторан', 'Балконы во всех каютах', 'Бассейн на деке'],
    waterSports: ['Дайвинг', 'Сноркелинг', 'Водные развлечения'],
    price: 'Полный фрахт (по запросу)'
  },
  {
    id: 'panther-egypt',
    name: 'Panther',
    countryId: 'egypt',
    countryName: 'Египет',
    type: 'Суперяхта класса платинум',
    length: '45 м',
    capacity: '30 гостей',
    cabins: '15 кают',
    speed: '12 узлов',
    crew: 'Профессиональный экипаж',
    images: [
      'https://www.egyptiancruising.com/photos/banner/MY%20PANTHER_bb656__lg.jpg',
      'https://www.egyptiancruising.com/photos/boat/restaurant%20MY%20Panther_74027__lg.jpg',
      'https://www.egyptiancruising.com/photos/boat/Salon%20MY%20Panther%205_4174e__lg.jpg',
      'https://www.egyptiancruising.com/photos/boat/MY%20PANTHER%20SUITE_eddee__lg.jpg',
      'https://www.egyptiancruising.com/photos/boat/MY%20PANTHER%20SUITE%202_9da8c__lg.jpg'
    ],
    description: 'Panther - флагманская суперяхта класса платинум, которая станет новым символом роскошных путешествий по Красному морю. Яхта сочетает элегантную архитектуру, дизайнерские интерьеры и инфраструктуру уровня пятизвёздочного курорта. Просторные общественные зоны, несколько лаунжей, джакузи, СПА и высокий уровень сервиса создают атмосферу эксклюзивного отдыха. Арендуется только под полный фрахт.',
    accommodation: 'Все каюты отличает увеличенная площадь, кондиционер и собственная ванная комната:\n- Сандек: 2 Panoramic Suite с двуспальными кроватями King-size и панорамным видом на море.\n- Верхняя палуба: 1 King Suite с двуспальной кроватью King-size.\n- Главная палуба: 2 Queen Suite с двуспальными кроватями Queen-size.\n- 10 стандартных Twin Cabin (кровати трансформируются в одну двуспальную).',
    toysAndEntertainment: [
      '5 просторных палуб с панорамными видами на Красное море',
      'Многофункциональная медиасистема',
      'СПА комплекс и джакузи',
      'Катание на гидроциклах, дайвинг и снорклинг',
      'Высокоскоростной интернет Starlink'
    ],
    driveFolderUrl: 'https://drive.google.com/drive/folders/Panther-Egypt',
    specs: {
      year: '2026',
      engines: '3 x MAN 1050 л.с.',
      nitrox: 'Да',
      tender: 'Скоростные катера'
    },
    amenities: ['5 палуб', 'Джакузи', 'СПА комплекс', 'Панорамные сьюты', 'Высокоскоростной интернет'],
    waterSports: ['Гидроциклы', 'Дайвинг', 'Сноркелинг', 'Водные развлечения'],
    price: 'Полный фрахт (по запросу)'
  },
  {
    id: 'palau-siren',
    name: 'Palau Siren Wood Yacht',
    countryId: 'palau',
    countryName: 'Палау',
    type: 'Парусная яхта',
    length: '40 м',
    capacity: '16 гостей',
    cabins: '8 сплит-кают',
    speed: '10 узлов',
    crew: '12 человек',
    images: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Ручная работа из индонезийского тика. Кастомная станция для подводной фото и видеосъемки.',
    accommodation: '8 удобных кают (двуспальные или 2 отдельные кровати) со встроенными шкафами, отдельной ванной и кондиционированием воздуха.',
    toysAndEntertainment: [
      'Кастомный фото-стол с пресной водой и сжатым воздухом',
      'Массажный уголок на палубе',
      'Каяки для исследования скрытых озер медуз'
    ],
    driveFolderUrl: 'https://disk.yandex.ru/d/palau-siren-photos',
    specs: { year: '2022', engines: '380 HP', nitrox: 'Да', tender: '2x РИБ' },
    amenities: ['Фотолаб на борту', 'Массаж', 'Шеф-повар'],
    waterSports: ['Дайвинг', 'Каякинг'],
    price: 'от $4,800 / чел. в неделю'
  }
];

export const DEFAULT_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Александр и Елена В.',
    title: 'Фрахт Scubaspa Ying на Мальдивах',
    rating: 5,
    text: 'Организация путешествия компанией «Абсолют-Тур» превзошла все ожидания. Идеальный баланс между премиальным спа и 4 погружениями в день. Нам организовали приватный ужин на необитаемом песчаном острове. Команда 24/7 была на связи.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    date: 'Февраль 2026'
  },
  {
    id: 'rev-2',
    name: 'Михаил К. (Корпоративный клиент)',
    title: 'Тимбилдинг в Индонезии (Раджа-Ампат)',
    rating: 5,
    text: 'Бронировали парусную пиниси Prana by Atzaro для совета директоров. Иван и его команда сделали невозможное: индивидуальный трансфер, шеф-повар учёл все пожелания по диете, а дайв-гиды показали лучшие места с мантами.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    date: 'Январь 2026'
  },
  {
    id: 'rev-3',
    name: 'Дмитрий и Ольга С.',
    title: 'Экспедиция на Галапагосы',
    rating: 5,
    text: 'Сафари на Galapagos Sky — это воспоминания на всю жизнь. Организация документов и сложно логистического перелета прошла гладко. Абсолют-Тур — настоящие эксперты в люксовых морских путешествиях.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    date: 'Декабрь 2025'
  }
];

export const DEFAULT_FAQS: FAQItem[] = [
  {
    question: 'Что входит в стоимость люксового дайвинг-сафари?',
    answer: 'В стоимость входит проживание в выбранной кауте, 3-4 разовое питание от шеф-повара, безалкогольные напитки, 3-4 погружения в день с профессиональными дайв-гидами, баллоны, грузы, а также трансферы из аэропорта. Дополнительно оплачиваются парковые сборы, чаевые экипажу и алкогольные напитки премиум-класса.'
  },
  {
    question: 'Какая квалификация нужна для участия в дайвинг-турах?',
    answer: 'Требования зависят от направления. На Мальдивах и Сейшелах достаточно уровня Open Water Diver (OWD). Для экстрим-маршрутов вроде острова Кокос или Вольф/Дарвин на Галапагосах требуется Advanced OWD и минимум 50 зафиксированных погружений. Мы всегда подберем маршрут под ваш опыт.'
  },
  {
    question: 'Можно ли отправиться в тур без опыта дайвинга (для сопровождающих)?',
    answer: 'Да! Многие наши судна (например, Scubaspa или Pegasus) созданы в концепции 5★ спа-отеля. Для не-дайверов предусмотрены ежедневные спа-процедуры, сноркелинг, высадки на дикие пляжи, каякинг и экскурсии.'
  },
  {
    question: 'Как происходит фрахт (аренда) всей яхты целиком?',
    answer: 'При полном фрахте мы разрабатываем индивидуальный маршрут и тайминг исключительно под вашу компанию. Мы согласовываем меню, развлечения, логистику и вип-сервис в аэропорту.'
  },
  {
    question: 'Какие гарантии безопасности мы предоставляем?',
    answer: 'Все яхты нашего флота имеют международные сертификаты SOLAS, страхование P&I, спутниковую связь Starlink, медицинские кислородные системы и двух опытных капитанов/механиков. ООО «Абсолют-тур» работает строго по договору оказания услуг.'
  }
];

export function parseCSVRow(rowText: string): string[] {
  const cells: string[] = [];
  let inQuotes = false;
  let currentCell = '';

  for (let i = 0; i < rowText.length; i++) {
    const char = rowText[i];
    if (char === '"') {
      if (inQuotes && rowText[i + 1] === '"') {
        currentCell += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      cells.push(currentCell);
      currentCell = '';
    } else {
      currentCell += char;
    }
  }
  cells.push(currentCell);
  return cells;
}

export function parseFullCSV(csvText: string): string[][] {
  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentCell = '';
  let inQuotes = false;

  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    const nextChar = csvText[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentCell += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      currentRow.push(currentCell);
      currentCell = '';
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++;
      }
      currentRow.push(currentCell);
      if (currentRow.some(cell => cell.trim() !== '')) {
        rows.push(currentRow);
      }
      currentRow = [];
      currentCell = '';
    } else {
      currentCell += char;
    }
  }

  if (currentCell || currentRow.length > 0) {
    currentRow.push(currentCell);
    if (currentRow.some(cell => cell.trim() !== '')) {
      rows.push(currentRow);
    }
  }

  return rows;
}

const KNOWN_IMAGES: Record<string, string> = {
  'maldives': 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
  'indonesia': 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
  'seychelles': 'https://images.unsplash.com/photo-1589553460732-58ef7a71fbb5?auto=format&fit=crop&w=1200&q=80',
  'galapagos': 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
  'oman': 'https://images.unsplash.com/photo-1512632578553-199e35792597?auto=format&fit=crop&w=1200&q=80',
  'palau': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  'egypt': 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1200&q=80',
  'costa-rica': 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80',
  'primer': 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'
};

const KNOWN_FLAGS: Record<string, string> = {
  'maldives': '🇲🇻',
  'indonesia': '🇮🇩',
  'seychelles': '🇸🇨',
  'galapagos': '🇪🇨',
  'oman': '🇴🇲',
  'palau': '🇵🇼',
  'egypt': '🇪🇬',
  'costa-rica': '🇨🇷',
  'primer': '🧭'
};

export function transliterate(text: string): string {
  const ru: Record<string, string> = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
    'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
    'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts',
    'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'yu', 'я': 'ya',
    ' ': '-', '-': '-'
  };
  return text.toLowerCase().split('').map(char => ru[char] || (/[a-z0-9]/.test(char) ? char : '')).join('').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

export function extractFlag(name: string): { cleanName: string; flag: string } {
  const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}]+/gu;
  const matches = name.match(emojiRegex);
  const flag = matches ? matches[0] : '';
  let cleanName = name.replace(emojiRegex, '').trim();
  cleanName = cleanName.replace(/^[-\s]+|[-\s]+$/g, '').trim();
  return { cleanName, flag };
}

export function extractSeason(desc: string): string {
  if (!desc) return 'Круглый год';
  const regexes = [
    /(?:лучший сезон|лучшее время|лучший период)[^.,;]*(?:длится|продолжается|для отдыха)?\s*(?:с\s+)?([а-яА-Я0-9ёё\s\-\,и]+по\s+[а-яА-Я0-9ёё\s]+)/i,
    /(?:лучший сезон|лучшее время|лучший период)[^.,;]*(?:длится|продолжается|для отдыха)?\s*([а-яА-Я0-9ёё\s\-\,и]+)/i
  ];
  for (const regex of regexes) {
    const m = desc.match(regex);
    if (m && m[1]) {
      const val = m[1].trim();
      if (val.length > 5 && val.length < 50) {
        return val.charAt(0).toUpperCase() + val.slice(1);
      }
    }
  }
  return 'Круглый год';
}

export async function discoverTabsFromPubHtml(publishedSheetKey: string): Promise<{name: string, gid: string}[]> {
  const url = `https://docs.google.com/spreadsheets/d/e/${publishedSheetKey}/pubhtml`;
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(6000) });
    if (!res.ok) return [];
    const html = await res.text();
    const tabs: {name: string, gid: string}[] = [];
    
    const regex = /name:\s*"([^"]+)",\s*pageUrl:\s*"[^"]*",\s*gid:\s*"([^"]+)"/g;
    let match;
    while ((match = regex.exec(html)) !== null) {
      const rawName = match[1];
      const name = rawName
        .replace(/\\x26/g, '&')
        .replace(/\\x27/g, "'")
        .replace(/\\x22/g, '"')
        .replace(/\\u([0-9a-fA-F]{4})/g, (_, c) => String.fromCharCode(parseInt(c, 16)))
        .replace(/\\/g, '');
      const gid = match[2];
      tabs.push({ name, gid });
    }
    return tabs;
  } catch (e) {
    console.error('Failed to discover tabs from pubhtml:', e);
    return [];
  }
}

export function extractUrls(str: string): string[] {
  if (!str) return [];
  const rawMatches = str.match(/https?:\/\/[^\s\"]+/g) || [];
  const urls: string[] = [];
  for (const match of rawMatches) {
    const parts = match.split(/(?=https?:\/\/)/).map(u => u.trim()).filter(Boolean);
    for (let p of parts) {
      p = p.replace(/[,;]+$/, '');
      if (p) urls.push(p);
    }
  }
  return urls;
}

export function formatGoogleDriveImageUrl(url: string): string {
  if (!url || typeof url !== 'string') return '';
  const trimmed = url.trim();
  if (!trimmed) return '';

  if (trimmed.includes('/folders/') || trimmed.includes('/drive/folders/')) {
    return trimmed;
  }

  const driveMatch = trimmed.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/) || 
                     trimmed.match(/lh3\.google\.com\/u\/\d+\/d\/([a-zA-Z0-9_-]+)/) ||
                     trimmed.match(/lh3\.googleusercontent\.com\/d\/([a-zA-Z0-9_-]+)/) ||
                     trimmed.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/) ||
                     trimmed.match(/drive\.google\.com\/uc\?.*id=([a-zA-Z0-9_-]+)/) ||
                     trimmed.match(/docs\.google\.com\/uc\?.*id=([a-zA-Z0-9_-]+)/);

  if (driveMatch && driveMatch[1]) {
    return `https://lh3.googleusercontent.com/d/${driveMatch[1]}`;
  }

  return trimmed;
}

export interface RegionData {
  description: string;
  flag?: string;
  image?: string;
}

export async function fetchRegionData(publishedSheetKey: string, regionGid: string): Promise<Record<string, RegionData>> {
  const csvUrl = `https://docs.google.com/spreadsheets/d/e/${publishedSheetKey}/pub?gid=${regionGid}&single=true&output=csv`;
  const result: Record<string, RegionData> = {};

  try {
    const res = await fetch(csvUrl, { signal: AbortSignal.timeout(6000) });
    if (res.ok) {
      const csvText = await res.text();
      const rows = parseFullCSV(csvText);

      for (const row of rows) {
        const rowUrls: string[] = [];
        row.forEach(cell => {
          extractUrls(cell || '').forEach(u => {
            const formatted = formatGoogleDriveImageUrl(u);
            if (formatted && !rowUrls.includes(formatted)) {
              rowUrls.push(formatted);
            }
          });
        });

        for (let colIdx = 0; colIdx < row.length; colIdx++) {
          const cell = row[colIdx];
          const trimmed = cell?.trim() || '';
          if (!trimmed || trimmed === 'Описание региона' || trimmed.toLowerCase().startsWith('http')) continue;

          const lines = trimmed.split(/\r?\n/).map(l => l.trim()).filter(Boolean);

          if (lines.length >= 1) {
            const rawCountryName = lines[0];
            const { cleanName, flag: extractedEmoji } = extractFlag(rawCountryName);

            if (!cleanName || cleanName === 'Название' || cleanName.length < 2) continue;

            const desc = lines.slice(1).join('\n').trim();

            const cellUrls: string[] = [];
            lines.forEach(l => {
              extractUrls(l).forEach(u => {
                const formatted = formatGoogleDriveImageUrl(u);
                if (formatted && !cellUrls.includes(formatted)) {
                  cellUrls.push(formatted);
                }
              });
            });

            const allUrls = [...cellUrls];
            rowUrls.forEach(u => { if (!allUrls.includes(u)) allUrls.push(u); });

            const key = cleanName.toLowerCase();
            if (key) {
              if (!result[key]) {
                result[key] = { description: desc };
              } else if (desc && desc.length > (result[key].description?.length || 0)) {
                result[key].description = desc;
              }

              if (extractedEmoji) {
                result[key].flag = extractedEmoji;
              }

              if (allUrls.length > 0) {
                if (allUrls.length === 1) {
                  if (!result[key].image) {
                    result[key].image = allUrls[0];
                  }
                } else {
                  result[key].flag = allUrls[0];
                  if (!result[key].image) {
                    result[key].image = allUrls[1];
                  }
                }
              }
            }
          }
        }
      }
    }
  } catch (e) {
    console.error('Failed to fetch region data:', e);
  }

  return result;
}

export async function fetchRegionDescriptions(publishedSheetKey: string, regionGid: string): Promise<Record<string, string>> {
  const data = await fetchRegionData(publishedSheetKey, regionGid);
  const descriptions: Record<string, string> = {};
  for (const key in data) {
    descriptions[key] = data[key].description;
  }
  return descriptions;
}

export async function fetchInitialDataServerSide(): Promise<SheetDataResponse> {
  const PUBLISHED_SHEET_KEY = '2PACX-1vQeRQ5VAaQfGuBuOl1AKIktnCubBKhDAcGlQD5-1PyqIJ8P5VR6HKjRxkYBQZrWzeHs1QD5XlA54GGl';

  try {
    const defaultGids = [
      { name: 'Египет', id: 'egypt', gid: '1253928891' },
      { name: 'Мальдивы', id: 'maldives', gid: '2077018766' },
      { name: 'Сейшелы', id: 'seychelles', gid: '1207930452' },
      { name: 'Индонезия', id: 'indonesia', gid: '1591169484' },
      { name: 'Галапагосы', id: 'galapagos', gid: '1798291047' },
      { name: 'Оман', id: 'oman', gid: '1564747431' },
      { name: 'Палау', id: 'palau', gid: '1087714647' },
      { name: 'Коста-Рика', id: 'costa-rica', gid: '386873277' },
      { name: 'Пример', id: 'primer', gid: '104791994' }
    ];

    // 1. Fetch region data from 'Регионы' tab (995502228)
    const regionData = await fetchRegionData(PUBLISHED_SHEET_KEY, '995502228');

    // 2. Dynamically discover tabs
    const discoveredTabs = await discoverTabsFromPubHtml(PUBLISHED_SHEET_KEY);
    let activeGids = defaultGids.map(g => ({ ...g, flag: KNOWN_FLAGS[g.id] || '🏝️' }));

    if (discoveredTabs.length > 0) {
      const ignoredNames = ['Общая инфа+ FAQ', 'Регионы', 'FAQ', 'Шаблон'];
      const filteredTabs = discoveredTabs.filter(t => !ignoredNames.includes(t.name));
      if (filteredTabs.length > 0) {
        activeGids = filteredTabs.map(t => {
          const { cleanName, flag } = extractFlag(t.name);
          const slug = transliterate(cleanName) || t.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
          const matchedDefault = defaultGids.find(d => d.id === slug);
          return {
            name: cleanName,
            id: slug,
            gid: t.gid,
            flag: flag || KNOWN_FLAGS[slug] || '🏝️'
          };
        });
      }
    }

    const fetchedYachts: Yacht[] = [];

    const knownFeatures = [
      'дайвинг', 'снорклинг', 'вечерние', 'барбекю', 'высадки', 'фридайвинг',
      'пляжные', 'баре', 'массажные', 'работа', 'мультимедийная', 'серфинг',
      'бар', 'интерет', 'фото', 'наблюдение', 'экскурсии', 'отдых', 'пользование',
      'тренажерный', 'спа', 'два бара', 'водные', 'активный', 'сандек', 'зона',
      'панорамный', 'элегантный', 'кемпинг', 'знакомство', 'настольные', 'посещение',
      'пешие', 'купание', 'йога', 'расслабляющие', 'исследование', 'прогулки',
      'катание', 'купальная'
    ];

    for (const tab of activeGids) {
      try {
        const csvUrl = `https://docs.google.com/spreadsheets/d/e/${PUBLISHED_SHEET_KEY}/pub?gid=${tab.gid}&single=true&output=csv`;
        const resp = await fetch(csvUrl, { signal: AbortSignal.timeout(6000) }).catch(() => null);

        if (resp && resp.ok) {
          const csvText = await resp.text();
          const rows = parseFullCSV(csvText);

          if (rows.length > 1) {
            let currentYacht: Yacht | null = null;

            for (let i = 1; i < rows.length; i++) {
              const row = rows[i];
              let rawName = row[0]?.trim() || '';
              const descCell = row[1]?.trim() || '';
              const specName = row[2]?.trim() || '';
              const specVal = row[3]?.trim() || '';
              const accCell = row[4]?.trim() || '';
              const entCell = row[5]?.trim() || '';

              const urlsInRow: string[] = [];
              row.forEach((cell: string) => {
                extractUrls(cell).forEach((u: string) => {
                  if (!urlsInRow.includes(u)) urlsInRow.push(u);
                });
              });

              rawName = rawName.replace(/^[,;\"'\s]+/, '').trim();

              const isFeature = knownFeatures.some(f => rawName.toLowerCase().startsWith(f));
              const isNewYachtHeader = rawName.length > 1 &&
                !rawName.startsWith('http') &&
                !rawName.startsWith('-') &&
                !isFeature &&
                (descCell.length > 20 || specName.toLowerCase() === 'длина' || !currentYacht);

              if (isNewYachtHeader) {
                if (currentYacht && currentYacht.name) {
                  fetchedYachts.push(currentYacht);
                }
                currentYacht = {
                  id: `${rawName.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${tab.id}`,
                  name: rawName,
                  countryId: tab.id,
                  countryName: tab.name,
                  type: 'Премиум суперяхта',
                  length: specName.toLowerCase() === 'длина' && specVal ? specVal : '50 м',
                  capacity: '20 гостей',
                  cabins: '10 кают',
                  speed: '12 узлов',
                  crew: 'Экипаж',
                  images: [],
                  description: descCell,
                  accommodation: accCell,
                  toysAndEntertainment: entCell ? [entCell] : [],
                  specs: { year: '2026', engines: 'MAN', nitrox: 'Да', tender: 'Катер' },
                  amenities: ['Ресторан', 'СПА', 'Кондиционер'],
                  waterSports: ['Дайвинг', 'Сноркелинг'],
                  price: 'Полный фрахт (по запросу)'
                };
              }

              if (currentYacht) {
                if (specName && specVal) {
                  const sLower = specName.toLowerCase();
                  if (sLower.includes('длина')) currentYacht.length = specVal;
                  else if (sLower.includes('ширина')) currentYacht.specs = { ...currentYacht.specs, tender: specVal }; // Use standard fields
                  else if (sLower.includes('год')) currentYacht.specs.year = specVal;
                  else if (sLower.includes('двигател')) currentYacht.specs.engines = specVal;
                  else if (sLower.includes('скорост')) currentYacht.speed = specVal;
                  else if (sLower.includes('кают')) currentYacht.cabins = `${specVal} кают`;
                  else if (sLower.includes('вместимост')) currentYacht.capacity = `${specVal}`;
                }
                urlsInRow.forEach(u => {
                  if (currentYacht) {
                    if (u.includes('drive.google.com') || u.includes('disk.yandex.ru') || u.includes('dropbox.com')) {
                      currentYacht.driveFolderUrl = u;
                    } else if (!currentYacht.images.includes(u)) {
                      currentYacht.images.push(u);
                    }
                  }
                });
                if (accCell && !currentYacht.accommodation?.includes(accCell) && !accCell.startsWith('http')) {
                  currentYacht.accommodation = (currentYacht.accommodation ? currentYacht.accommodation + '\n' : '') + accCell;
                }
                if (entCell && !currentYacht.toysAndEntertainment?.includes(entCell) && !entCell.startsWith('http')) {
                  if (!currentYacht.toysAndEntertainment) {
                    currentYacht.toysAndEntertainment = [];
                  }
                  currentYacht.toysAndEntertainment.push(entCell);
                }
                if (descCell && !currentYacht.description.includes(descCell) && !descCell.startsWith('http')) {
                  currentYacht.description += ' ' + descCell;
                }
              }
            }

            if (currentYacht && currentYacht.name) {
              fetchedYachts.push(currentYacht);
            }
          }
        }
      } catch (e) {
        // tab error
      }
    }

    if (fetchedYachts.length > 0) {
      const countriesWithFetchedYachts = new Set(fetchedYachts.map(y => y.countryId));
      const combinedYachts = [...fetchedYachts];
      for (const defYacht of DEFAULT_YACHTS) {
        if (countriesWithFetchedYachts.has(defYacht.countryId)) {
          continue;
        }
        if (!combinedYachts.some(y => y.name.toLowerCase() === defYacht.name.toLowerCase())) {
          combinedYachts.push(defYacht);
        }
      }

      const dynamicCountries: Country[] = activeGids.map(tab => {
        const defaultCountry = DEFAULT_COUNTRIES.find(c => c.id === tab.id);
        const regInfo = regionData[tab.name.toLowerCase()] || regionData[tab.id.toLowerCase()];
        const desc = regInfo?.description || defaultCountry?.description || 'Направление для незабываемого яхтенного круиза.';
        const rawFlag = regInfo?.flag || tab.flag || defaultCountry?.flag || KNOWN_FLAGS[tab.id] || '';
        const flag = formatGoogleDriveImageUrl(rawFlag);
        const rawImage = regInfo?.image || '';
        const image = formatGoogleDriveImageUrl(rawImage);
        const season = extractSeason(desc) || defaultCountry?.popularSeason || 'Круглый год';
        const yachtCount = combinedYachts.filter(y => y.countryId === tab.id).length;

        return {
          id: tab.id,
          name: tab.name,
          flag,
          image,
          description: desc,
          yachtCount,
          popularSeason: season
        };
      }).filter(c => c.yachtCount > 0);

      const finalCountries = dynamicCountries.length > 0 ? dynamicCountries : DEFAULT_COUNTRIES;
      const validCountryIds = new Set(finalCountries.map(c => c.id));
      const finalYachts = combinedYachts.filter(y => validCountryIds.has(y.countryId));

      return {
        source: 'live_google_sheet_published',
        updatedAt: new Date().toISOString(),
        countries: finalCountries,
        yachts: finalYachts,
        reviews: DEFAULT_REVIEWS,
        faqs: DEFAULT_FAQS
      };
    }
  } catch (e) {
    console.error('Google sheet fetch error:', e);
  }

  return {
    source: 'spreadsheet_database_cache_fallback',
    updatedAt: new Date().toISOString(),
    countries: DEFAULT_COUNTRIES,
    yachts: DEFAULT_YACHTS,
    reviews: DEFAULT_REVIEWS,
    faqs: DEFAULT_FAQS
  };
}

export async function fetchCatalogData(): Promise<SheetDataResponse> {
  try {
    if (typeof window === 'undefined') {
      return await fetchInitialDataServerSide();
    }
    const res = await fetch('/api/sheets');
    if (res.ok) {
      const data = await res.json();
      if (data && Array.isArray(data.countries) && data.countries.length > 0) {
        return data;
      }
    }
  } catch (error) {
    // Graceful fallback to default data
  }

  return {
    source: 'client_fallback',
    updatedAt: new Date().toISOString(),
    countries: DEFAULT_COUNTRIES,
    yachts: DEFAULT_YACHTS,
    reviews: DEFAULT_REVIEWS,
    faqs: DEFAULT_FAQS
  };
}
