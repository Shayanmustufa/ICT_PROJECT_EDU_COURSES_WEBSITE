'use strict';

/**
 * Add event on element
 */
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

/**
 * Navbar Toggle
 */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);


/**
 * Header Active When Scroll Down to 100px
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);


/**
 * Smooth Scroll for Navigation Links
 */
const navLinksSmoothScroll = document.querySelectorAll("[data-nav-link]");

const smoothScroll = function (e) {
  e.preventDefault();
  const targetId = e.target.getAttribute('href').slice(1);
  const targetElem = document.getElementById(targetId);
  window.scrollTo({
    top: targetElem.offsetTop - 80, // Adjusting for header height
    behavior: 'smooth'
  });
};

addEventOnElem(navLinksSmoothScroll, "click", smoothScroll);


/**
 * Toggle "Try for Free" Section
 */
const tryForFreeBtn = document.querySelector("[data-try-for-free-btn]");
const tryForFreeSection = document.querySelector("[data-try-for-free-section]");

const toggleTryForFree = function () {
  tryForFreeSection.classList.toggle("active");
}

if (tryForFreeBtn) {
  addEventOnElem(tryForFreeBtn, "click", toggleTryForFree);
}


/**
 * Form Validation for "Try for Free"
 */
const tryForFreeForm = document.querySelector(".try-form");

const validateForm = function (e) {
  const fullName = document.getElementById("full-name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const courseInterest = document.getElementById("course-interest").value;
  const howBenefit = document.getElementById("how-benefit").value;

  if (!fullName || !email || !phone || !courseInterest || !howBenefit) {
    e.preventDefault();
    alert("Please fill out all fields before submitting.");
  }
};

if (tryForFreeForm) {
  tryForFreeForm.addEventListener("submit", validateForm);
}


/**
 * Scroll-to-Top Button
 */
const scrollTopBtn = document.querySelector("[data-back-top-btn]");

const scrollToTop = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

if (scrollTopBtn) {
  addEventOnElem(scrollTopBtn, "click", scrollToTop);
}
const faqItems = document.querySelectorAll('.faq-item');

// Add click event listeners to each FAQ item
faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  
  question.addEventListener('click', () => {
    // Toggle the active class on the clicked FAQ item
    item.classList.toggle('active');
  });
});