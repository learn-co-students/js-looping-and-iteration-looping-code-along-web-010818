const array = ['Ada', 'Brendan', 'Ali']

function printBadges(array){
  for(let i = 0; i < array.length; i++){
    console.log(`Welcome ${array[i]}! You are employee #${[i + 1]}.`);
  }
  return array;
}

function tailsNeverFails(){
  let tails = 0;
  while (headsOrTails()) {
    tails++;
  }
  return `You got ${tails} tails in a row!`;
}

function headsOrTails(){
  return Math.random() >= 0.5;
}
