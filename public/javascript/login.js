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

//js logic for login form -- so far getting a "304??? and errors in the server"
async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
      window.location.replace("/dashboard");
    } else {
      alert(response.statusText);
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
