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

export interface HeroSlide {
  title: string;
  text: string;
  image: string;
}

export interface SheetDataResponse {
  source: string;
  updatedAt: string;
  countries: Country[];
  yachts: Yacht[];
  heroSlides?: HeroSlide[];
  reviews: Review[];
  faqs: FAQItem[];
}

export const DEFAULT_HERO_SLIDES: HeroSlide[] = [
  {
    title: 'Премиальные яхтенные путешествия по всему миру',
    text: 'Свобода открывать новые горизонты в собственном ритме.',
    image:
      'https://static.tildacdn.com/tild3233-3366-4139-b564-643433396138/alice_1.jpeg',
  },
  {
    title: 'Индивидуальные морские путешествия',
    text: 'Уединенные бухты, острова и впечатления, доступные только с борта яхты.',
    image: 'https://www.yachtmaldives.com/img/blog-29.jpg',
  },
  {
    title: 'Семейный отдых и мероприятия на яхте',
    text: 'Пространство для общения, отдыха и незабываемых моментов вместе.',
    image:
      'https://galaxycruises.com/assets/images/stella/hero/stella-galaxy-cruise-exterior.webp',
  },
  {
    title: 'Тимбилдинги и корпоративные путешествия нового формата',
    text: 'Объединяйте команды там, где нет границ, расписаний и городской суеты.',
    image:
      'https://divegaia.com/wp-content/uploads/2020/11/Boat-2-scaled-1920x1080.jpg',
  },
];

export const DEFAULT_COUNTRY_MAPS: Record<string, string> = {
  maldives:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Maldives_location_map.svg/1024px-Maldives_location_map.svg.png',
  мальдивы:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Maldives_location_map.svg/1024px-Maldives_location_map.svg.png',
  indonesia:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Indonesia_location_map.svg/1280px-Indonesia_location_map.svg.png',
  индонезия:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Indonesia_location_map.svg/1280px-Indonesia_location_map.svg.png',
  seychelles:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Seychelles_location_map.svg/1024px-Seychelles_location_map.svg.png',
  сейшелы:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Seychelles_location_map.svg/1024px-Seychelles_location_map.svg.png',
  galapagos:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Galapagos_Islands_location_map.svg/1280px-Galapagos_Islands_location_map.svg.png',
  галапагосы:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Galapagos_Islands_location_map.svg/1280px-Galapagos_Islands_location_map.svg.png',
  oman: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Oman_location_map.svg/1024px-Oman_location_map.svg.png',
  оман: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Oman_location_map.svg/1024px-Oman_location_map.svg.png',
  palau:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Palau_location_map.svg/1024px-Palau_location_map.svg.png',
  палау:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Palau_location_map.svg/1024px-Palau_location_map.svg.png',
  egypt:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Egypt_location_map.svg/1024px-Egypt_location_map.svg.png',
  египет:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Egypt_location_map.svg/1024px-Egypt_location_map.svg.png',
  'costa-rica':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Costa_Rica_location_map.svg/1024px-Costa_Rica_location_map.svg.png',
  costarica:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Costa_Rica_location_map.svg/1024px-Costa_Rica_location_map.svg.png',
  'коста-рика':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Costa_Rica_location_map.svg/1024px-Costa_Rica_location_map.svg.png',
  костарика:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Costa_Rica_location_map.svg/1024px-Costa_Rica_location_map.svg.png',
  russia:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Russia_location_map.svg/1280px-Russia_location_map.svg.png',
  россия:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Russia_location_map.svg/1280px-Russia_location_map.svg.png',
  thailand:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Thailand_location_map.svg/1024px-Thailand_location_map.svg.png',
  таиланд:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Thailand_location_map.svg/1024px-Thailand_location_map.svg.png',
  тайланд:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Thailand_location_map.svg/1024px-Thailand_location_map.svg.png',
  turkey:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Turkey_location_map.svg/1280px-Turkey_location_map.svg.png',
  турция:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Turkey_location_map.svg/1280px-Turkey_location_map.svg.png',
  greece:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Greece_location_map.svg/1024px-Greece_location_map.svg.png',
  греция:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Greece_location_map.svg/1024px-Greece_location_map.svg.png',
  italy:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Italy_location_map.svg/1024px-Italy_location_map.svg.png',
  италия:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Italy_location_map.svg/1024px-Italy_location_map.svg.png',
  spain:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Spain_location_map.svg/1280px-Spain_location_map.svg.png',
  испания:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Spain_location_map.svg/1280px-Spain_location_map.svg.png',
  croatia:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Croatia_location_map.svg/1024px-Croatia_location_map.svg.png',
  хорватия:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Croatia_location_map.svg/1024px-Croatia_location_map.svg.png',
  norway:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Norway_location_map.svg/1024px-Norway_location_map.svg.png',
  норвегия:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Norway_location_map.svg/1024px-Norway_location_map.svg.png',
  france:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/France_location_map.svg/1024px-France_location_map.svg.png',
  франция:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/France_location_map.svg/1024px-France_location_map.svg.png',
  montenegro:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Montenegro_location_map.svg/1024px-Montenegro_location_map.svg.png',
  черногория:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Montenegro_location_map.svg/1024px-Montenegro_location_map.svg.png',
  primer:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Maldives_location_map.svg/1024px-Maldives_location_map.svg.png',
  пример:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Maldives_location_map.svg/1024px-Maldives_location_map.svg.png',
};

