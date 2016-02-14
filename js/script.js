var red_button_show = document.querySelector(".contacts-detail .red-button");
var modal_content = document.querySelector(".transparent-background");
var red_button_close = document.querySelector(".transparent-background .close-button");
var textarea = document.querySelectorAll(".textarea");


red_button_show.addEventListener("click", function(event) {
  event.preventDefault();
  modal_content.classList.add("transparent-background-show");
});

red_button_close.addEventListener("click", function(event) {
  event.preventDefault();
  modal_content.classList.remove("transparent-background-show");
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
