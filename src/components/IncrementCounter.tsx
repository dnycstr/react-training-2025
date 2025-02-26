import React, { useEffect, useState } from "react";

interface CounterProps {
  onIncrement: () => void;
  sharedCount: number;
}

export const IncrementCounter: React.FC<CounterProps> = ({
  onIncrement,
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
      <div>Child Counter: {count}</div>
      <div>My Shared Counter: {sharedCount}</div>
      <button
        onClick={() => {
          setCount(count + 1);
          onIncrement && onIncrement();
        }}
      >
        +
      </button>
    </div>
  );
};
