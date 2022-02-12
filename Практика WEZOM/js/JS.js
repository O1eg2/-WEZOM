//main burger menu
const mainMenu = document.querySelector('.header__main-menu')
const horizontalAndDropDownMenu = document.querySelector('.header__horizontal-and-drop-down-menu')

mainMenu.addEventListener('click', () => {
    mainMenu.classList.toggle('main-menu-active')
    horizontalAndDropDownMenu.classList.toggle('header__horizontal-and-drop-down-menu-active')
})

// drop-down menu
const mainItemDropDownMenu = document.querySelector('.main-item-drop-down-menu')
const contentDropDownMenu = document.querySelector('.content-drop-down-menu')

mainItemDropDownMenu.addEventListener('click', () => {
    contentDropDownMenu.classList.toggle('open-content-drop-down-menu')
})

// catalog burger memu
const elementContainerCatalog = document.querySelector('.header__catalog')
const elementsCatalog = elementContainerCatalog.querySelectorAll('.catalog-burger-menu, .catalog-name')
const catalogBurger = document.querySelector('.catalog-burger-menu')
const contentCatalog = document.querySelector('.content-catalog-burger-menu')

for(let n = 0; n < elementsCatalog.length; n++) {
    elementsCatalog[n].addEventListener("click", () => {
        catalogBurger.classList.toggle('catalog-burger-menu-active')
        contentCatalog.classList.toggle('open-content-catalog-burger-menu')
    })
}

// search
const searchBtn = document.querySelector('.search-btn')
const searchEngine = document.querySelector('.search-engine')

searchBtn.addEventListener('click', () => {
    document.body.classList.toggle('disable-scrolling')
    searchBtn.classList.toggle('active-search-btn')
    searchEngine.classList.toggle('active-search-engine')
})

// similar, favorites, buy products
const productContainerProductMenu = document.querySelector('.header__similar-favorites-buy-products')
const productsProductMenu = productContainerProductMenu.querySelectorAll('.similar-products, .favorites-products, .buy-products')
const openPopap = document.querySelector('.popap-buy-products')

for(let n = 0; n < productsProductMenu.length; n++) {
    productsProductMenu[n].addEventListener('click', () => {
        productsProductMenu[n].classList.toggle('active-product')
    })
    productsProductMenu[2].addEventListener('click', () => {
        openPopap.classList.toggle('open_popap-buy-product') // popap
    })
}

// popular categories slider
const popularCategoriesSlider = new Swiper('.popular-categories__slider', {
    spaceBetween: 30,
    breakpoints: {
        1700: {
            slidesPerView: 5,
        },
        1580: {
            slidesPerView: 4.6,
        },
        1400: {
            slidesPerView: 4.1,
        },
        1260: {
            slidesPerView: 3.6,
        },
        1120: {
            slidesPerView: 3.2,
        },
        1030: {
            slidesPerView: 2.9,
        },
        930: {
            slidesPerView: 2.6,
        },
        800: {
            slidesPerView: 2.3,
        },
        710: {
            slidesPerView: 2.1,
        },
        671: {
            slidesPerView: 1.9,
        },
        620: {
            slidesPerView: 2.5,
        },
        570: {
            slidesPerView: 2.3,
        },
        531: {
            slidesPerView: 2.1,
        },
        445: {
            slidesPerView: 2.2,
        },
        380: {
            slidesPerView: 2,
        },
        340: {
            slidesPerView: 1.8,
        },
        300: {
            slidesPerView: 1.6,
        },
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 1,
    },
})

// arms sales slider
const armsSalesSlider = new Swiper('.arms-sales__slider', {
    spaceBetween: 33,
    breakpoints: {
        1700: {
            slidesPerView: 4,
        },
        1600: {
            slidesPerView: 3.7,
        },
        1400: {
            slidesPerView: 3.4,
        },
        1300: {
            slidesPerView: 3.1,
        },
        1200: {
            slidesPerView: 2.8,
        },
        1100: {
            slidesPerView: 2.6,
        },
        1000: {
            slidesPerView: 2.4,
        },
        900: {
            slidesPerView: 2.2,
        },
        800: {
            slidesPerView: 2,
        },
        700: {
            slidesPerView: 1.8,
        },
        671: {
            slidesPerView: 1.5,
        },
        620: {
            slidesPerView: 2,
        },
        570: {
            slidesPerView: 1.8,
        },
        500: {
            slidesPerView: 1.65,
        },
        460: {
            slidesPerView: 1.6,
        },
        420: {
            slidesPerView: 1.5,
        },
        380: {
            slidesPerView: 1.4,
        },
        350: {
            slidesPerView: 1.3,
        },
        320: {
            slidesPerView: 1.2,
        },
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 1,
    },
})
// arms sales slider rating
const ratings = document.querySelectorAll('.arms-sales__star-rating')
if (ratings.length > 0) {
    initRatings()
}
function initRatings() {
    let ratingActive, ratingValue
    for (let index = 0; index < ratings.length; index++) {
        const rating = ratings[index];
        initRating(rating)
    }
    function initRating(rating) {
        initRatingVars(rating)
        setRatingActiveWidth()
        setRating(rating)
    }
    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.arms-sales__rating-active')
        ratingValue = 4 // default
    }
    function setRatingActiveWidth(index = ratingValue) {
        const ratingActiveWidth = index / 0.05
        ratingActive.style.width = `${ratingActiveWidth}%`
    }
    function setRating(rating) {
        const ratingItems = rating.querySelectorAll('.rating-item')
        for (let index = 0; index < ratingItems.length; index++) {
            const ratingItem = ratingItems[index];
            ratingItem.addEventListener('click', (e) => {
                initRatingVars(rating)
                ratingValue = index + 1
                setRatingActiveWidth() 
            }) 
        }
    }
}

// button up
const buttonUp = document.querySelector('.button-up')

window.onscroll = () => {
    if(window.scrollY > 400) {
        buttonUp.classList.remove('button-up-transparency')
    } else if (window.scrollY < 400) {
        buttonUp.classList.add('button-up-transparency')
    }
}
buttonUp.addEventListener("click", () => {
    window.scrollTo(0, 0)
})

// cookie popap
const cookiePopap = document.querySelector('.cookie-popap')
const consentToCookie = document.querySelector('.consent-to-cookie')

const cookies = () => {
    if (!Cookies.get('cookie')) {
        cookiePopap.classList.toggle('visible')
    }
    consentToCookie.addEventListener('click', () => {
        cookiePopap.classList.toggle('invisible')
        Cookies.set('cookie', 'true', {
            expires: 1
        })
    })
}
cookies()
