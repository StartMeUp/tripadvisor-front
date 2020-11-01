const query = (str) => {
  return document.querySelector(str);
}

document.addEventListener("DOMContentLoaded", () => {
  // Target DOM elements
  const modal = query("#modal-container");
  const closeIcon = query(".icon-times");
  const form = query("#signupForm");
  const signup = query("#signup");
  const nameField = query("#name");
  const emailField = query("#email");
  const passwordField = query("#password");

  // listeners

  signup.addEventListener("click", () => {
    modal.classList.toggle("hidden");
  })

  closeIcon.addEventListener("click", () => {
    modal.classList.toggle("hidden");
  })

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      name: nameField.value,
      email: emailField.value,
      password: passwordField.value,
    }

    console.log(data);

    nameField.value = emailField.value = passwordField.value = "";

    const response = await axios.post("https://tripadvisor-back.herokuapp.com/", data);
    console.log(response);


  })


});