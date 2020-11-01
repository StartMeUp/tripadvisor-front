const $ = document;
const query = (data) => {
  return document.querySelector(data);
}

$.addEventListener("DOMContentLoaded", () => {
  const closeIcon = query(".icon-times");
  const form = query('#signupForm');


  const email = query("#email").value;
  console.log(email);

});