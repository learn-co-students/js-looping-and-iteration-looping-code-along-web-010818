function printBadges(employees) {
  // console.log("I'm here!")
  for (i = 0; i < employees.length; i++) {
    console.log(`Welcome ${employees[i]}! You are employee #${i + 1}.`);
  }
  return employees
}

function tailsNeverFails() {
  let counter = 0;

  while (Math.random() >= 0.5) {
    counter++
  }

  return `You got ${counter} tails in a row!`
}
