document.getElementById("home").addEventListener("click", function () {
    window.location.href = "index.html";
});

document.getElementById("aboutus").addEventListener("click", function () {
    window.location.href = "aboutus.html";
});

document.getElementById("createyourplan").addEventListener("click", function () {
    window.location.href = "subscribe.html";
});
document.getElementById("footer-home").addEventListener("click", function () {
    window.location.href = "index.html";
});

document.getElementById("footer-aboutus").addEventListener("click", function () {
    window.location.href = "aboutus.html";
});

document.getElementById("footer-createyourplan").addEventListener("click", function () {
    window.location.href = "subscribe.html";
});

document.querySelectorAll(".headerpic").forEach(element => {
    element.addEventListener("click", function () {
        window.location.href = "index.html";
    });
});


document.getElementById("createplanbutton").addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "subscribe.html";
})

document.getElementById("createplanbutton1").addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "subscribe.html";
})
document.getElementById("facebook-icon").addEventListener('mouseenter', function (e) {
    e.preventDefault();
    document.getElementById("Path1").style.fill = "#FDD6BA";
    document.getElementById("Path1").style.transition = "fill 0.3s ease;";
})
document.getElementById("facebook-icon").addEventListener('mouseleave', function (e) {
    e.preventDefault();
    document.getElementById("Path1").style.fill = "#FEFCF7";
})
document.getElementById("twiter-icon").addEventListener('mouseenter', function (e) {
    e.preventDefault();
    document.getElementById("Path2").style.fill = "#FDD6BA";
    document.getElementById("Path2").style.transition = "fill 0.3s ease;";
})
document.getElementById("twiter-icon").addEventListener('mouseleave', function (e) {
    e.preventDefault();
    document.getElementById("Path2").style.fill = "#FEFCF7";
})
document.getElementById("instagram-icon").addEventListener('mouseenter', function (e) {
    e.preventDefault();
    document.getElementById("Shape").style.fill = "#FDD6BA";
    document.getElementById("Shape").style.transition = "fill 0.3s ease;";
})
document.getElementById("instagram-icon").addEventListener('mouseleave', function (e) {
    e.preventDefault();
    document.getElementById("Shape").style.fill = "#FEFCF7";
})


document.addEventListener("DOMContentLoaded", function () {
    const catalogSections = document.querySelectorAll(".subscribe-page-right-catalog");

    catalogSections.forEach(function (catalog) {
        catalog.addEventListener("click", function () {
            const options = catalog.nextElementSibling;
            const arrow = catalog.querySelector(".catalog-arrow");

            options.classList.toggle("active");
            arrow.classList.toggle("active");

            const cups = options.querySelectorAll(".cups");
            cups.forEach(function (cup) {
                cup.classList.toggle("active");
            });
        });
    });
});

let cup1 = document.getElementById("cup1");
let cup2 = document.getElementById("cup2");
let cup3 = document.getElementById("cup3");

let type1 = document.getElementById("type1");
let type2 = document.getElementById("type2");
let type3 = document.getElementById("type3");

let size1 = document.getElementById("size1");
let size2 = document.getElementById("size2");
let size3 = document.getElementById("size3");

let grind1 = document.getElementById("grind1");
let grind2 = document.getElementById("grind2");
let grind3 = document.getElementById("grind3");

let amount1 = document.getElementById("amount1");
let amount2 = document.getElementById("amount2");
let amount3 = document.getElementById("amount3");

let coffecup = document.getElementById("coffecup");
let typeofcoffe = document.getElementById("typeofcoffe");
let sizeofcoffe = document.getElementById("sizeofcoffe");
let typeofgrind = document.getElementById("typeofgrind");
let deliveramount = document.getElementById("deliveramount");

function clearSelection(parent) {
    let siblings = parent.querySelectorAll(".cups");
    siblings.forEach((sibling) => {
        sibling.style.backgroundColor = "";
    });
}

cup1.addEventListener("click", function () {
    clearSelection(cup1.parentElement);
    coffecup.textContent = "Capsule";
    cup1.style.backgroundColor = "#0E8784";
});
cup2.addEventListener("click", function () {
    clearSelection(cup2.parentElement);
    coffecup.textContent = "Filter";
    cup2.style.backgroundColor = "#0E8784";
});
cup3.addEventListener("click", function () {
    clearSelection(cup3.parentElement);
    coffecup.textContent = "Espresso";
    cup3.style.backgroundColor = "#0E8784";
});

