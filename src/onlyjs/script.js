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
document.getElementById('smBtn').addEventListener('click', showMore);

function showMoreSecond() {
  const containerBrands = document.querySelector('.swiper_second');
  const btnTxt = document.querySelector('.show-more-btn-second');

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

document
  .getElementById('smBtnSecond ')
  .addEventListener('click', showMoreSecond);

// предлагает ИИ
/* function toggleSection(containerSelector, btnSelector, collapsedHeight) {
  const container = document.querySelector(containerSelector);
  const btn = document.querySelector(btnSelector);
  const isCollapsed =
    !container.style.height || container.style.height === collapsedHeight;

  container.style.height = isCollapsed ? '' : collapsedHeight;
  btn.textContent = isCollapsed ? 'Скрыть' : 'Показать все';
  btn.style.backgroundImage = `url(../img/arrows/${isCollapsed ? 'icon' : 'expand'}.svg)`;
}

document.getElementById('smBtn').addEventListener('click', () => {
  toggleSection('.swiper-container', '.show-more-btn', '170px');
});

document.getElementById('smBtnSecond').addEventListener('click', () => {
  toggleSection('.swiper_second', '.show-more-btn-second', '170px');
}); */
