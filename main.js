document.addEventListener("DOMContentLoaded", () => {
  const subscribers = document.querySelectorAll(".btn-hire")
  subscribers.forEach(subscriber => {
    subscriber.addEventListener('click', function handleClick(event) {
      alert("Thanks for clicking me")
    });
  });
});

function change_page(e) {
  let id = e.target.id;
  switch (id) {
    case 'home-page':
      window.location.href = 'index.html'
      break;
    case 'about-page':
      window.location.href = 'about.html'
      break;
    case 'service-page':
      window.location.href = 'services.html'
      break;
    case 'contact-page':
      window.location.href = 'contact.html'
      break;
  }
}
