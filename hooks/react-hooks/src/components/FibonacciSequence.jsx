import React, { useState, useMemo } from 'react';

export const FibonacciSequence = function ({ n }) {
  const calculateFibonacci = (num) => {
    if (num <= 1) {
      return num;
    } else {
      return calculateFibonacci(num - 1) + calculateFibonacci(num - 2);
    }
  };

  const fibonacciNumber = useMemo(() => calculateFibonacci(n), [n]);

  return (
    <div>
      <p>The Fibonacci number at position {n} is: {fibonacciNumber}</p>
    </div>
  );
}
