// load contact page
export function contactPage() {
  let contact = '<p id="contact">Contact Us</p><p id="address">Nowhereville<p>';
  contact += '<p>Telephone no: 0123 456789</P>';
  let el4 = document.getElementById("bottom");
  el4.innerHTML = contact;
}
