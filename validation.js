let password = document.querySelector(".password");
let confirmPassword = document.querySelector(".confirm-password");
let msg = document.querySelector(".msg");

function validatePassword() {
	console.log("hey");
	if (password.value != confirmPassword.value) {
		confirmPassword.setCustomValidity("Passwords Don't Match");
		msg.textContent = "Passwords Don't Match";
	} else {
		confirmPassword.setCustomValidity("");
		msg.textContent = "";
	}
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;
