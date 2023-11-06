/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_buy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/buy */ "./src/js/components/buy.js");
/* harmony import */ var _components_buy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_buy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_modal_shablone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/modal-shablone */ "./src/js/components/modal-shablone.js");
/* harmony import */ var _components_modal_shablone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_modal_shablone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/map */ "./src/js/components/map.js");
/* harmony import */ var _components_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_elka__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/elka */ "./src/js/components/elka.js");
/* harmony import */ var _components_elka__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_elka__WEBPACK_IMPORTED_MODULE_3__);
// console.log('components');





/***/ }),

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ (() => {

// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
// import { mobileCheck } from "./functions/mobile-check";
// console.log(mobileCheck())

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
// import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);

/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});

/***/ }),

/***/ "./src/js/_vendor.js":
/*!***************************!*\
  !*** ./src/js/_vendor.js ***!
  \***************************/
/***/ (() => {


// inputmask.min.js и just-validate.js здесь не ставить, ошибку в консоле выдаёт!
// import './vendor/inputmask.min.js';
// import './vendor/just-validate.js';

/*import "inputmask";
import "../../node_modules/just-validate/dist/js/just-validate.min.js";*/

/***/ }),

/***/ "./src/js/components/buy.js":
/*!**********************************!*\
  !*** ./src/js/components/buy.js ***!
  \**********************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', () => {
  //Проверка ошибок console.log() 

  // Елки закажи модал - buy
  const btnCloseBuyZ = document.querySelector('.buy__modal-close_js');
  const modalBuyZ = document.querySelector('.buy__сhristmasTree_js');
  if (modalBuyZ) {
    btnCloseBuyZ.addEventListener('click', function () {
      document.querySelector('.buy__сhristmasTree_js').classList.toggle('buy__сhristmasTree_js_active');
    });
    modalBuyZ.addEventListener('click', function (event) {
      if (event._notClick) return;
      modalBuyZ.classList.remove('buy__сhristmasTree_js_active');
      document.querySelector('.buy__сhristmasTree-sps_js').classList.remove('buy__сhristmasTree-sps_js_active');
    });
  }

  // отключить включение прокрутки BODY
  let disableScroll = function disableScroll() {
    document.body.classList.add('disable--scroll');
  };
  let enableScroll = function enableScroll() {
    document.body.classList.remove('disable--scroll');
  };

  // inputmask - Телефон/d-31
  const formJsZ = document.querySelector('.buy__form_js');
  if (formJsZ) {
    // Обёртка if. Спасение Gulp-а от null в браузере
    const telSelector = formJsZ.querySelector('input[type="tel"]');
    const inputMask = new Inputmask('+7 (999) 999-99-99');
    inputMask.mask(telSelector);
    new window.JustValidate('.buy__form_js', {
      rules: {
        name: {
          required: true,
          minLength: 2,
          maxLenght: 10,
          strength: {
            custom: '^[А-яёЁ\s-]' //только по русски текст
            //custom: '^[а-яёЁ\s]+$'только по русски и маленькими буквами
            //custom: '^[a-yeO\s]+$'только по английски текст
          }
        },

        tel: {
          required: true,
          function: () => {
            const phone = telSelector.inputmask.unmaskedvalue();
            return Number(phone) && phone.length === 10;
          }
        }
        /*checkbox: { // Обязательная галка
          required: true
        }*/
      },

      colorWrong: 'red',
      messages: {
        name: {
          required: 'Введите ваше имя',
          minLength: 'Введите 3 и более символов',
          maxLength: 'Запрещено вводить более 15 символов',
          strength: 'Текст только по русски'
          //strength: 'Текст только по русски и маленькими буквами'
          //strength: 'Текст только по английски'
        },

        // email: {
        //   email: 'Недопустимый формат',
        //   required: 'Введите email'
        // },
        tel: {
          required: 'Введите ваш телефон',
          function: 'Здесь должно быть 11 симв..'
        }
        //, checkbox: {
        //   required: 'Поставьте галочку',
        //   function: 'Здесь должна быть галка'
        // }
      },

      //*отправка формы*/
      submitHandler: function (thisForm) {
        let formData = new FormData(thisForm);
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Отправлено');
            } //if xhr
          }
        };

        xhr.open('POST', 'mail.php', 'list.php', true);
        xhr.send(formData);
        thisForm.reset();
        document.querySelector('.buy__сhristmasTree_js').classList.toggle('buy__сhristmasTree_js_active');
        document.querySelector('.buy__сhristmasTree-sps_js').classList.toggle('buy__сhristmasTree-sps_js_active');
      }
    });
  }
});

