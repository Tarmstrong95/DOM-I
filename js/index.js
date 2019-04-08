const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",

    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "about-h4":"About",

    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "middle-img-src": "img/mid-page-accent.jpg",

    "services-h4":"Services",

    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "product-h4":"Product",

    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "vision-h4":"Vision",

    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

// Nav
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.querySelectorAll('.container nav a');
nav.forEach((x, i)=> x.textContent = Object.values(siteContent.nav)[i]);

// Cta section 
document.querySelector('.cta-text h1').textContent = Object.values(siteContent.cta)[0];
document.querySelector('.cta-text button').textContent = Object.values(siteContent.cta)[1];
document.querySelector('#cta-img').src = Object.values(siteContent.cta)[2];

// Main-content
document.querySelector(".top-content:first-child .text-content h4").textContent = Object.values(siteContent["main-content"])[0];
document.querySelector(".top-content:first-child .text-content p").textContent = Object.values(siteContent["main-content"])[1];
document.querySelector(".top-content .text-content:nth-child(2) h4").textContent = Object.values(siteContent["main-content"])[2];
document.querySelector(".top-content .text-content:nth-child(2) p").textContent = Object.values(siteContent["main-content"])[3];
document.querySelector(".middle-img").src = Object.values(siteContent["main-content"])[4];
document.querySelector(".bottom-content .text-content:nth-child(1) h4").textContent = Object.values(siteContent["main-content"])[5];
document.querySelector(".bottom-content .text-content:nth-child(1) p").textContent = Object.values(siteContent["main-content"])[6];
document.querySelector(".bottom-content .text-content:nth-child(2) h4").textContent = Object.values(siteContent["main-content"])[7];
document.querySelector(".bottom-content .text-content:nth-child(2) p").textContent = Object.values(siteContent["main-content"])[8];
document.querySelector(".bottom-content .text-content:nth-child(3) h4").textContent = Object.values(siteContent["main-content"])[9];
document.querySelector(".bottom-content .text-content:nth-child(3) p").textContent = Object.values(siteContent["main-content"])[10];

// Contact
document.querySelector('.contact h4').textContent = Object.values(siteContent.contact)[0];

var contactPs = document.querySelectorAll('.contact p');
contactPs.forEach((x, i) => x.textContent = Object.values(siteContent.contact)[i+1])

// Footer 
document.querySelector('footer p').textContent = Object.values(siteContent.footer)[0];