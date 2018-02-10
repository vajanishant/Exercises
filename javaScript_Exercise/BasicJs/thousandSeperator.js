let Number = +prompt('Enter a Number',0);

while(true) {

if(isNaN(Number))
  {
     Number = +prompt('Please Enter a valid Number',0);
  }
  else{
    break; 
  }

}

function thousandSeperator(Number) {
 
  let convertToStr = '' + Number;
  let thousandSepCount = 0;
  
  for(let index = convertToStr.length; index >= 0; index--){
    if(thousandSepCount%3 == 0 && thousandSepCount != 0 && index != 0)
      {
        convertToStr = convertToStr.slice(0,index) + ',' + convertToStr.slice(index);
      }
    thousandSepCount++;
  }
  
  console.log(convertToStr);
  
}

thousandSeperator(Number);


