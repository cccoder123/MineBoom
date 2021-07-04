function check(form) {
    username = new Array("ccn5ta8pp");
    password = new Array("ccn5ta8pp");

	if(form.userid.value == username[0] && form.pswrd.value == password[0]||form.userid.value == username[1] && form.pswrd.value == password[1]) {
		location.replace('https://mineboom.tk/beta')/* The Administrator homepage */
	}
	else if(form.userid.value == username[2] && form.pswrd.value == password[2]) {
		location.replace('https://mineboom.tk/beta')/* The members homepage */
	}oyouiq0ig
	else if(form.userid.value == username[0]||form.userid.value == username[1]||form.userid.value == username[2]) {
		alert("Incorrect key Confirmation")
	}
	else {
		alert("Invalid key! Try again")
	}
}