export const DEFAULT_COUNTRIES: Country[] = [
  {
    id: 'maldives',
    name: 'Мальдивы',
    flag: '🇲🇻',
    image:
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
    description:
      'Мальдивы - идеальное направление для премиального отдыха на яхте среди бирюзовых лагун, необитаемых островов и белоснежных пляжей. Лучший сезон длится с ноября по апрель, когда море спокойно, а погода солнечна. В остальное время погода тоже отличная, но более высока вероятность кратковременных дождей. Во время путешествия можно встретить дельфинов, мант, китовых акул и морских черепах, заниматься снорклингом, дайвингом, рыбалкой, кататься с водной горки прямо с борта яхты, устраивать пикники на песчаных косах и просто наслаждаться приватным отдыхом на просторах Индийского океана.',
    yachtCount: 5,
    popularSeason: 'Ноябрь - Апрель',
  },
  {
    id: 'indonesia',
    name: 'Индонезия',
    flag: '🇮🇩',
    image:
      'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=1200&q=80',
    description:
      'Индонезия - крупнейший архипелаг мира, объединяющий тысячи островов, вулканические пейзажи, уединенные бухты и богатую культуру, что делает его одним из самых впечатляющих направлений для яхтенных путешествий. Направление круглогодичное - в морском национальном парке Комодо лушее время с мая по сентябрь, а в Раджа Ампат с октября по апрель, когда преобладает сухая и солнечная погода. Во время круиза можно встретить дельфинов, мант, морских черепах и китовых акул, заниматься снорклингом и дайвингом, исследовать необитаемые острова и посещать национальные парки (например, познакомиться с известными комодскими варанами).',
    yachtCount: 4,
    popularSeason: 'Круглый год',
  },
  {
    id: 'seychelles',
    name: 'Сейшелы',
    flag: '🇸🇨',
    image:
      'https://images.unsplash.com/photo-1589553460732-58ef7a71fbb5?auto=format&fit=crop&w=1200&q=80',
    description:
      'Сейшелы - архипелаг гранитных островов, скрытых бухт и нетронутой природы, идеально подходящий для неспешных яхтенных путешествий. Лучшее время для отдыха апрель-май и октябрь-ноябрь, когда море наиболее спокойное. Гостей ждут встречи с черепахами и китовыми акулами, снорклинг, каякинг, прогулки по национальным паркам, трекинги, знакомство с креольской кухней и отдых на одних из самых красивых пляжей мира.',
    yachtCount: 3,
    popularSeason: 'Апрель-Май, Октябрь-Ноябрь',
  },
  {
    id: 'galapagos',
    name: 'Галапагосы',
    flag: '🇪🇨',
    image:
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    description:
      'Галапагосы - одно из самых эксклюзивных экспедиционных направлений мира, где путешествие на яхте становится погружением в уникальную дикую природу. Здесь можно наблюдать китовых акул, морских львов, пингвинов и морских игуан, исследовать вулканические острова, заниматься снорклингом и дайвингом, посещать природные заповедники. К путешествию на яхте можно добавить наземную программу в Перу и познакомиться с культурным наследием инков.',
    yachtCount: 2,
    popularSeason: 'Июнь - Декабрь',
  },
  {
    id: 'oman',
    name: 'Оман',
    flag: '🇴🇲',
    image:
      'https://images.unsplash.com/photo-1512632578553-199e35792597?auto=format&fit=crop&w=1200&q=80',
    description:
      'Оман сочетает восточную культуру, дикие пляжи, фьорды и горные пейзажи, оставаясь одним из самых аутентичных направлений для яхтенного отдыха. Лучший сезон продолжается с октября по апрель. Во время путешествия можно наблюдать дельфинов, китовых акул и морских черепах, заниматься дайвингом и снорклингом, исследовать фьорды Мусандама, а также посетить древние форты, оазисы и заодно совершить сафари по пустыне.',
    yachtCount: 2,
    popularSeason: 'Октябрь - Апрель',
  },
  {
    id: 'palau',
    name: 'Палау',
    flag: '🇵🇼',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    description:
      'Палау - часть Микронезии, удаленный архипелаг в Тихом океане с сотнями необитаемых островов и нетронутыми морскими заповедниками, созданный для ценителей приватных путешествий. Лучший период для посещения с ноября по апрель. Здесь можно встретить дельфинов, мант и морских черепах, исследовать скрытые лагуны, заниматься снорклингом и дайвингом, каякингом и рыбалкой, а на суше открывать тропические джунгли и уединенные пляжи.',
    yachtCount: 2,
    popularSeason: 'Ноябрь - Апрель',
  },
  {
    id: 'egypt',
    name: 'Египет',
    flag: '🇪🇬',
    image:
      'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1200&q=80',
    description:
      'Египет - одно из самых доступных и комфортных направлений для яхтенных путешествий по Красному морю, где кристально чистая вода, живописные коралловые рифы и солнечная погода сочетаются с высоким уровнем сервиса наших яхт. Лучшее время для отдыха с марта по май и с сентября по ноябрь, хотя путешествия возможны практически круглый год. Во время круиза можно встретить дельфинов, морских черепах, скатов и множество ярких тропических рыб, заняться снорклингом, дайвингом и рыбалкой, посетить уединенные бухты, а на берегу познакомиться с древними памятниками, пустынными ландшафтами и восточной культурой.',
    yachtCount: 2,
    popularSeason: 'Март-Май, Сентябрь-Ноябрь',
  },
  {
    id: 'costa-rica',
    name: 'Коста-Рика',
    flag: '🇨🇷',
    image:
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80',
    description:
      'Коста-Рика - направление для тех, кто хочет совместить яхтенный отдых с приключениями и богатой природой Центральной Америки. Лучший сезон длится с декабря по апрель. Во время путешествия можно наблюдать горбатых китов, дельфинов и морских черепах, заниматься дайвингом, снорклингом и спортивной рыбалкой, а на берегу исследовать национальные парки, вулканы, водопады и тропические леса.',
    yachtCount: 2,
    popularSeason: 'Декабрь - Апрель',
  },
  {
    id: 'primer',
    name: 'Пример',
    flag: '🧭',
    image:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    description: 'Направление для тестирования и демонстрации новых яхт.',
    yachtCount: 1,
    popularSeason: 'Круглый год',
  },
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
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'Уникальное сочетание 5★ спа-курорта и высококлассного дайвинг-сафари. Джакузи на открытой палубе, фитнес-зал, ресторан авторской кухни и отдельный дайв-дони.',
    accommodation:
      '19 роскошных кают трех категорий: 1 Manta Suite (с двухспальной кроватью King и панорамным видом на океан), 9 Dolphin Suites (просторные каюты с двуспальными кроватями) и 9 Cowrie Suites (уютные твин/дабл каюты на нижней палубе). Каждая каюта оснащена приватной ванной комнатой, кондиционером и сейфом.',
    toysAndEntertainment: [
      'Спа-комплекс 300 м² (6 массажных кабинетов)',
      'Гигантское джакузи с баром на верхней палубе',
      'Сибобы (SeaBob F5 S)',
      'Надувная водная горка с борта яхты',
      'Каяки с прозрачным дном и сапборды',
      'Оборудование для дайвинга и сноркелинга Mares',
      'Спутники Starlink с высокой скоростью Wi-Fi',
    ],
    driveFolderUrl: 'https://disk.yandex.ru/d/scubaspa-maldives-photos',
    specs: {
      year: '2022 (Реновация)',
      engines: '2x MTU 1000 HP',
      nitrox: 'Есть (без ограничений)',
      tender: 'Дайв-дони 20 метров',
    },
    amenities: [
      'Спа-салон 300 м²',
      'Джакузи на верхнем deck',
      'Солярий',
      'Йога-палуба',
      'Бар с сомелье',
      'Wi-Fi Starlink',
    ],
    waterSports: ['Дайвинг', 'Каяки', 'Сапборды', 'Сноркелинг', 'Гидроциклы'],
    price: 'от $3,800 / чел. в неделю',
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
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'Современная экспедиционная яхта класса Люкс. Большие панорамные окна в каютах, обеденная зона на открытом воздухе и профессиональная команда гидов.',
    accommodation:
      '13 кают класса Deluxe: 3 каюты Executive Suite на верхней палубе с собственной террасой, 2 каюты Upper Deck с панорамными окнами и 8 кают Lower Deck с трансформируемыми кроватями.',
    toysAndEntertainment: [
      'Подводные скутеры Seabob',
      'Комплекты для ночного дайвинга и фотосъемки',
      'Открытый кинотеатр на сан-деке',
      'Барбекю-зона для ужинов на диких островах',
    ],
    driveFolderUrl: 'https://disk.yandex.ru/d/emperor-serenity-photos',
    specs: {
      year: '2021',
      engines: '2x Caterpillar 800 HP',
      nitrox: 'Да',
      tender: 'Дайв-бот 18м',
    },
    amenities: [
      'Панорамный лаундж',
      'Массажный кабинет',
      'Кинотеатр под открытым небом',
      'Мини-бар в каютах',
    ],
    waterSports: ['Дайвинг', 'Сибобы (SeaBob)', 'Сноркелинг'],
    price: 'от $2,950 / чел. в неделю',
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
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'Самая большая и роскошная тиковая парусная пиниси в мире. Эксклюзивные маршруты по Раджа-Ампат и островам Комодо.',
    accommodation:
      '9 супер-люксов: Главный мастер-сьют "Atzaro Suite" (67 м²) с круговым остеклением 270° и открытым балконом. 8 кают категории Deluxe & Family с отделкой из железного дерева и ценных пород тика.',
    toysAndEntertainment: [
      'Водные лыжи и уэйкборды',
      'Экспедиционные каяки и SUP-борды',
      'Спа-кабинет с массажистами с острова Бали',
      'Площадка для йоги под парусами',
      'Профессиональная дайв-станция Nitrox',
    ],
    driveFolderUrl: 'https://disk.yandex.ru/d/prana-atzaro-photos',
    specs: {
      year: '2020',
      engines: 'Yanmer 1200 HP',
      nitrox: 'Да',
      tender: '2x РИБ 7.5м',
    },
    amenities: [
      '4 палубы',
      'Зал для йоги',
      'Спа-комплекс',
      'Звездный кинотеатр',
      'Шеф-повар Мишлен уровня',
    ],
    waterSports: ['Дайвинг', 'Уэйкбординг', 'Сибобы', 'Каяки', 'Водные лыжи'],
    price: 'от $15,500 / сутки (приватно)',
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
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'Специализированное экспедиционное судно VIP-класса для погружений у островов Вольф и Дарвин с легендарными акулами-молотами.',
    accommodation:
      '8 элегантных кают (4 Master Staterooms на верхней палубе с большими окнами и 4 Deluxe Staterooms на нижней палубе). В каждой каюте кондиционер, индивидуальный санузел и ортопедические матрасы.',
    toysAndEntertainment: [
      '2 скоростных надувных бота Zodiac для высадок',
      'Сушильная комната для гидрокостюмов',
      'Специальная станция для обслуживания подводных камер',
      'Солярий с лежаками и панорамным баром',
    ],
    driveFolderUrl: 'https://disk.yandex.ru/d/galapagos-sky-photos',
    specs: {
      year: '2021 (Апгрейд)',
      engines: 'Caterpillar 1000 HP',
      nitrox: 'Бесплатно для сертификатов',
      tender: '2x Zodiac Master',
    },
    amenities: [
      'Солярий с баром',
      'Мультимедиа центр',
      'Сушильный шкаф для снаряжения',
      'Камера-рум',
    ],
    waterSports: ['Экспедиционный дайвинг', 'Сноркелинг с котиками'],
    price: 'от $6,495 / чел. в неделю',
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
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'Премиальный моторный катамаран океанского класса. Прекрасная устойчивость, мини-осадка для входа в самые уединенные бухты.',
    accommodation:
      '21 внешняя каюта с окнами или приватными панорамными балконами. Каюты оснащены кондиционером, плазменным ТВ, сейфом и душевыми кабинами.',
    toysAndEntertainment: [
      'Плавательная кормовая платформа с прямым спуском в воду',
      'Оборудование для донного лова и троллинга',
      'Каяки, сапборды и ласты для сноркелинга',
      'Ресторан под открытым небом с видом на лагуны',
    ],
    driveFolderUrl: 'https://disk.yandex.ru/d/pegasus-seychelles-photos',
    specs: {
      year: '2023',
      engines: '2x Volvo Penta',
      nitrox: 'Да',
      tender: '2x Скоростных катера',
    },
    amenities: [
      'Плавающая платформа',
      'Джакузи',
      'Бар на корме',
      'Шеф-меню из свежих морепродуктов',
    ],
    waterSports: ['Дайвинг', 'Рыбалка', 'Каяки', 'Сноркелинг'],
    price: 'от $4,200 / чел. в неделю',
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
      'https://www.egyptiancruising.com/photos/boat/swimming%20pool_20451__lg.jpg',
    ],
    description:
      'Jasmine - новая элегантная яхта премиум-класса, созданная для комфортных путешествий по Красному морю. Благодаря гармоничному сочетанию современного дизайна, просторных общественных зон и камерной атмосферы на борту, яхта идеально подходит для гостей, которые ценят высокий уровень сервиса, приватность и отдых вдали от массового туризма. Просторные палубы позволяют наслаждаться панорамными видами, а продуманная планировка обеспечивает комфорт во время морских переходов и на якорных стоянках. Арендуется только под полный фрахт.',
    accommodation:
      'Все каюты оборудованы индивидуальной системой кондиционирования, собственной ванной комнатой с душем и туалетом, местами для хранения вещей. Интерьеры выполнены в классическом морском стиле:\n- 10 стандартных кают с балконом и 2 кроватями (трансформируемыми в одну большой кровать)\n- 2 просторных каюты мастер-люкс с отдельной полноценной спальней и балконом\n- 1 каюта люкс с балконом.',
    toysAndEntertainment: [
      'Панорамные виды Красного моря',
      'Многофункциональная медиасистема',
      'Дайвинг и снорклинг на коралловых рифах',
      'Тренажерный зал и СПА',
      'Два бара и ресторан',
      'Водные развлечения',
    ],
    driveFolderUrl: 'https://drive.google.com/drive/folders/Jasmine-Egypt',
    specs: {
      year: '2026',
      engines: '3 x MAN 1550 л.с.',
      nitrox: 'Да',
      tender: 'Дайв-боты',
    },
    amenities: [
      'Тренажерный зал',
      'СПА',
      'Два бара',
      'Ресторан',
      'Балконы во всех каютах',
      'Бассейн на деке',
    ],
    waterSports: ['Дайвинг', 'Сноркелинг', 'Водные развлечения'],
    price: 'Полный фрахт (по запросу)',
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
      'https://www.egyptiancruising.com/photos/boat/MY%20PANTHER%20SUITE%202_9da8c__lg.jpg',
    ],
    description:
      'Panther - флагманская суперяхта класса платинум, которая станет новым символом роскошных путешествий по Красному морю. Яхта сочетает элегантную архитектуру, дизайнерские интерьеры и инфраструктуру уровня пятизвёздочного курорта. Просторные общественные зоны, несколько лаунжей, джакузи, СПА и высокий уровень сервиса создают атмосферу эксклюзивного отдыха. Арендуется только под полный фрахт.',
    accommodation:
      'Все каюты отличает увеличенная площадь, кондиционер и собственная ванная комната:\n- Сандек: 2 Panoramic Suite с двуспальными кроватями King-size и панорамным видом на море.\n- Верхняя палуба: 1 King Suite с двуспальной кроватью King-size.\n- Главная палуба: 2 Queen Suite с двуспальными кроватями Queen-size.\n- 10 стандартных Twin Cabin (кровати трансформируются в одну двуспальную).',
    toysAndEntertainment: [
      '5 просторных палуб с панорамными видами на Красное море',
      'Многофункциональная медиасистема',
      'СПА комплекс и джакузи',
      'Катание на гидроциклах, дайвинг и снорклинг',
      'Высокоскоростной интернет Starlink',
    ],
    driveFolderUrl: 'https://drive.google.com/drive/folders/Panther-Egypt',
    specs: {
      year: '2026',
      engines: '3 x MAN 1050 л.с.',
      nitrox: 'Да',
      tender: 'Скоростные катера',
    },
    amenities: [
      '5 палуб',
      'Джакузи',
      'СПА комплекс',
      'Панорамные сьюты',
      'Высокоскоростной интернет',
    ],
    waterSports: ['Гидроциклы', 'Дайвинг', 'Сноркелинг', 'Водные развлечения'],
    price: 'Полный фрахт (по запросу)',
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
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'Ручная работа из индонезийского тика. Кастомная станция для подводной фото и видеосъемки.',
    accommodation:
      '8 удобных кают (двуспальные или 2 отдельные кровати) со встроенными шкафами, отдельной ванной и кондиционированием воздуха.',
    toysAndEntertainment: [
      'Кастомный фото-стол с пресной водой и сжатым воздухом',
      'Массажный уголок на палубе',
      'Каяки для исследования скрытых озер медуз',
    ],
    driveFolderUrl: 'https://disk.yandex.ru/d/palau-siren-photos',
    specs: { year: '2022', engines: '380 HP', nitrox: 'Да', tender: '2x РИБ' },
    amenities: ['Фотолаб на борту', 'Массаж', 'Шеф-повар'],
    waterSports: ['Дайвинг', 'Каякинг'],
    price: 'от $4,800 / чел. в неделю',
  },
];

