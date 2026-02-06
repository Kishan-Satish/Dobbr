function isValidPassword(password) {
  // At least 8 characters, 1 number
  return /^(?=.*\d).{8,}$/.test(password);
}

function signup() {
  const mobile = document.getElementById("su-mobile").value;
  const password = document.getElementById("su-password").value;
  const msg = document.getElementById("signup-msg");

  if (!/^\d{10}$/.test(mobile)) {
    msg.style.color = "red";
    msg.textContent = "Enter a valid 10-digit mobile number";
    return;
  }

  if (!isValidPassword(password)) {
    msg.style.color = "red";
    msg.textContent = "Password must be 8+ characters and include a number";
    return;
  }

  localStorage.setItem(mobile, password);
  msg.style.color = "#1db954";
  msg.textContent = "Account created successfully!";
}

function login() {
  const mobile = document.getElementById("li-mobile").value;
  const password = document.getElementById("li-password").value;
  const msg = document.getElementById("error-msg");

  const storedPassword = localStorage.getItem(mobile);

  if (storedPassword && password === storedPassword) {
    window.location.href = "home.html";
  } else {
    msg.style.color = "red";
    msg.textContent = "Invalid mobile number or password";
  }
}

