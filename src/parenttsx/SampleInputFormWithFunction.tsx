import { useState } from "react";

export const SampleInputFormWithFunction: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  return (
    <div>
      <div>
        Input{" "}
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </div>
      <div>
        Output <input value={formattedValue} type="text" />
      </div>
      <div>
        <button
          onClick={() => {
            const upper = inputValue.toUpperCase();
            setFormattedValue(upper);
          }}
        >
          To Upper
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            const lower = inputValue.toLowerCase();
            setFormattedValue(lower);
          }}
        >
          To Lower
        </button>
      </div>
    </div>
  );
};
