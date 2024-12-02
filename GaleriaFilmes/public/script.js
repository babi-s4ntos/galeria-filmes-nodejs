document.addEventListener("DOMContentLoaded", function() {
  // Função para mover o carrossel
  function moveCarousel(carousel, direction) {
    const scrollAmount = 300; // Quantidade de pixels para mover por vez
    if (direction === "left") {
      carousel.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
      });
    } else if (direction === "right") {
      carousel.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    }
  }

  // Eventos de clique para filmes
  const prevFilmes = document.getElementById("prev-filmes");
  const nextFilmes = document.getElementById("next-filmes");
  const carouselFilmes = document.getElementById("carousel-filmes");

  prevFilmes.addEventListener("click", function() {
    moveCarousel(carouselFilmes, "left");
  });

  nextFilmes.addEventListener("click", function() {
    moveCarousel(carouselFilmes, "right");
  });

  // Eventos de clique para séries
  const prevSeries = document.getElementById("prev-series");
  const nextSeries = document.getElementById("next-series");
  const carouselSeries = document.getElementById("carousel-series");

  prevSeries.addEventListener("click", function() {
    moveCarousel(carouselSeries, "left");
  });

  nextSeries.addEventListener("click", function() {
    moveCarousel(carouselSeries, "right");
  });

  // Eventos de clique para animes
  const prevAnimes = document.getElementById("prev-animes");
  const nextAnimes = document.getElementById("next-animes");
  const carouselAnimes = document.getElementById("carousel-animes");

  prevAnimes.addEventListener("click", function() {
    moveCarousel(carouselAnimes, "left");
  });

  nextAnimes.addEventListener("click", function() {
    moveCarousel(carouselAnimes, "right");
  });
});

const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice) => {
	botao.addEventListener('click', () => {
		const imagemAtual = document.querySelector('.ativa');
		const botaoAtual = document.querySelector('.selecionado');

		botaoAtual.classList.remove('selecionado');
		imagemAtual.classList.remove('ativa');
        
		imagens[indice].classList.add('ativa');
		botoesCarrossel[indice].classList.add('selecionado');
	});
});