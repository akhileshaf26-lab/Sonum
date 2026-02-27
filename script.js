const menuButton = document.getElementById('menuButton');
const navLinks = document.getElementById('navLinks');

menuButton?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

const form = document.querySelector('.subscribe-form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailInput = document.getElementById('email');
  if (!emailInput.value.trim()) {
    return;
  }

  form.reset();
  const confirmation = document.createElement('p');
  confirmation.textContent = 'Thanks for joining Sohum Privé. We will contact you soon.';
  confirmation.style.margin = '0.4rem 0 0';
  confirmation.style.fontWeight = '600';

  const existing = form.querySelector('.confirmation-message');
  if (existing) {
    existing.remove();
  }

  confirmation.classList.add('confirmation-message');
  form.appendChild(confirmation);
});
