function palindrome(string) {
  const panjang = string.length;

  for (let i = 0; i < panjang / 2; i++) {
    if (string[i] !== string[panjang - 1 - i]) {
      return 'false';
    }
  }
  return 'true';
}

console.log(palindrome('civic')); // true
console.log(palindrome('katak')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('kupu-kupu')); // false
console.log(palindrome('lion')); // false
