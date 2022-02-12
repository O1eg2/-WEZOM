const numberItemsInCart =  document.querySelector(".number-items-in-cart")
const amountItemsInCart =  document.querySelector(".amount-items-in-cart")

const langArr = {
    "about-company": {
        "ru": "О компании",
        "ua": "Про компанію",
    },
    "privacy-policy-1": {
        "ru": "Политика конфиденциальности",
        "ua": "Політика конфіденційності",
    },
    "shipping-and-payment-1": {
        "ru": "Доставка и оплата",
        "ua": "Доставка і оплата",
    },
    "guarentee-1": {
        "ru": "Гарантия",
        "ua": "Гарантія",
    },
    "entrance": {
        "ru": "Войти",
        "ua": "Увійти",
    },
    "catalog-1": {
        "ru": "каталог",
        "ua": "каталог",
    },
    "all-categories-1": {
        "ru": "Все категории",
        "ua": "Всі категорії",
    },
    "turbines": {
        "ru": "Турбины",
        "ua": "Турбіни",
    },
    "cartridges": {
        "ru": "Картриджи",
        "ua": "Картриджі",
    },
    "geometry": {
        "ru": "Геометрии",
        "ua": "Геометрії",
    },
    "actuators": {
        "ru": "Актуаторы",
        "ua": "Актуатори",
    },
    "servos": {
        "ru": "Сервоприводы",
        "ua": "Сервоприводи",
    },
    "gaskets": {
        "ru": "Прокладки",
        "ua": "Прокладки",
    },
    "other-spare-parts": {
        "ru": "Прочие запчасти",
        "ua": "Інші запчастини",
    },
    "electronic-vacuum-actuators": {
        "ru": "Электронновакуумные актуаторы",
        "ua": "Електронновакуумні <br> актуатори",
    },
    "turbine-housing": {
        "ru": "Корпуса турбины",
        "ua": "Корпуси турбіни",
    },
    "servo-parts": {
        "ru": "Запчасти для сервопривода",
        "ua": "Запчастини для сервоприводу",
    },
    "placeholder-search": {
        "ru": "Поиск, например \"турбина\"",
        "ua": "Пошук, наприклад \"турбіна\"",
    },
    "items-in-cart": {
        "ru": "В корзине <b>" + numberItemsInCart.textContent + " товара</b> <br> На сумму <b>" + amountItemsInCart.textContent + " ₴</b>",
        "ua": "У кошику <b>" + numberItemsInCart.textContent + " товару</b> <br> На суму <b>" + amountItemsInCart.textContent + " ₴</b>",
    },
    "checkout": {
        "ru": "Оформить заказ",
        "ua": "Оформити <br> замовлення",
    },
    "edit-order": {
        "ru": "Редактировать заказ",
        "ua": "Редагувати замовлення",
    },
    "popular-categories": {
        "ru": "Популярные категории",
        "ua": "Популярні категорії",
    },
    "all-categories-2": {
        "ru": "Все категории",
        "ua": "Всі категорії",
    },
    "cosmetics-and-hygiene": {
        "ru": "Косметика и <br> гигиена",
        "ua": "Косметика та <br> гігієна",
    },
    "engineering-and-electronics": {
        "ru": "Техника и <br> электроника",
        "ua": "Техніка та <br> електроніка",
    },
    "casual-wear": {
        "ru": "Повседневная <br> одежда",
        "ua": "Повсякденний <br> одяг",
    },
    "clothes-and-shoes": {
        "ru": "Одежда и обувь",
        "ua": "Одяг і взуття",
    },
    "boots-and-shoes-1": {
        "ru": "Сапоги и туфли",
        "ua": "Чоботи та туфлі",
    },
    "universal": {
        "ru": "Универсальное",
        "ua": "Універсальне",
    },
    "sport-shoes": {
        "ru": "Спортивая обувь",
        "ua": "Спортивне взуття",
    },
    "underwear": {
        "ru": "Нижнее бельё",
        "ua": "Спідня білизна",
    },
    "bags-and-wallets": {
        "ru": "Сумки и кошельки",
        "ua": "Сумки та гаманці",
    },
    "boots-and-shoes-2": {
        "ru": "Сапоги и туфли",
        "ua": "Чоботи та туфлі",
    },
    "faq-text": {
        "ru": "Тут должен быть какой-то текст, потом <br> придумаем какой точно будет =)",
        "ua": "Тут має бути якийсь текст, потім <br> придумаємо який точно буде =)",
    },
    "feedback": {
        "ru": "Заказать обратную связь",
        "ua": "Замовиити зворотній звязок",
    },
    "text-card-first": {
        "ru": "Текст карточки первый",
        "ua": "Текст картки перший",
    },
    "text-card-second": {
        "ru": "Текст карточки второй",
        "ua": "Текст картки другий",
    },
    "text-card-third": {
        "ru": "Текст карточки третий",
        "ua": "Текст картки третій",
    },
    "text-card-fourth": {
        "ru": "Текст карточки последний",
        "ua": "Текст картки останній",
    },
    "equipment": {
        "ru": "СНАРЯЖЕНИЕ",
        "ua": "СПОРЯДЖЕННЯ",
    },
    "weapons": {
        "ru": "ОРУЖИЕ",
        "ua": "ЗБРОЯ",
    },
    "ammo": {
        "ru": "ПАТРОНЫ",
        "ua": "ПАТРОНИ",
    },
    "accessories": {
        "ru": "АКСЕССУАРЫ",
        "ua": "АКСЕСУАРИ",
    },
    "knives-and-tools": {
        "ru": "НОЖИ И ИНСТРУМЕНТЫ",
        "ua": "НОЖІ ТА ІНСТРУМЕНТИ",
    },
    "shooting-gallery": {
        "ru": "ТИР",
        "ua": "ТИР",
    },
    "novelty": {
        "ru": "НОВИНКА",
        "ua": "НОВИНКА",
    },
    "promotion": {
        "ru": "АКЦИЯ",
        "ua": "АКЦІЯ",
    },
    "top-sales": {
        "ru": "ТОП ПРОДАЖ",
        "ua": "ТОП ПРОДАЖУ",
    },
    "gun": {
        "ru": "Ружье",
        "ua": "Рушниця",
    },
    "reviews": {
        "ru": "отзывов",
        "ua": "відгуків",
    },
    "buy-btn": {
        "ru": "КУПИТЬ",
        "ua": "КУПИТИ",
    }, 
    "catalog-2": {
        "ru": "Каталог",
        "ua": "Каталог",
    },
    "laptops": {
        "ru": "Ноутбуки",
        "ua": "Ноутбуки",
    },
    "tablets": {
        "ru": "Планшеты",
        "ua": "Планшети",
    },
    "accessories-for-tablets-and-e-books": {
        "ru": "Аксессуары для планшетов и <br> электронных книг",
        "ua": "Аксесуари для планшетів та <br> електронних книг",
    },
    "cables-and-adapters": {
        "ru": "Кабели и переходники",
        "ua": "Кабелі та перехідники",
    },
    "notebook-bags": {
        "ru": "Сумки для ноутбуков",
        "ua": "Сумки для ноутбуків",
    },
    "auto-products": {
        "ru": "Автотовары",
        "ua": "Автотовари",
    },
    "plumbing": {
        "ru": "Сантехника",
        "ua": "Сантехніка",
    },
    "repair": {
        "ru": "Ремонт",
        "ua": "Ремонт",
    },
    "clients": {
        "ru": "Клиентам",
        "ua": "Клієнтам",
    },
    "privacy-policy-2": {
        "ru": "Политика конфиденциальности",
        "ua": "Політика конфеденційності",
    },
    "shipping-and-payment-2": {
        "ru": "Доставка и оплата",
        "ua": "Доставка і оплата",
    },
    "payment-methods": {
        "ru": "Способы оплаты",
        "ua": "Способи оплати",
    },
    "guarantee-2": {
        "ru": "Гарантия",
        "ua": "Гарантія",
    },
    "turbine-regeneration": {
        "ru": "Регенерация турбины",
        "ua": "Регенерація турбіни",
    },
    "contacts": {
        "ru": "Контакты",
        "ua": "Контакти",
    },
    "hot-line": {
        "ru": "Горячая линия",
        "ua": "Гаряча лінія",
    },  
    "up": {
        "ru": "Вверх",
        "ua": "Вгору",
    },
    "cookie-popap-text": {
        "ru": "Этот сайт использует файлы cookies для более комфортной работы пользователя. Продолжая просмотр страниц сайта, вы соглашаетесь с использованием файлов cookies. Если вам нужна дополнительная информация или вы не хотите соглашаться с использованием cookies, пожалуйста, посетите страницу ",
        "ua": "Цей сайт використовує файли cookie для більш комфортної роботи користувача.  Продовжуючи перегляд сторінок сайту, ви погоджуєтесь із використанням файлів cookies.  Якщо вам потрібна додаткова інформація або не хочете погоджуватися з використанням cookies, будь ласка, відвідайте сторінку ",
    },
    "about-cookies": {
        "ru": "\"Про cookies\"",
        "ua": "\"Про cookies\"",
    },
    "consent-to-cookie": {
        "ru": "Согласен",
        "ua": "Згоден",
    },
}

