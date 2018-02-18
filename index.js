// Code your solutions in this file

function printBadges(array){
  const count = array.length;

  for(let i = 0; i < count; i++){
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`)
  }
  return array;
}


function tailsNeverFails(){
  let i = 0

  function tails(){
    return Math.random() >= 0.5;
  }

  while(tails()){
    i++;

    console.log(i);
  }

  return `You got ${i} tails in a row!`

}