type1.addEventListener("click", function () {
    clearSelection(type1.parentElement);
    typeofcoffe.textContent = "Single Origin";
    type1.style.backgroundColor = "#0E8784";
});
type2.addEventListener("click", function () {
    clearSelection(type2.parentElement);
    typeofcoffe.textContent = "Decaf";
    type2.style.backgroundColor = "#0E8784";
});
type3.addEventListener("click", function () {
    clearSelection(type3.parentElement);
    typeofcoffe.textContent = "Blended";
    type3.style.backgroundColor = "#0E8784";
});

size1.addEventListener("click", function () {
    clearSelection(size1.parentElement);
    sizeofcoffe.textContent = "250g";
    size1.style.backgroundColor = "#0E8784";
});
size2.addEventListener("click", function () {
    clearSelection(size2.parentElement);
    sizeofcoffe.textContent = "500g";
    size2.style.backgroundColor = "#0E8784";
});
size3.addEventListener("click", function () {
    clearSelection(size3.parentElement);
    sizeofcoffe.textContent = "1000g";
    size3.style.backgroundColor = "#0E8784";
});

grind1.addEventListener("click", function () {
    clearSelection(grind1.parentElement);
    typeofgrind.textContent = "Wholebean";
    grind1.style.backgroundColor = "#0E8784";
});
grind2.addEventListener("click", function () {
    clearSelection(grind2.parentElement);
    typeofgrind.textContent = "Filter";
    grind2.style.backgroundColor = "#0E8784";
});
grind3.addEventListener("click", function () {
    clearSelection(grind3.parentElement);
    typeofgrind.textContent = "Cafetiére";
    grind3.style.backgroundColor = "#0E8784";
});

amount1.addEventListener("click", function () {
    clearSelection(amount1.parentElement);
    deliveramount.textContent = "Every week";
    amount1.style.backgroundColor = "#0E8784";
});
amount2.addEventListener("click", function () {
    clearSelection(amount2.parentElement);
    deliveramount.textContent = "Every 2 weeks";
    amount2.style.backgroundColor = "#0E8784";
});
amount3.addEventListener("click", function () {
    clearSelection(amount3.parentElement);
    deliveramount.textContent = "Every month";
    amount3.style.backgroundColor = "#0E8784";
});

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");
let num5 = document.getElementById("num5");

let text1 = num1.parentElement;
let text2 = num2.parentElement;
let text3 = num3.parentElement;
let text4 = num4.parentElement;
let text5 = num5.parentElement;

function updateSelectionColor(num, text) {
    num.style.color = "#0E8784";
    text.style.color = "#333D4B";
}

cup1.addEventListener("click", function () { updateSelectionColor(num1, text1); });
cup2.addEventListener("click", function () { updateSelectionColor(num1, text1); });
cup3.addEventListener("click", function () { updateSelectionColor(num1, text1); });

type1.addEventListener("click", function () { updateSelectionColor(num2, text2); });
type2.addEventListener("click", function () { updateSelectionColor(num2, text2); });
type3.addEventListener("click", function () { updateSelectionColor(num2, text2); });

size1.addEventListener("click", function () { updateSelectionColor(num3, text3); });
size2.addEventListener("click", function () { updateSelectionColor(num3, text3); });
size3.addEventListener("click", function () { updateSelectionColor(num3, text3); });

grind1.addEventListener("click", function () { updateSelectionColor(num4, text4); });
grind2.addEventListener("click", function () { updateSelectionColor(num4, text4); });
grind3.addEventListener("click", function () { updateSelectionColor(num4, text4); });

amount1.addEventListener("click", function () { updateSelectionColor(num5, text5); });
amount2.addEventListener("click", function () { updateSelectionColor(num5, text5); });
amount3.addEventListener("click", function () { updateSelectionColor(num5, text5); });

const orderButton = document.querySelector(".order-button");
const textElements = {
    coffecup: document.getElementById("coffecup"),
    typeofcoffe: document.getElementById("typeofcoffe"),
    sizeofcoffe: document.getElementById("sizeofcoffe"),
    typeofgrind: document.getElementById("typeofgrind"),
    deliveramount: document.getElementById("deliveramount")
};

function selectOption(item, textElement, textValue) {
    item.style.backgroundColor = "#0E8784";
    textElement.textContent = textValue;
    checkSelections();
}

