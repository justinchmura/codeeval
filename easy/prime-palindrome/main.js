function isPrime(n) {
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function isPalindrome(n) {
  return n.toString() === n.toString().split('').reverse().join('');
}

var largest = 2;
for (var i = 2; i <= 1000; i++) {
  if (isPrime(i) && isPalindrome(i) && i > largest) {
    largest = i;
  }
}

console.log(largest);
process.exit(0);