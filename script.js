
const images = document.querySelectorAll('img[data-src]');
const loadBtn = document.getElementById('load-btn');


function loadImage(img) {
  img.src = img.dataset.src;
  img.onload = () => img.classList.add('loaded');
}


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadImage(entry.target);
      observer.unobserve(entry.target); 
    }
  });
}, { threshold: 0.1 });


images.forEach(img => observer.observe(img));


loadBtn.addEventListener('click', () => {
  images.forEach(img => {
    if (!img.src) loadImage(img);
  });
});


