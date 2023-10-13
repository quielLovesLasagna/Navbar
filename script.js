"use strict";

// ---- ELEMENTS ---- //
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
// ---- END OF ELEMENTS ---- //

// ---- EVENT HANDLER ---- //
navToggle.addEventListener("click", () => links.classList.toggle("show-links"));
// ---- END OF EVENT HANDLER ---- //
