const scrollWheel = (event) => {
  if (event.deltaY < 0) {
    event.target.scrollBy(300, 0)
  }
  else {
    event.target.scrollBy(-300, 0)
  }
}

scrollWheel()

// document.querySelector("#items")
//   .addEventListener("wheel", scrollWheel)

let count = 0
setTimeout(function () {
  count += 100
  if (count > 3000) count = 0
  document.querySelector("#items").scrollTo(count, 0)
}, 2000)
