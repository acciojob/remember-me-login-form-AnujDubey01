//your JS code here. If required.
  const form = document.getElementById("loginForm");
let user  = document.getElementById("username");
let psswrd = document.getElementById("password");
let  check = document.getElementById("checkbox");
const btn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");
  // Check if credentials are saved
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
      // Show the existing user button
      existingBtn.style.display = "inline-block";
    }

 form.addEventListener("submit", function(event) {
	event.preventDefault();
	
		if(!check.checked)	{
			alert(`Logged in as ${user.value}`);
	} else {
			  localStorage.setItem("username", user);
		      localStorage.setItem("password", psswrd);
			
			 existingBtn.style.display = "inline-block";
			
		}
	
});

 existingBtn.addEventListener("click", function() {
      alert(`Logged in as ${savedUsername.value}`);
    });

