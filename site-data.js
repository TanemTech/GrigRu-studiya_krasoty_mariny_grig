(function(global){
  'use strict';
  // Fill client information in this file, then rename it to site-data.js.
  // Never publish a client site while mode is 'template'.
  const t=(ru='',en='',hy='',uz='',tg='')=>({ru,en,hy,uz,tg});
  // Approved universal copy. Keep it unchanged for every salon.
  const heroDescription=t(
    'Ваша красота. Ваша уверенность.',
    'Your beauty. Your confidence.',
    'Ձեր գեղեցկությունը։ Ձեր վստահությունը։'
  );
  const about=t(
    'В основе нашей работы — профессиональный подход, внимание к деталям и уважение к индивидуальности каждого гостя. Мы создаём комфортное пространство, где качество и забота остаются главным приоритетом.',
    'Our work is built on professionalism, attention to detail, and respect for every guest’s individuality. We create a comfortable space where quality and care remain our highest priorities.',
    'Մեր աշխատանքի հիմքում մասնագիտական մոտեցումն է, ուշադրությունը մանրուքներին և հարգանքը յուրաքանչյուր հյուրի անհատականության նկատմամբ։ Մենք ստեղծում ենք հարմարավետ միջավայր, որտեղ որակն ու հոգատարությունը մնում են գլխավոր առաջնահերթությունները։'
  );
  const data={
  "schemaVersion": 1,
  "mode": "production",
  "country": "RU",
  "locales": [
    "ru",
    "en"
  ],
  "defaultLocale": "ru",
  "salon": {
    "name": {
      "ru": "Студия красоты Марины Григ",
      "en": "Marina Grig Beauty Studio",
      "hy": "",
      "uz": "",
      "tg": ""
    },
    "kind": {
      "ru": "Салон красоты",
      "en": "Beauty salon",
      "hy": "Գեղեցկության սրահ",
      "uz": "",
      "tg": ""
    },
    "city": {
      "ru": "г. Москва",
      "en": "Moscow",
      "hy": "",
      "uz": "",
      "tg": ""
    },
    "address": {
      "ru": "просп. Защитников Москвы, 10",
      "en": "10 Zashchitnikov Moskvy Avenue",
      "hy": "",
      "uz": "",
      "tg": ""
    },
    "fullAddress": {
      "ru": "Москва, проспект Защитников Москвы, 10, 111677",
      "en": "10 Zashchitnikov Moskvy Avenue, Moscow, 111677, Russia",
      "hy": "",
      "uz": "",
      "tg": ""
    },
    "heroDescription": {
      "ru": "Ваша красота. Ваша уверенность.",
      "en": "Your beauty. Your confidence.",
      "hy": "Ձեր գեղեցկությունը։ Ձեր վստահությունը։",
      "uz": "",
      "tg": ""
    },
    "about": {
      "ru": "В основе нашей работы — профессиональный подход, внимание к деталям и уважение к индивидуальности каждого гостя. Мы создаём комфортное пространство, где качество и забота остаются главным приоритетом.",
      "en": "Our work is built on professionalism, attention to detail, and respect for every guest’s individuality. We create a comfortable space where quality and care remain our highest priorities.",
      "hy": "Մեր աշխատանքի հիմքում մասնագիտական մոտեցումն է, ուշադրությունը մանրուքներին և հարգանքը յուրաքանչյուր հյուրի անհատականության նկատմամբ։ Մենք ստեղծում ենք հարմարավետ միջավայր, որտեղ որակն ու հոգատարությունը մնում են գլխավոր առաջնահերթությունները։",
      "uz": "",
      "tg": ""
    }
  },
  "schedule": {
    "timezone": "Europe/Moscow",
    "periods": [
      {
        "days": [
          1,
          2,
          3,
          4,
          5,
          6,
          7
        ],
        "open": "10:00",
        "close": "21:00"
      }
    ],
    "fallback": {
      "ru": "Ежедневно, 10:00–21:00",
      "en": "Daily, 10:00–21:00",
      "hy": "",
      "uz": "",
      "tg": ""
    }
  },
  "contacts": {
    "phone": "+7 (929) 920-10-10",
    "phoneLabel": {
      "ru": "Позвонить",
      "en": "Call",
      "hy": "Զանգահարել",
      "uz": "",
      "tg": ""
    },
    "messengerUrl": "https://t.me/studio_mgrig",
    "messengerLabel": {
      "ru": "Telegram",
      "en": "Telegram",
      "hy": "",
      "uz": "",
      "tg": ""
    },
    "messengerHandle": "@studio_mgrig",
    "mapUrl": "https://yandex.ru/maps/org/studiya_krasoty_mariny_grig/176320186783/",
    "mapEmbedUrl": "https://yandex.ru/map-widget/v1/?mode=search&oid=176320186783&ol=biz",
    "reviewsUrl": "https://yandex.ru/maps/org/studiya_krasoty_mariny_grig/176320186783/reviews/",
    "booking": [
      {
        "type": "online",
        "label": {
          "ru": "Онлайн-запись — Sonline",
          "en": "Book online — Sonline",
          "hy": "",
          "uz": "",
          "tg": ""
        },
        "url": "https://widget.sonline.su/ru/services/?placeid=350657069"
      },
      {
        "type": "whatsapp",
        "label": {
          "ru": "WhatsApp",
          "en": "WhatsApp",
          "hy": "",
          "uz": "",
          "tg": ""
        },
        "url": "https://wa.me/79299201010?text=%D0%9E%D0%B1%D1%80%D0%B0%D1%89%D0%B5%D0%BD%D0%B8%D0%B5+%D0%B8%D0%B7+%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81+%D0%9A%D0%B0%D1%80%D1%82%0A%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!+%D0%9C%D0%B5%D0%BD%D1%8F+%D0%B7%D0%B0%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%BE%D0%B2%D0%B0%D0%BB%D0%BE+%D0%B2%D0%B0%D1%88%D0%B5+%D0%BF%D1%80%D0%B5%D0%B4%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5"
      }
    ]
  },
  "rating": {
    "value": 4.9,
    "count": 616
  },
  "media": {
    "logo": "",
    "hero": [
      {
        "src": "hero.webp",
        "alt": {
          "ru": "Ресепшен студии красоты Марины Григ",
          "en": "Reception at Marina Grig Beauty Studio",
          "hy": "",
          "uz": "",
          "tg": ""
        }
      }
    ],
    "about": "profile.webp",
    "portfolio": [
      {
        "src": "gallery-04.webp",
        "alt": {
          "ru": "Волнистая укладка на светлых волосах",
          "en": "Wavy styling on blonde hair",
          "hy": "",
          "uz": "",
          "tg": ""
        }
      },
      {
        "src": "gallery-14.webp",
        "alt": {
          "ru": "Маникюр в розовых оттенках",
          "en": "Manicure in pink shades",
          "hy": "",
          "uz": "",
          "tg": ""
        }
      },
      {
        "src": "gallery-06.webp",
        "alt": {
          "ru": "Короткая стрижка",
          "en": "Short haircut",
          "hy": "",
          "uz": "",
          "tg": ""
        }
      },
      {
        "src": "gallery-20.webp",
        "alt": {
          "ru": "Розовый маникюр",
          "en": "Pink manicure",
          "hy": "",
          "uz": "",
          "tg": ""
        }
      },
      {
        "src": "gallery-10.webp",
        "alt": {
          "ru": "Рыжие волосы и стрижка каре",
          "en": "Red hair and a bob haircut",
          "hy": "",
          "uz": "",
          "tg": ""
        }
      },
      {
        "src": "gallery-23.webp",
        "alt": {
          "ru": "Фотографии результата макияжа губ",
          "en": "Photos showing lip makeup results",
          "hy": "",
          "uz": "",
          "tg": ""
        }
      },
      {
        "src": "gallery-25.webp",
        "alt": {
          "ru": "Татуировка с рисунком солнца",
          "en": "Sun design tattoo",
          "hy": "",
          "uz": "",
          "tg": ""
        }
      }
    ],
    "gallery": {
      "Салон": [
        {
          "src": "gallery-01.webp",
          "alt": {
            "ru": "Вход в студию красоты",
            "en": "Beauty studio entrance",
            "hy": "",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-02.webp",
          "alt": {
            "ru": "Вход и вывеска студии",
            "en": "Studio entrance and sign",
            "hy": "",
            "uz": "",
            "tg": ""
          }
        }
      ],
      "Волосы": [
        {
          "src": "gallery-03.webp",
          "alt": {
            "ru": "Светлые волосы с волнистой укладкой",
            "en": "Blonde hair with a wavy style",
            "hy": "",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-04.webp",
          "alt": {
            "ru": "Волнистая укладка на светлых волосах",
            "en": "Wavy styling on blonde hair",
            "hy": "",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-05.webp",
          "alt": {
            "ru": "Волнистая укладка на длинных волосах",
            "en": "Wavy styling on long hair",
            "hy": "",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-06.webp",
          "alt": {
            "ru": "Короткая стрижка",
            "en": "Short haircut",
            "hy": "",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-07.webp",
          "alt": {
            "ru": "Укладка на длинных волосах",
            "en": "Long-hair styling",
            "hy": "",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-08.webp",
          "alt": {
            "ru": "Объёмная укладка",
            "en": "Voluminous styling",
            "hy": "",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-09.webp",
          "alt": {
            "ru": "Прямые длинные волосы с бантом",
            "en": "Long straight hair with a bow",
            "hy": "",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-10.webp",
          "alt": {
            "ru": "Рыжие волосы и стрижка каре",
            "en": "Red hair and a bob haircut",
            "hy": "",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-11.webp",
          "alt": {
            "ru": "Длинные прямые волосы",
            "en": "Long straight hair",
            "hy": "",
            "uz": "",
            "tg": ""
          }
        }
      ],
      "Маникюр": [
        {
          "src": "gallery-12.webp",
          "alt": {
            "ru": "Чёрный маникюр с блестящим акцентом",
            "en": "Black manicure with a glitter accent",
            "hy": "",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-13.webp",
          "alt": {
            "ru": "Красный маникюр с дизайном",
            "en": "Red manicure with nail art",
            "hy": "",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-14.webp",
          "alt": {
            "ru": "Маникюр в розовых оттенках",
            "en": "Manicure in pink shades",
            "hy": "",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-15.webp",
          "alt": {
            "ru": "Светлый маникюр с дизайном",
            "en": "Light manicure with nail art",
            "hy": "",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-16.webp",
          "alt": {
            "ru": "Маникюр в натуральных оттенках",
            "en": "Manicure in natural shades",
            "hy": "",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-17.webp",
          "alt": {
            "ru": "Светло-розовый маникюр",
            "en": "Pale pink manicure",
            "hy": "",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-18.webp",
          "alt": {
            "ru": "Маникюр с синими акцентами",
            "en": "Manicure with blue accents",
            "hy": "",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-19.webp",
          "alt": {
            "ru": "Маникюр в сиреневых оттенках",
            "en": "Manicure in lilac shades",
            "hy": "",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-20.webp",
          "alt": {
            "ru": "Розовый маникюр",
            "en": "Pink manicure",
            "hy": "",
            "uz": "",
            "tg": ""
          }
        }
      ],
      "Педикюр": [
        {
          "src": "gallery-21.webp",
          "alt": {
            "ru": "Педикюр с красным покрытием",
            "en": "Pedicure with red polish",
            "hy": "",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-22.webp",
          "alt": {
            "ru": "Педикюр со светлым покрытием",
            "en": "Pedicure with light polish",
            "hy": "",
            "uz": "",
            "tg": ""
          }
        }
      ],
      "Перманентный макияж": [
        {
          "src": "gallery-23.webp",
          "alt": {
            "ru": "Фотографии результата макияжа губ",
            "en": "Photos showing lip makeup results",
            "hy": "",
            "uz": "",
            "tg": ""
          }
        },
        {
          "src": "gallery-24.webp",
          "alt": {
            "ru": "Крупный план линии ресниц",
            "en": "Close-up of the lash line",
            "hy": "",
            "uz": "",
            "tg": ""
          }
        }
      ],
      "Тату": [
        {
          "src": "gallery-25.webp",
          "alt": {
            "ru": "Татуировка с рисунком солнца",
            "en": "Sun design tattoo",
            "hy": "",
            "uz": "",
            "tg": ""
          }
        }
      ]
    },
    "desktopGalleryLimits": {}
  },
  "categoryLabels": {
    "Парикмахер женский зал": {
      "ru": "Парикмахер женский зал",
      "en": "Women's hairdressing",
      "hy": "",
      "uz": "",
      "tg": ""
    },
    "Ногтевой сервис": {
      "ru": "Ногтевой сервис",
      "en": "Nail services",
      "hy": "",
      "uz": "",
      "tg": ""
    },
    "Перманентный макияж": {
      "ru": "Перманентный макияж",
      "en": "Permanent makeup",
      "hy": "",
      "uz": "",
      "tg": ""
    },
    "Тату": {
      "ru": "Тату",
      "en": "Tattoos",
      "hy": "",
      "uz": "",
      "tg": ""
    },
    "Брови": {
      "ru": "Брови",
      "en": "Brows",
      "hy": "",
      "uz": "",
      "tg": ""
    }
  },
  "categoryOrder": [
    "Парикмахер женский зал",
    "Ногтевой сервис",
    "Перманентный макияж",
    "Тату",
    "Брови"
  ],
  "services": [
    {
      "id": "lebel-color-long",
      "category": "Парикмахер женский зал",
      "title": {
        "ru": "Окрашивание в 1 тон длинные Lebel",
        "en": "Lebel single-tone coloring — long hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "6800 ₽",
      "duration": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "lebel-color-medium",
      "category": "Парикмахер женский зал",
      "title": {
        "ru": "Окрашивание в 1 тон средние Lebel",
        "en": "Lebel single-tone coloring — medium-length hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "5600 ₽",
      "duration": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "lebel-root-lightening",
      "category": "Парикмахер женский зал",
      "title": {
        "ru": "Осветление корней Lebel",
        "en": "Lebel root lightening",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "4500 ₽",
      "duration": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "lebel-complex-color-long",
      "category": "Парикмахер женский зал",
      "title": {
        "ru": "Сложное окрашивание длинные Lebel",
        "en": "Lebel complex coloring — long hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "14000 ₽",
      "duration": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "creative-haircut",
      "category": "Парикмахер женский зал",
      "title": {
        "ru": "Креативная стрижка",
        "en": "Creative haircut",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "1800 ₽",
      "duration": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "haircut-long",
      "category": "Парикмахер женский зал",
      "title": {
        "ru": "Стрижка длинные",
        "en": "Haircut — long hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "2000 ₽",
      "duration": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "lebel-toning-long",
      "category": "Парикмахер женский зал",
      "title": {
        "ru": "Тонирование длинные Lebel",
        "en": "Lebel toning — long hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "3500 ₽",
      "duration": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "haircut-short",
      "category": "Парикмахер женский зал",
      "title": {
        "ru": "Стрижка короткие волосы",
        "en": "Haircut — short hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "1500 ₽",
      "duration": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "1 шт.",
        "en": "1 unit",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "toning-short",
      "category": "Парикмахер женский зал",
      "title": {
        "ru": "Тонирование короткие волосы",
        "en": "Toning — short hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "2500 ₽",
      "duration": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "1 шт.",
        "en": "1 unit",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "root-lightening-toning-medium",
      "category": "Парикмахер женский зал",
      "title": {
        "ru": "Осветление корней и тонирование средняя длина",
        "en": "Root lightening and toning — medium-length hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "7500 ₽",
      "duration": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "1 шт.",
        "en": "1 unit",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "manicure-tamila",
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Комплекс Luxio, Nail Republic",
        "en": "Luxio, Nail Republic package",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "2800 ₽",
      "duration": {
        "ru": "2 ч",
        "en": "2 h",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Классический маникюр, снятие, покрытие мастер Тамила",
        "en": "Classic manicure, removal, and polish. Nail technician Tamila",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "manicure-arpi",
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Комплекс Luxio, Nail Republic",
        "en": "Luxio, Nail Republic package",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "2800 ₽",
      "duration": {
        "ru": "2 ч 30 мин",
        "en": "2 h 30 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "аппаратный и комбинированный маникюр, снятие, покрытие мастер Арпи",
        "en": "E-file and combined manicure, removal, and polish. Nail technician Arpi",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "pedicure-tamila",
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Классический педикюр комплекс Luxio, Nail Republic",
        "en": "Classic pedicure package — Luxio, Nail Republic",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "3300 ₽",
      "duration": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "мастер Тамила",
        "en": "Nail technician Tamila",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "pedicure-arpi",
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Аппаратный/комбинированный педикюр, комплекс Luxio, Nail Republic",
        "en": "E-file/combined pedicure package — Luxio, Nail Republic",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "3300 ₽",
      "duration": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "мастер Арпи",
        "en": "Nail technician Arpi",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "permanent-lips",
      "category": "Перманентный макияж",
      "title": {
        "ru": "перманентный макияж губ",
        "en": "Permanent lip makeup",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "10000 ₽",
      "duration": {
        "ru": "2 ч",
        "en": "2 h",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "мастер Диана",
        "en": "Artist Diana",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "permanent-lash-line",
      "category": "Перманентный макияж",
      "title": {
        "ru": "перманент межреснички",
        "en": "Lash-line permanent makeup",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "8000 ₽",
      "duration": {
        "ru": "2 ч",
        "en": "2 h",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "мастер Диана",
        "en": "Artist Diana",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "permanent-brows",
      "category": "Перманентный макияж",
      "title": {
        "ru": "перманент бровей",
        "en": "Permanent brow makeup",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "10000 ₽",
      "duration": {
        "ru": "2 ч",
        "en": "2 h",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "мастер Диана",
        "en": "Artist Diana",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "mini-tattoo",
      "category": "Тату",
      "title": {
        "ru": "мини-тату",
        "en": "Mini tattoo",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "5000 ₽",
      "duration": {
        "ru": "1 ч",
        "en": "1 h",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Мини-тату в разных стилях, легкое исполнение. Окончательная стоимость обсуждается, зависит от размера, сложности, времени проекта. Мастер Лизетта с опытом более 9 лет, художник, фельдшер скорой помощи в прошлом, знает все о коже и стерильности, со...",
        "en": "Mini tattoos in different styles, with delicate execution. The final price is discussed individually and depends on the size, complexity, and time required. Lizetta has over 9 years of experience, is an artist and a former ambulance paramedic, and knows skin and sterility…",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "tattoo",
      "category": "Тату",
      "title": {
        "ru": "тату",
        "en": "Tattoo",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "10000 ₽",
      "duration": {
        "ru": "2 ч 30 мин",
        "en": "2 h 30 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Окончательная стоимость обсуждается, зависит от размера, сложности, времени проекта. Мастер Лизетта с опытом более 9 лет, художник, фельдшер скорой помощи в прошлом, знает все о коже и стерильности, соблюдая все меры безопасности и качества.",
        "en": "The final price is discussed individually and depends on the size, complexity, and time required. Lizetta has over 9 years of experience, is an artist and a former ambulance paramedic, knows skin and sterility, and follows all safety and quality measures.",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "large-tattoo",
      "category": "Тату",
      "title": {
        "ru": "большие тату",
        "en": "Large tattoos",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "20000 ₽",
      "duration": {
        "ru": "4 ч",
        "en": "4 h",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Окончательная стоимость обсуждается, зависит от размера, сложности, времени проекта. Мастер Лизетта с опытом более 9 лет, художник, фельдшер скорой помощи в прошлом, знает все о коже и стерильности, соблюдая все меры безопасности и качества.",
        "en": "The final price is discussed individually and depends on the size, complexity, and time required. Lizetta has over 9 years of experience, is an artist and a former ambulance paramedic, knows skin and sterility, and follows all safety and quality measures.",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "brow-shaping",
      "category": "Брови",
      "title": {
        "ru": "Архитектура бровей",
        "en": "Brow shaping",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "1400 ₽",
      "duration": {
        "ru": "",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Коррекция и окрашивание бровей",
        "en": "Brow shaping and tinting",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    }
  ],
  "team": [],
  "reviews": [
    {
      "id": "yandex-review-001",
      "author": {
        "ru": "Маргарита",
        "en": "Margarita",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "text": {
        "ru": "В данный салон хожу давно , к Марине на стрижку и окрашивание, дочек на стрижки привожу. Вообщем ни разу не подводили мастера❤️ здесь прекрасно все, рядом с домом, админ прелесть, мастера классные, но вот на маникюре была в первый раз, по рекомендациии к Тамиле записалась ❤️ восторг 🤩 очень приятная женщина, а как мастер золотце 🙏🏼",
        "en": "I have been coming to this salon for a long time, to Marina for haircuts and coloring, and I bring my daughters for haircuts. The stylists have never let us down ❤️ Everything is wonderful here: close to home, a lovely administrator, and great specialists. This was my first manicure here, though; I booked Tamila on a recommendation ❤️ I am delighted 🤩 Such a pleasant woman, and her hands work magic 🙏🏼",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "rating": 5,
      "source": {
        "ru": "Яндекс Карты",
        "en": "Yandex Maps",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "url": "https://yandex.ru/maps/org/studiya_krasoty_mariny_grig/176320186783/reviews/"
    },
    {
      "id": "yandex-review-002",
      "author": {
        "ru": "А М",
        "en": "A M",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "text": {
        "ru": "мой любимый салон! 🤍 хожу к Арпи на маникюр, всегда ровное превосходное покрытие к Марине на стрижку и тонировку к Анастасии на бровки всем мастерам 10000 баллов цена - качество администраторы тоже очень милые девушки, всегда предложат чай/кофе в салоне всегда приятная атмосфера, классные песни рекомендую всем!",
        "en": "My favorite salon! 🤍 I go to Arpi for manicures — always an even, excellent finish; to Marina for haircuts and toning; and to Anastasia for my brows. 10,000 points to all the specialists. Great value for money. The administrators are very lovely too and always offer tea or coffee. The salon always has a pleasant atmosphere and great music. I recommend it to everyone!",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "rating": 5,
      "source": {
        "ru": "Яндекс Карты",
        "en": "Yandex Maps",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "url": "https://yandex.ru/maps/org/studiya_krasoty_mariny_grig/176320186783/reviews/"
    },
    {
      "id": "yandex-review-003",
      "author": {
        "ru": "Дарья Ш.",
        "en": "Darya Sh.",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "text": {
        "ru": "Была на маникюре у мастера Арпи, мастер справилась просто превосходно. Долго искала хорошего мастера, т.к. у меня налипшая кутикула и сосуды очень близко к кутикуле, кровит при прикосновении… у Арпи все получилось и довольно быстро, теперь хожу к ней) девушка администратор просто прелесть, очень комфортная и позитивная🥹",
        "en": "I had a manicure with Arpi, and she did a wonderful job. I had been looking for a good nail technician for a long time because my cuticles stick to the nails and the blood vessels are very close, so they bleed when touched… Arpi managed it, and quite quickly. I go to her now :) The administrator is absolutely lovely, so welcoming and positive 🥹",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "rating": 5,
      "source": {
        "ru": "Яндекс Карты",
        "en": "Yandex Maps",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "url": "https://yandex.ru/maps/org/studiya_krasoty_mariny_grig/176320186783/reviews/"
    },
    {
      "id": "yandex-review-004",
      "author": {
        "ru": "Лина У.",
        "en": "Lina U.",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "text": {
        "ru": "Была в студии второй раз. Администраторы приветливые, очень приятная и уютная атмосфера.Шикарный мастер Ани, уже второй раз хожу к ней, окрашивание получилось именно то, что и хотела. Ранее, 4 раза у других мастеров, именно этот цвет не получался. У Ани все получилось с первого раза) Огромная благодарность студии и мастеру.",
        "en": "This was my second visit to the studio. The administrators are welcoming, and the atmosphere is very pleasant and cozy. Ani is a wonderful stylist; this was my second visit to her, and the color came out exactly as I wanted. Previously, four attempts with other stylists had not achieved this color. Ani got it right the first time :) Many thanks to the studio and the stylist.",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "rating": 5,
      "source": {
        "ru": "Яндекс Карты",
        "en": "Yandex Maps",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "url": "https://yandex.ru/maps/org/studiya_krasoty_mariny_grig/176320186783/reviews/"
    },
    {
      "id": "yandex-review-005",
      "author": {
        "ru": "Екатерина К.",
        "en": "Ekaterina K.",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "text": {
        "ru": "Атмосферное место! Прекрасный мастер Марина 🤗 сделала супер стрижку ,учла все мои пожелания. Салон просторный, много кресел для парикмахерских услуг😉 Приветливая девушка на ресепшн ❤️‍🔥",
        "en": "A place with a lovely atmosphere! Wonderful stylist Marina 🤗 gave me a super haircut and took all my wishes into account. The salon is spacious, with plenty of hairdressing chairs 😉 A friendly woman at reception ❤️‍🔥",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "rating": 5,
      "source": {
        "ru": "Яндекс Карты",
        "en": "Yandex Maps",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "url": "https://yandex.ru/maps/org/studiya_krasoty_mariny_grig/176320186783/reviews/"
    },
    {
      "id": "yandex-review-008",
      "author": {
        "ru": "Елена Миненко",
        "en": "Elena Minenko",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "text": {
        "ru": "Очень рада, что нашла это замечальный салон! Окрашивание, укладка, макияж, букет к свадьбе, плюсом замечательное настроение! Профессионально! Комфортно! Ольга - окрашивание и укладка, благодарю от всего сердца! Визажист, флорист - благодарю! Администраторы салона- благодарю! Теперь это мой любимый салон! Однозначно, рекомендую!",
        "en": "I am so happy I found this wonderful salon! Coloring, styling, makeup, a wedding bouquet, and a wonderful mood on top! Professional! Comfortable! Olga — thank you from the bottom of my heart for the coloring and styling! Thank you to the makeup artist and florist! Thank you to the salon administrators! This is now my favorite salon! I definitely recommend it!",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "rating": 5,
      "source": {
        "ru": "Яндекс Карты",
        "en": "Yandex Maps",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "url": "https://yandex.ru/maps/org/studiya_krasoty_mariny_grig/176320186783/reviews/"
    },
    {
      "id": "yandex-review-009",
      "author": {
        "ru": "Светлана Родина",
        "en": "Svetlana Rodina",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "text": {
        "ru": "Добрый день! Как всегда все прекрасно❤️ Изменила цвет волос, все понравилось!Мастер Марина всегда на высоте Стрижка и цвет, то что хотела. Волосы блестят, хорошо лежат. Спасибо большое! Так же сделала маникюр с покрытием гель лак у мастера Екатерины. Быстро, качественно. Мне было комфортно! Мастер очень приятная молодая девушка! Так держать!",
        "en": "Good afternoon! As always, everything is wonderful ❤️ I changed my hair color and loved it! Marina is always excellent. The haircut and color were exactly what I wanted. My hair shines and sits well. Thank you very much! I also had a manicure with gel polish from Ekaterina. Quick and high-quality. I felt comfortable! A very pleasant young nail technician! Keep it up!",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "rating": 5,
      "source": {
        "ru": "Яндекс Карты",
        "en": "Yandex Maps",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "url": "https://yandex.ru/maps/org/studiya_krasoty_mariny_grig/176320186783/reviews/"
    },
    {
      "id": "yandex-review-011",
      "author": {
        "ru": "Елена З.",
        "en": "Elena Z.",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "text": {
        "ru": "Это идеальное место, где можно сделать все для своей красоты🌸 Искала салон и не ошиблась, мастер Арпи сделала мне самый идеальный педикюр в моей жизни 🔥 Администратор Катерина очень вежливая, приветливая всегда ответит на все вопросы и проконсультирует по всем продуктам в салоне 🔥 Теперь я постоянный клиент, буду записываться на другие процедуры 🌸 Очень уютный и чистый салон✨✨✨",
        "en": "This is the perfect place to take care of all your beauty needs 🌸 I was looking for a salon and made the right choice: Arpi gave me the most perfect pedicure of my life 🔥 Administrator Katerina is very polite and welcoming, always answers questions and advises on the salon products 🔥 I am now a regular client and will book other treatments 🌸 A very cozy and clean salon ✨✨✨",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "rating": 5,
      "source": {
        "ru": "Яндекс Карты",
        "en": "Yandex Maps",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "url": "https://yandex.ru/maps/org/studiya_krasoty_mariny_grig/176320186783/reviews/"
    },
    {
      "id": "yandex-review-012",
      "author": {
        "ru": "Наталья А.",
        "en": "Natalya A.",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "text": {
        "ru": "Я дружу с салоном много лет. Каждый раз ухожу от мастеров в настроение\"Я красотка и мне подвластен Мир\". Спасибо всем девочкам,Марине отдельно за такой правильно подобранный штат специалистов,Все мастера работают с душой,поют во время работы!Стильно,модно,красиво!Мне уже несколько раз делает разные виды уходов и стрижек Ани.Умница!А вы сами сходите и потом напишите )Спасибо,мои птички!Ани,приду к тебе за хорошим настроением не раз!",
        "en": "I have been coming to the salon for many years. Every time I leave the specialists feeling, “I am beautiful and the world is mine.” Thank you to all the girls, and especially to Marina for bringing together such a great team. All the specialists work with soul and sing while they work! Stylish, fashionable, beautiful! Ani has given me different treatments and haircuts several times now. Wonderful! Go yourself and then write about it :) Thank you, my lovely girls! Ani, I will come to you for a good mood again and again!",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "rating": 5,
      "source": {
        "ru": "Яндекс Карты",
        "en": "Yandex Maps",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "url": "https://yandex.ru/maps/org/studiya_krasoty_mariny_grig/176320186783/reviews/"
    }
  ]
};
  global.TANEM_SITE_DATA=data;
  const rows=[];
  const collect=value=>{
    if(!value||typeof value!=='object')return;
    if(typeof value.ru==='string'&&typeof value.en==='string'&&typeof value.hy==='string'){
      if(value.ru)rows.push([value.ru,value.hy,value.en]);
      return;
    }
    if(Array.isArray(value))value.forEach(collect);
    else Object.values(value).forEach(collect);
  };
  collect(data);
  rows.push(...[["Салон","","Salon"],["Волосы","","Hair"],["Маникюр","","Manicure"],["Педикюр","","Pedicure"],["Перманентный макияж","","Permanent makeup"],["Тату","","Tattoos"]]);
  global.TANEM_SITE_I18N_ROWS=rows;
})(window);
