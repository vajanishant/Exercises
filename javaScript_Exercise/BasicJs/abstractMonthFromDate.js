const allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'wrong entry'];

function getMonthName(allMonths,date) {

	let monthIndex = date.split('-');
	monthIndex = monthIndex[1];
	return allMonths[monthIndex-1];

}

console.log(getMonthName(allMonths,'1-2-2018'));

// --------------------------------------------------------------------------------------
//                          New Version

const getBirthDate = prompt('Enter your birthday', 'January 1, 1970 or 01-01-1970')

const birthDate = new Date(getBirthDate);

function findBirthMonth(birthDate) {

	const Month = birthDate.getMonth();

	if(typeof (allMonths[Month]) == 'undefined'){

		alert('You entered wrong data');
		return 12;

	}
	
	else
		return Month;

}

console.log(allMonths[findBirthMonth(birthDate)]);