/***/ }),

/***/ "./src/js/components/elka.js":
/*!***********************************!*\
  !*** ./src/js/components/elka.js ***!
  \***********************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', () => {
  //Проверка ошибок console.log() 

  /*Клик БУРГЕР-Саши*/
  // $ предполагает использование библиотеки jQuery. В codepen-е без неё работает, в других местах без библиотеки jQuery не работает
  const burger = document.querySelector('#burger');
  const menu = document.querySelector('#menu');
  burger.addEventListener('click', function () {
    burger.classList.add('open');
    menu.classList.toggle('is-active');
    if (menu.classList.contains('is-active')) {
      menu.style.transition = 'transform .7s ease-in-out';
    }
  });
  menu.addEventListener('transitionend', function () {
    if (!menu.classList.contains('is-active')) {
      menu.style.transition = '';
      burger.classList.remove('open');
    }
  });

  // Елки прайс модал - hero
  const btnCloseBuy = document.querySelector('.hero__modal-close_js');
  const modalBuy = document.querySelector('.hero__сhristmasTree_js');
  if (modalBuy) {
    btnCloseBuy.addEventListener('click', function () {
      document.querySelector('.hero__сhristmasTree_js').classList.toggle('hero__сhristmasTree_js_active');
    });
    modalBuy.addEventListener('click', function (event) {
      if (event._notClick) return;
      modalBuy.classList.remove('hero__сhristmasTree_js_active');
      document.querySelector('.hero__сhristmasTree-sps_js').classList.remove('hero__сhristmasTree-sps_js_active');
    });
  }
  ;

  // отключить включение прокрутки BODY
  let disableScroll = function disableScroll() {
    document.body.classList.add('disable--scroll');
  };
  let enableScroll = function enableScroll() {
    document.body.classList.remove('disable--scroll');
  };

  // inputmask - Телефон/d-31
  const formJs = document.querySelector('.hero__form_js');
  if (formJs) {
    // Обёртка if. Спасение Gulp-а от null в браузере
    const telSelector = formJs.querySelector('input[type="tel"]');
    const inputMask = new Inputmask('+7 (999) 999-99-99');
    inputMask.mask(telSelector);

    // const validateForms = function validateForms(form, selector, successModal, yaGoal) {
    new window.JustValidate('.hero__form_js', {
      rules: {
        name: {
          required: true,
          minLength: 2,
          maxLenght: 10,
          strength: {
            custom: '^[А-яёЁ\s-]' //только по русски текст
            //custom: '^[а-яёЁ\s]+$'только по русски и маленькими буквами
            //custom: '^[a-yeO\s]+$'только по английски текст
          }
        },

        tel: {
          required: true,
          function: () => {
            const phone = telSelector.inputmask.unmaskedvalue();
            return Number(phone) && phone.length === 10;
          }
        }
        /*checkbox: { // Обязательная галка
          required: true
        }*/
      },

      colorWrong: '#ff6972',
      messages: {
        name: {
          required: 'Введите ваше имя',
          minLength: 'Введите 3 и более символов',
          maxLength: 'Запрещено вводить более 15 символов',
          strength: 'Текст только по русски'
          //strength: 'Текст только по русски и маленькими буквами'
          //strength: 'Текст только по английски'
        },

        // email: {
        //   email: 'Недопустимый формат',
        //   required: 'Введите email'
        // },
        tel: {
          required: 'Введите ваш телефон',
          function: 'Здесь должно быть 11 симв..'
        }
        //, checkbox: {
        //   required: 'Поставьте галочку',
        //   function: 'Здесь должна быть галка'
        // }
      },

      //*отправка формы*/
      submitHandler: function (thisForm) {
        let formData = new FormData(thisForm);
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Отправлено');
            } //if xhr
          }
        };

        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);
        thisForm.reset();
        document.querySelector('.hero__сhristmasTree_js').classList.toggle('hero__сhristmasTree_js_active');
        document.querySelector('.hero__сhristmasTree-sps_js').classList.toggle('hero__сhristmasTree-sps_js_active');
      }
    });
  }
  ;
});

/***/ }),

