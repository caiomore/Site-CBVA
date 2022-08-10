// Carrosel de eventos
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoHeight: true,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 80000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

// Botão de voltar ao topo
var vtopo = document.querySelector("#voltar-ao-topo");
vtopo.addEventListener("click", function () {
    window.scrollTo(0, 0);
})