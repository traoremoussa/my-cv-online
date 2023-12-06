"use strict";

// Colors

const widget = document.querySelector(".widget");
const control = document.querySelector(".control");

widget.addEventListener("click", () => {
    control.classList.toggle("open");
});

const colors = [...document.querySelectorAll(".colors span")];
document.querySelector(":root").style.setProperty("--customColor", "#0044ff");

colors.forEach((color) => {
    color.addEventListener("click", () => {
        const currentColor = color.dataset.id;
        document
            .querySelector(":root")
            .style.setProperty("--customColor", currentColor);
    });
});

window.addEventListener("scroll", () => {
    control.classList.remove("open");
});

//--- read data
//GEN PDF