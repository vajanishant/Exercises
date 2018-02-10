const emailAddress = prompt('Enter email address that you want to verify', 'abcd@gmail.com');

function checkValidEmailAddress(emailAddress){

	const RegExe = /^[a-z][a-z0-9]*@[a-z]+\.[a-z]+$/i;

	if(RegExe.test(emailAddress))
		alert('This email address is valid');
	else if(emailAddress === null || emailAddress === '')
		alert('You entered a null string or cancle the process');
	else
		alert('This is invalid email address');

}

checkValidEmailAddress(emailAddress);