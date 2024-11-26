// 1. Find all prime numbers between 1 to 100

function findPrimes() {
    const primes = [];
    for (let num = 2; num <= 100; num++) {
      if (isPrime(num)) primes.push(num);
    }
    return primes;
  }
  
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  console.log("Prime numbers between 1 to 100:", findPrimes());

  
//   Check if a number is prime

function checkPrime(num) {
    console.log(num + (isPrime(num) ? " is a prime number." : " is not a prime number."));
  }
  
  checkPrime(29); // Test with any number

  
//   Check if a string is a palindrome

function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }
  
  console.log("Is 'madam' a palindrome?", isPalindrome("madam")); // true
  console.log("Is 'hello' a palindrome?", isPalindrome("hello")); // false
  

//   4. Check if a number is a perfect number

function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
      if (num % i === 0) sum += i;
    }
    return sum === num;
  }
  
  console.log("Is 6 a perfect number?", isPerfectNumber(6)); // true
  console.log("Is 28 a perfect number?", isPerfectNumber(28)); // true
  console.log("Is 12 a perfect number?", isPerfectNumber(12)); // false
  