export const DEFAULT_REVIEWS: Review[] = [];

export const DEFAULT_FAQS: FAQItem[] = [
  {
    question: 'Что входит в стоимость путешествия?',
    answer:
      'Стоимость зависит от выбранного региона, типа яхты, продолжительности путешествия, количества гостей и индивидуальных пожеланий. В базовый пакет, как правило, входят: размещение, услуги команды, питание, трансферы, базовые водные активности (снорклинг, сапборды, каяки и др.) и разработка маршрута. Дополнительные услуги рассчитываются по запросу.',
  },
  {
    question: 'Для кого подходят яхтенные путешествия?',
    answer:
      'Наши путешествия подходят для семейного отдыха, компаний друзей, романтических поездок, корпоративных выездов, тимбилдингов и частных мероприятий. Формат путешествия полностью адаптируется под ваши цели и пожелания.',
  },
  {
    question: 'Можно ли путешествовать с детьми?',
    answer:
      'Да, многие наши маршруты и яхты подходят для семейного отдыха с детьми. Однако условия размещения и минимальный возраст ребенка могут различаться в зависимости от региона и конкретной яхты. При подборе путешествия мы обязательно учитываем возраст детей, особенности маршрута и требования безопасности, чтобы предложить наиболее комфортный и подходящий вариант для всей семьи.',
  },
  {
    question: 'Можно ли организовать индивидуальную программу?',
    answer:
      'Да. Мы создаем каждое путешествие персонально: можем изменить маршрут, подобрать особый формат питания, организовать праздник, романтический ужин, корпоративное мероприятие, спа, активности на воде и другие дополнительные сервисы по вашему запросу. Перечень дополнительных услуг зависит от региона путешествия.',
  },
  {
    question: 'За какое время лучше бронировать путешествие?',
    answer:
      'Для выбора лучших яхт и желаемых дат рекомендуем бронировать путешествие за 3–6 месяцев до поездки. Однако по многим странам и яхтам возможно организовать путешествие и в более короткие сроки при наличии свободных мест.',
  },
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
      if (currentRow.some((cell) => cell.trim() !== '')) {
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
    if (currentRow.some((cell) => cell.trim() !== '')) {
      rows.push(currentRow);
    }
  }

  return rows;
}

