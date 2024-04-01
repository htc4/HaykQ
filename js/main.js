$(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
        $('header').addClass("sticky");
    }
    else {
        $('header').removeClass("sticky");
    }
});


let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.navbar');
// let bod = document.querySelector('.container');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('isactive');
    menu.classList.toggle('active');

});
