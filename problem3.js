function primeNumber(number) {
  let pembagi = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      pembagi++;
    }
  }
  if (pembagi == 2) {
    console.log('Prima');
  } else {
    console.log('Bukan Prima');
  }
}

primeNumber(11); // true
primeNumber(13); // true
primeNumber(17); // true
primeNumber(20); // false
primeNumber(35); // false
