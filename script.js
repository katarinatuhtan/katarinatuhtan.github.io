function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var galleries = {
  gallery1: [
    "./assets/snake.png",
    "./assets/snake2.png",
    "./assets/snake3.png"
  ],
  gallery2: [
    "./assets/freya.png",
    "./assets/freya2.png",
    "./assets/freya3.png"
  ],
  gallery3: [
    "./assets/lumi.png",
    "./assets/lumi2.png",
    "./assets/lumi3.png"
  ],
  gallery4: [
    "./assets/kasani.png",
    "./assets/kasani2.png",
    "./assets/kasani3.png"
  ],
  gallery5: [
    "./assets/tictactoe1.png",
    "./assets/tictactoe2.png",
    "./assets/tictactoe3.png"
  ],
  gallery6: [
    "./assets/volonteri.png",
    "./assets/volonteri2.png",
    "./assets/volonteri3.png"
  ],
};

var currentIndices = {};

function openGallery(galleryId) {
  var modal = document.getElementById("galleryModal" + galleryId);
  var galleryContent = document.getElementById("galleryContent" + galleryId);
  modal.style.display = "block";
  currentIndices[galleryId] = 0;

  // Clear previous content
  galleryContent.innerHTML = "";

  // Display the first image
  var img = document.createElement("img");
  img.src = galleries[galleryId][currentIndices[galleryId]];
  img.alt = "Image 1";
  img.classList.add("modal-content");
  galleryContent.appendChild(img);
}

function closeGallery(galleryId) {
  var modal = document.getElementById("galleryModal" + galleryId);
  modal.style.display = "none";
}

function nextImage(galleryId) {
  currentIndices[galleryId]++;
  if (currentIndices[galleryId] >= galleries[galleryId].length) {
    currentIndices[galleryId] = 0;
  }
  updateImage(galleryId);
}

function prevImage(galleryId) {
  currentIndices[galleryId]--;
  if (currentIndices[galleryId] < 0) {
    currentIndices[galleryId] = galleries[galleryId].length - 1;
  }
  updateImage(galleryId);
}

function updateImage(galleryId) {
  var modalContent = document.querySelector("#galleryModal" + galleryId + " .modal-content");
  modalContent.src = galleries[galleryId][currentIndices[galleryId]];
  modalContent.alt = "Image " + (currentIndices[galleryId] + 1);
}