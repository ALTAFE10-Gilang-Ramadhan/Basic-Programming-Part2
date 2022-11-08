function faktorBilangan(bil) {
  console.log(`Faktor dari ${bil} adalah:`);
  for (let i = 0; i <= bil; i++) {
    if (bil % i == 0) {
      console.log(i);
    }
  }
}

faktorBilangan(6);
faktorBilangan(20);
