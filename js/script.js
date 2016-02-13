var red_button_show = document.querySelector(".contacts-detail .red-button");
var modal_content = document.querySelector(".transparent-background");
var red_button_close = document.querySelector(".transparent-background .close-button");
var textarea = document.querySelector(".textarea");
var textarea_placeholder = document.querySelector(".form-hint");


red_button_show.addEventListener("click", function(event) {
  event.preventDefault();
  modal_content.classList.add("transparent-background-show");
});

red_button_close.addEventListener("click", function(event) {
  event.preventDefault();
  modal_content.classList.remove("transparent-background-show");
});

textarea.addEventListener("focus", function(event) {
  textarea_placeholder.classList.remove("lostfocus");
  textarea_placeholder.classList.add("focus");
});

textarea.addEventListener("focusout", function(event) {
  if (textarea.value) {
    textarea_placeholder.classList.add("lostfocus");
  }
  else {
    textarea_placeholder.classList.remove("focus");
    textarea_placeholder.classList.remove("lostfocus")
  }
});
