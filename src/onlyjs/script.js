



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
