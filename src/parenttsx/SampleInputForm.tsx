import { useState } from "react";

export const SampleInputForm: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <br />
      <span>My Name is : {inputValue}</span>
      {inputValue === "John" ? (
        <div>You a VIP</div>
      ) : (
        <div>Hi, Ordinary Guest</div>
      )}
    </div>
  );
};
