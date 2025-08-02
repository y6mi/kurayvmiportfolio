const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      status.textContent = "Thanks! Your message has been sent.";
      form.reset();
    } else {
      status.textContent = "Oops! There was a problem submitting your form.";
    }
  }).catch(() => {
    status.textContent = "Oops! There was a problem submitting your form.";
  });
});
