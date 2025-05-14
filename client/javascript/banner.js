const myCarousel = document.querySelector('#bannerCarousel');
const carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3000,
    pause: false,
    wrap: true
});