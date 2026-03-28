function adoptPet(name) {
  alert("Thank you for choosing " + name + " ! Enter your details. We will contact you soon.");
  window.location.href = "contact.html";
}

function submitForm() {
  alert("Message sent successfully!");
  return false;
}

function filterPets(type) {
  let pets = document.querySelectorAll(".pet-card");

  pets.forEach(pet => {
    if (type === "all") {
      pet.style.display = "block";
    } else {
      pet.style.display = pet.classList.contains(type) ? "block" : "none";
    }
  });
}

function loginUser() {
  alert("Login successful!");
  window.location.href = "index.html";
  return false;
}

function searchPets() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let pets = document.querySelectorAll(".pet-card");

  pets.forEach(pet => {
    let text = pet.innerText.toLowerCase();

    if (text.includes(input)) {
      pet.style.display = "block";
    } else {
      pet.style.display = "none";
    }
  });
}

function goToSignup() {
  alert("Redirecting to Signup Page...");
  window.location.href = "signup.html";
}


function signupUser() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return false;
  }

  localStorage.setItem("userName", name);
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  alert("Signup successful! Please login.");
  window.location.href = "login.html";

  return false;
}