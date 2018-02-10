let employeesPosition = [];
let employeesNameFirstLetter = [];
const ASCII_of_a = 97;

function fillTheNames(employeesNameFirstLetter, asciiOfa){

  for(let alphabetInd = 0; alphabetInd < 26; alphabetInd++)
  {
    employeesNameFirstLetter[alphabetInd] = String.fromCharCode(asciiOfa) ;
    asciiOfa++;
  }

}

fillTheNames(employeesNameFirstLetter, ASCII_of_a);

let storeIndex;

function jumpName(employeesNameFirstLetter, from, to, num) {

  for(let index = 0; index < 26; index++)
  {
    if(employeesNameFirstLetter[index] == from)
    {
      storeIndex = index;
      employeesNameFirstLetter.splice(0, index);
    } 
  }
  
  for(let index = 0; index < 26; index++)
  {
    if(employeesNameFirstLetter[index] == to)
    {
      storeIndex = index;
      employeesNameFirstLetter.splice(index+1);
    } 
  }

  let fromStrToNum = (from.charCodeAt(0)-97);
  let toStrToNum = (to.charCodeAt(0)-97);

  for(let index = 1; index < (toStrToNum+num)/num; index = index+1)
  {
    employeesNameFirstLetter.splice(index, num-1); 
  }

}

function jumpPosition(employeesPosition, from, to, num) {

  for(let position = from; position <= to; position = position+num)
  {
    employeesPosition.push(position);
  }

}

const Name_start_value = prompt('Enter a character you  want to start from: ', 'a');
const Name_end_value = prompt('Enter a character you want to end to: ', 'z'); 
const Jump_of_character = +prompt('Enter a number you want to jump in the sequence', 1);

jumpName(employeesNameFirstLetter, Name_start_value, Name_end_value, Jump_of_character);
console.log(employeesNameFirstLetter);

const Position_start_value = +prompt('Enter a digit you  want to start from: ', 1);
const Position_end_value = +prompt('Enter a digit you want to end to: ', 50); 
const Jump_of_digits = +prompt('Enter a number you want to jump in the sequence', 1);

jumpPosition(employeesPosition, Position_start_value, Position_end_value, Jump_of_digits);
console.log(employeesPosition);
