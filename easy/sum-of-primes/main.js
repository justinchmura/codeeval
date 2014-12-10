function isPrime(n) {
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

var counter = 0, n = 2, sum = 0;
while (counter < 1000) {
  if (isPrime(n)) {
    counter += 1;
    sum += n;
  }
  n += 1;
}

console.log(sum);
process.exit(0);