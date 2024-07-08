$(function () {
  // scroll menu
  if (window.innerWidth > 1276) {
    $(window).scroll(function () {
      var sticky = $('.sticky'),
        adress = $('.adress'),
        scroll = $(window).scrollTop();

      if (scroll >= 100) {
        sticky.addClass('fixed');
        adress.addClass('none');
      }
      else {
        sticky.removeClass('fixed')
        adress.removeClass('none');
      };
    });
  } else {
    $('.sticky').addClass('fixed');
    $('.adress').addClass('none');
  }

  // якоря


  // Получаем все ссылки якорей в боковом меню
  const anchorLinks = document.querySelectorAll('.sidebar-menu__link');

  // Обходим каждую ссылку
  anchorLinks.forEach(link => {
    // Назначаем обработчик события на клик по ссылке
    link.addEventListener('click', function (e) {
      // Закрываем боковое меню (здесь ваш код закрытия меню)

      // Получаем значение атрибута href ссылки
      const anchor = this.getAttribute('href');

      // Плавно прокручиваем страницу к якорю блока
      document.querySelector(anchor).scrollIntoView({
        behavior: 'smooth'
      });

      // Предотвращаем стандартное действие ссылки
      e.preventDefault();
    });
  });

  // Получаем ссылки меню
  const menuLinks = document.querySelectorAll('.modal__lists');

  // Обходим каждую ссылку
  menuLinks.forEach(link => {
    // Назначаем обработчик события на клик по ссылке
    link.addEventListener('click', function () {
      // Получаем чекбокс
      const checkbox = document.querySelector('.input');
      // Снимаем отметку с чекбокса
      checkbox.checked = false;
    });
  });

  if (window.innerWidth < 750) {


    $('.fade').slick({
      dots: false,
      infinite: false,
      autoplay: true,
      speed: 1200,
      // fade: true,
      // slidesToShow: 1,
      // slidesToScroll: 1,
      cssEase: 'linear'
    });
  }





})