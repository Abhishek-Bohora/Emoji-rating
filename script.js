const starsEl = document.querySelectorAll(".fa-star");

// console.log(starsEl);

starsEl.forEach((starsEl, index) => {
  starsEl.addEventListener("click", () => {
    console.log("clicked", index);
  });
});
