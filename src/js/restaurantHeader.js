const restHeader = require("../rest_header.jpg");
export function restaurantHeader() {
  let header =
    '<img id="header_pic" src="' + restHeader + '" alt="Restaurant_pic">';
  header += '<div class="centered">Your favourite restaurant!</div>';
  header += '<div id="menus">';
  header += '<div class="menu" id="menu_home">Home</div>';
  header += '<div class="menu" id="menu_menu">Menu</div>';
  header += '<div class="menu" id="menu_contact">Contact</div></div>';
  let el = document.getElementById("content");
  el.innerHTML = header;
}
