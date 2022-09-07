const signupFormHandler = async function (event) {
    event.preventDefault();
  
    const username = document.querySelector("#username-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();

    if (username && password) {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
    
      if (response.ok) {
        alert("Sucessfully signed up!")
        // take to dashboard when signed up successfully  -- need to change this
        document.location.replace("/");
      } else {
        alert("Failed to sign up");
      }
  }
  };
  
  document
    .querySelector(".signup-form")
    .addEventListener("submit", signupFormHandler);