import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  console.log("CTF Archive Initialized...");

  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-menu a');

  navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;

    const normalizedCurrent = currentPath === '/' || currentPath === '/index.html' ? '/index.html' : currentPath;
    const normalizedLink = linkPath === '/' || linkPath === '/index.html' ? '/index.html' : linkPath;

    if (normalizedCurrent.endsWith(normalizedLink) || normalizedLink.endsWith(normalizedCurrent)) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

const heroText = document.querySelector('.hero p');
if (heroText) {
  const txt = heroText.innerText;
  heroText.innerText = '';
  let i = 0;
  function typeWriter() {
    if (i < txt.length) {
      heroText.innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, 40);
    }
  }
  typeWriter();
}