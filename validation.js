//ambil id input type
var Username 		= document.getElementById('username');
var Password 		= document.getElementById('password');
var ConfirmPassword = document.getElementById('confirmPassword');
var Email 			= document.getElementById('email');
var ConfirmEmail 	= document.getElementById('confirmEmail');

//fungsi validasi
function validation(){
	
	//validasi username	tidak boleh kosong	
	if(Username.value == "") {
		alert('Username Tidak Boleh Kosong');				
		return false;
	}
	//validasi password tidak boleh kosong
	else if(Password.value == "") {
		alert('Password Tidak Boleh Kosong');
		return false;
	}
	//validasi password confirmation tidak boleh kosong
	else if(ConfirmPassword.value == "") {
		alert('Confirm Password Tidak Boleh Kosong');
		return false;
	}	
	// validasi email tidak boleh kosong
	else if(Email.value == "") {
		alert('Email Tidak Boleh Kosong');
		return false;
	}
	// validasi email confirmation tidak boleh kosong
	else if(ConfirmEmail.value == "") {
		alert('Confirm Email Tidak Boleh Kosong');
		return false;
	}
	// validasi email & email confirmation harus sama
	else if(ConfirmEmail.value != Email.value) {
		alert('Email Confirmation Tidak Sama');
		return false;
	}
	//validasi password & password confirmation harus sama
	else if(ConfirmPassword.value != Password.value) {
		alert('Password Tidak Sama');
		return false;
	}			
}