const KNOWN_IMAGES: Record<string, string> = {
  maldives:
    'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
  indonesia:
    'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
  seychelles:
    'https://images.unsplash.com/photo-1589553460732-58ef7a71fbb5?auto=format&fit=crop&w=1200&q=80',
  galapagos:
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
  oman: 'https://images.unsplash.com/photo-1512632578553-199e35792597?auto=format&fit=crop&w=1200&q=80',
  palau:
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  egypt:
    'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1200&q=80',
  'costa-rica':
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80',
  primer:
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
};

const KNOWN_FLAGS: Record<string, string> = {
  maldives: '🇲🇻',
  indonesia: '🇮🇩',
  seychelles: '🇸🇨',
  galapagos: '🇪🇨',
  oman: '🇴🇲',
  palau: '🇵🇼',
  egypt: '🇪🇬',
  'costa-rica': '🇨🇷',
  primer: '🧭',
};

export function transliterate(text: string): string {
  const ru: Record<string, string> = {
    а: 'a',
    б: 'b',
    в: 'v',
    г: 'g',
    д: 'd',
    е: 'e',
    ё: 'e',
    ж: 'zh',
    з: 'z',
    и: 'i',
    й: 'y',
    к: 'k',
    л: 'l',
    м: 'm',
    н: 'n',
    о: 'o',
    п: 'p',
    р: 'r',
    с: 's',
    т: 't',
    у: 'u',
    ф: 'f',
    х: 'kh',
    ц: 'ts',
    ч: 'ch',
    ш: 'sh',
    щ: 'shch',
    ы: 'y',
    э: 'e',
    ю: 'yu',
    я: 'ya',
    ' ': '-',
    '-': '-',
  };
  return text
    .toLowerCase()
    .split('')
    .map((char) => ru[char] || (/[a-z0-9]/.test(char) ? char : ''))
    .join('')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function extractFlag(name: string): { cleanName: string; flag: string } {
  const emojiRegex =
    /[\u{1F300}-\u{1F9FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}]+/gu;
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
    /(?:лучший сезон|лучшее время|лучший период)[^.,;]*(?:длится|продолжается|для отдыха)?\s*([а-яА-Я0-9ёё\s\-\,и]+)/i,
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

export async function discoverTabsFromPubHtml(
  publishedSheetKey: string,
): Promise<{ name: string; gid: string }[]> {
  const url = `https://docs.google.com/spreadsheets/d/e/${publishedSheetKey}/pubhtml`;
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(6000) });
    if (!res.ok) return [];
    const html = await res.text();
    const tabs: { name: string; gid: string }[] = [];

    const regex =
      /name:\s*"([^"]+)",\s*pageUrl:\s*"[^"]*",\s*gid:\s*"([^"]+)"/g;
    let match;
    while ((match = regex.exec(html)) !== null) {
      const rawName = match[1];
      const name = rawName
        .replace(/\\x26/g, '&')
        .replace(/\\x27/g, "'")
        .replace(/\\x22/g, '"')
        .replace(/\\u([0-9a-fA-F]{4})/g, (_, c) =>
          String.fromCharCode(parseInt(c, 16)),
        )
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
    const parts = match
      .split(/(?=https?:\/\/)/)
      .map((u) => u.trim())
      .filter(Boolean);
    for (let p of parts) {
      p = p.replace(/[,;]+$/, '');
      if (p) urls.push(p);
    }
  }
  return urls;
}

export function formatUniversalImageUrl(url: string): string {
  if (!url || typeof url !== 'string') return '';
  const trimmed = url.trim();
  if (!trimmed) return '';

  // 1. yacht.link with #UUID -> CharterIndex CDN direct JPG image
  const yachtLinkMatch =
    trimmed.match(/yacht\.link\/[^\/]+\/gallery\.html#([a-zA-Z0-9_-]+)/i) ||
    trimmed.match(/yacht\.link\/.*#([a-zA-Z0-9_-]+)/i);
  if (yachtLinkMatch && yachtLinkMatch[1]) {
    const id = yachtLinkMatch[1];
    return `https://images.charterindex.com/${id}.jpg`;
  }

  // 2. Google Drive
  const driveMatch =
    trimmed.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/) ||
    trimmed.match(/drive\.google\.com\/thumbnail\?.*id=([a-zA-Z0-9_-]+)/) ||
    trimmed.match(/lh3\.google\.com\/u\/\d+\/d\/([a-zA-Z0-9_-]+)/) ||
    trimmed.match(/lh3\.googleusercontent\.com\/d\/([a-zA-Z0-9_-]+)/) ||
    trimmed.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/) ||
    trimmed.match(/drive\.google\.com\/uc\?.*id=([a-zA-Z0-9_-]+)/) ||
    trimmed.match(/docs\.google\.com\/uc\?.*id=([a-zA-Z0-9_-]+)/);

  if (driveMatch && driveMatch[1]) {
    const fileId = driveMatch[1].replace(/=w\d+/, '');
    if (
      trimmed.toLowerCase().endsWith('.svg') ||
      trimmed.toLowerCase().includes('.svg')
    ) {
      return `https://drive.google.com/uc?export=view&id=${fileId}`;
    }
    return `https://lh3.googleusercontent.com/d/${fileId}=w1400`;
  }

  return trimmed;
}

export function formatGoogleDriveImageUrl(url: string): string {
  return formatUniversalImageUrl(url);
}

interface YandexCacheEntry {
  url: string;
  expiresAt: number;
}

const yandexCache = new Map<string, YandexCacheEntry>();

