// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Fade/zoom ao rolar
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'none';
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-top, .zoom-in').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  observer.observe(el);
});

// Botão voltar ao topo
const btnTop = document.createElement('button');
btnTop.innerHTML = "↑";
btnTop.id = "btnTop";
document.body.appendChild(btnTop);

btnTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  btnTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
