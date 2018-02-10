const String_to_chop = prompt("Enter the string to chop", 'RapidOpsSolution');
const Chop_in = +prompt(`Enter number between 1 to ${String_to_chop.length-1} that gives you your choped string in entered length`, 2);

function chopTheString(stringToChop, chopIn) {

	let chopedString = []; 
	let subChopedString;

	if(chopIn == 0)
	{
		alert(stringToChop);
		return;
	}
	
	for(let index = 0; index < stringToChop.length; index = index + chopIn)
	{

		subChopedString = stringToChop.slice(index,chopIn+index);
		chopedString.push(subChopedString);
		
	}

	alert(chopedString);
	
}

chopTheString(String_to_chop, Chop_in);
