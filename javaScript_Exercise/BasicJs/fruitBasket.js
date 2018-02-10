
//	*****	This is exercise 5, operations of union and substraction of two arrays.	*****

const fruitBasket1 = ['Apple','Banana','Orange','Pinaple']
const fruitBasket2 = ['Banana','Mango','Grapes'];
let allFruitBasket = [];
let fruitBasket3 = [];

function getAllFruits(fruitBasket1, fruitBasket2, allFruitBasket) {

  for(let index=0; index < fruitBasket1.length; index++)
    allFruitBasket.push(fruitBasket1[index]);
  
  for(let index=0; index < fruitBasket2.length; index++) {

    if(allFruitBasket.includes(fruitBasket2[index]))
      continue;
    else
      allFruitBasket.push(fruitBasket2[index]);

  }
  
  alert("All Fruits:    " + allFruitBasket);

}

function deductCommonFruits(fruitBasket1, fruitBasket2, fruitBasket3) {

  let fruitsMap = new Map();
  
  for(let index=0; index < fruitBasket1.length; index++)
    fruitsMap.set(fruitBasket1[index],1);
  
  for(let index=0; index < fruitBasket2.length; index++)
  {

    if(fruitsMap.has(fruitBasket2[index]))
    {
      fruitsMap.set(fruitBasket2[index],fruitsMap.get(fruitBasket2[index])+1);
    }
    else
    {
      fruitsMap.set(fruitBasket2[index],1);
    }

  }

  for(let check of fruitsMap.keys())
  {

    if(fruitsMap.get(check) < 2)
      fruitBasket3.push(check);

  }

  alert("Fruits that are not common in Basket1 and Basket2:    " + fruitBasket3);

}

getAllFruits(fruitBasket1, fruitBasket2, allFruitBasket);
deductCommonFruits(fruitBasket1, fruitBasket2, fruitBasket3);
