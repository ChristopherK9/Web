document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('.book_section form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.querySelector('input[name="name"]').value.trim();
    const phone = form.querySelector('input[name="phone"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();

    if (!validateRequired(name)) {
      alert('El nombre es obligatorio.');
      return;
    }

    if (!validatePhone(phone)) {
      alert('Por favor, ingrese un número de teléfono válido (9 dígitos).');
      return;
    }

    if (!validateEmail(email)) {
      alert('Por favor, ingrese un correo electrónico válido.');
      return;
    }
  });
});