// Newsletter Modal Block

function createModal() {
  const modal = document.createElement('div');
  modal.className = 'newsletter-modal';
  modal.innerHTML = `
    <div class="newsletter-modal-backdrop"></div>
    <div class="newsletter-modal-content">
      <button class="newsletter-modal-close" aria-label="Close">&times;</button>
      <h2>Subscribe to our Newsletter</h2>
      <form class="newsletter-modal-form">
        <label for="newsletter-email">Email:</label>
        <input type="email" id="newsletter-email" name="email" required placeholder="you@example.com" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  `;
  return modal;
}

function showModalOncePerSession() {
  if (sessionStorage.getItem('newsletterModalShown')) return;
  sessionStorage.setItem('newsletterModalShown', 'true');
  const modal = createModal();
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';

  // Close modal on backdrop or close button click
  modal.querySelector('.newsletter-modal-backdrop').onclick = closeModal;
  modal.querySelector('.newsletter-modal-close').onclick = closeModal;
  modal.querySelector('.newsletter-modal-form').onsubmit = (e) => {
    e.preventDefault();
    closeModal();
    // You can add AJAX submission here
    alert('Thank you for subscribing!');
  };

  function closeModal() {
    modal.remove();
    document.body.style.overflow = '';
  }
}

export default function decorate(block) {
  let triggered = false;
  function onScroll() {
    if (!triggered && window.scrollY > 100) {
      triggered = true;
      showModalOncePerSession();
      window.removeEventListener('scroll', onScroll);
    }
  }
  window.addEventListener('scroll', onScroll);
} 