export async function resolveYandexDiskResource(
  rawUrl: string,
): Promise<string> {
  if (
    !rawUrl ||
    typeof rawUrl !== 'string' ||
    !rawUrl.includes('disk.yandex.ru')
  )
    return rawUrl;

  const now = Date.now();
  const cached = yandexCache.get(rawUrl);
  if (cached && cached.expiresAt > now) {
    return cached.url;
  }

  try {
    let apiUrl = '';
    const match = rawUrl.match(/disk\.yandex\.ru\/d\/([^\/]+)(?:\/(.+))?/);
    if (match) {
      const folderKey = `https://disk.yandex.ru/d/${match[1]}`;
      const subPath = match[2] ? '/' + decodeURIComponent(match[2]) : '';
      if (subPath) {
        apiUrl = `https://cloud-api.yandex.net/v1/disk/public/resources?public_key=${encodeURIComponent(folderKey)}&path=${encodeURIComponent(subPath)}`;
      } else {
        apiUrl = `https://cloud-api.yandex.net/v1/disk/public/resources?public_key=${encodeURIComponent(folderKey)}`;
      }
    } else {
      apiUrl = `https://cloud-api.yandex.net/v1/disk/public/resources?public_key=${encodeURIComponent(rawUrl)}`;
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);

    const res = await fetch(apiUrl, {
      signal: controller.signal,
      headers: { 'User-Agent': 'Mozilla/5.0' },
    });
    clearTimeout(timeout);

    if (res.ok) {
      const data = await res.json();
      if (
        data.type === 'file' ||
        data.media_type === 'image' ||
        data.media_type === 'video'
      ) {
        const sizes = data.sizes as
          Array<{ name?: string; url?: string }> | undefined;
        // Prefer the largest web-optimized image. `preview` is often a small thumbnail.
        const sizePriority = [
          'XXXL',
          'XXL',
          'XL',
          'L',
          'M',
          'S',
          'XS',
          'DEFAULT',
          'ORIGINAL',
        ];
        let bestSize: { name?: string; url?: string } | undefined;
        if (sizes && sizes.length > 0) {
          for (const sName of sizePriority) {
            const found = sizes.find((s) => s.name === sName && s.url);
            if (found) {
              bestSize = found;
              break;
            }
          }
        }
        const anySizeUrl = sizes?.find((size) => size.url)?.url || '';
        const resolved =
          data.file || bestSize?.url || anySizeUrl || data.preview || rawUrl;
        // Yandex temporary download links typically expire in 3-4 hours; cache for 90 minutes
        yandexCache.set(rawUrl, {
          url: resolved,
          expiresAt: now + 90 * 60 * 1000,
        });
        return resolved;
      }
    }
  } catch (err) {
    // ignore
  }

  // On failure do not cache indefinitely - retry after 30 seconds
  yandexCache.set(rawUrl, { url: rawUrl, expiresAt: now + 30 * 1000 });
  return rawUrl;
}

export function parseHeroSlidesFromRows(rows: string[][]): HeroSlide[] {
  const slides: HeroSlide[] = [];

  for (let r = 0; r < rows.length; r++) {
    const row = rows[r];
    for (let c = 0; c < row.length; c++) {
      const cell = (row[c] || '').trim();

      // Match "Слайд 1", "Слайд 2", etc.
      const slideMatch = cell.match(/^Слайд\s*(\d+)/i);
      if (slideMatch) {
        // Case 1: Title and text are in the SAME cell after "Слайд X"
        const cellLines = cell
          .split(/\r?\n/)
          .map((l) => l.trim())
          .filter(Boolean);
        if (cellLines.length >= 2) {
          const title = cellLines[1];
          const text = cellLines.slice(2).join(' ') || '';
          if (title) {
            slides.push({ title, text, image: '' });
            continue;
          }
        }

        // Case 2: Title and text are in following rows
        let title = '';
        let text = '';
        let nextRowIdx = r + 1;

        while (
          nextRowIdx < rows.length &&
          rows[nextRowIdx].every((col) => !col || !col.trim())
        ) {
          nextRowIdx++;
        }

        if (nextRowIdx < rows.length) {
          const contentCell = (
            rows[nextRowIdx][c] ||
            rows[nextRowIdx][1] ||
            rows[nextRowIdx][0] ||
            ''
          ).trim();
          if (contentCell && !/^Слайд\s*\d+/i.test(contentCell)) {
            const contentLines = contentCell
              .split(/\r?\n/)
              .map((l) => l.trim())
              .filter(Boolean);
            if (contentLines.length >= 2) {
              title = contentLines[0];
              text = contentLines.slice(1).join(' ');
            } else if (contentLines.length === 1) {
              title = contentLines[0];
              let descRowIdx = nextRowIdx + 1;
              while (
                descRowIdx < rows.length &&
                rows[descRowIdx].every((col) => !col || !col.trim())
              ) {
                descRowIdx++;
              }
              if (descRowIdx < rows.length) {
                const descCell = (
                  rows[descRowIdx][c] ||
                  rows[descRowIdx][1] ||
                  rows[descRowIdx][0] ||
                  ''
                ).trim();
                if (
                  descCell &&
                  !/^Слайд\s*\d+/i.test(descCell) &&
                  !descCell.toLowerCase().includes('короткие')
                ) {
                  text = descCell;
                }
              }
            }
          }
        }

        if (title) {
          slides.push({ title, text, image: '' });
        }
      }
    }
  }

  return slides;
}

export function parseReviewsFromRows(rows: string[][]): Review[] {
  if (!rows || rows.length < 2) return [];

  const reviews: Review[] = [];
  let nameIdx = -1;
  let titleIdx = -1;
  let ratingIdx = -1;
  let textIdx = -1;
  let avatarIdx = -1;
  let dateIdx = -1;

  // 1. Detect column indices from header row
  const headerRow = rows[0].map((c) => (c || '').toLowerCase().trim());
  headerRow.forEach((col, idx) => {
    if (
      col.includes('имя') ||
      col.includes('автор') ||
      col.includes('клиент') ||
      col.includes('name')
    ) {
      nameIdx = idx;
    } else if (
      col.includes('заголовок') ||
      col.includes('тур') ||
      col.includes('яхта') ||
      col.includes('маршрут') ||
      col.includes('title')
    ) {
      titleIdx = idx;
    } else if (
      col.includes('оценка') ||
      col.includes('рейтинг') ||
      col.includes('звезд') ||
      col.includes('rating')
    ) {
      ratingIdx = idx;
    } else if (
      col.includes('текст') ||
      col.includes('отзыв') ||
      col.includes('комментарий') ||
      col.includes('text')
    ) {
      textIdx = idx;
    } else if (
      col.includes('аватар') ||
      col.includes('фото автора') ||
      col.includes('аватарка') ||
      col.includes('avatar')
    ) {
      avatarIdx = idx;
    } else if (
      col.includes('дата') ||
      col.includes('время') ||
      col.includes('месяц') ||
      col.includes('date')
    ) {
      dateIdx = idx;
    }
  });

  // Default index fallback matching A-F columns if not found in headers
  if (nameIdx === -1) nameIdx = 0;
  if (titleIdx === -1) titleIdx = 1;
  if (ratingIdx === -1) ratingIdx = 2;
  if (textIdx === -1) textIdx = 3;
  if (avatarIdx === -1) avatarIdx = 4;
  if (dateIdx === -1) dateIdx = 5;

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    if (!row || row.length === 0) continue;

    const name = row[nameIdx]?.trim() || '';
    const text = row[textIdx]?.trim() || '';

    // Ignore empty lines or duplicated headers
    if (!text && !name) continue;
    if (
      name.toLowerCase().includes('имя') &&
      text.toLowerCase().includes('текст')
    )
      continue;

    const title =
      (titleIdx !== -1 && row[titleIdx] ? row[titleIdx] : '')?.trim() || '';

    let rating = 5;
    const rawRating = (
      ratingIdx !== -1 && row[ratingIdx] ? row[ratingIdx] : ''
    )?.trim();
    if (rawRating) {
      const parsedNum = parseInt(rawRating.replace(/\D/g, ''), 10);
      if (parsedNum >= 1 && parsedNum <= 5) rating = parsedNum;
    }

    const rawAvatar = (
      avatarIdx !== -1 && row[avatarIdx] ? row[avatarIdx] : ''
    )?.trim();
    let avatar = '';
    if (rawAvatar) {
      if (rawAvatar.startsWith('http://') || rawAvatar.startsWith('https://')) {
        avatar = formatGoogleDriveImageUrl(rawAvatar);
      } else {
        const avatarUrls = extractUrls(rawAvatar)
          .map(formatGoogleDriveImageUrl)
          .filter(Boolean);
        if (avatarUrls[0]) avatar = avatarUrls[0];
      }
    }

    const date =
      (dateIdx !== -1 && row[dateIdx] ? row[dateIdx] : '')?.trim() || '';

    if (name || text) {
      reviews.push({
        id: `rev-sheet-${i}`,
        name,
        title,
        rating,
        text,
        avatar,
        date,
      });
    }
  }

  return reviews;
}

