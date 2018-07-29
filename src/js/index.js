// index.js
// need to import the function for each page
import {contactPage} from "./contact.js";
import {menuPage} from "./menu.js";
import {homePage} from "./home.js";
import {restaurantHeader} from "./restaurantHeader.js";

require("../style.css");

// load top half. Picture, tagline, menus
restaurantHeader();
homePage();

// test for clicks on webmenu and then display required page

// load home page
document.getElementById("menu_home").addEventListener("click", homePage);

// load menu page
document.getElementById("menu_menu").addEventListener("click", menuPage);

// load contact page
document.getElementById("menu_contact").addEventListener("click", function() {
  contactPage();
});
