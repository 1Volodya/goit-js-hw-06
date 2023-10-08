const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;

  if (email.trim() === "" || password.trim() === "") {
    alert("All fields must be filled out!");
  } else {
    const formData = {
      email: email,
      password: password,
    };

    console.log(formData); 
    loginForm.reset(); 
  }
});
