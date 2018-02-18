function printBadges (employeeNames) {
  for (let i = 0; i < employeeNames.length; i++) {
     console.log(`Welcome ${employeeNames[i]}! You are employee #${i + 1}.`);
   }
  return employeeNames;
}

function tailsNeverFails(){
  let flip;
  let tails = 0;
  while (flip != 0){
    flip  = Math.round(Math.random())
    tails++;
  }
  return `You got ${tails - 1} tails in a row!`;
}