const ua = document.querySelector('.ua-language');
const ru = document.querySelector('.ru-language');

ua.addEventListener('click', () => {
    for(let key in langArr) {
        document.querySelector('.lng-placeholder-search').placeholder = langArr["placeholder-search"]["ua"]
        const uaElements = document.querySelector('.lng-' + key)
        if (uaElements) { uaElements.innerHTML = langArr[key]["ua"] }
        // 5 word repetitions
        for (let repeat = 1; repeat <= 5; repeat++) { 
            document.querySelector('.lng-novelty' + repeat).innerHTML = langArr["novelty"]["ua"]
            document.querySelector('.lng-promotion' + repeat).innerHTML = langArr["promotion"]["ua"]
            document.querySelector('.lng-top-sales' + repeat).innerHTML = langArr["top-sales"]["ua"]    
        }
        // 20 word repetitions
        for (let repeat = 1; repeat <= 20; repeat++) {
            document.querySelector('.lng-buy-btn' + repeat).innerHTML = langArr["buy-btn"]["ua"] 
            document.querySelector('.lng-gun' + repeat).innerHTML = langArr["gun"]["ua"] 
            document.querySelector('.lng-reviews' + repeat).innerHTML = langArr["reviews"]["ua"]
        }
    }
})
ru.addEventListener('click', () => {
    for(let key in langArr) {
        document.querySelector('.lng-placeholder-search').placeholder = langArr["placeholder-search"]["ru"]
        const uaElements = document.querySelector('.lng-' + key)
        if (uaElements) { uaElements.innerHTML = langArr[key]["ru"] }
        // 5 word repetitions
        for (let repeat = 1; repeat <= 5; repeat++) { 
            document.querySelector('.lng-novelty' + repeat).innerHTML = langArr["novelty"]["ru"]
            document.querySelector('.lng-promotion' + repeat).innerHTML = langArr["promotion"]["ru"]
            document.querySelector('.lng-top-sales' + repeat).innerHTML = langArr["top-sales"]["ru"]
        }
        // 20 word repetitions
        for (let repeat = 1; repeat <= 20; repeat++) {
            document.querySelector('.lng-buy-btn' + repeat).innerHTML = langArr["buy-btn"]["ru"] 
            document.querySelector('.lng-gun' + repeat).innerHTML = langArr["gun"]["ru"] 
            document.querySelector('.lng-reviews' + repeat).innerHTML = langArr["reviews"]["ru"] 
        }
    }
})