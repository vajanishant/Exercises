let position=[1, 2, 3, 4, 5];

function Shuffle(shufflePosition) {

  console.log("This is simple shuffling so it does not have equal chance for appearing all permutations and may give same order repeatedly.");
  
  let generateRandomNum = Math.floor(Math.random()*(shufflePosition.length));
  let generateRandomNum2 = Math.floor(Math.random()*(shufflePosition.length));
  
  [shufflePosition[generateRandomNum],shufflePosition[generateRandomNum2]] = [shufflePosition[generateRandomNum2],shufflePosition[generateRandomNum]]; 
  
  console.log(shufflePosition);
}

function shuffle(shufflePosition) {

  console.log('This is best shuffling that shuffles and give equal chance to every permutations to be appear');
  
  for (let index = shufflePosition.length - 1; index > 0; index--) {

    let RandomIndex = Math.floor(Math.random() * (index + 1));
    [shufflePosition[index], shufflePosition[RandomIndex]] = [shufflePosition[RandomIndex], shufflePosition[index]];

  }

  console.log(shufflePosition);

}

Shuffle(position);
shuffle(position);







