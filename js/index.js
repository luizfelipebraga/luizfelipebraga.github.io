const scrollWheel = (event) => {
  if (event.deltaY < 0) {
    event.target.scrollBy(300, 0)
  }
  else {
    event.target.scrollBy(-300, 0)
  }
}

// document.querySelector("#items")
//   .addEventListener("wheel", scrollWheel)

let count = 0
setTimeout(function () {
  count += 100
  if (count > 3000) count = 0
  document.querySelector("#items").scrollTo(count, 0)
}, 2000)


// function plusSlides(n) {
//   clearInterval(myTimer);
//   if (n < 0) {
//     showSlides(slideIndex -= 1);
//   } else {
//     showSlides(slideIndex += 1);
//   }
//   if (n === -1) {
//     myTimer = setInterval(function () { plusSlides(n + 2) }, 4000);
//   } else {
//     myTimer = setInterval(function () { plusSlides(n + 1) }, 4000);
//   }
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("ProjectsContent");
//   if (n > slides.length) { slideIndex = 1 }
//   if (n < 1) { slideIndex = slides.length }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex - 1].style.display = "block";
// }

// window.addEventListener("load",function() {
//   showSlides(slideIndex);
//   myTimer = setInterval(function(){plusSlides(1)}, 4000);
// })


// var slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
// slideshowContainer.addEventListener('mouseenter', pause)
// slideshowContainer.addEventListener('mouseleave', resume)

// pause = () => {
//   clearInterval(myTimer);
// }

// resume = () =>{
//   clearInterval(myTimer);
//   myTimer = setInterval(function(){plusSlides(slideIndex)}, 4000);
// }