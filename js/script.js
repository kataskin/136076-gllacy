var red_button_show = document.querySelector(".contacts-detail .red-button");
var modal_content = document.querySelector(".transparent-background");
var red_button_close = document.querySelector(".transparent-background .close-button");
var textarea = document.querySelectorAll(".textarea");
var popup_form = document.querySelector(".modal-content");
var user_name = popup_form.querySelector("[type=text]");
var user_email = popup_form.querySelector("[type=email]");

red_button_show.addEventListener("click", function(event) {
  event.preventDefault();
  modal_content.classList.add("transparent-background-show");
});

red_button_close.addEventListener("click", function(event) {
  event.preventDefault();
  modal_content.classList.remove("transparent-background-show");
  popup_form.classList.remove("modal-error");
});

for (var i = 0; i < textarea.length; i++) {
  textarea[i].addEventListener("focusout", function(event) {
    var elem = this;
    var placeholder = this.nextElementSibling;
    var form_hint = placeholder.firstElementChild;
    if(elem.value.length == 0) {
      form_hint.classList.remove("lostfocus");
    } else {
      form_hint.classList.add("lostfocus");
    }
  }, false);
}

popup_form.addEventListener("submit", function(event) {
  if (!user_name.value || !user_email.value) {
    event.preventDefault();
    popup_form.classList.remove("modal-error");
    popup_form.offsetWidth = popup_form.offsetWidth;
    popup_form.classList.add("modal-error");
    console.log("Нужно ввести логин и пароль");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (modal_content.classList.contains("transparent-background-show")) {
      modal_content.classList.remove("transparent-background-show");
      popup_form.classList.remove("modal-error");
    }
  }
});
