// const chatBtn = document.querySelectorAll('chatBtn');
const buttons = document.querySelectorAll('.chatBtn');
const popupMenu = document.getElementById('popup-back');
const closeChat = document.getElementById('CloseChat');
const callBtn = document.querySelectorAll('.callBtn')
const popupCall = document.getElementById('popup-call')
const closeCall = document.getElementById('CloseCall');


const blurOverlay = document.getElementById('blurOverlay'); // Добавляем блюр оверлей
const body = document.body;

function openMenuWithBlur() {
    popupMenu.classList.add('active');
    popupCall.classList.add('active');
    blurOverlay.classList.add('active');
    body.style.overflow = 'hidden'; // Блокируем прокрутку
}
// Функция закрытия меню
function closeMenuWithBlur() {
    popupMenu.classList.remove('active');
    popupCall.classList.remove('active');
    blurOverlay.classList.remove('active');
    body.style.overflow = 'auto'; // Восстанавливаем прокрутку
}
// Обработчики событий
buttons.forEach((button) => {
    button.addEventListener('click', function () {
        if (popupMenu.classList.contains('active')) {
            closeMenuWithBlur();
        } else {
            openMenuWithBlur();
        }
    });
});
callBtn.forEach((button) => {
    button.addEventListener('click', function () {
        if (popupCall.classList.contains('active')) {
            closeMenuWithBlur();
        } else {
            openMenuWithBlur();
        }
    });
});

closeChat.addEventListener('click', function () {
    closeMenuWithBlur();
});
closeCall.addEventListener('click', function () {
    closeMenuWithBlur();
});

// Закрытие по клику на блюр оверлей
blurOverlay.addEventListener('click', function () {
    closeMenuWithBlur();
});

// Закрытие по клавише ESC
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && popupMenu.classList.contains('active')) {
        closeMenuWithBlur();
    }
});
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && popupCall.classList.contains('active')) {
        closeMenuWithBlur();
    }
});



function showMore() {
  const containerBrands = document.querySelector('.swiper-container');
  const btnTxt = document.querySelector('.show-more-btn');

  if (containerBrands.style.height != String('')) {
    containerBrands.style.height = '';
    btnTxt.innerHTML = 'Скрыть';

    btnTxt.style.backgroundImage = 'url(../img/arrows/icon.svg)';
    btnTxt.style.backgroundPosition = '15%, 35%';
  } else {
    containerBrands.style.height = '170px';
    btnTxt.innerHTML = 'Показать все';
    btnTxt.style.backgroundImage = 'url(../img/arrows/expand.svg)';
    btnTxt.style.backgroundPosition = '-5%, 40%';
  }
}

function showMoreSecond() {
  const containerBrands = document.querySelector('.swiper_second');
  const btnTxt = document.querySelector('.show-more-btn-second');
  const isExpanded = containerBrands.style.height === '170px';
  if (isExpanded) {
    containerBrands.style.height = '';
    btnTxt.innerHTML = 'Скрыть';

    btnTxt.style.backgroundImage = 'url(../img/arrows/icon.svg)';
    btnTxt.style.backgroundPosition = '15%, 35%';
  } else {
    containerBrands.style.height = '170px';
    btnTxt.innerHTML = 'Показать все';
    btnTxt.style.backgroundImage = 'url(../img/arrows/expand.svg)';
    btnTxt.style.backgroundPosition = '-5%, 40%';
  }
}
document.getElementById('smBtn').addEventListener('click', showMore);
document.getElementById('BtnSecond').addEventListener('click', showMoreSecond);
// chat
/* buttons.forEach((button) => {
  button.addEventListener('click', function () {
    popupMenu.classList.toggle('active');
  });
});
  closeChat.addEventListener('click', function () {
    popupMenu.classList.toggle('active');
  }); */


  //call
 /*  callBtn.forEach((button) => {
  button.addEventListener('click', function () {
    popupCall.classList.toggle('active');
  });
});
 closeCall.addEventListener('click', function () {
    popupCall.classList.toggle('active');
  }); */





