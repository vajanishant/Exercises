// *** Please Notice that i have  2 versions ( simple one and realtime ) 
//     one after another so do check both.

console.log("This is basic version that do the given task");

let number = +prompt("Enter a number", 1);

while (true) {

  if(isNaN(number))
    number = +prompt('Enter a valid number', 1);
  else
    break;

}

function splitEvenNum(number) {

  let str = number + '';

  str = str.split('');
  str = str.join('-');

  let arr = Array.from(str);

  for(let index = 0; index < arr.length; index++)
  {

    if(arr[index] == '-')
    {

      if(arr[index-1]%2 == 0 && arr[index+1]%2 == 0)
        continue;
      else
        arr.splice(index,1);

    }

  }

  str = ''+ arr;
  str = str.split(',');
  str = str.join('');

  console.log(str);

}

splitEvenNum(number);

console.log('');

// ---***---  ---***--- ---***---  ---***--- ---***---  ---***--- ---***---  ---***---  ---***---  ---***--- ---***---  ---***--- ---***---  ---***--- 

alert("Here we have REALTIME example");

// In probability we've seen a question og boy girl sitting in which we have given n numbers of sit
//and we have to arrange boys and girls so that no 2 girls are next to each other.

// ******So here we only have to figure out that whether two girls are next to each other or not!!!******

// Our given task is also similar to that in this task we don't need two even digits side by side.
// So let's do this :D

// let arrangedPermutation= ['b','b','g','g','g','b','g','b','b','b','g','b','g','g','b'];

const stringOfArrangedPermutation = prompt('Enter a permutation of sitting arrangement of boys and girls such that no to girls are next to each other and make sure that you permutation in this patterns enter b for boy and g for girl','bggbbgbgggggggggbbbbbgbbgbgbgb');
let arrangedPermutation = [];

arrangedPermutation = Array.from(stringOfArrangedPermutation);

function checkArrangedPermutation(arrangedPermutation) {

  let checkString = arrangedPermutation + '' ;
  
  checkString = checkString.split(',');
  checkString = checkString.join('-');

  arrangedPermutation = Array.from(checkString);
  
  for(let index=0; index<arrangedPermutation.length; index++)
  {

    if(arrangedPermutation[index] == '-')
    {

      if(arrangedPermutation[index-1] == 'g' && arrangedPermutation[index+1] == 'g')
        continue;
      else
        arrangedPermutation.splice(index,1);

    }

  }

  checkString = '' + arrangedPermutation;
  checkString = checkString.split(',');
  checkString = checkString.join('');

  if(checkString.includes('-')) {

    alert("Your permutation is WRONG!!!");
    alert('Please see where you got wrong ::   ' + checkString);

  }
  
  else {

    alert("Great!!! You guess right permutation");
    alert('Your  right permutation is ::   ' + checkString);

  }

}

checkArrangedPermutation(arrangedPermutation);
