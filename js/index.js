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

// Nav =========================
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.querySelectorAll('.container nav a');
nav.forEach((x, i)=> {
  x.textContent = Object.values(siteContent.nav)[i];
  x.style.color = "green";
});
var newNavEl = document.createElement("a"), 
newNavElTwo = document.createElement("a"),
 navText = "new-nav",
 navItem = document.querySelector('nav');

newNavEl.textContent = navText;
newNavElTwo.textContent = navText;
navItem.prepend(newNavElTwo);
navItem.appendChild(newNavEl);
// End Nav ==============

// Text content setter function
const txtStr = (query, obj, index) => {
  document.querySelector(query).textContent = Object.values(obj)[index];
}
// Text content setter variables
let sCta = siteContent.cta;
let sMc = siteContent["main-content"];
let sCntc = siteContent.contact;
let sFot = siteContent.footer;

// Cta section 
txtStr(".cta-text h1", sCta, 0)
txtStr('.cta-text button', sCta, 1)
document.querySelector('#cta-img').src = Object.values(siteContent.cta)[2];

// Main-content
txtStr(".top-content:first-child .text-content h4", sMc, 0)
txtStr(".top-content:first-child .text-content p", sMc, 1)
txtStr(".top-content .text-content:nth-child(2) h4", sMc, 2)
txtStr(".top-content .text-content:nth-child(2) p", sMc, 3)
txtStr(".bottom-content .text-content:nth-child(1) h4", sMc, 5)
txtStr(".bottom-content .text-content:nth-child(1) p", sMc, 6)
txtStr(".bottom-content .text-content:nth-child(2) h4", sMc, 7)
txtStr(".bottom-content .text-content:nth-child(2) p", sMc, 8)
txtStr(".bottom-content .text-content:nth-child(3) h4", sMc, 9)
txtStr(".bottom-content .text-content:nth-child(3) p", sMc, 10)
document.querySelector(".middle-img").src = Object.values(siteContent["main-content"])[4];

// Contact
txtStr('.contact h4', sCntc, 0)
var contactPs = document.querySelectorAll('.contact p');
contactPs.forEach((x, i) => x.textContent = Object.values(siteContent.contact)[i+1])

// Footer 
txtStr('footer p', sFot, 0)

//button maker IIFE
const addButton = (function(){
  // Button creation & style
  var button = document.createElement("button"), btn = button.style;
  button.textContent = "Press to Delete page!"
  document.querySelector("body").appendChild(button);
  btn.position = "fixed";
  btn.background = "#ff665e";
  btn.fontWeight = "900";
  btn.borderRadius = "10px";
  btn.bottom = "2px";
  btn.left = "2px";
  btn.padding = "10px 20px";
  btn.cursor = "pointer";
  
  const pageDestroy = function(){
    alert("You're about to destroy the page!");
    document.querySelector('.container').style.display = "none";
  }
  button.addEventListener("click", pageDestroy);
})();