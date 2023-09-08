function fibonacci(num) {
// your code here
	if (num === 0) return 0;
  if (num === 1) return 0; // Special case as the Fibonacci series starts with 0, but some definitions start with 1.

  let prev = 0;
  let current = 1;

  for (let i = 2; i <= num; i++) {
    const next = prev + current;
    prev = current;
    current = next;
  }

  return prev;
}

module.exports = fibonacci;
