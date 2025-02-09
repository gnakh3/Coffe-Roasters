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
