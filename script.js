let menubar = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
function filterSelection(category) {
    var galleryItems = document.getElementsByClassName("gallery-item");
    if (category == "all") category = "";
    for (var i = 0; i < galleryItems.length; i++) {
        RemoveClass(galleryItems[i], "show");
        if (galleryItems[i].className.indexOf(category) > -1) AddClass(galleryItems[i], "show");
    }
}

function AddClass(element, name) {
    var arr1 = element.className.split(" ");
    var arr2 = name.split(" ");
    for (var i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function RemoveClass(element, name) {
    var arr1 = element.className.split(" ");
    var arr2 = name.split(" ");
    for (var i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

function openLightbox() {
    document.getElementById('lightbox').style.display = "block";
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = "none";
}

function changeImage(src) {
    var lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = src;
}
