// ===== MODAL SYSTEM =====
function openModal(title, description, imgSrc) {
  const overlay = document.getElementById('modal-overlay');
  const img = document.getElementById('modal-img');
  const titleEl = document.getElementById('modal-title');
  const descEl = document.getElementById('modal-desc');

  if (imgSrc) {
    img.src = imgSrc;
    img.style.display = 'block';
  } else {
    img.style.display = 'none';
  }
  titleEl.textContent = title;
  descEl.innerHTML = description;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
  // Close modal on overlay click
  const overlay = document.getElementById('modal-overlay');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
  }

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Mobile nav toggle
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
    });
  }

  // Close nav on link click (mobile)
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (menu) menu.classList.remove('open');
    });
  });
});

// ===== LANDMARKS SLIDER =====
function initSlider(sliderId, dotsId, prevId, nextId) {
  const slider = document.getElementById(sliderId);
  const dotsContainer = document.getElementById(dotsId);
  const prevBtn = document.getElementById(prevId);
  const nextBtn = document.getElementById(nextId);
  if (!slider || !dotsContainer) return;

  const slides = slider.querySelectorAll('.slide');
  let current = 0;
  const total = slides.length;

  dotsContainer.innerHTML = '';
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Slide ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  }

  function goTo(index) {
    current = (index + total) % total;
    slider.style.transform = `translateX(-${current * 100}%)`;
    dotsContainer.querySelectorAll('.dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
    if (prevBtn) prevBtn.style.opacity = current === 0 ? '0.3' : '1';
    if (nextBtn) nextBtn.style.opacity = current === total - 1 ? '0.3' : '1';
  }

  if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));

  goTo(0);
}
