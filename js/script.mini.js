var red_button_show=document.querySelector(".contacts-detail .red-button"),modal_content=document.querySelector(".transparent-background"),red_button_close=document.querySelector(".transparent-background .close-button"),textarea=document.querySelectorAll(".textarea"),popup_form=document.querySelector(".modal-content"),user_name,user_email;null!=popup_form&&(user_name=popup_form.querySelector("[type=text]"),user_email=popup_form.querySelector("[type=email]")),null!=red_button_show&&red_button_show.addEventListener("click",function(a){a.preventDefault(),modal_content.classList.add("transparent-background-show")}),null!=red_button_close&&red_button_close.addEventListener("click",function(a){a.preventDefault(),modal_content.classList.remove("transparent-background-show"),popup_form.classList.remove("modal-error")});for(var i=0;i<textarea.length;i++)textarea[i].addEventListener("focusout",function(a){var b=this,c=this.nextElementSibling,d=c.firstElementChild;0==b.value.length?d.classList.remove("lostfocus"):d.classList.add("lostfocus")},!1);null!=popup_form&&popup_form.addEventListener("submit",function(a){user_name.value&&user_email.value||(a.preventDefault(),popup_form.classList.remove("modal-error"),popup_form.offsetWidth=popup_form.offsetWidth,popup_form.classList.add("modal-error"),console.log("\u041d\u0443\u0436\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u043b\u043e\u0433\u0438\u043d \u0438 \u043f\u0430\u0440\u043e\u043b\u044c"))}),null!=modal_content&&window.addEventListener("keydown",function(a){27===a.keyCode&&modal_content.classList.contains("transparent-background-show")&&(modal_content.classList.remove("transparent-background-show"),popup_form.classList.remove("modal-error"))});
