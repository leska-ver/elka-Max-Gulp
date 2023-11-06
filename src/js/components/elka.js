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
  };


  // отключить включение прокрутки BODY
  let disableScroll = function disableScroll() {
    document.body.classList.add('disable--scroll');
  };

  let enableScroll = function enableScroll() {
    document.body.classList.remove('disable--scroll');
  };


  // inputmask - Телефон/d-31
  const formJs = document.querySelector('.hero__form_js');
  if (formJs) { // Обёртка if. Спасение Gulp-а от null в браузере
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
        },
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
        }

        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);
        thisForm.reset();
        document.querySelector('.hero__сhristmasTree_js').classList.toggle('hero__сhristmasTree_js_active');
        document.querySelector('.hero__сhristmasTree-sps_js').classList.toggle('hero__сhristmasTree-sps_js_active');
      }
    })
  };




  

  



});