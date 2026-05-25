// Ano dinâmico no footer
document.getElementById('year').textContent = new Date().getFullYear();

// Animação de entrada via IntersectionObserver
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Formulário de contato (apenas demonstração — sem backend)
const form = document.getElementById('contact-form');
const msg = document.getElementById('form-msg');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = form.querySelector('input[type="email"]').value.trim();
  if (!email) return;
  msg.textContent = `Obrigado! Em breve entraremos em contato em ${email}.`;
  form.reset();
});