function checkSelections() {
    const allSelected = Object.values(textElements).every(el => el.textContent !== "_____");
    orderButton.style.pointerEvents = allSelected ? "auto" : "none";
    orderButton.style.backgroundColor = allSelected ? "#0E8784" : "#E2DEDB";
}

document.getElementById("cup1").addEventListener("click", function () {
    selectOption(document.getElementById("cup1"), textElements.coffecup, "Capsule");
});
document.getElementById("cup2").addEventListener("click", function () {
    selectOption(document.getElementById("cup2"), textElements.coffecup, "Filter");
});
document.getElementById("cup3").addEventListener("click", function () {
    selectOption(document.getElementById("cup3"), textElements.coffecup, "Espresso");
});

document.getElementById("type1").addEventListener("click", function () {
    selectOption(document.getElementById("type1"), textElements.typeofcoffe, "Single Origin");
});
document.getElementById("type2").addEventListener("click", function () {
    selectOption(document.getElementById("type2"), textElements.typeofcoffe, "Decaf");
});
document.getElementById("type3").addEventListener("click", function () {
    selectOption(document.getElementById("type3"), textElements.typeofcoffe, "Blended");
});

document.getElementById("size1").addEventListener("click", function () {
    selectOption(document.getElementById("size1"), textElements.sizeofcoffe, "250g");
});
document.getElementById("size2").addEventListener("click", function () {
    selectOption(document.getElementById("size2"), textElements.sizeofcoffe, "500g");
});
document.getElementById("size3").addEventListener("click", function () {
    selectOption(document.getElementById("size3"), textElements.sizeofcoffe, "1000g");
});

document.getElementById("grind1").addEventListener("click", function () {
    selectOption(document.getElementById("grind1"), textElements.typeofgrind, "Wholebean");
});
document.getElementById("grind2").addEventListener("click", function () {
    selectOption(document.getElementById("grind2"), textElements.typeofgrind, "Filter");
});
document.getElementById("grind3").addEventListener("click", function () {
    selectOption(document.getElementById("grind3"), textElements.typeofgrind, "Cafetiére");
});

document.getElementById("amount1").addEventListener("click", function () {
    selectOption(document.getElementById("amount1"), textElements.deliveramount, "Every week");
});
document.getElementById("amount2").addEventListener("click", function () {
    selectOption(document.getElementById("amount2"), textElements.deliveramount, "Every 2 weeks");
});
document.getElementById("amount3").addEventListener("click", function () {
    selectOption(document.getElementById("amount3"), textElements.deliveramount, "Every month");
});

checkSelections();

function saveOrder() {
    const order = {
        coffecup: coffecup.textContent,
        typeofcoffe: typeofcoffe.textContent,
        sizeofcoffe: sizeofcoffe.textContent,
        typeofgrind: typeofgrind.textContent,
        deliveramount: deliveramount.textContent
    };

    localStorage.setItem('order', JSON.stringify(order));
}


cup1.addEventListener("click", function () {
    clearSelection(cup1.parentElement);
    coffecup.textContent = "Capsule";
    cup1.style.backgroundColor = "#0E8784";
    saveOrder();
});

cup2.addEventListener("click", function () {
    clearSelection(cup2.parentElement);
    coffecup.textContent = "Filter";
    cup2.style.backgroundColor = "#0E8784";
    saveOrder();
});

cup3.addEventListener("click", function () {
    clearSelection(cup3.parentElement);
    coffecup.textContent = "Espresso";
    cup3.style.backgroundColor = "#0E8784";
    saveOrder();
});

type1.addEventListener("click", function () {
    clearSelection(type1.parentElement);
    typeofcoffe.textContent = "Single Origin";
    type1.style.backgroundColor = "#0E8784";
    saveOrder();
});

type2.addEventListener("click", function () {
    clearSelection(type2.parentElement);
    typeofcoffe.textContent = "Decaf";
    type2.style.backgroundColor = "#0E8784";
    saveOrder();
});

type3.addEventListener("click", function () {
    clearSelection(type3.parentElement);
    typeofcoffe.textContent = "Blended";
    type3.style.backgroundColor = "#0E8784";
    saveOrder();
});

size1.addEventListener("click", function () {
    clearSelection(size1.parentElement);
    sizeofcoffe.textContent = "250g";
    size1.style.backgroundColor = "#0E8784";
    saveOrder();
});

