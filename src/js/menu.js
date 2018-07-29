// load menu page
export function menuPage() {
  let menu = '<p id="menu_list">Menu</p>';
  menu += '<ul id="menu_items">';
  menu += '<li class="menu_items">Beef Bourguingnon</li>';
  menu += '<li class="menu_items">Chicken Chasseur</li>';
  menu += '<li class ="menu_items">Fillet Steak</li>';
  menu += '<li class="menu_items">Fish Pie</li></ul>';
  let el3 = document.getElementById("bottom");
  el3.innerHTML = menu; // insertAdjacentHTML("afterend", menu);
}
