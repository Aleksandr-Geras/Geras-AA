function showMore() {
    let containerBrands = document.querySelector('.swiper-container');
    let btnTxt = document.querySelector('#Btn');

    if (containerBrands.style.height != String('')) {
        containerBrands.style.height = "";
        btnTxt.innerHTML = "Скрыть";
        btnTxt.style.backgroundImage = "url(ic-expand/icon.svg)";
        btnTxt.style.backgroundPosition = "15%, 35%"

    } else {
        containerBrands.style.height = "170px";
        btnTxt.innerHTML = "Показать все";
        btnTxt.style.backgroundImage = "url(ic-expand/expand.svg)";
        btnTxt.style.backgroundPosition = "-5%, 40%";
    }
};