export interface RegionData {
  description: string;
  flag?: string;
  image?: string;
  order: number;
}

export async function fetchRegionData(
  publishedSheetKey: string,
  regionGid: string,
): Promise<Record<string, RegionData>> {
  const csvUrl = `https://docs.google.com/spreadsheets/d/e/${publishedSheetKey}/pub?gid=${regionGid}&single=true&output=csv`;
  const result: Record<string, RegionData> = {};

  try {
    const res = await fetch(csvUrl, { signal: AbortSignal.timeout(6000) });
    if (res.ok) {
      const csvText = await res.text();
      const rows = parseFullCSV(csvText);

      for (let r = 0; r < rows.length; r++) {
        const row = rows[r];
        if (!row || row.length === 0) continue;

        const descCell = String(row[0] || '').trim();
        if (
          !descCell ||
          descCell === 'Описание региона' ||
          descCell.toLowerCase().startsWith('http')
        )
          continue;

        const lines = descCell
          .split(/\r?\n/)
          .map((l) => l.trim())
          .filter(Boolean);
        if (lines.length === 0) continue;

        const rawCountryName = lines[0];
        const { cleanName, flag: extractedEmoji } = extractFlag(rawCountryName);

        if (!cleanName || cleanName === 'Название' || cleanName.length < 2)
          continue;

        const desc = lines.slice(1).join('\n').trim();
        const key = cleanName.toLowerCase();

        // 1. Извлекаем флаг (Колонка B / индекс 1)
        const flagCell = String(row[1] || '').trim();
        const flagUrls = extractUrls(flagCell);
        const flagUrl =
          flagUrls.length > 0
            ? await resolveYandexDiskResource(
                formatGoogleDriveImageUrl(flagUrls[0]),
              )
            : '';

        // 2. Извлекаем карту (Колонка C / индекс 2)
        const mapCell = String(row[2] || '').trim();
        const mapUrls = extractUrls(mapCell);
        const mapUrl =
          mapUrls.length > 0
            ? await resolveYandexDiskResource(
                formatGoogleDriveImageUrl(mapUrls[0]),
              )
            : '';

        // 3. Карта: если в Столбце C есть ссылка — используем её. Если ссылки на карту нет — загружаем вместо карты флаг!
        const cardImage = mapUrl || flagUrl || undefined;

        result[key] = {
          description: desc,
          flag: flagUrl || extractedEmoji || undefined,
          image: cardImage,
          order: r,
        };
      }
    }
  } catch (e) {
    console.error('Failed to fetch region data:', e);
  }

  return result;
}

export async function fetchRegionDescriptions(
  publishedSheetKey: string,
  regionGid: string,
): Promise<Record<string, string>> {
  const data = await fetchRegionData(publishedSheetKey, regionGid);
  const descriptions: Record<string, string> = {};
  for (const key in data) {
    descriptions[key] = data[key].description;
  }
  return descriptions;
}

let serverCacheData: SheetDataResponse | null = null;
let serverCacheTimestamp = 0;
const CACHE_TTL_MS = 30 * 1000; // 30 seconds TTL cache

export const DEFAULT_PUBLISHED_SHEET_KEY =
  (typeof import.meta !== 'undefined' &&
    import.meta.env &&
    import.meta.env.PUBLIC_GOOGLE_PUBLISHED_KEY) ||
  '';

export const DEFAULT_REGIONS_GID =
  (typeof import.meta !== 'undefined' &&
    import.meta.env &&
    import.meta.env.PUBLIC_GOOGLE_REGIONS_GID) ||
  '0';

export const DEFAULT_GENERAL_GID =
  (typeof import.meta !== 'undefined' &&
    import.meta.env &&
    import.meta.env.PUBLIC_GOOGLE_GENERAL_GID) ||
  '';

export const DEFAULT_REVIEWS_GID =
  (typeof import.meta !== 'undefined' &&
    import.meta.env &&
    import.meta.env.PUBLIC_GOOGLE_REVIEWS_GID) ||
  '';

