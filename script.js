document.getElementById("home").addEventListener("click", function() {
    window.location.href = "index.html";
});

document.getElementById("aboutus").addEventListener("click", function() {
    window.location.href = "aboutus.html";
});

document.getElementById("createyourplan").addEventListener("click", function() {
    window.location.href = "subscribe.html";
});


document.querySelectorAll(".headerpic").forEach(element => {
    element.addEventListener("click", function() {
        window.location.href = "index.html";
    });
});


document.getElementById("createplanbutton").addEventListener("click", function(e) {
   e.preventDefault();
    window.location.href = "subscribe.html";
})

document.getElementById("createplanbutton1").addEventListener("click", function(e) {
    e.preventDefault();
     window.location.href = "subscribe.html";
 })
 document.getElementById("facebook-icon").addEventListener('mouseenter',function(e) {
    e.preventDefault();
    document.getElementById("Path1").style.fill = "#FDD6BA";
    document.getElementById("Path1").style.transition = "fill 0.3s ease;";
 })
 document.getElementById("facebook-icon").addEventListener('mouseleave',function(e) {
    e.preventDefault();
    document.getElementById("Path1").style.fill = "#FEFCF7";
 })
 document.getElementById("twiter-icon").addEventListener('mouseenter',function(e) {
    e.preventDefault();
    document.getElementById("Path2").style.fill = "#FDD6BA";
    document.getElementById("Path2").style.transition = "fill 0.3s ease;";
 })
 document.getElementById("twiter-icon").addEventListener('mouseleave',function(e) {
    e.preventDefault();
    document.getElementById("Path2").style.fill = "#FEFCF7";
 })
 document.getElementById("instagram-icon").addEventListener('mouseenter',function(e) {
    e.preventDefault();
    document.getElementById("Shape").style.fill = "#FDD6BA";
    document.getElementById("Shape").style.transition = "fill 0.3s ease;";
 })
 document.getElementById("instagram-icon").addEventListener('mouseleave',function(e) {
    e.preventDefault();
    document.getElementById("Shape").style.fill = "#FEFCF7";
 })