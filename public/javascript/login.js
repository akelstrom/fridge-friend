// javascript logic for signup here
async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    // check the response status
    if (response.ok) {
      console.log("success");
      window.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

//js logic for login form --
async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  //toast alerts for user login errors
  const toastContent = document
    .querySelector("#alert-toast")
    .querySelector("#toast-content");

  const toast = document.querySelector("#alert-toast")

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        window.location.replace("/dashboard");
    } else if (response.status === 400) {
        toastContent.innerHTML = "Your email/password is incorrect. Please try again!";
        toast.classList.remove("hidden");
        setTimeout( function() {
          location.reload();
        },5000);
    } else if (response.status === 404) {
        toastContent.innerHTML = "No user is found with this id. Please try again!";
        toast.classList.remove("hidden");
    } else {
      toastContent.innerHTML = response.status;
      toast.classList.remove("hidden");
    }
  }
}

if (document.querySelector(".login-form")) {
  document
    .querySelector(".login-form")
    .addEventListener("submit", loginFormHandler);
}

if (document.querySelector(".signup-form")) {
  document
    .querySelector(".signup-form")
    .addEventListener("submit", signupFormHandler);
}