export async function fetchInitialDataServerSide(): Promise<SheetDataResponse> {
  const now = Date.now();
  if (serverCacheData && now - serverCacheTimestamp < CACHE_TTL_MS) {
    return serverCacheData;
  }

  const PUBLISHED_SHEET_KEY = DEFAULT_PUBLISHED_SHEET_KEY;

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
      { name: 'Пример', id: 'primer', gid: '104791994' },
    ];

    // 1. Fetch region data and discover tabs in parallel
    const [regionData, discoveredTabs] = await Promise.all([
      fetchRegionData(PUBLISHED_SHEET_KEY, DEFAULT_REGIONS_GID).catch(
        () => ({}) as Record<string, RegionData>,
      ),
      discoverTabsFromPubHtml(PUBLISHED_SHEET_KEY).catch(() => []),
    ]);

    let activeGids = defaultGids.map((g) => ({
      ...g,
      flag: KNOWN_FLAGS[g.id] || '🏝️',
    }));
    let generalTabGid: string | null = DEFAULT_GENERAL_GID;
    let reviewsTabGid: string | null = DEFAULT_REVIEWS_GID;

    if (discoveredTabs.length > 0) {
      const genTab = discoveredTabs.find((t) => t.name.includes('Общая инфа'));
      if (genTab) generalTabGid = genTab.gid;

      const revTab = discoveredTabs.find(
        (t) =>
          t.name.toLowerCase().includes('отзыв') ||
          t.name.toLowerCase().includes('review'),
      );
      if (revTab) reviewsTabGid = revTab.gid;

      const ignoredNames = [
        'Общая инфа+ FAQ',
        'Регионы',
        'FAQ',
        'Шаблон',
        'Отзывы',
        'Отзывы клиентов',
        'Reviews',
        'Review',
      ];
      const filteredTabs = discoveredTabs.filter(
        (t) => !ignoredNames.includes(t.name),
      );
      if (filteredTabs.length > 0) {
        activeGids = filteredTabs.map((t) => {
          const { cleanName, flag } = extractFlag(t.name);
          const slug =
            transliterate(cleanName) ||
            t.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
          return {
            name: cleanName,
            id: slug,
            gid: t.gid,
            flag: flag || KNOWN_FLAGS[slug] || '🏝️',
          };
        });
      }
    }

    // 2. Fetch General Info, Reviews, and all Yacht tabs IN PARALLEL
    const fetchGenPromise = generalTabGid
      ? fetch(
          `https://docs.google.com/spreadsheets/d/e/${PUBLISHED_SHEET_KEY}/pub?gid=${generalTabGid}&single=true&output=csv`,
          { signal: AbortSignal.timeout(6000) },
        )
          .then((r) => (r.ok ? r.text() : ''))
          .then((csv) =>
            csv ? parseHeroSlidesFromRows(parseFullCSV(csv)) : [],
          )
          .catch(() => [])
      : Promise.resolve([]);

    const fetchRevPromise = reviewsTabGid
      ? fetch(
          `https://docs.google.com/spreadsheets/d/e/${PUBLISHED_SHEET_KEY}/pub?gid=${reviewsTabGid}&single=true&output=csv`,
          { signal: AbortSignal.timeout(6000) },
        )
          .then((r) => (r.ok ? r.text() : ''))
          .then((csv) => (csv ? parseReviewsFromRows(parseFullCSV(csv)) : []))
          .catch(() => [])
      : Promise.resolve([]);

    const knownFeatures = [
      'дайвинг',
      'снорклинг',
      'вечерние',
      'барбекю',
      'высадки',
      'фридайвинг',
      'пляжные',
      'баре',
      'массажные',
      'работа',
      'мультимедийная',
      'серфинг',
      'бар',
      'интерет',
      'фото',
      'наблюдение',
      'экскурсии',
      'отдых',
      'пользование',
      'тренажерный',
      'спа',
      'два бара',
      'водные',
      'активный',
      'сандек',
      'зона',
      'панорамный',
      'элегантный',
      'кемпинг',
      'знакомство',
      'настольные',
      'посещение',
      'пешие',
      'купание',
      'йога',
      'расслабляющие',
      'исследование',
      'прогулки',
      'катание',
      'купальная',
    ];

    const fetchYachtsPromises = activeGids.map(async (tab) => {
      try {
        const csvUrl = `https://docs.google.com/spreadsheets/d/e/${PUBLISHED_SHEET_KEY}/pub?gid=${tab.gid}&single=true&output=csv`;
        const resp = await fetch(csvUrl, {
          signal: AbortSignal.timeout(6000),
        }).catch(() => null);

        if (resp && resp.ok) {
          const csvText = await resp.text();
          const rows = parseFullCSV(csvText);
          const tabYachts: Yacht[] = [];
          let tabFlagUrl = '';
          let tabMapUrl = '';

          if (rows.length > 0) {
            // Определяем индексы колонок "Флаг" (I) и "Карта" (J) по заголовкам
            let flagColIdx = -1;
            let mapColIdx = -1;

            const headerRow = rows[0].map((c) =>
              (c || '').toLowerCase().trim(),
            );
            headerRow.forEach((col, idx) => {
              if (
                col === 'флаг' ||
                col.includes('flag') ||
                col.includes('флаг')
              ) {
                flagColIdx = idx;
              } else if (
                col === 'карта' ||
                col.includes('карта') ||
                col.includes('map')
              ) {
                mapColIdx = idx;
              }
            });

            // По умолчанию Колонка I = 8, Колонка J = 9
            if (flagColIdx === -1) flagColIdx = 8;
            if (mapColIdx === -1) mapColIdx = 9;

            // Извлекаем флаг и карту из строк этой вкладки
            for (let r = 1; r < rows.length; r++) {
              const rRow = rows[r];
              if (!rRow) continue;

              if (!tabFlagUrl && rRow[flagColIdx]) {
                const u = extractUrls(rRow[flagColIdx]);
                if (u.length > 0) {
                  tabFlagUrl = formatGoogleDriveImageUrl(u[0]);
                }
              }

              if (!tabMapUrl && rRow[mapColIdx]) {
                const u = extractUrls(rRow[mapColIdx]);
                if (u.length > 0) {
                  tabMapUrl = await resolveYandexDiskResource(
                    formatGoogleDriveImageUrl(u[0]),
                  );
                }
              }
            }

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
              for (let colIdx = 0; colIdx < row.length; colIdx++) {
                // Исключаем колонки Флага и Карты из галереи яхт
                if (colIdx === flagColIdx || colIdx === mapColIdx) continue;
                extractUrls(row[colIdx]).forEach((u: string) => {
                  if (!urlsInRow.includes(u)) urlsInRow.push(u);
                });
              }

              rawName = rawName.replace(/^[,;\"'\s]+/, '').trim();

              const isFeature = knownFeatures.some((f) =>
                rawName.toLowerCase().startsWith(f),
              );
              const isNewYachtHeader =
                rawName.length > 1 &&
                !rawName.startsWith('http') &&
                !rawName.startsWith('-') &&
                !isFeature &&
                (descCell.length > 20 ||
                  specName.toLowerCase() === 'длина' ||
                  !currentYacht);

              if (isNewYachtHeader) {
                if (currentYacht && currentYacht.name) {
                  tabYachts.push(currentYacht);
                }
                currentYacht = {
                  id: `${rawName.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${tab.id}`,
                  name: rawName,
                  countryId: tab.id,
                  countryName: tab.name,
                  type: 'Премиум суперяхта',
                  length:
                    specName.toLowerCase() === 'длина' && specVal
                      ? specVal
                      : '50 м',
                  capacity: '20 гостей',
                  cabins: '10 кают',
                  speed: '12 узлов',
                  crew: 'Экипаж',
                  images: [],
                  description: descCell,
                  accommodation: accCell,
                  toysAndEntertainment: entCell ? [entCell] : [],
                  specs: {
                    year: '2026',
                    engines: 'MAN',
                    nitrox: 'Да',
                    tender: 'Катер',
                  },
                  amenities: ['Ресторан', 'СПА', 'Кондиционер'],
                  waterSports: ['Дайвинг', 'Сноркелинг'],
                  price: 'Полный фрахт (по запросу)',
                };
              }

              if (currentYacht) {
                if (specName && specVal) {
                  const sLower = specName.toLowerCase();
                  if (sLower.includes('длина')) currentYacht.length = specVal;
                  else if (sLower.includes('ширина'))
                    currentYacht.specs = {
                      ...currentYacht.specs,
                      tender: specVal,
                    };
                  else if (sLower.includes('год'))
                    currentYacht.specs.year = specVal;
                  else if (sLower.includes('двигател'))
                    currentYacht.specs.engines = specVal;
                  else if (sLower.includes('скорост'))
                    currentYacht.speed = specVal;
                  else if (sLower.includes('кают'))
                    currentYacht.cabins = `${specVal} кают`;
                  else if (sLower.includes('вместимост'))
                    currentYacht.capacity = `${specVal}`;
                }
                urlsInRow.forEach((u) => {
                  if (currentYacht) {
                    const isSpecificFile =
                      /\.(jpe?g|png|webp|gif|svg|mp4|webm|mov|m4v)(\?.*)?$/i.test(
                        u,
                      ) ||
                      u.includes('youtube.com/') ||
                      u.includes('youtu.be/') ||
                      u.includes('rutube.ru/') ||
                      u.includes('vimeo.com/') ||
                      u.includes('vk.com/video') ||
                      u.includes('charterindex.com') ||
                      u.includes('yacht.link') ||
                      u.includes('yachtmaldives.com') ||
                      u.includes('drive.google.com/file') ||
                      u.includes('lh3.googleusercontent.com');
                    const isFolder =
                      !isSpecificFile &&
                      (u.includes('/folders/') ||
                        u.includes('/drive/folders/') ||
                        (u.includes('disk.yandex.ru/d/') &&
                          !u.match(/\/[^\/]+\.[a-zA-Z0-9]+$/)));
                    if (isFolder) {
                      currentYacht.driveFolderUrl = u;
                    } else {
                      const formatted = formatUniversalImageUrl(u);
                      if (
                        formatted &&
                        !currentYacht.images.includes(formatted)
                      ) {
                        currentYacht.images.push(formatted);
                      }
                    }
                  }
                });
                if (
                  accCell &&
                  !currentYacht.accommodation?.includes(accCell) &&
                  !accCell.startsWith('http')
                ) {
                  currentYacht.accommodation =
                    (currentYacht.accommodation
                      ? currentYacht.accommodation + '\n'
                      : '') + accCell;
                }
                if (
                  entCell &&
                  !currentYacht.toysAndEntertainment?.includes(entCell) &&
                  !entCell.startsWith('http')
                ) {
                  if (!currentYacht.toysAndEntertainment) {
                    currentYacht.toysAndEntertainment = [];
                  }
                  currentYacht.toysAndEntertainment.push(entCell);
                }
                if (
                  descCell &&
                  !currentYacht.description.includes(descCell) &&
                  !descCell.startsWith('http')
                ) {
                  currentYacht.description +=
                    (currentYacht.description ? '\n' : '') + descCell;
                }
              }
            }

            if (currentYacht && currentYacht.name) {
              tabYachts.push(currentYacht);
            }

            // Resolve any Yandex Disk URLs into direct CDN URLs for all yachts
            for (const y of tabYachts) {
              if (y.images && y.images.length > 0) {
                const resolved: string[] = [];
                for (const img of y.images) {
                  if (img.includes('disk.yandex.ru')) {
                    const direct = await resolveYandexDiskResource(img);
                    resolved.push(direct);
                  } else {
                    resolved.push(img);
                  }
                }
                y.images = resolved;
              }
            }
          }
          const [resolvedFlag, resolvedImage] = await Promise.all([
            resolveYandexDiskResource(tabFlagUrl),
            resolveYandexDiskResource(tabMapUrl),
          ]);

          return {
            tabId: tab.id,
            tabName: tab.name,
            yachts: tabYachts,
            flag: resolvedFlag,
            image: resolvedImage,
          };
        }
      } catch (e) {
        // tab error
      }
      return {
        tabId: tab.id,
        tabName: tab.name,
        yachts: [],
        flag: '',
        image: '',
      };
    });

    const [fetchedHeroSlides, fetchedReviews, tabResults] = await Promise.all([
      fetchGenPromise,
      fetchRevPromise,
      Promise.all(fetchYachtsPromises),
    ]);

    const fetchedYachts: Yacht[] = tabResults.flatMap((r) => r.yachts);
    // Если получены реальные яхты из Google Таблицы — используем их; если запрос пустой/таймаут — используем fallback
    const combinedYachts =
      fetchedYachts.length > 0 ? fetchedYachts : DEFAULT_YACHTS;

    const dynamicCountries: Country[] = activeGids
      .map((tab) => {
        const defaultCountry = DEFAULT_COUNTRIES.find((c) => c.id === tab.id);
        const tabData = tabResults.find((r) => r.tabId === tab.id);
        const regInfo =
          regionData[tab.name.toLowerCase()] ||
          regionData[tab.id.toLowerCase()];
        const desc = regInfo?.description || '';

        // 1. Флаг: колонка I вкладки страны -> вкладка "Регионы" (колонка B) -> tab.flag -> default
        const rawFlag =
          tabData?.flag ||
          regInfo?.flag ||
          tab.flag ||
          defaultCountry?.flag ||
          KNOWN_FLAGS[tab.id] ||
          '';
        const flag = formatGoogleDriveImageUrl(rawFlag) || rawFlag || '';

        // Карта берется с текущей вкладки страны из колонки "Карта" (J).
        // "Регионы" используется только если на вкладке страны карта не указана.
        const countrySheetMap = tabData?.image || '';
        const rawImage =
          countrySheetMap ||
          regInfo?.image ||
          flag ||
          defaultCountry?.image ||
          '';
        const image = formatGoogleDriveImageUrl(rawImage) || rawImage || '';

        const season =
          extractSeason(desc) || defaultCountry?.popularSeason || 'Круглый год';
        const yachtCount = combinedYachts.filter(
          (y) => y.countryId === tab.id,
        ).length;

        return {
          id: tab.id,
          name: tab.name,
          flag,
          image,
          description: desc,
          yachtCount,
          popularSeason: season,
        };
      })
      .filter((c) => c.yachtCount > 0);

    const finalCountries =
      dynamicCountries.length > 0 ? dynamicCountries : DEFAULT_COUNTRIES;
    const validCountryIds = new Set(finalCountries.map((c) => c.id));
    const finalYachts = combinedYachts.filter((y) =>
      validCountryIds.has(y.countryId),
    );

    const finalResult: SheetDataResponse = {
      source: 'live_google_sheet_published',
      updatedAt: new Date().toISOString(),
      countries: finalCountries,
      yachts: finalYachts,
      heroSlides:
        fetchedHeroSlides.length > 0 ? fetchedHeroSlides : DEFAULT_HERO_SLIDES,
      reviews: fetchedReviews.length > 0 ? fetchedReviews : DEFAULT_REVIEWS,
      faqs: DEFAULT_FAQS,
    };

    serverCacheData = finalResult;
    serverCacheTimestamp = now;
    return finalResult;
  } catch (e) {
    console.error('Google sheet fetch error:', e);
  }

  if (serverCacheData) {
    return serverCacheData;
  }

  return {
    source: 'spreadsheet_database_cache_fallback',
    updatedAt: new Date().toISOString(),
    countries: DEFAULT_COUNTRIES,
    yachts: DEFAULT_YACHTS,
    heroSlides: DEFAULT_HERO_SLIDES,
    reviews: DEFAULT_REVIEWS,
    faqs: DEFAULT_FAQS,
  };
}

