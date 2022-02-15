var modalBtn = document.querySelector('.triger-aktif');
var modalbg = document.querySelector('.modal');
var modalClose = document.querySelector('.close');

var modalBtn_2 = document.querySelector('.triger-non');
var modalbg_2 = document.querySelector('.modal_2');
var modalClose_2 = document.querySelector('.close_2');

var modalganti = document.querySelector('.triger-ganti-aktif');
var modalbg_ganti = document.querySelector('.modal-ganti-domain');
var modalclose_ganti = document.querySelector('.close-x');

var modalganti_maksimal = document.querySelector('.triger-ganti-tidakaktif');
var modalbg_ganti_maksimal = document.querySelector('.modal-ganti-domain-maksimal');
var modalclose_ganti_maksimal = document.querySelector('.close-xx');

modalBtn.addEventListener('click', function () {
    modalbg.classList.add('modal-active');
});

modalClose.addEventListener('click', function () {
    modalbg.classList.remove('modal-active');
});

modalBtn_2.addEventListener('click', function () {
    modalbg_2.classList.add('modal-active_2');
});

modalClose_2.addEventListener('click', function () {
    modalbg_2.classList.remove('modal-active_2');
});

modalganti.addEventListener('click', function () {
    modalbg_ganti.classList.add('modal-ganti-domain-active');
});

modalclose_ganti.addEventListener('click', function () {
    modalbg_ganti.classList.remove('modal-ganti-domain-active');
});

modalganti_maksimal.addEventListener('click', function () {
    modalbg_ganti_maksimal.classList.add('modal-ganti-domain-maksimal-active');
});

modalclose_ganti_maksimal.addEventListener('click', function () {
    modalbg_ganti_maksimal.classList.remove('modal-ganti-domain-maksimal-active');
});