size2.addEventListener("click", function () {
    clearSelection(size2.parentElement);
    sizeofcoffe.textContent = "500g";
    size2.style.backgroundColor = "#0E8784";
    saveOrder();
});

size3.addEventListener("click", function () {
    clearSelection(size3.parentElement);
    sizeofcoffe.textContent = "1000g";
    size3.style.backgroundColor = "#0E8784";
    saveOrder();
});

grind1.addEventListener("click", function () {
    clearSelection(grind1.parentElement);
    typeofgrind.textContent = "Wholebean";
    grind1.style.backgroundColor = "#0E8784";
    saveOrder();
});

grind2.addEventListener("click", function () {
    clearSelection(grind2.parentElement);
    typeofgrind.textContent = "Filter";
    grind2.style.backgroundColor = "#0E8784";
    saveOrder();
});

grind3.addEventListener("click", function () {
    clearSelection(grind3.parentElement);
    typeofgrind.textContent = "Cafetiére";
    grind3.style.backgroundColor = "#0E8784";
    saveOrder();
});

amount1.addEventListener("click", function () {
    clearSelection(amount1.parentElement);
    deliveramount.textContent = "Every week";
    amount1.style.backgroundColor = "#0E8784";
    saveOrder();
});

amount2.addEventListener("click", function () {
    clearSelection(amount2.parentElement);
    deliveramount.textContent = "Every 2 weeks";
    amount2.style.backgroundColor = "#0E8784";
    saveOrder();
});

amount3.addEventListener("click", function () {
    clearSelection(amount3.parentElement);
    deliveramount.textContent = "Every month";
    amount3.style.backgroundColor = "#0E8784";
    saveOrder();
});


const confirmButton = document.querySelector('.order-button'); 
const alertElement = document.querySelector('.alert'); 
const closeButton = document.querySelector('.close-alert');

function showAlert() {
    alertElement.style.display = 'flex'; 
    document.body.style.overflow = 'hidden'; 
}

function closeAlert() {
    alertElement.style.display = 'none'; 
    document.body.style.overflow = 'auto'; 
}

confirmButton.addEventListener('click', function (event) {
    event.preventDefault(); 
    
  
    saveOrder();
    showAlert(); 
});

closeButton.addEventListener('click', closeAlert);

function populateAlert() {
    document.getElementById('alert-coffecup').textContent = coffecup.textContent;
    document.getElementById('alert-typeofcoffe').textContent = typeofcoffe.textContent;
    document.getElementById('alert-sizeofcoffe').textContent = sizeofcoffe.textContent;
    document.getElementById('alert-typeofgrind').textContent = typeofgrind.textContent;
    document.getElementById('alert-deliveramount').textContent = deliveramount.textContent;
}

function showAlert() {
    populateAlert(); 
    alertElement.style.display = 'flex'; 
    document.body.style.overflow = 'hidden'; 
}

function closeAlert() {
    alertElement.style.display = 'none'; 
    document.body.style.overflow = 'auto';
}

confirmButton.addEventListener('click', function (event) {
    event.preventDefault();
    
    saveOrder();
    showAlert(); 
});

closeButton.addEventListener('click', closeAlert);


function calculatePrice(coffeeType, size, grindType, deliveryAmount) {
    let basePrice = 14.00; 
    
    if (coffeeType === "Premium") {
        basePrice += 5.00;
    }
    
    if (size === "Large") {
        basePrice += 2.00;
    }
    
    if (grindType === "Fine") {
        basePrice += 1.50;
    }
    
    if (deliveryAmount === "Weekly") {
        basePrice += 3.00;
    }
    
    return basePrice.toFixed(2);
}

let coffeeType = "Premium"; 
let size = "Large"; 
let grindType = "Fine";
let deliveryAmount = "Weekly"; 

let price = calculatePrice(coffeeType, size, grindType, deliveryAmount);

document.querySelector('.price').innerHTML = `$${price}/ mo`;

document.getElementById('alert-coffecup').textContent = coffeeType;
document.getElementById('alert-typeofcoffe').textContent = "Arabica";
document.getElementById('alert-sizeofcoffe').textContent = size;
document.getElementById('alert-typeofgrind').textContent = grindType;
document.getElementById('alert-deliveramount').textContent = deliveryAmount