// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// Get all images and insert the clicked image inside the modal
// Get the content of the image description and insert it inside the modal image caption
var images = document.getElementsByTagName('img');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var i;
for (i = 0; i < images.length; i++) {
  images[i].onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.nextElementSibling.innerHTML;
  }
}

var cycVal = 0;
//add images by adding image paths to the array
var images = ["https://www.w3schools.com/css/img_fjords.jpg", "https://www.w3schools.com/css/img_forest.jpg", "https://www.w3schools.com/css/img_lights.jpg", "https://www.w3schools.com/css/img_mountains.jpg", "https://static.pexels.com/photos/326055/pexels-photo-326055.jpeg"]
var elements = document.getElementsByClassName('galleryImage');

function updateGallery() {
  for (var i = 0; i < elements.length; i++) {
    elements[i].src = images[i];
  }
}
updateGallery();

function rotateArray(num) {
  if (num === 1) {
    images.unshift(images.pop());
  } else {
    images.push(images.shift());
  }
}