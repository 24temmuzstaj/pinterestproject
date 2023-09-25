const commentclose = document.querySelector(".comment-close");
const commentopen = document.querySelector(".comment-open");
const comments = document.querySelector(".commentlistul");
commentclose.addEventListener("click", () => {
  $(comments).toggleClass("hide");
  $(commentclose).toggleClass("translate");
  /* $(commentopen).toggleClass("showwy"); */
});
