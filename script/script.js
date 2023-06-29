// dropDown
$(function () {
    $('.navbar li').hover(

        function () {
            $('>ul.sub:not(:animated)', this).slideDown(500);
        },
        function () {
            $('>ul.sub', this).slideUp(300);
        },
    );

})

//video
window.addEventListener("load", function () {
    let video = this.window.document.querySelector("#video");
    video.play();
    video.loop = true;
});

//about
//reload
window.addEventListener('resize', function (event) {
    recarrega();
});

function recarrega() {
    document, location.reload();
};

//cards
if ($(window).width() < 769) {
    var swiper = new Swiper(".aboutInner", {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            nextEl: ".swiper-button-prev"
        },
    });
} else {
    var swiper = new Swiper(".aboutInner", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            nextEl: ".swiper-button-prev"
        },
    }
    )};
    //inicialização AOS fades
    AOS.init({
        duration: 2000,
    });


    // login
    function logar() {
        var nome = document.getElementById('nome').value;
        var senha = document.getElementById('senha').value;

        if (nome == 'admin' && senha == 'admin') {
            alert('Acertou hehehe');
            location.href = "privacity.hmtl";
        } else {
            alert('Ta errado');
        }
    }

    //menuHamburguer
    $("i").cliclk(function () {
        $("ul").toggleClass("open");
    })