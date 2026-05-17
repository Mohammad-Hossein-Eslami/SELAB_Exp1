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

// منطق مودال گزارش باگ
const modal = document.getElementById('report-modal');
const openBtn = document.getElementById('open-report-btn');
const closeBtn = document.getElementById('close-report-btn');

if (openBtn && modal && closeBtn) {
  openBtn.addEventListener('click', () => modal.style.display = 'flex');
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.getElementById('terminal-status').style.display = 'none';
  });
}

window.submitExploitReport = function() {
  const statusDiv = document.getElementById('terminal-status');
  const payload = document.getElementById('exploit-payload').value;
  
  statusDiv.style.display = 'block';
  if (!payload.trim()) {
    statusDiv.style.background = 'rgba(255, 0, 0, 0.1)';
    statusDiv.style.color = '#ff3333';
    statusDiv.innerHTML = '[!] Error: Payload terminal cannot be empty.';
    return;
  }
  
  statusDiv.style.background = 'rgba(0, 255, 65, 0.1)';
  statusDiv.style.color = 'var(--primary-green)';
  statusDiv.innerHTML = '[+] Launching exploit...<br>[+] Flag submitted successfully!<br>[+] Database synchronized.';
}