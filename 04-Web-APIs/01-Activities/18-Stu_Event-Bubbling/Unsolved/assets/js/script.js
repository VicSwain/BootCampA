// TODO: Which element is the following line of code selecting?
// class carousel box
var carousel = document.querySelector(".carouselbox");
// TODO: Which element is the following line of code selecting?
// class next
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/id/10/300/200",
  "https://picsum.photos/id/20/300/201",
  "https://picsum.photos/id/30/300/202",
  "https://picsum.photos/id/47/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/id/10/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}
// redirects to the url for the picture clicked
// TODO: Describe the functionality of the following event listener.
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});
// click to to cycle to the next photo
// TODO: Describe the functionality of the following event listener.
next.addEventListener("click", function(event) {
  // TODO: What is the purpose of the following line of code?
  event.stopPropagation();

  navigate(1);
});
// click event to cyle to the previous photo
// TODO: Describe the functionality of the following event listener.
prev.addEventListener("click", function(event) {
    // TODO: What would happen if we didn't add the following line of code?
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
