let unixTime = +prompt('Enter unixtime stamp: ', 1517550886);

function convertUnixTimeToTime(unixTime) {
  
let date = new Date(unixTime*1000);
console.log(date);
  
}

convertUnixTimeToTime(unixTime);