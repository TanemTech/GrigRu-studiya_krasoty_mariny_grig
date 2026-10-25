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
      "ru": "Марина Григ",
      "en": "Marina Grig",
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
    "logo": "logo.png",
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
    "Массаж": {
      "ru": "Массаж",
      "en": "Massage",
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
    "Парикмахерские услуги": {
      "ru": "Парикмахерские услуги",
      "en": "Hair services",
      "hy": "",
      "uz": "",
      "tg": ""
    },
    "Брови и ресницы": {
      "ru": "Брови и ресницы",
      "en": "Brows and lashes",
      "hy": "",
      "uz": "",
      "tg": ""
    },
    "Визаж": {
      "ru": "Визаж",
      "en": "Makeup",
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
    }
  },
  "categoryOrder": [
    "Массаж",
    "Ногтевой сервис",
    "Парикмахерские услуги",
    "Брови и ресницы",
    "Визаж",
    "Перманентный макияж",
    "Тату"
  ],
  "services": [
    {
      "id": "sonline-14569029",
      "sonlineId": 14569029,
      "category": "Массаж",
      "title": {
        "ru": "Массаж любой части тела 30 минут",
        "en": "Massage of any body area — 30 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "1 900 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Массажист с опытом более 10 лет, образование фельдшер скорой помощи, телесный терапевт с интегративным подходом. Тип и вид массажа определяется по запросу и анамнезу пациента на личной консультации. Используются различные комбинированные техники. Специалист использует комплексный подход от классического массажа до восточных техник.",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "sonline-14569035",
      "sonlineId": 14569035,
      "category": "Массаж",
      "title": {
        "ru": "Комплексный массаж тела 60 минут",
        "en": "Full-body massage — 60 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "2 900 ₽",
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Массажист с опытом более 10 лет, образование фельдшер скорой помощи, телесный терапевт с интегративным подходом, кизезиоспециалист. Тип и вид массажа определяется по запросу и анамнезу пациента на личной консультации. Используются различные комбинированные техники. Специалист использует комплексный подход от классического массажа до восточных техник.",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "sonline-14575688",
      "sonlineId": 14575688,
      "category": "Массаж",
      "title": {
        "ru": "Комплексный массаж всего тела 90 минут",
        "en": "Full-body massage — 90 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "3 900 ₽",
      "duration": {
        "ru": "120 мин",
        "en": "120 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Массажист с опытом более 10 лет, образование фельдшер скорой помощи, телесный терапевт с интегративным подходом. Тип и вид массажа определяется по запросу и анамнезу пациента на личной консультации. Используются различные комбинированные техники. Специалист использует комплексный подход от классического массажа до восточных техник.",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "sonline-15005288",
      "sonlineId": 15005288,
      "category": "Массаж",
      "title": {
        "ru": "Комплексный массаж лица и тела 90 минут",
        "en": "Face and body massage — 90 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "3 900 ₽",
      "duration": {
        "ru": "120 мин",
        "en": "120 min",
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
      "id": "sonline-15005294",
      "sonlineId": 15005294,
      "category": "Массаж",
      "title": {
        "ru": "Комплексный массаж лица и тела 120 минут",
        "en": "Face and body massage — 120 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "4 900 ₽",
      "duration": {
        "ru": "150 мин",
        "en": "150 min",
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
      "id": "sonline-14575676",
      "sonlineId": 14575676,
      "category": "Массаж",
      "title": {
        "ru": "Массаж лица и зоны декольте 30 минут",
        "en": "Face and décolleté massage — 30 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "1 900 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Массажист с опытом более 10 лет, образование фельдшер скорой помощи, телесный терапевт с интегративным подходом. Тип и вид массажа определяется по запросу и анамнезу пациента на личной консультации. Используются различные комбинированные техники.",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "sonline-14575682",
      "sonlineId": 14575682,
      "category": "Массаж",
      "title": {
        "ru": "Массаж шейно-воротниковой зоны, лица и зоны декольте 60 минут",
        "en": "Neck, shoulders, face and décolleté massage — 60 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "2 900 ₽",
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Массажист с опытом более 10 лет, образование фельдшер скорой помощи, телесный терапевт с интегративным подходом. Тип и вид массажа определяется по запросу и анамнезу пациента на личной консультации. Используются различные комбинированные техники.",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "sonline-15312860",
      "sonlineId": 15312860,
      "category": "Массаж",
      "title": {
        "ru": "Антицеллюлитный медовый массаж 1 зоны (живот, руки, бедра, ягодицы) 30 минут",
        "en": "Anti-cellulite honey massage, one area — 30 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "2 300 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
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
      "id": "sonline-15312872",
      "sonlineId": 15312872,
      "category": "Массаж",
      "title": {
        "ru": "Антицеллюлитный медовый массаж 1 час ( все вместе: руки, бедра, ягодицы, живот)",
        "en": "Anti-cellulite honey massage, full treatment — 60 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "3 500 ₽",
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
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
      "id": "sonline-14732926",
      "sonlineId": 14732926,
      "category": "Массаж",
      "title": {
        "ru": "Спа-программа ´Медовый липолитик´ 110 минут",
        "en": "Honey Lipolytic spa programme — 110 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "4 300 ₽",
      "duration": {
        "ru": "120 мин",
        "en": "120 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Состоит из 4х этапов, направленных на уменьшение объемов, циркуляцию кровообращения, борьбу с локальными жировыми отложениями и дает гладкость кожи уже после первого сеанса. Сначала проводится ручной массаж на локальных жировых отложениях, убираются зажимы в мышцах, которые нарушают отток лимфы и нарушают кровообращение, затем идет медовый массаж, обертывание в термоодеяле, которое позволяет усилить эффект от процедуры и в конце закрепляется разогревающим кремом. В конце вкусный травяной чай.",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "sonline-15312770",
      "sonlineId": 15312770,
      "category": "Массаж",
      "title": {
        "ru": "Спа-программа ´Перезагрузка нервной системы´ 120 минут",
        "en": "Nervous System Reset spa programme — 120 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "5 000 ₽",
      "duration": {
        "ru": "150 мин",
        "en": "150 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Программа направленна на тотальное восстановление психоэмоционального состояния, мышечное расслабление и нормализацию всех систем организма. Первым этапом проводится расслабляющий массаж всего тела с эфирными маслами (если у Вас нет противопоказаний), затем идет бандажное обертывание в термоодеяле с детокс-концентратом с экстрактом лаванды, что помогает избавить организм от токсинов и ускорить метаболизм + массаж лица. В конце процедуры предлагается насладиться травяным чаем.",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "sonline-4520257",
      "sonlineId": 4520257,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Классический маникюр",
        "en": "Classic manicure",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "1 100 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=4520257"
    },
    {
      "id": "sonline-4113420",
      "sonlineId": 4113420,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Аппаратный и комбинированный маникюр",
        "en": "E-file and combined manicure",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "1 200 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=4113420"
    },
    {
      "id": "sonline-8359529",
      "sonlineId": 8359529,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Комплекс LUXIO, Nail Republic ( снятие + маникюр + выравнивание + покрытие)",
        "en": "LUXIO / Nail Republic manicure package (removal, manicure, leveling, polish)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "3 000 ₽",
      "duration": {
        "ru": "150 мин",
        "en": "150 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "В комплекс входит: снятие + маникюр + выравнивание + покрытие",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=8359529"
    },
    {
      "id": "sonline-14153487",
      "sonlineId": 14153487,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Комплекс Камуфлирующий гель (снятие+маникюр+выравнивание+порытие)",
        "en": "Camouflage gel manicure package (removal, manicure, leveling, coating)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "3 000 ₽",
      "duration": {
        "ru": "150 мин",
        "en": "150 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "В комплекс входит: снятие+маникюр+выравнивание+порытие камуфлирующий гель",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=14153487"
    },
    {
      "id": "sonline-3425416",
      "sonlineId": 3425416,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Снятие гель лака",
        "en": "Gel polish removal",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "200 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3425416"
    },
    {
      "id": "sonline-5560440",
      "sonlineId": 5560440,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Снятие гель лака без последующего покрытия",
        "en": "Gel polish removal without new coating",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "300 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=5560440"
    },
    {
      "id": "sonline-4519540",
      "sonlineId": 4519540,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Покрытие LUXIO, Nail Republic",
        "en": "LUXIO / Nail Republic coating",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "1 300 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=4519540"
    },
    {
      "id": "sonline-14455453",
      "sonlineId": 14455453,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Покрытие Камуфлирующий гель",
        "en": "Camouflage gel coating",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "1 300 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=14455453"
    },
    {
      "id": "sonline-8402258",
      "sonlineId": 8402258,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Покрытие база+топ",
        "en": "Base and top coat",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "700 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=8402258"
    },
    {
      "id": "sonline-3425418",
      "sonlineId": 3425418,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Лак лечебный",
        "en": "Nail treatment polish",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "150 ₽",
      "duration": {
        "ru": "15 мин",
        "en": "15 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3425418"
    },
    {
      "id": "sonline-3856824",
      "sonlineId": 3856824,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Снятие лака",
        "en": "Nail polish removal",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "150 ₽",
      "duration": {
        "ru": "15 мин",
        "en": "15 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3856824"
    },
    {
      "id": "sonline-3425422",
      "sonlineId": 3425422,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Покрытие лаком",
        "en": "Regular nail polish",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "250 ₽",
      "duration": {
        "ru": "15 мин",
        "en": "15 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3425422"
    },
    {
      "id": "sonline-5125581",
      "sonlineId": 5125581,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "IBX лечение",
        "en": "IBX nail treatment",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "500 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=5125581"
    },
    {
      "id": "sonline-3835890",
      "sonlineId": 3835890,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Укрепление ногтей акриловой пудрой",
        "en": "Acrylic powder nail strengthening",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "400 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3835890"
    },
    {
      "id": "sonline-9974027",
      "sonlineId": 9974027,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Укрепление гелем",
        "en": "Gel nail strengthening",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "500 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=9974027"
    },
    {
      "id": "sonline-8384549",
      "sonlineId": 8384549,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Выравнивание ногтевой пластины",
        "en": "Nail plate leveling",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "300 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=8384549"
    },
    {
      "id": "sonline-8359556",
      "sonlineId": 8359556,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Форма ногтей",
        "en": "Nail shaping",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "200 ₽",
      "duration": {
        "ru": "15 мин",
        "en": "15 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Коррекция формы ногтей, коррекция длины ногтей",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=8359556"
    },
    {
      "id": "sonline-9691897",
      "sonlineId": 9691897,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Длинные",
        "en": "Long nails surcharge",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "200 ₽",
      "duration": {
        "ru": "15 мин",
        "en": "15 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=9691897"
    },
    {
      "id": "sonline-3856815",
      "sonlineId": 3856815,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Ремонт 1 ногтя гель-лак",
        "en": "One gel-polish nail repair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "от 300 ₽",
      "duration": {
        "ru": "20 мин",
        "en": "20 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "ремонт трещин, уголков",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3856815"
    },
    {
      "id": "sonline-14820510",
      "sonlineId": 14820510,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Ремонт ногтя ( во время маникюра )",
        "en": "Nail repair during manicure",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "150 ₽",
      "duration": {
        "ru": "15 мин",
        "en": "15 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=14820510"
    },
    {
      "id": "sonline-8359544",
      "sonlineId": 8359544,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Наращивание 1 ногтя во время маникюра",
        "en": "One nail extension during manicure",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "250 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Наращивание гелем, полигелем (снятие, наращивание. покрытие)",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=8359544"
    },
    {
      "id": "sonline-15248872",
      "sonlineId": 15248872,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Наращивание 1 ногтя",
        "en": "One nail extension",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "400 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=15248872"
    },
    {
      "id": "sonline-3425410",
      "sonlineId": 3425410,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Дизайн French",
        "en": "French design",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "500 ₽",
      "duration": {
        "ru": "45 мин",
        "en": "45 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3425410"
    },
    {
      "id": "sonline-3425414",
      "sonlineId": 3425414,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Дизайн",
        "en": "Nail art",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "от 50 ₽",
      "duration": {
        "ru": "15 мин",
        "en": "15 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3425414"
    },
    {
      "id": "sonline-9678692",
      "sonlineId": 9678692,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Втирка",
        "en": "Chrome powder finish",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "500 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=9678692"
    },
    {
      "id": "sonline-3609519",
      "sonlineId": 3609519,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Парафинотерапия руки",
        "en": "Paraffin hand treatment",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "500 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3609519"
    },
    {
      "id": "sonline-3425456",
      "sonlineId": 3425456,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Классический педикюр",
        "en": "Classic pedicure",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "2 100 ₽",
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Обработка пальчиков, стоп, удаление кутикулы.",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3425456"
    },
    {
      "id": "sonline-14414734",
      "sonlineId": 14414734,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Классический педикюр комплекс Luxio, Nail Republic (снятие покрытия гель лак, классический педикюр, покрытие)",
        "en": "Classic pedicure package with LUXIO / Nail Republic",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "3 500 ₽",
      "duration": {
        "ru": "120 мин",
        "en": "120 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=14414734"
    },
    {
      "id": "sonline-14279920",
      "sonlineId": 14279920,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Лечебный лак",
        "en": "Treatment polish",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "150 ₽",
      "duration": {
        "ru": "15 мин",
        "en": "15 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=14279920"
    },
    {
      "id": "sonline-3694932",
      "sonlineId": 3694932,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Комбинированный педикюр\\Smart педикюр",
        "en": "Combined / Smart pedicure",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "2 100 ₽",
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Комбинированный педикюр включает в себя технику классического и аппаратного педикюра. Позволяет выполнить более тщательный уход, более длительный эффект.",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3694932"
    },
    {
      "id": "sonline-14431433",
      "sonlineId": 14431433,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Аппаратный педикюр комплекс Luxio, Nail Republic (снятие покрытия гель лак, аппаратный педикюр, покрытие)",
        "en": "E-file pedicure package with LUXIO / Nail Republic",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "3 500 ₽",
      "duration": {
        "ru": "150 мин",
        "en": "150 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=14431433"
    },
    {
      "id": "sonline-11245904",
      "sonlineId": 11245904,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Смарт педикюр",
        "en": "Smart pedicure",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "2 000 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Входит обработка пальчиков и пяток",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": []
    },
    {
      "id": "sonline-11846235",
      "sonlineId": 11846235,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Смарт педикюр мужской",
        "en": "Men's Smart pedicure",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "2 800 ₽",
      "duration": {
        "ru": "120 мин",
        "en": "120 min",
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
      "id": "sonline-10651987",
      "sonlineId": 10651987,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Мужской педикюр",
        "en": "Men's pedicure",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "2 500 ₽",
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
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
      "id": "sonline-3670938",
      "sonlineId": 3670938,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Обработка пальчиков",
        "en": "Toe treatment",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "1 500 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Обработка только пальчиков, без стоп",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3670938"
    },
    {
      "id": "sonline-8402666",
      "sonlineId": 8402666,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Покрытие база+топ",
        "en": "Base and top coat",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "500 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=8402666"
    },
    {
      "id": "sonline-4519555",
      "sonlineId": 4519555,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Покрытие LUXIO, Nail Republic",
        "en": "LUXIO / Nail Republic coating",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "от 1 200 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=4519555"
    },
    {
      "id": "sonline-3425464",
      "sonlineId": 3425464,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Дизайн French",
        "en": "French design",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "400 ₽",
      "duration": {
        "ru": "45 мин",
        "en": "45 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3425464"
    },
    {
      "id": "sonline-3425462",
      "sonlineId": 3425462,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Снятие гель лак",
        "en": "Gel polish removal",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "200 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3425462"
    },
    {
      "id": "sonline-5560485",
      "sonlineId": 5560485,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Снятие гель лака без последующего покрытия",
        "en": "Gel polish removal without new coating",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "300 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=5560485"
    },
    {
      "id": "sonline-8402657",
      "sonlineId": 8402657,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Снятие лака",
        "en": "Nail polish removal",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "150 ₽",
      "duration": {
        "ru": "15 мин",
        "en": "15 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=8402657"
    },
    {
      "id": "sonline-9678647",
      "sonlineId": 9678647,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Вросший ноготь",
        "en": "Ingrown toenail care",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "150 ₽",
      "duration": {
        "ru": "15 мин",
        "en": "15 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=9678647"
    },
    {
      "id": "sonline-3425466",
      "sonlineId": 3425466,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Покрытие лаком",
        "en": "Regular nail polish",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "250 ₽",
      "duration": {
        "ru": "15 мин",
        "en": "15 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3425466"
    },
    {
      "id": "sonline-9678677",
      "sonlineId": 9678677,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Наращивание ногтей (маникюр входит)",
        "en": "Nail extensions (manicure included)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "4 000 ₽",
      "duration": {
        "ru": "180 мин",
        "en": "180 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=9678677"
    },
    {
      "id": "sonline-3425498",
      "sonlineId": 3425498,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Коррекция нарощенных (маникюр входит)",
        "en": "Nail extension refill (manicure included)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "3 500 ₽",
      "duration": {
        "ru": "135 мин",
        "en": "135 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Цена указана",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3425498"
    },
    {
      "id": "sonline-3436554",
      "sonlineId": 3436554,
      "category": "Ногтевой сервис",
      "title": {
        "ru": "Снятие геля или нарощенных ногтей",
        "en": "Gel / nail extension removal",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "500 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3436554"
    },
    {
      "id": "sonline-3439380",
      "sonlineId": 3439380,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Стрижка на короткие волосы",
        "en": "Women’s haircut — short hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "1 600 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3439380"
    },
    {
      "id": "sonline-3439386",
      "sonlineId": 3439386,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Стрижка на средние волосы",
        "en": "Women’s haircut — medium hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "2 000 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3439386"
    },
    {
      "id": "sonline-3439389",
      "sonlineId": 3439389,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Стрижка на длинные волосы",
        "en": "Women’s haircut — long hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "2 200 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3439389"
    },
    {
      "id": "sonline-14321062",
      "sonlineId": 14321062,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Стрижка на очень длинные волосы",
        "en": "Women’s haircut — very long hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "2 800 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=14321062"
    },
    {
      "id": "sonline-11841041",
      "sonlineId": 11841041,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Один срез",
        "en": "One-length trim",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "1 000 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Ровный срез машинкой. Мытье в процедуру не входит.",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=11841041"
    },
    {
      "id": "sonline-14431417",
      "sonlineId": 14431417,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Один срез + мытье головы",
        "en": "One-length trim with hair wash",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "1 500 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=14431417"
    },
    {
      "id": "sonline-3439395",
      "sonlineId": 3439395,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Стрижка на очень длинные волосы",
        "en": "Women’s haircut — very long hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "2 500 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3439395"
    },
    {
      "id": "sonline-3439377",
      "sonlineId": 3439377,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Челка",
        "en": "Fringe trim",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "400 ₽",
      "duration": {
        "ru": "15 мин",
        "en": "15 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3439377"
    },
    {
      "id": "sonline-3439398",
      "sonlineId": 3439398,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Креативная",
        "en": "Creative haircut",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "1 800 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3439398"
    },
    {
      "id": "sonline-14153607",
      "sonlineId": 14153607,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Модельная",
        "en": "Classic haircut — boys 7–14",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "1 000 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=14153607"
    },
    {
      "id": "sonline-3439422",
      "sonlineId": 3439422,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Модельная",
        "en": "Men’s classic haircut",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "1 500 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3439422"
    },
    {
      "id": "sonline-15838354",
      "sonlineId": 15838354,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Модельная",
        "en": "Men’s classic haircut",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "1 300 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=15838354"
    },
    {
      "id": "sonline-15519500",
      "sonlineId": 15519500,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Модельная средняя длина",
        "en": "Men’s classic haircut — medium length",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "1 500 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=15519500"
    },
    {
      "id": "sonline-14879462",
      "sonlineId": 14879462,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Модельная под насадки",
        "en": "Men’s clipper haircut",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "1 000 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=14879462"
    },
    {
      "id": "sonline-3439416",
      "sonlineId": 3439416,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Под насадку",
        "en": "Men’s clipper trim",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "700 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3439416"
    },
    {
      "id": "sonline-3439407",
      "sonlineId": 3439407,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Наголо",
        "en": "Men’s buzz cut",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "550 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3439407"
    },
    {
      "id": "sonline-3439449",
      "sonlineId": 3439449,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Окрашивание мужское",
        "en": "Men’s hair coloring",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "2 500 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3439449"
    },
    {
      "id": "sonline-3537480",
      "sonlineId": 3537480,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Стрижка бороды 1 насадка",
        "en": "Beard clipper trim",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "300 ₽",
      "duration": {
        "ru": "15 мин",
        "en": "15 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3537480"
    },
    {
      "id": "sonline-3439458",
      "sonlineId": 3439458,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Моделирование бороды",
        "en": "Beard shaping",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "500 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3439458"
    },
    {
      "id": "sonline-3439461",
      "sonlineId": 3439461,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Окрашивание бороды",
        "en": "Beard coloring",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "500 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3439461"
    },
    {
      "id": "sonline-3437955",
      "sonlineId": 3437955,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Окрашивание в 1 тон корни (Lebel)",
        "en": "Single-tone hair coloring — roots (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "4 800 ₽",
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3437955"
    },
    {
      "id": "sonline-3437958",
      "sonlineId": 3437958,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Окрашивание в 1 тон короткие (Lebel)",
        "en": "Single-tone hair coloring — short hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "5 300 ₽",
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3437958"
    },
    {
      "id": "sonline-3437967",
      "sonlineId": 3437967,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Окрашивание в 1 тон средние (Lebel)",
        "en": "Single-tone hair coloring — medium hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "6 000 ₽",
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3437967"
    },
    {
      "id": "sonline-3437970",
      "sonlineId": 3437970,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Окрашивание в 1 тон длинные (Lebel)",
        "en": "Single-tone hair coloring — long hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "7 000 ₽",
      "duration": {
        "ru": "120 мин",
        "en": "120 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3437970"
    },
    {
      "id": "sonline-3437976",
      "sonlineId": 3437976,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Окрашивание в 1 тон очень длинные (Lebel)",
        "en": "Single-tone hair coloring — very long hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "8 000 ₽",
      "duration": {
        "ru": "120 мин",
        "en": "120 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3437976"
    },
    {
      "id": "sonline-13867986",
      "sonlineId": 13867986,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Окрашивание в 1 тон корни (Своя краска)",
        "en": "Single-tone hair coloring — roots (client-provided dye)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "3 000 ₽",
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Окрашивание корней в 1 тон на своем красители. Ответственность за цвет, качество, носку красителя мы не несем.",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=13867986"
    },
    {
      "id": "sonline-13868059",
      "sonlineId": 13868059,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Окрашивание в 1 тон короткие (Своя краска)",
        "en": "Single-tone hair coloring — short hair (client-provided dye)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "3 000 ₽",
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Окрашивание на короткие волосы в 1 тон на своем красители. Ответственность за цвет, качество, носку красителя мы не несем.",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=13868059"
    },
    {
      "id": "sonline-13868031",
      "sonlineId": 13868031,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Окрашивание в 1 тон средние (Своя краска)",
        "en": "Single-tone hair coloring — medium hair (client-provided dye)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "4 000 ₽",
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Окрашивание на средние волосы (до плеч) в 1 тон на своем красители. Ответственность за цвет, качество, носку красителя мы не несем.",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=13868031"
    },
    {
      "id": "sonline-13868066",
      "sonlineId": 13868066,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Окрашивание в 1 тон длинные (Своя краска)",
        "en": "Single-tone hair coloring — long hair (client-provided dye)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "4 500 ₽",
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Окрашивание на длинные волосы (ниже плеч) в 1 тон на своем красители. Ответственность за цвет, качество, носку красителя мы не несем.",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=13868066"
    },
    {
      "id": "sonline-13868074",
      "sonlineId": 13868074,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Окрашивание в 1 тон очень длинные (Своя краска)",
        "en": "Single-tone hair coloring — very long hair (client-provided dye)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "5 000 ₽",
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Окрашивание на очень длинные волосы (ниже лопаток) в 1 тон на своем красители. Ответственность за цвет, качество, носку красителя мы не несем.",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=13868074"
    },
    {
      "id": "sonline-3436617",
      "sonlineId": 3436617,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Осветление корней (Lebel)",
        "en": "Root lightening — roots (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "4 800 ₽",
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3436617"
    },
    {
      "id": "sonline-7359330",
      "sonlineId": 7359330,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Смывка короткие (Lebel)",
        "en": "Hair color removal — short hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "от 5 500 ₽",
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=7359330"
    },
    {
      "id": "sonline-7359348",
      "sonlineId": 7359348,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Смывка средние (Lebel)",
        "en": "Hair color removal — medium hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "от 6 500 ₽",
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=7359348"
    },
    {
      "id": "sonline-7359366",
      "sonlineId": 7359366,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Смывка длинные (Lebel)",
        "en": "Hair color removal — long hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "от 8 500 ₽",
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=7359366"
    },
    {
      "id": "sonline-7359375",
      "sonlineId": 7359375,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Смывка очень длинные (Lebel)",
        "en": "Hair color removal — very long hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "от 9 000 ₽",
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=7359375"
    },
    {
      "id": "sonline-3436578",
      "sonlineId": 3436578,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Тонирование короткие (Lebel)",
        "en": "Hair toning — short hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "3 000 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3436578"
    },
    {
      "id": "sonline-3436581",
      "sonlineId": 3436581,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Тонирование средние (Lebel)",
        "en": "Hair toning — medium hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "3 500 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3436581"
    },
    {
      "id": "sonline-3436584",
      "sonlineId": 3436584,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Тонирование длинные (Lebel)",
        "en": "Hair toning — long hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "4 000 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3436584"
    },
    {
      "id": "sonline-3436590",
      "sonlineId": 3436590,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Тонирование очень длинные (Lebel)",
        "en": "Hair toning — very long hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "4 500 ₽",
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3436590"
    },
    {
      "id": "sonline-3437991",
      "sonlineId": 3437991,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Растяжка цвета короткие (Lebel)",
        "en": "Color melting — short hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "4 500 ₽",
      "duration": {
        "ru": "120 мин",
        "en": "120 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3437991"
    },
    {
      "id": "sonline-3437997",
      "sonlineId": 3437997,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Растяжка цвета средние (Lebel)",
        "en": "Color melting — medium hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "6 200 ₽",
      "duration": {
        "ru": "180 мин",
        "en": "180 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3437997"
    },
    {
      "id": "sonline-3437982",
      "sonlineId": 3437982,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Растяжка цвета длинные (Lebel)",
        "en": "Color melting — long hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "7 300 ₽",
      "duration": {
        "ru": "180 мин",
        "en": "180 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3437982"
    },
    {
      "id": "sonline-3437988",
      "sonlineId": 3437988,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Растяжка цвета очень длинные (Lebel)",
        "en": "Color melting — very long hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "8 200 ₽",
      "duration": {
        "ru": "240 мин",
        "en": "240 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3437988"
    },
    {
      "id": "sonline-3438009",
      "sonlineId": 3438009,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Сложное окрашивание средние (Айртач, балаяж, шатуш, амбре) Lebel",
        "en": "Complex coloring (airtouch, balayage, shatush, ombré) — medium hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "от 13 000 ₽",
      "duration": {
        "ru": "240 мин",
        "en": "240 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3438009"
    },
    {
      "id": "sonline-3438012",
      "sonlineId": 3438012,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Сложное окрашивание длинные (Айртач, балаяж, шатуш, амбре) Lebel",
        "en": "Complex coloring (airtouch, balayage, shatush, ombré) — long hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "от 15 000 ₽",
      "duration": {
        "ru": "240 мин",
        "en": "240 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3438012"
    },
    {
      "id": "sonline-3438015",
      "sonlineId": 3438015,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Сложное окрашивание очень длинные (Айртач, балаяж, шатуш, амбре) Lebel",
        "en": "Complex coloring (airtouch, balayage, shatush, ombré) — very long hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "от 17 000 ₽",
      "duration": {
        "ru": "240 мин",
        "en": "240 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3438015"
    },
    {
      "id": "sonline-3438018",
      "sonlineId": 3438018,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Мелирование корни ( Lebel)",
        "en": "Root highlights — roots (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "6 000 ₽",
      "duration": {
        "ru": "120 мин",
        "en": "120 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3438018"
    },
    {
      "id": "sonline-14905124",
      "sonlineId": 14905124,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Мелирование корней + тонирование короткие (Lebel)",
        "en": "Root highlights and toning — short hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "8 500 ₽",
      "duration": {
        "ru": "150 мин",
        "en": "150 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=14905124"
    },
    {
      "id": "sonline-14905130",
      "sonlineId": 14905130,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Мелирование корней + тонирование средние (Lebel)",
        "en": "Root highlights and toning — medium hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "9 000 ₽",
      "duration": {
        "ru": "180 мин",
        "en": "180 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=14905130"
    },
    {
      "id": "sonline-14905136",
      "sonlineId": 14905136,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Мелирование корней + тонирование длинные (Lebel)",
        "en": "Root highlights and toning — long hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "9 500 ₽",
      "duration": {
        "ru": "180 мин",
        "en": "180 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=14905136"
    },
    {
      "id": "sonline-14905142",
      "sonlineId": 14905142,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Мелирование корней + тонирование очень длинные (Lebel)",
        "en": "Root highlights and toning — very long hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "10 000 ₽",
      "duration": {
        "ru": "180 мин",
        "en": "180 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=14905142"
    },
    {
      "id": "sonline-3438021",
      "sonlineId": 3438021,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Мелирование короткие (Lebel)",
        "en": "Highlights — short hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "6 000 ₽",
      "duration": {
        "ru": "120 мин",
        "en": "120 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3438021"
    },
    {
      "id": "sonline-14905156",
      "sonlineId": 14905156,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Мелирование + тонирование короткие (Lebel)",
        "en": "Highlights and toning — short hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "8 500 ₽",
      "duration": {
        "ru": "150 мин",
        "en": "150 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=14905156"
    },
    {
      "id": "sonline-3438024",
      "sonlineId": 3438024,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Мелирование средние (Lebel)",
        "en": "Highlights — medium hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "6 500 ₽",
      "duration": {
        "ru": "120 мин",
        "en": "120 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3438024"
    },
    {
      "id": "sonline-14905162",
      "sonlineId": 14905162,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Мелирование + тонирование средние (Lebel)",
        "en": "Highlights and toning — medium hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "9 500 ₽",
      "duration": {
        "ru": "180 мин",
        "en": "180 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=14905162"
    },
    {
      "id": "sonline-3438027",
      "sonlineId": 3438027,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Мелирование длинные (Lebel)",
        "en": "Highlights — long hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "7 000 ₽",
      "duration": {
        "ru": "180 мин",
        "en": "180 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3438027"
    },
    {
      "id": "sonline-14905168",
      "sonlineId": 14905168,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Мелирование + тонирование длинные (Lebel)",
        "en": "Highlights and toning — long hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "10 500 ₽",
      "duration": {
        "ru": "210 мин",
        "en": "210 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=14905168"
    },
    {
      "id": "sonline-3438030",
      "sonlineId": 3438030,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Мелирование очень длинные (Lebel)",
        "en": "Highlights — very long hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "8 000 ₽",
      "duration": {
        "ru": "180 мин",
        "en": "180 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3438030"
    },
    {
      "id": "sonline-14905174",
      "sonlineId": 14905174,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Мелирование + тонирование очень длинные (Lebel)",
        "en": "Highlights and toning — very long hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "12 000 ₽",
      "duration": {
        "ru": "240 мин",
        "en": "240 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=14905174"
    },
    {
      "id": "sonline-14160149",
      "sonlineId": 14160149,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Контуринг и тонирование у лица",
        "en": "Face-framing contouring and toning",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "3 500 ₽",
      "duration": {
        "ru": "120 мин",
        "en": "120 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=14160149"
    },
    {
      "id": "sonline-12779912",
      "sonlineId": 12779912,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Контуринг средние (Lebel)",
        "en": "Hair contouring — medium hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "8 000 ₽",
      "duration": {
        "ru": "120 мин",
        "en": "120 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=12779912"
    },
    {
      "id": "sonline-12779974",
      "sonlineId": 12779974,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Контуринг длинные (Lebel)",
        "en": "Hair contouring — long hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "10 000 ₽",
      "duration": {
        "ru": "120 мин",
        "en": "120 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=12779974"
    },
    {
      "id": "sonline-12779999",
      "sonlineId": 12779999,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Контуринг очень длинные (Lebel)",
        "en": "Hair contouring — very long hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "12 000 ₽",
      "duration": {
        "ru": "120 мин",
        "en": "120 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=12779999"
    },
    {
      "id": "sonline-14160154",
      "sonlineId": 14160154,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Тонирование контуринга у лица",
        "en": "Face-framing contour toning",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "2 500 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=14160154"
    },
    {
      "id": "sonline-14589612",
      "sonlineId": 14589612,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Протеиновое насыщение",
        "en": "Protein hair treatment",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "3 000 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=14589612"
    },
    {
      "id": "sonline-8614952",
      "sonlineId": 8614952,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Гиалуроновое восстановление",
        "en": "Hyaluronic hair restoration",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "1 500 ₽",
      "duration": {
        "ru": "15 мин",
        "en": "15 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "дополнение к процедуре окрашивания, стрижки. укладки.",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=8614952"
    },
    {
      "id": "sonline-3425676",
      "sonlineId": 3425676,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Счастье для волос короткие волосы",
        "en": "Happiness for Hair treatment — short hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "5 000 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Процедура «Счастье для волос» создана японским косметическим брендом Lebel, специально для реконструкции волосяного стержня на молекулярном уровне. Она комплексно воздействует на наши локоны, кожу головы и фолликул. Процесс начинается с нанесения составов, которые насыщают волосы полезными веществами. Затем наносятся маски, восстанавливающие липидный слой. И заключительный этап посвящен лечению кожи головы. Для этого наносится гель, стимулирующий рост волос и усиливающий кровообращение.",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3425676"
    },
    {
      "id": "sonline-3425678",
      "sonlineId": 3425678,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Счастье для волос средние волосы",
        "en": "Happiness for Hair treatment — medium hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "6 000 ₽",
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Процедура «Счастье для волос» создана японским косметическим брендом Lebel, специально для реконструкции волосяного стержня на молекулярном уровне. Она комплексно воздействует на наши локоны, кожу головы и фолликул. Процесс начинается с нанесения составов, которые насыщают волосы полезными веществами. Затем наносятся маски, восстанавливающие липидный слой. И заключительный этап посвящен лечению кожи головы. Для этого наносится гель, стимулирующий рост волос и усиливающий кровообращение.",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3425678"
    },
    {
      "id": "sonline-3425680",
      "sonlineId": 3425680,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Счастье для волос длинные волосы",
        "en": "Happiness for Hair treatment — long hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "7 000 ₽",
      "duration": {
        "ru": "120 мин",
        "en": "120 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Процедура «Счастье для волос» создана японским косметическим брендом Lebel, специально для реконструкции волосяного стержня на молекулярном уровне. Она комплексно воздействует на наши локоны, кожу головы и фолликул. Процесс начинается с нанесения составов, которые насыщают волосы полезными веществами. Затем наносятся маски, восстанавливающие липидный слой. И заключительный этап посвящен лечению кожи головы. Для этого наносится гель, стимулирующий рост волос и усиливающий кровообращение.",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3425680"
    },
    {
      "id": "sonline-5125722",
      "sonlineId": 5125722,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Счастье для волос очень длинные волосы",
        "en": "Happiness for Hair treatment — very long hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "8 000 ₽",
      "duration": {
        "ru": "150 мин",
        "en": "150 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Процедура «Счастье для волос» создана японским косметическим брендом Lebel, специально для реконструкции волосяного стержня на молекулярном уровне. Она комплексно воздействует на наши локоны, кожу головы и фолликул. Процесс начинается с нанесения составов, которые насыщают волосы полезными веществами. Затем наносятся маски, восстанавливающие липидный слой. И заключительный этап посвящен лечению кожи головы. Для этого наносится гель, стимулирующий рост волос и усиливающий кровообращение.",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=5125722"
    },
    {
      "id": "sonline-13134967",
      "sonlineId": 13134967,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Выпрямление на короткие волосы (Ботокс\\Кератин\\Биксипластия\\Коллагенирование)",
        "en": "Hair straightening (Botox / keratin / bixiplasty / collagen) — short hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "6 000 ₽",
      "duration": {
        "ru": "150 мин",
        "en": "150 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=13134967"
    },
    {
      "id": "sonline-6001581",
      "sonlineId": 6001581,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Выпрямление на средние волосы (Ботокс\\Кератин\\Биксипластия\\Коллагенирование)",
        "en": "Hair straightening (Botox / keratin / bixiplasty / collagen) — medium hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "9 000 ₽",
      "duration": {
        "ru": "150 мин",
        "en": "150 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=6001581"
    },
    {
      "id": "sonline-6001653",
      "sonlineId": 6001653,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Выпрямление на длинные волосы (Ботокс\\Кератин\\Биксипластия\\Коллагенирование)",
        "en": "Hair straightening (Botox / keratin / bixiplasty / collagen) — long hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "11 000 ₽",
      "duration": {
        "ru": "150 мин",
        "en": "150 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=6001653"
    },
    {
      "id": "sonline-6001662",
      "sonlineId": 6001662,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Выпрямление на очень длинные волосы (Ботокс\\Кератин\\Биксипластия\\Коллагенирование)",
        "en": "Hair straightening (Botox / keratin / bixiplasty / collagen) — very long hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "13 000 ₽",
      "duration": {
        "ru": "180 мин",
        "en": "180 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=6001662"
    },
    {
      "id": "sonline-6642263",
      "sonlineId": 6642263,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Коктейльный уход. Короткие волосы",
        "en": "Cocktail hair care — short hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "1 000 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Уход включает в себя: Очищающий шампунь, восстанавливающий флюид, реконструирующий спрей, маску. Помогает при выпадении волос, перхоти, повышенная чувствительность кожи). Сбалансированные составы без сульфатов и парабенов, насыщенные экстрактами бурых водорослей, лекарственных трав и витаминами, позволят в кратчайшие сроки санировать кожные покровы головы, улучшать состояние волос и ускорять их рост.",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=6642263"
    },
    {
      "id": "sonline-6642269",
      "sonlineId": 6642269,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Коктейльный уход. Средние волосы.",
        "en": "Cocktail hair care — medium hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "1 500 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Уход включает в себя: Очищающий шампунь, восстанавливающий флюид, реконструирующий спрей, маску. Помогает при выпадении волос, перхоти, повышенная чувствительность кожи). Сбалансированные составы без сульфатов и парабенов, насыщенные экстрактами бурых водорослей, лекарственных трав и витаминами, позволят в кратчайшие сроки санировать кожные покровы головы, улучшать состояние волос и ускорять их рост.",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=6642269"
    },
    {
      "id": "sonline-6642272",
      "sonlineId": 6642272,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Коктейльный уход. Длинные волосы.",
        "en": "Cocktail hair care — long hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "1 500 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Уход включает в себя: Очищающий шампунь, восстанавливающий флюид, реконструирующий спрей, маску. Помогает при выпадении волос, перхоти, повышенная чувствительность кожи). Сбалансированные составы без сульфатов и парабенов, насыщенные экстрактами бурых водорослей, лекарственных трав и витаминами, позволят в кратчайшие сроки санировать кожные покровы головы, улучшать состояние волос и ускорять их рост.",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=6642272"
    },
    {
      "id": "sonline-6642278",
      "sonlineId": 6642278,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Коктейльный уход. Очень длинные волосы",
        "en": "Cocktail hair care — very long hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "2 000 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Уход включает в себя: Очищающий шампунь, восстанавливающий флюид, реконструирующий спрей, маску. Помогает при выпадении волос, перхоти, повышенная чувствительность кожи). Сбалансированные составы без сульфатов и парабенов, насыщенные экстрактами бурых водорослей, лекарственных трав и витаминами, позволят в кратчайшие сроки санировать кожные покровы головы, улучшать состояние волос и ускорять их рост.",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=6642278"
    },
    {
      "id": "sonline-13722406",
      "sonlineId": 13722406,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Доплата за густоту",
        "en": "Extra charge for thick hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "от 500 ₽",
      "duration": {
        "ru": "15 мин",
        "en": "15 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=13722406"
    },
    {
      "id": "sonline-3439560",
      "sonlineId": 3439560,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Модельная",
        "en": "Classic haircut — boys under 7",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "850 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3439560"
    },
    {
      "id": "sonline-3439551",
      "sonlineId": 3439551,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Под насадку",
        "en": "Clipper haircut — boys under 7",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "700 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3439551"
    },
    {
      "id": "sonline-3439554",
      "sonlineId": 3439554,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Наголо",
        "en": "Buzz cut — boys under 7",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "700 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3439554"
    },
    {
      "id": "sonline-3448845",
      "sonlineId": 3448845,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Челка",
        "en": "Fringe trim — girls under 7",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "400 ₽",
      "duration": {
        "ru": "15 мин",
        "en": "15 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3448845"
    },
    {
      "id": "sonline-3448848",
      "sonlineId": 3448848,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Одним срезом",
        "en": "One-length trim — girls under 7",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "800 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3448848"
    },
    {
      "id": "sonline-3448851",
      "sonlineId": 3448851,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "короткие",
        "en": "Short hair — girls under 7",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "800 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3448851"
    },
    {
      "id": "sonline-3448854",
      "sonlineId": 3448854,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "средние",
        "en": "Medium hair — girls under 7",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "1 000 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3448854"
    },
    {
      "id": "sonline-3448857",
      "sonlineId": 3448857,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "длинные",
        "en": "Long hair — girls under 7",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "1 200 ₽",
      "duration": {
        "ru": "45 мин",
        "en": "45 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3448857"
    },
    {
      "id": "sonline-3448860",
      "sonlineId": 3448860,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "очень длинные",
        "en": "Very long hair — girls under 7",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "1 500 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3448860"
    },
    {
      "id": "sonline-7359162",
      "sonlineId": 7359162,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Плетение боксерских косичек 1 шт",
        "en": "Single boxer braid — girls under 7",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "350 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=7359162"
    },
    {
      "id": "sonline-7846096",
      "sonlineId": 7846096,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Прическа вечерняя",
        "en": "Evening hairstyle — girls under 7",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "от 2 500 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=7846096"
    },
    {
      "id": "sonline-3448806",
      "sonlineId": 3448806,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Укладка короткие",
        "en": "Blowout styling — short hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "1 000 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "на брашинг",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3448806"
    },
    {
      "id": "sonline-3448809",
      "sonlineId": 3448809,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Укладка средние",
        "en": "Blowout styling — medium hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "1 300 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "на брашинг",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3448809"
    },
    {
      "id": "sonline-3448815",
      "sonlineId": 3448815,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Укладка длинные",
        "en": "Blowout styling — long hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "1 600 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "на брашинг",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3448815"
    },
    {
      "id": "sonline-4231354",
      "sonlineId": 4231354,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Укладка очень длинные",
        "en": "Blowout styling — very long hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "2 000 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=4231354"
    },
    {
      "id": "sonline-12086463",
      "sonlineId": 12086463,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Мытье головы + сушка феном по форме",
        "en": "Hair wash and blow-dry",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "1 300 ₽",
      "duration": {
        "ru": "45 мин",
        "en": "45 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=12086463"
    },
    {
      "id": "sonline-6229989",
      "sonlineId": 6229989,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Харефен (укладка на брашинг) средние волосы",
        "en": "Harefen brush styling — medium hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "2 000 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Укладка волос с помощью расчесок. Такая укладка держится до следующего мытья. Получаются объемные и естественные локоны.",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=6229989"
    },
    {
      "id": "sonline-6229992",
      "sonlineId": 6229992,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Харефен (укладка на брашинг) длинные волосы",
        "en": "Harefen brush styling — long hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "2 500 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Укладка волос с помощью расчесок. Такая укладка держится до следующего мытья. Получаются объемные и естественные локоны.",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=6229992"
    },
    {
      "id": "sonline-6229995",
      "sonlineId": 6229995,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Харефен (укладка на брашинг) очень длинные волосы",
        "en": "Harefen brush styling — very long hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "3 000 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Укладка волос с помощью расчесок. Такая укладка держится до следующего мытья. Получаются объемные и естественные локоны.",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=6229995"
    },
    {
      "id": "sonline-3449103",
      "sonlineId": 3449103,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Плетение кос 1 колосок",
        "en": "Single braid",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "от 800 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "стоимость услуги зависит от сложности. от300 руб. до 1000руб.",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3449103"
    },
    {
      "id": "sonline-3893916",
      "sonlineId": 3893916,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "афрокудри на средние волосы",
        "en": "Afro curls — medium hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "2 500 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3893916"
    },
    {
      "id": "sonline-3894570",
      "sonlineId": 3894570,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "афрокудри на длинные волосы",
        "en": "Afro curls — long hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "3 500 ₽",
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3894570"
    },
    {
      "id": "sonline-3894573",
      "sonlineId": 3894573,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "афрокудри на очень длинные волосы",
        "en": "Afro curls — very long hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "от 4 500 ₽",
      "duration": {
        "ru": "120 мин",
        "en": "120 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3894573"
    },
    {
      "id": "sonline-3448785",
      "sonlineId": 3448785,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Укладка коктейльная средние",
        "en": "Cocktail styling — medium hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "2 500 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3448785"
    },
    {
      "id": "sonline-3448794",
      "sonlineId": 3448794,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Укладка коктейльная длинные",
        "en": "Cocktail styling — long hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "3 000 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3448794"
    },
    {
      "id": "sonline-3448800",
      "sonlineId": 3448800,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Укладка коктейльная очень длинные",
        "en": "Cocktail styling — very long hair",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "3 500 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3448800"
    },
    {
      "id": "sonline-3448824",
      "sonlineId": 3448824,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Вечерняя прическа",
        "en": "Evening hairstyle",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "от 4 000 ₽",
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "от 4000-5000 в зависимости от сложности",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3448824"
    },
    {
      "id": "sonline-4032657",
      "sonlineId": 4032657,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Долговременная укладка короткие (Lebel)",
        "en": "Long-lasting styling — short hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "5 500 ₽",
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=4032657"
    },
    {
      "id": "sonline-4032666",
      "sonlineId": 4032666,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Долговременная укладка средние (Lebel)",
        "en": "Long-lasting styling — medium hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "7 500 ₽",
      "duration": {
        "ru": "120 мин",
        "en": "120 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=4032666"
    },
    {
      "id": "sonline-4032693",
      "sonlineId": 4032693,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Долговременная укладка длинные (Lebel)",
        "en": "Long-lasting styling — long hair (Lebel)",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "10 500 ₽",
      "duration": {
        "ru": "150 мин",
        "en": "150 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=4032693"
    },
    {
      "id": "sonline-3780150",
      "sonlineId": 3780150,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Капсульное наращивание волос",
        "en": "Capsule hair extensions",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "от 10 000 ₽",
      "duration": {
        "ru": "120 мин",
        "en": "120 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "капсулирование 1 пряди - 50 рублей наращивание 1 пряди - 150 рублей",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3780150"
    },
    {
      "id": "sonline-7180988",
      "sonlineId": 7180988,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Ленточное наращивание волос",
        "en": "Tape-in hair extensions",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "от 7 000 ₽",
      "duration": {
        "ru": "120 мин",
        "en": "120 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=7180988"
    },
    {
      "id": "sonline-4143870",
      "sonlineId": 4143870,
      "category": "Парикмахерские услуги",
      "title": {
        "ru": "Снятие нарощеных волос",
        "en": "Hair extension removal",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "от 3 000 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "от 1000",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=4143870"
    },
    {
      "id": "sonline-14495806",
      "sonlineId": 14495806,
      "category": "Брови и ресницы",
      "title": {
        "ru": "Коррекция+окрашивание бровей",
        "en": "Brow shaping and tinting",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "1 600 ₽",
      "duration": {
        "ru": "45 мин",
        "en": "45 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=14495806"
    },
    {
      "id": "sonline-15031744",
      "sonlineId": 15031744,
      "category": "Брови и ресницы",
      "title": {
        "ru": "Botox для бровей",
        "en": "Brow Botox treatment",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "300 ₽",
      "duration": {
        "ru": "15 мин",
        "en": "15 min",
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
      "id": "sonline-15031738",
      "sonlineId": 15031738,
      "category": "Брови и ресницы",
      "title": {
        "ru": "Прореживание",
        "en": "Brow thinning",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "500 ₽",
      "duration": {
        "ru": "15 мин",
        "en": "15 min",
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
      "id": "sonline-15031732",
      "sonlineId": 15031732,
      "category": "Брови и ресницы",
      "title": {
        "ru": "Окрашивание ресниц Levissime",
        "en": "Levissime lash tinting",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "800 ₽",
      "duration": {
        "ru": "15 мин",
        "en": "15 min",
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
      "id": "sonline-15031726",
      "sonlineId": 15031726,
      "category": "Брови и ресницы",
      "title": {
        "ru": "Окрашивание бровей Bronsun, Estel Enigma",
        "en": "Bronsun / Estel Enigma brow tinting",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "800 ₽",
      "duration": {
        "ru": "15 мин",
        "en": "15 min",
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
      "id": "sonline-15930680",
      "sonlineId": 15930680,
      "category": "Брови и ресницы",
      "title": {
        "ru": "Удаление волос на лице(воск)",
        "en": "Facial waxing",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "300 ₽",
      "duration": {
        "ru": "15 мин",
        "en": "15 min",
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
      "id": "sonline-3425768",
      "sonlineId": 3425768,
      "category": "Брови и ресницы",
      "title": {
        "ru": "Форма бровей",
        "en": "Brow shaping",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "900 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3425768"
    },
    {
      "id": "sonline-9691982",
      "sonlineId": 9691982,
      "category": "Брови и ресницы",
      "title": {
        "ru": "Коррекция бровей (воск)",
        "en": "Wax brow shaping",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "800 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "id": "sonline-3436515",
      "sonlineId": 3436515,
      "category": "Брови и ресницы",
      "title": {
        "ru": "Коррекция бровей",
        "en": "Brow shaping",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "800 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3436515"
    },
    {
      "id": "sonline-3425770",
      "sonlineId": 3425770,
      "category": "Брови и ресницы",
      "title": {
        "ru": "Окрашивание бровей RefectoCil",
        "en": "RefectoCil brow tinting",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "800 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3425770"
    },
    {
      "id": "sonline-3537459",
      "sonlineId": 3537459,
      "category": "Брови и ресницы",
      "title": {
        "ru": "Окрашивание ресниц RefectoCil",
        "en": "RefectoCil lash tinting",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "800 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3537459"
    },
    {
      "id": "sonline-5023038",
      "sonlineId": 5023038,
      "category": "Брови и ресницы",
      "title": {
        "ru": "Ламинирование ресниц",
        "en": "Lash lamination",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "2 700 ₽",
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Протеиновое восстановление рекомендуется для ослабленных и тусклых ресниц. Процедура реконструкции улучшает структуру волосков, питает их полезными компонентами и придает легкий завиток ресницам.",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=5023038"
    },
    {
      "id": "sonline-5037102",
      "sonlineId": 5037102,
      "category": "Брови и ресницы",
      "title": {
        "ru": "Ламинирование бровей",
        "en": "Brow lamination",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "2 200 ₽",
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Комплекс. Входит окрашивание , ламинирование и ботокс и коррекция",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=5037102"
    },
    {
      "id": "sonline-3425772",
      "sonlineId": 3425772,
      "category": "Брови и ресницы",
      "title": {
        "ru": "Окрашивание бровей хной",
        "en": "Henna brow tinting",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "800 ₽",
      "duration": {
        "ru": "30 мин",
        "en": "30 min",
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
      "id": "sonline-3436524",
      "sonlineId": 3436524,
      "category": "Брови и ресницы",
      "title": {
        "ru": "Чистка верхней губы",
        "en": "Upper-lip threading",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "300 ₽",
      "duration": {
        "ru": "15 мин",
        "en": "15 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3436524"
    },
    {
      "id": "sonline-13689974",
      "sonlineId": 13689974,
      "category": "Брови и ресницы",
      "title": {
        "ru": "Чистка лица комплекс + коррекция бровей",
        "en": "Facial threading package with brow shaping",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "1 700 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=13689974"
    },
    {
      "id": "sonline-3436521",
      "sonlineId": 3436521,
      "category": "Брови и ресницы",
      "title": {
        "ru": "Чистка лица комплекс",
        "en": "Full-face threading",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "1 200 ₽",
      "duration": {
        "ru": "45 мин",
        "en": "45 min",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "description": {
        "ru": "Зоны лба, подбородка, верхней губы и щек",
        "en": "",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3436521"
    },
    {
      "id": "sonline-3436527",
      "sonlineId": 3436527,
      "category": "Брови и ресницы",
      "title": {
        "ru": "Чистка зоны лба",
        "en": "Forehead threading",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "300 ₽",
      "duration": {
        "ru": "15 мин",
        "en": "15 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3436527"
    },
    {
      "id": "sonline-3976818",
      "sonlineId": 3976818,
      "category": "Брови и ресницы",
      "title": {
        "ru": "Чистка зоны подбородка",
        "en": "Chin threading",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "300 ₽",
      "duration": {
        "ru": "15 мин",
        "en": "15 min",
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
      "variants": [],
      "bookingUrl": "https://widget.sonline.su/ru/mastersAndDate/?counts=1&placeid=350657069&services=3976818"
    },
    {
      "id": "sonline-3894594",
      "sonlineId": 3894594,
      "category": "Визаж",
      "title": {
        "ru": "дневной макияж",
        "en": "Day makeup",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "от 3 500 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
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
      "id": "sonline-3894606",
      "sonlineId": 3894606,
      "category": "Визаж",
      "title": {
        "ru": "дневной макияж с ресницами",
        "en": "Day makeup with false lashes",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "4 000 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
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
      "id": "sonline-3894615",
      "sonlineId": 3894615,
      "category": "Визаж",
      "title": {
        "ru": "вечерний макияж",
        "en": "Evening makeup",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "от 5 000 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
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
      "id": "sonline-3894624",
      "sonlineId": 3894624,
      "category": "Визаж",
      "title": {
        "ru": "вечерний макияж с ресницами",
        "en": "Evening makeup with false lashes",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "5 500 ₽",
      "duration": {
        "ru": "60 мин",
        "en": "60 min",
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
      "id": "sonline-3894639",
      "sonlineId": 3894639,
      "category": "Визаж",
      "title": {
        "ru": "свадебный макияж",
        "en": "Bridal makeup",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "price": "7 000 ₽",
      "duration": {
        "ru": "90 мин",
        "en": "90 min",
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
    }
  ],
  "team": [
    {
      "id": "sonline-793819",
      "name": {
        "ru": "Ани",
        "en": "Ani",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "role": {
        "ru": "Парикмахер-стилист",
        "en": "Hair stylist",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "about": {
        "ru": "Актуальные услуги и запись доступны в Sonline.",
        "en": "Current services and booking are available on Sonline.",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "photo": "team-01.webp",
      "categories": [
        "Парикмахерские услуги"
      ],
      "work": [],
      "reviewIds": [],
      "reviewCount": 157,
      "serviceIds": [
        "sonline-3439380",
        "sonline-3439386",
        "sonline-3439389",
        "sonline-14321062",
        "sonline-11841041",
        "sonline-14431417",
        "sonline-3439395",
        "sonline-3439377",
        "sonline-3439398",
        "sonline-14153607",
        "sonline-15838354",
        "sonline-15519500",
        "sonline-14879462",
        "sonline-3439416",
        "sonline-3439407",
        "sonline-3437955",
        "sonline-3437958",
        "sonline-3437967",
        "sonline-3437970",
        "sonline-3437976",
        "sonline-13867986",
        "sonline-13868059",
        "sonline-13868031",
        "sonline-13868066",
        "sonline-13868074",
        "sonline-3436617",
        "sonline-7359330",
        "sonline-7359348",
        "sonline-7359366",
        "sonline-7359375",
        "sonline-3436578",
        "sonline-3436581",
        "sonline-3436584",
        "sonline-3436590",
        "sonline-3437991",
        "sonline-3437997",
        "sonline-3437982",
        "sonline-3437988",
        "sonline-3438009",
        "sonline-3438012",
        "sonline-3438015",
        "sonline-3438018",
        "sonline-14905124",
        "sonline-14905130",
        "sonline-14905136",
        "sonline-14905142",
        "sonline-3438021",
        "sonline-14905156",
        "sonline-3438024",
        "sonline-14905162",
        "sonline-3438027",
        "sonline-14905168",
        "sonline-3438030",
        "sonline-14905174",
        "sonline-14160149",
        "sonline-12779912",
        "sonline-12779974",
        "sonline-12779999",
        "sonline-14160154",
        "sonline-14589612",
        "sonline-8614952",
        "sonline-3425676",
        "sonline-3425678",
        "sonline-3425680",
        "sonline-5125722",
        "sonline-13134967",
        "sonline-6001581",
        "sonline-6001653",
        "sonline-6001662",
        "sonline-6642263",
        "sonline-6642269",
        "sonline-6642272",
        "sonline-6642278",
        "sonline-13722406",
        "sonline-3439560",
        "sonline-3439551",
        "sonline-3439554",
        "sonline-3448845",
        "sonline-3448848",
        "sonline-3448851",
        "sonline-3448854",
        "sonline-3448857",
        "sonline-3448860",
        "sonline-7846096",
        "sonline-3448806",
        "sonline-3448809",
        "sonline-3448815",
        "sonline-4231354",
        "sonline-12086463",
        "sonline-6229989",
        "sonline-6229992",
        "sonline-6229995",
        "sonline-3449103",
        "sonline-3893916",
        "sonline-3894570",
        "sonline-3894573",
        "sonline-3448785",
        "sonline-3448794",
        "sonline-3448800",
        "sonline-3448824",
        "sonline-4032657",
        "sonline-4032666",
        "sonline-4032693"
      ],
      "bookingUrl": "https://widget.sonline.su/ru/services/?master=793819&placeid=350657069"
    },
    {
      "id": "sonline-271073",
      "name": {
        "ru": "Марина Григорян",
        "en": "Marina Grigoryan",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "role": {
        "ru": "Парикмахер-стилист",
        "en": "Hair stylist",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "about": {
        "ru": "Актуальные услуги и запись доступны в Sonline.",
        "en": "Current services and booking are available on Sonline.",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "photo": "team-02.webp",
      "categories": [
        "Парикмахерские услуги"
      ],
      "work": [],
      "reviewIds": [],
      "reviewCount": 372,
      "serviceIds": [
        "sonline-3439380",
        "sonline-3439386",
        "sonline-3439389",
        "sonline-14321062",
        "sonline-11841041",
        "sonline-14431417",
        "sonline-3439395",
        "sonline-3439377",
        "sonline-3439398",
        "sonline-14153607",
        "sonline-3439422",
        "sonline-15519500",
        "sonline-14879462",
        "sonline-3439416",
        "sonline-3439407",
        "sonline-3439449",
        "sonline-3537480",
        "sonline-3439458",
        "sonline-3439461",
        "sonline-3437955",
        "sonline-3437958",
        "sonline-3437967",
        "sonline-3437970",
        "sonline-3437976",
        "sonline-13867986",
        "sonline-13868059",
        "sonline-13868031",
        "sonline-13868066",
        "sonline-13868074",
        "sonline-3436617",
        "sonline-7359330",
        "sonline-7359348",
        "sonline-7359366",
        "sonline-7359375",
        "sonline-3436578",
        "sonline-3436581",
        "sonline-3436584",
        "sonline-3436590",
        "sonline-3437991",
        "sonline-3437997",
        "sonline-3437982",
        "sonline-3437988",
        "sonline-3438009",
        "sonline-3438012",
        "sonline-3438015",
        "sonline-3438018",
        "sonline-14905124",
        "sonline-14905130",
        "sonline-14905136",
        "sonline-14905142",
        "sonline-3438021",
        "sonline-14905156",
        "sonline-3438024",
        "sonline-14905162",
        "sonline-3438027",
        "sonline-14905168",
        "sonline-3438030",
        "sonline-14905174",
        "sonline-14160149",
        "sonline-12779912",
        "sonline-12779974",
        "sonline-12779999",
        "sonline-14160154",
        "sonline-14589612",
        "sonline-8614952",
        "sonline-3425676",
        "sonline-3425678",
        "sonline-3425680",
        "sonline-5125722",
        "sonline-13134967",
        "sonline-6001581",
        "sonline-6001653",
        "sonline-6001662",
        "sonline-6642263",
        "sonline-6642269",
        "sonline-6642272",
        "sonline-6642278",
        "sonline-13722406",
        "sonline-3439560",
        "sonline-3439551",
        "sonline-3439554",
        "sonline-3448845",
        "sonline-3448848",
        "sonline-3448851",
        "sonline-3448854",
        "sonline-3448857",
        "sonline-3448860",
        "sonline-7359162",
        "sonline-7846096",
        "sonline-3448806",
        "sonline-3448809",
        "sonline-3448815",
        "sonline-4231354",
        "sonline-12086463",
        "sonline-6229989",
        "sonline-6229992",
        "sonline-6229995",
        "sonline-3449103",
        "sonline-3893916",
        "sonline-3894570",
        "sonline-3894573",
        "sonline-3448785",
        "sonline-3448794",
        "sonline-3448800",
        "sonline-3448824",
        "sonline-4032657",
        "sonline-4032666",
        "sonline-4032693",
        "sonline-3780150",
        "sonline-7180988",
        "sonline-4143870"
      ],
      "bookingUrl": "https://widget.sonline.su/ru/services/?master=271073&placeid=350657069"
    },
    {
      "id": "sonline-271079",
      "name": {
        "ru": "Тамила Мурадова",
        "en": "Tamila Muradova",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "role": {
        "ru": "Мастер ногтевого сервиса",
        "en": "Nail technician",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "about": {
        "ru": "Актуальные услуги и запись доступны в Sonline.",
        "en": "Current services and booking are available on Sonline.",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "photo": "team-03.webp",
      "categories": [
        "Ногтевой сервис"
      ],
      "work": [],
      "reviewIds": [],
      "reviewCount": 242,
      "serviceIds": [
        "sonline-4520257",
        "sonline-4113420",
        "sonline-8359529",
        "sonline-14153487",
        "sonline-3425416",
        "sonline-5560440",
        "sonline-4519540",
        "sonline-14455453",
        "sonline-8402258",
        "sonline-3425418",
        "sonline-3856824",
        "sonline-3425422",
        "sonline-5125581",
        "sonline-3835890",
        "sonline-9974027",
        "sonline-8384549",
        "sonline-8359556",
        "sonline-3856815",
        "sonline-14820510",
        "sonline-8359544",
        "sonline-15248872",
        "sonline-3425410",
        "sonline-3425414",
        "sonline-9678692",
        "sonline-3609519",
        "sonline-3425456",
        "sonline-14414734",
        "sonline-14279920",
        "sonline-3670938",
        "sonline-8402666",
        "sonline-4519555",
        "sonline-3425464",
        "sonline-3425462",
        "sonline-5560485",
        "sonline-8402657",
        "sonline-9678647",
        "sonline-3425466",
        "sonline-9678677",
        "sonline-3425498",
        "sonline-3436554",
        "sonline-14495806",
        "sonline-3425768",
        "sonline-3436515",
        "sonline-3425770",
        "sonline-3537459",
        "sonline-5023038",
        "sonline-5037102",
        "sonline-3436524",
        "sonline-13689974",
        "sonline-3436521",
        "sonline-3436527",
        "sonline-3976818"
      ],
      "bookingUrl": "https://widget.sonline.su/ru/services/?master=271079&placeid=350657069"
    },
    {
      "id": "sonline-879514",
      "name": {
        "ru": "Арпи",
        "en": "Arpi",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "role": {
        "ru": "Мастер ногтевого сервиса",
        "en": "Nail technician",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "about": {
        "ru": "Актуальные услуги и запись доступны в Sonline.",
        "en": "Current services and booking are available on Sonline.",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "photo": "team-04.webp",
      "categories": [
        "Ногтевой сервис"
      ],
      "work": [],
      "reviewIds": [],
      "reviewCount": 135,
      "serviceIds": [
        "sonline-4113420",
        "sonline-8359529",
        "sonline-14153487",
        "sonline-3425416",
        "sonline-5560440",
        "sonline-4519540",
        "sonline-14455453",
        "sonline-8402258",
        "sonline-3425418",
        "sonline-3856824",
        "sonline-3425422",
        "sonline-5125581",
        "sonline-3835890",
        "sonline-9974027",
        "sonline-8384549",
        "sonline-8359556",
        "sonline-9691897",
        "sonline-3856815",
        "sonline-14820510",
        "sonline-8359544",
        "sonline-15248872",
        "sonline-3425414",
        "sonline-9678692",
        "sonline-3609519",
        "sonline-14279920",
        "sonline-3694932",
        "sonline-14431433",
        "sonline-3670938",
        "sonline-8402666",
        "sonline-4519555",
        "sonline-3425462",
        "sonline-5560485",
        "sonline-8402657",
        "sonline-9678647",
        "sonline-3425466",
        "sonline-9678677",
        "sonline-3436515",
        "sonline-3537459"
      ],
      "bookingUrl": "https://widget.sonline.su/ru/services/?master=879514&placeid=350657069"
    },
    {
      "id": "sonline-1088624",
      "name": {
        "ru": "Ольга",
        "en": "Olga",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "role": {
        "ru": "Парикмахер-стилист",
        "en": "Hair stylist",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "about": {
        "ru": "Актуальные услуги и запись доступны в Sonline.",
        "en": "Current services and booking are available on Sonline.",
        "hy": "",
        "uz": "",
        "tg": ""
      },
      "photo": "team-05.webp",
      "categories": [
        "Парикмахерские услуги"
      ],
      "work": [],
      "reviewIds": [],
      "reviewCount": 0,
      "serviceIds": [
        "sonline-3439380",
        "sonline-3439386",
        "sonline-3439389",
        "sonline-14321062",
        "sonline-11841041",
        "sonline-14431417",
        "sonline-3439395",
        "sonline-3439377",
        "sonline-3439398",
        "sonline-14153607",
        "sonline-3439422",
        "sonline-15519500",
        "sonline-14879462",
        "sonline-3439416",
        "sonline-3439407",
        "sonline-3439449",
        "sonline-3537480",
        "sonline-3439458",
        "sonline-3439461",
        "sonline-3437955",
        "sonline-3437958",
        "sonline-3437967",
        "sonline-3437970",
        "sonline-3437976",
        "sonline-13867986",
        "sonline-13868059",
        "sonline-13868031",
        "sonline-13868066",
        "sonline-13868074",
        "sonline-3436617",
        "sonline-7359330",
        "sonline-7359348",
        "sonline-7359366",
        "sonline-7359375",
        "sonline-3436578",
        "sonline-3436581",
        "sonline-3436584",
        "sonline-3436590",
        "sonline-3437991",
        "sonline-3437997",
        "sonline-3437982",
        "sonline-3437988",
        "sonline-3438009",
        "sonline-3438012",
        "sonline-3438015",
        "sonline-3438018",
        "sonline-14905124",
        "sonline-14905130",
        "sonline-14905136",
        "sonline-14905142",
        "sonline-3438021",
        "sonline-14905156",
        "sonline-3438024",
        "sonline-14905162",
        "sonline-3438027",
        "sonline-14905168",
        "sonline-3438030",
        "sonline-14905174",
        "sonline-14160149",
        "sonline-12779912",
        "sonline-12779974",
        "sonline-12779999",
        "sonline-14160154",
        "sonline-14589612",
        "sonline-8614952",
        "sonline-3425676",
        "sonline-3425678",
        "sonline-3425680",
        "sonline-5125722",
        "sonline-13134967",
        "sonline-6001581",
        "sonline-6001653",
        "sonline-6001662",
        "sonline-6642263",
        "sonline-6642269",
        "sonline-6642272",
        "sonline-6642278",
        "sonline-13722406",
        "sonline-3439560",
        "sonline-3439551",
        "sonline-3439554",
        "sonline-3448845",
        "sonline-3448848",
        "sonline-3448851",
        "sonline-3448854",
        "sonline-3448857",
        "sonline-3448860",
        "sonline-7846096",
        "sonline-3448806",
        "sonline-3448809",
        "sonline-3448815",
        "sonline-4231354",
        "sonline-12086463",
        "sonline-6229989",
        "sonline-6229992",
        "sonline-6229995",
        "sonline-3448785",
        "sonline-3448794",
        "sonline-3448800",
        "sonline-3780150",
        "sonline-7180988",
        "sonline-4143870"
      ],
      "bookingUrl": "https://widget.sonline.su/ru/services/?master=1088624&placeid=350657069"
    }
  ],
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
