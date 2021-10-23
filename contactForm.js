const contactForm = document.getElementById("contactForm");

const buttonPress = contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let mail = new FormData(contactForm);
  sendMail(mail);
});

const sendMail = (mail) => {
  fetch("https://clawplusstacker.github.io/contact.html", {
    method: "post",
    body: mail,
  }).then((response) => {
    return response.json();
  });
};