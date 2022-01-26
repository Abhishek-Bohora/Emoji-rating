const starsEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".far");

starsEl.forEach((starsEl, index) => {
  starsEl.addEventListener("click", () => {
    // console.log("clicked", index);
    updateRating(index);
  });
});

function updateRating(index) {
  starsEl.forEach((starsEl, indx) => {
    if (indx < index + 1) {
      starsEl.classList.add("active");
    } else {
      starsEl.classList.remove("active");
    }
  });

  emojisEl.forEach((emojiEl) => {
    emojiEl.style.transform = `translateX(-${index * 50}px)`;
  });
}
