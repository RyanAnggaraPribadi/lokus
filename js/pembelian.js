var modalbeli = document.querySelector('.detail-trns');
var modalbg_beli = document.querySelector('.popup-buy');
var modalx = document.querySelector('.x');

modalbeli.addEventListener('click', function () {
    modalbg_beli.classList.add('buy-active');
});

modalx.addEventListener('click', function () {
    modalbg_beli.classList.remove('buy-active');
});