const feedback_link = document.querySelector(".contacts-button");
const feedback_popup = document.querySelector(".modal-feedback");
const feedback_close = document.querySelector(".feedback-close-button");
const feedback_name = feedback_popup.querySelector("[name=full-name]");
const feedback_email = feedback_popup.querySelector("[name=email]");
const feedback_content = feedback_popup.querySelector("[name=feedback-content]");
const feedback_form = feedback_popup.querySelector(".feedback-form");

feedback_link.addEventListener("click", function() {
  feedback_popup.classList.add("modal-show");
  feedback_name.focus();
});

feedback_close.addEventListener("click", function() {
  feedback_popup.classList.remove("modal-show");
  feedback_popup.classList.remove("modal-error");
});

feedback_form.addEventListener("submit", function(evt) {
  if (!feedback_name.value || !feedback_email.value || !feedback_content.value) {
    evt.preventDefault();
    feedback_popup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Esc" || evt.key === "Escape") {
    if (feedback_popup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedback_popup.classList.remove("modal-show");
      feedback_popup.classList.remove("modal-error");
    }
  }
});
