document.getElementById("home").addEventListener("click", function() {
    window.location.href = "index.html";
});

document.getElementById("aboutus").addEventListener("click", function() {
    window.location.href = "aboutus.html";
});

document.getElementById("createyourplan").addEventListener("click", function() {
    window.location.href = "subscribe.html";
});
document.getElementById("subscribe-page-header-pic").addEventListener("click", function() {
    window.location.href = "./index.html";
    document.getElementById("subscribe-page-header-pic").style.transform = "scale(1.1)"
    document.getElementById("subscribe-page-header-pic").style.cursor = "pointer"
});