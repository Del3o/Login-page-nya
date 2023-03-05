const users = [
    { username: "janne", password: "test" },
    { username: "delav", password: "btc1" },
    { username: "iphone", password: "samsung" },
    ];
    function login(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
     const user = users.find(u => u.username === username && u.password === password);
     if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user)); document.getElementById("message").textContent = "Logged in successfully.";
    
    } else {
     document.getElementById("message").textContent = "Invalid username or password.";
    }
     }
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (loggedInUser) {
     document.getElementById("username").value = loggedInUser.username;
     document.getElementById("message").textContent = "Welcome back, " + loggedInUser.username + "!";
     }