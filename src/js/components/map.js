document.addEventListener('DOMContentLoaded', function() {
  // console.log(); находит в js-ce ошибку. Deftools

  //Яндекс карта map//
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', { //1 метка
        center: [55.714842065286696,37.64611563979489],
        zoom: 13,
        controls: [] //Убрали увеличитель и др..
      }, {
        searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

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
      })

    myMap.geoObjects.add(myGeoObject);
  });


  //Клик в модальном окне в Яндекс карте//
    $(".contacts__close").click(function(){
      $(".contacts__modal").toggleClass("contacts__close-maps"); return false;
    });


  
});
