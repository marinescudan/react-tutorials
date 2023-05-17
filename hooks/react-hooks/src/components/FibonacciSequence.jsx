import React, { useMemo } from 'react';

export const FibonacciSequence = function ({ n }) {
  const calculateFibonacci = (num) => {
    if (num <= 1) {
      return num;
    } else {
      return calculateFibonacci(num - 1) + calculateFibonacci(num - 2);
    }
  };
  
  // eslint-disable-next-line
  const fibonacciNumber = useMemo(() => calculateFibonacci(n), [n]);

  return (
    <div>
      <p>The Fibonacci number at position {n} is: {fibonacciNumber}</p>
    </div>
  );
}
