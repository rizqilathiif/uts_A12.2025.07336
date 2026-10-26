// =========================
// NAVBAR EFFECT
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// =========================
// MENU → ORDER FORM
// =========================

function selectMenu(menuName) {
    const menuSelect = document.getElementById("menuSelect");
    const orderSection = document.getElementById("order");

    if (menuSelect) {
        menuSelect.value = menuName;
    }

    if (orderSection) {
        orderSection.scrollIntoView({
            behavior: "smooth"
        });
    }
}


// =========================
// ORDER FORM
// =========================

const orderForm = document.getElementById("orderForm");

if (orderForm) {
    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const whatsapp = document.getElementById("whatsapp").value.trim();
        const address = document.getElementById("address").value.trim();
        const menu = document.getElementById("menuSelect").value;
        const quantity = document.getElementById("quantity").value;

        if (
            name === "" ||
            whatsapp === "" ||
            address === "" ||
            menu === "" ||
            quantity === ""
        ) {
            alert("Please complete all order information.");
            return;
        }

        alert(
            "Thank you, " +
            name +
            "! Your order for " +
            quantity +
            "x " +
            menu +
            " has been received."
        );

        orderForm.reset();
    });
}


// =========================
// WHATSAPP INPUT
// =========================

const whatsappInput = document.getElementById("whatsapp");

if (whatsappInput) {
    whatsappInput.addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9]/g, "");
    });
}


// =========================
// ACTIVE NAVIGATION
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function () {
    let currentSection = "";

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(function (link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});


// =========================
// MENU HOVER
// =========================

const menuCards = document.querySelectorAll(".menu-card");

menuCards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
        card.style.cursor = "pointer";
    });
});