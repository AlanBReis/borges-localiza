const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

let counter = 0;
let size = carouselImages[0].clientWidth;

// Função para trocar as imagens automaticamente
function autoSlide() {
    if (counter >= carouselImages.length - 1) {
        counter = -1; // Volta ao início
    }
    counter++;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

// Define a troca de imagens a cada 3 segundos (3000 ms)
setInterval(autoSlide, 3000);

// Recalcula o tamanho da imagem ao redimensionar a tela
window.addEventListener('resize', () => {
    size = carouselImages[0].clientWidth;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
