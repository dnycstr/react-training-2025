import React, { useEffect, useState } from "react";

interface CounterProps {
  onDecrement: () => void;
  sharedCount: number;
}

export const DecrementCounter: React.FC<CounterProps> = ({
  onDecrement,
  sharedCount,
}) => {
  const [count, setCount] = useState(0);

  console.log("Counter rendered");

  //   useEffect(() => {
  //     alert("Let's begin counting");
  //   }, []);

  //   useEffect(() => {
  //     alert("You incremented the counter");
  //   }, [count]);

  return (
    <div className="child">
      <div>My Counter: {count}</div>
      <div>My Shared Counter: {sharedCount}</div>
      <button
        onClick={() => {
          setCount(count - 1);
          onDecrement && onDecrement();
        }}
      >
        -
      </button>
    </div>
  );
};
