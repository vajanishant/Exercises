let documentStartDate = new Date('2017-06-1').getTime(); 
let documentEndDate = new Date('2018-01-14').getTime();

function timeToBuilt(startDate, endDate) {
 

console.log( `${Math.floor((endDate - startDate)/(365 * 24 * 3600 * 1000))} years` );
console.log( `${Math.floor((endDate - startDate)/(30 * 24 * 3600 * 1000))} months` );
console.log( `${Math.floor((endDate - startDate)/(24 * 3600 * 1000))} days` );
console.log( `${Math.floor((endDate - startDate)/(3600 * 1000))} hours` );
console.log( `${Math.floor((endDate - startDate)/(60 * 1000))} minutes` );
console.log( `${Math.floor((endDate - startDate)/(1000))} seconds` );
console.log( `${Math.floor((endDate - startDate))} milliseconds` );

  
}

timeToBuilt(documentStartDate,documentEndDate);
