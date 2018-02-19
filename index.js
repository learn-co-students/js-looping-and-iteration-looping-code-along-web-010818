function printBadges(names) {
  for (let i = 0; i < names.length; i++) {
    console.log('Welcome ' + names[i] + '! You are employee #' + (i+1) + '.')
  }
  return names;
}

function tailsNeverFails() {
  let count = 0;
  while (Math.round(Math.random()) !== 1) {
    count += 1;
  }
  console.log('you got ' + count + ' tails in a row!');
}
