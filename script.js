const form = document.getElementById("loginForm");
const user = document.getElementById("username");
const psswrd = document.getElementById("password");
const check = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

// Check if credentials are saved
const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

if (savedUsername && savedPassword) {
	existingBtn.style.display = "inline-block";
}

// Handle form submission
form.addEventListener("submit", function(event) {
	event.preventDefault();

	alert(`Logged in as ${user.value}`);

	if (check.checked) {
		// Store credentials
		localStorage.setItem("username", user.value);
		localStorage.setItem("password", psswrd.value);
		existingBtn.style.display = "inline-block";
	} else {
		// Remove credentials
		localStorage.removeItem("username");
		localStorage.removeItem("password");
		existingBtn.style.display = "none";
	}
});

// Handle login as existing user
existingBtn.addEventListener("click", function() {
	alert(`Logged in as ${savedUsername}`);
});