/***/ "./src/js/components/map.js":
/*!**********************************!*\
  !*** ./src/js/components/map.js ***!
  \**********************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  // console.log(); находит в js-ce ошибку. Deftools

  //Яндекс карта map//
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        //1 метка
        center: [55.714842065286696, 37.64611563979489],
        zoom: 13,
        controls: [] //Убрали увеличитель и др..
      }, {
        searchControlProvider: 'yandex#search'
      }),
      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),
      myGeoObject = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Елочка, гори!',
        balloonContent: '9:00-18:00'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/favicon.png',
        // iconImageHref: 'https://raw.githubusercontent.com/leska-ver/elka-Max/main/img/favicon.png',
        // Размеры метки.
        iconImageSize: [30, 35],
        // Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
      });
    myMap.geoObjects.add(myGeoObject);
  });

  //Клик в модальном окне в Яндекс карте//
  $(".contacts__close").click(function () {
    $(".contacts__modal").toggleClass("contacts__close-maps");
    return false;
  });
});

/***/ }),

/***/ "./src/js/components/modal-shablone.js":
/*!*********************************************!*\
  !*** ./src/js/components/modal-shablone.js ***!
  \*********************************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  // console.log(); находит в js-ce ошибку. Deftools

  /* ---------------//- Модалки -//--------------- */

  //- Модалки -//
  let $window = window,
    $modalOpenButton = document.querySelectorAll('.sample-btnJs'),
    $modals = document.querySelector('.modals'),
    $modalClose = document.querySelectorAll('.closeX'),
    $modal = document.querySelectorAll('.modal'),
    $modalOverlay = document.querySelector('.modals__overlay'),
    $mobileOverlay = document.querySelector('.mobile--overlay');

  // отключить включение прокрутки BODY
  let disableScroll = function disableScroll() {
    document.body.classList.add('disable--scroll');
  };
  let enableScroll = function enableScroll() {
    document.body.classList.remove('disable--scroll');
  };

  // Открывашка модалки(modal) //
  $modalOpenButton.forEach(function (el) {
    el.addEventListener('click', function (e) {
      disableScroll();
      let modalTarget = e.currentTarget.getAttribute('data-modal');
      if (modalTarget == 'order') {
        var bilette = e.currentTarget.closest('.sample-modalJs').querySelector('h3').textContent;
        if ($window.innerWidth > 787) {
          let cost = e.currentTarget.parentElement.innerHTML;
          document.querySelector('[data-modal-open="' + modalTarget + '"]').querySelector('.modal__ord').innerHTML = cost;
          $modals.style.display = 'flex';
          setTimeout(function () {
            $modals.classList.add('modal--visible');
          }, 100);
          document.querySelector('[data-modal-open="' + modalTarget + '"]').style.display = 'flex';
        } else {
          let _cost = e.currentTarget.closest('.sample-modalJs').querySelector('h3').textContent;
          console.log(_cost);
          document.querySelector('[data-modal-open="' + modalTarget + '"]').querySelector('.tariff').innerHTML = "\u0422\u043E\u0432\u0430\u0440: \"".concat(_cost, "\"");
          $modals.style.display = 'flex';
          setTimeout(function () {
            $modals.classList.add('modal--visible');
          }, 100);
          document.querySelector('[data-modal-open="' + modalTarget + '"]').style.display = 'block';
          setTimeout(function () {
            document.querySelector('[data-modal-open="' + modalTarget + '"]').classList.add('mobile--open');
          }, 300);
        }
      } else {
        if ($window.innerWidth > 787) {
          $modals.style.display = 'flex';
          setTimeout(function () {
            $modals.classList.add('modal--visible');
          }, 100);
          document.querySelector('[data-modal-open="' + modalTarget + '"]').style.display = 'block';
        } else {
          $modals.style.display = 'flex';
          setTimeout(function () {
            $modals.classList.add('modal--visible');
          }, 100);
          document.querySelector('[data-modal-open="' + modalTarget + '"]').style.display = 'block';
          setTimeout(function () {
            document.querySelector('[data-modal-open="' + modalTarget + '"]').classList.add('mobile--open');
          }, 300);
        }
      }
    });
  });

  // Закрывашка в декстопной версии модалки(modal) //
  let closeModal = function closeModal() {
    $modals.classList.remove('modal--visible');
    enableScroll();
    if ($window.innerWidth > 787) {
      setTimeout(function () {
        $modal.forEach(function (el) {
          el.style.display = 'none';
        });
        $modals.style.display = 'none';
      }, 400);
    } else {
      $modal.forEach(function (el) {
        el.classList.remove('mobile--open');
      });
      setTimeout(function () {
        $modals.classList.remove('modal--visible');
      }, 300);
      setTimeout(function () {
        $modal.forEach(function (el) {
          el.style.display = 'none';
        });
        $modals.style.display = 'none';
      }, 400);
    }
  };
  $modalClose.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      closeModal();
    });
  });
  $modalOverlay.addEventListener('click', function (e) {
    e.preventDefault();
    closeModal();
  });

  // Закрывашка в мобильной версии //
  let closeMobile = document.querySelectorAll('.modal__close-mobile');
  closeMobile.forEach(function (el) {
    el.addEventListener('click', function (e) {
      console.log('Down!');
      enableScroll();
      $modal.forEach(function (el) {
        el.classList.remove('mobile--open');
      });
      setTimeout(function () {
        $modals.classList.remove('modal--visible');
      }, 300);
      setTimeout(function () {
        $modal.forEach(function (el) {
          el.style.display = 'none';
        });
        $modals.style.display = 'none';
      }, 400);
    });
  });

  /* --------------//- Елки закажи Шаблон модалки - modal-order + Валидация -//---------------- */

  // Елки закажи Шаблон модалки - modal-order
  const btnCloseBuyZ = document.querySelector('.closeX_js');
  const modalBuyZ = document.querySelector('.modals__thanks_js');
  if (modalBuyZ) {
    btnCloseBuyZ.addEventListener('click', function () {
      document.querySelector('.modals__thanks_js').classList.toggle('modals__thanks_js_active');
    });
    modalBuyZ.addEventListener('click', function (event) {
      if (event._notClick) return;
      modalBuyZ.classList.remove('modals__thanks_js_active');
      document.querySelector('.modals__sps_js').classList.remove('modals__sps_js_active');
    });
  }

  // inputmask - Телефон/modal-order
  const formJsZ = document.querySelector('.modal__form_js');
  if (formJsZ) {
    // Обёртка if. Спасение Gulp-а от null в браузере
    const telSelector = formJsZ.querySelector('input[type="tel"]');
    const inputMask = new Inputmask('+7 (999) 999-99-99');
    inputMask.mask(telSelector);
    new window.JustValidate('.modal__form_js', {
      rules: {
        name: {
          required: true,
          minLength: 2,
          maxLenght: 10,
          strength: {
            custom: '^[А-яёЁ\s-]' //только по русски текст
            //custom: '^[а-яёЁ\s]+$'только по русски и маленькими буквами
            //custom: '^[a-yeO\s]+$'только по английски текст
          }
        },

        tel: {
          required: true,
          function: () => {
            const phone = telSelector.inputmask.unmaskedvalue();
            return Number(phone) && phone.length === 10;
          }
        }
        /*checkbox: { // Обязательная галка
          required: true
        }*/
      },

      colorWrong: 'red',
      messages: {
        name: {
          required: 'Введите ваше имя',
          minLength: 'Введите 3 и более символов',
          maxLength: 'Запрещено вводить более 15 символов',
          strength: 'Текст только по русски'
          //strength: 'Текст только по русски и маленькими буквами'
          //strength: 'Текст только по английски'
        },

        email: {
          email: 'Недопустимый формат',
          required: 'Введите email'
        },
        tel: {
          required: 'Введите ваш телефон',
          function: 'Здесь должно быть 11 симв..'
        },
        text: {
          required: 'Введите: адрес места жительства, название товара, размер и количество',
          minLength: 'Введите 15 и более символов',
          maxLength: 'Запрещено вводить более 1000 символов'
        }
        //, checkbox: {
        //   required: 'Поставьте галочку',
        //   function: 'Здесь должна быть галка'
        // }
      },

      //*отправка формы modal-order*/
      submitHandler: function (thisForm) {
        let formData = new FormData(thisForm);
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Отправлено');
            } //if xhr
          }
        };

        xhr.open('POST', 'mail.php', 'list.php', true);
        xhr.send(formData);
        thisForm.reset();
        document.querySelector('.modals__thanks_js').classList.toggle('modals__thanks_js_active');
        document.querySelector('.modals__sps_js').classList.toggle('modals__sps_js_active');
      }
    });
  }

  /* ------------------------------ */
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ "./src/js/_vendor.js");
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_vars */ "./src/js/_vars.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_functions__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");




})();

/******/ })()
;
//# sourceMappingURL=main.js.map