export interface MediaItem {
  type: 'image' | 'video' | 'youtube' | 'rutube' | 'vimeo' | 'vk';
  url: string;
  embedUrl?: string;
  thumbnail: string;
  isVideo: boolean;
}

export function parseMediaItem(rawUrl: string): MediaItem | null {
  if (!rawUrl || typeof rawUrl !== 'string') return null;
  const trimmed = rawUrl.trim();
  if (!trimmed || trimmed.length < 5) return null;

  // 1. YouTube
  const ytMatch = trimmed.match(
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/i,
  );
  if (ytMatch && ytMatch[1]) {
    const id = ytMatch[1];
    return {
      type: 'youtube',
      url: trimmed,
      embedUrl: `https://www.youtube-nocookie.com/embed/${id}?rel=0&enablejsapi=1`,
      thumbnail: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
      isVideo: true,
    };
  }

  // 2. Rutube
  const rutubeMatch = trimmed.match(
    /rutube\.ru\/(?:video|play\/embed)\/([a-zA-Z0-9_-]+)/i,
  );
  if (rutubeMatch && rutubeMatch[1]) {
    const id = rutubeMatch[1];
    return {
      type: 'rutube',
      url: trimmed,
      embedUrl: `https://rutube.ru/play/embed/${id}`,
      thumbnail: '',
      isVideo: true,
    };
  }

  // 3. Vimeo
  const vimeoMatch = trimmed.match(
    /vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/[^\/]*\/videos\/|album\/\d+\/video\/|video\/|)(\d+)/i,
  );
  if (vimeoMatch && vimeoMatch[1]) {
    const id = vimeoMatch[1];
    return {
      type: 'vimeo',
      url: trimmed,
      embedUrl: `https://player.vimeo.com/video/${id}`,
      thumbnail: '',
      isVideo: true,
    };
  }

  // 4. VK Video
  const vkMatch = trimmed.match(
    /(?:vk\.com|vkvideo\.ru)\/(?:video_ext\.php\?|video)(-?\d+_\d+)/i,
  );
  if (vkMatch && vkMatch[1]) {
    const parts = vkMatch[1].split('_');
    return {
      type: 'vk',
      url: trimmed,
      embedUrl: `https://vk.com/video_ext.php?oid=${parts[0]}&id=${parts[1]}&hd=2`,
      thumbnail: '',
      isVideo: true,
    };
  }

  // 5. Direct HTML5 Video
  const isDirectVideo = /\.(mp4|webm|mov|ogg|m4v)(\?.*)?$/i.test(trimmed);
  if (isDirectVideo) {
    return {
      type: 'video',
      url: trimmed,
      embedUrl: trimmed,
      thumbnail: '',
      isVideo: true,
    };
  }

  // 6. Direct Image, Google Drive, CharterIndex / Yacht.link, etc.
  const formattedImg = formatUniversalImageUrl(trimmed);
  return {
    type: 'image',
    url: formattedImg || trimmed,
    thumbnail: formattedImg || trimmed,
    isVideo: false,
  };
}

export function parseAllMedia(images: string[] = []): MediaItem[] {
  if (!Array.isArray(images)) return [];
  const items: MediaItem[] = [];
  for (const url of images) {
    const item = parseMediaItem(url);
    if (item) {
      items.push(item);
    }
  }
  return items;
}

export function formatUniversalMediaUrl(url: string): string {
  return formatUniversalImageUrl(url);
}

export async function fetchCatalogData(): Promise<SheetDataResponse> {
  return await fetchInitialDataServerSide();
}
