var slideImg = document.getElementById("slideImg");
var images = new Array(
  "/images/hero-carousel-1.jpg",
  "/images/hero-carousel-2.jpg",
  "/images/hero-carousel-3.jpg",
  "/images/hero-carousel-4.jpg",
  "/images/hero-carousel-5.jpg"
);
var len = images.length;
var i = 0;
function slider() {
    if (i > len - 1) {
        i = 0;
    }
    console.log(images[i]);
    slideImg.src = images[i];
    i++;
    setTimeout("slider()",3000);
}
slideImg.src=images[3];

