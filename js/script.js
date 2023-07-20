// Add JavaScript code for the interactions

const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

window.addEventListener('load', () => {
  const loadingText = document.querySelector('.loading-text');
  const words = loadingText.textContent.split(' ');
  loadingText.textContent = '';

  words.forEach((word, index) => {
    const span = document.createElement('span');
    span.textContent = word;
    span.style.animation = `fade-in 1s ease-in ${index * 0.5}s`;
    loadingText.appendChild(span);
  });
});
