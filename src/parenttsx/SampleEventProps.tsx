import { useState } from "react";
import { DecrementCounter } from "../components/DecrementCounter";
import { IncrementCounter } from "../components/IncrementCounter";

export const SampleEventProps: React.FC = () => {
  const [parentCount, setParentCount] = useState(0);
  const [sharedCount, setSharedCount] = useState(0);

  const incrementParentCount = () => {
    setParentCount(parentCount + 1);
    setSharedCount(sharedCount + 1);
  };

  const decrementParentCount = () => {
    setParentCount(parentCount - 1);
    setSharedCount(sharedCount - 1);
  };

  console.log("App rendered");
  return (
    <div className="app">
      <div>Parent Counter: {parentCount}</div>
      <IncrementCounter
        onIncrement={() => {
          setParentCount(parentCount + 1);
          setSharedCount(sharedCount + 1);
        }}
        sharedCount={sharedCount}
      />
      <br />
      <DecrementCounter
        onDecrement={decrementParentCount}
        sharedCount={sharedCount}
      />
    </div>
  );
};
