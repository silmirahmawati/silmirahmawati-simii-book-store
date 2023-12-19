const prevButton = document.getElementById("prev-review");
const nextButton = document.getElementById("next-review");
const carouselReview = document.getElementById("carousel-review");
const carouselItem = document.getElementById("carousel-item-1");
let loading = false;
let scrollIndex = 0;
const slideNum = carouselReview.childElementCount - 2;

const slideTo = (index) => {
  scrollIndex = index;
  if (scrollIndex < 0) {
    return slideTo(slideNum - 1);
  } else if (scrollIndex >= slideNum) {
    return slideTo(0);
  }
  carouselReview.scrollTo(carouselItem.clientWidth * index + 32 * index, 0);
};

nextButton.addEventListener("click", (e) => {
  slideTo(scrollIndex + 1);
});

prevButton.addEventListener("click", (e) => {
  slideTo(scrollIndex - 1);
});
window.addEventListener("resize", () => slideTo(scrollIndex), true);