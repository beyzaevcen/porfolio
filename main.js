document
  .querySelector('.nav-links a[href="#projects"]')
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "works.html";
  });

document
  .querySelector('.nav-links a[href="#about"]')
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "about.html";
  });

document
  .querySelector('.nav-links a[href="#contact"]')
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "contact.html";
  });

document.querySelector(".about-button").addEventListener("click", function () {
  window.location.href = "about.html";
});

document
  .querySelector(".contact-button")
  .addEventListener("click", function () {
    window.location.href = "contact.html";
  });
