const Name = prompt('Enter your first name', 'Nishant');
const Surname = prompt('Enter your last name', 'Vaja');

function addSurname(name, surname) {

	let fullName = '';
	fullName = name + ' ' + surname;
	alert('Your FullName is ' + fullName);

}

addSurname(Name,Surname);

const Line = prompt('Enter line or text you want to edit', 'This is a line.');
const Add_string = prompt('Enter things you want to add in the line you provided', 'new');
const Position = prompt('Enter position where you want to add your text', 10);

function addInString(line, position, addString) {
	if(position > -1 && position < line.length){
		
		line = line.slice(0, position) + addString + line.slice(position);
		alert(line); 	
		
	}
	else {
		alert('Wrong position entered by you!!!'); 
	}
}

addInString(Line, Position, Add_string);

const Word = prompt('Enter a word before you want to add your text', 'line');

function addInStringBeforeWord(line, word, stringToAdd) {

	let position = -1;
	position = line.indexOf(word);
	if(position != -1)
	{
		line = line.slice(0, position) + stringToAdd + line.slice(position);
		alert(line);
	}
	else
		alert('Word before you want to add your text is not there in the text you provided!!!'); 

}

addInStringBeforeWord(Line, Word, Add_string);