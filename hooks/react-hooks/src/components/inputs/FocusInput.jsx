import React, { useRef } from 'react';

export const FocusInput = function () {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
    inputRef.current.value = 'Hello World';
    inputRef.current.style.color = 'red';
    inputRef.current.style.fontSize = '2rem';
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
