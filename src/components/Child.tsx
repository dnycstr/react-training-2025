import { GrandChild } from "./GrandChild";

export const Child = () => {
  console.log("Child Render");
  return (
    <div
      style={{
        margin: "10px 0px",
        border: "3px solid red",
        padding: "10px",
      }}
    >
      <h1>Child</h1>
      <GrandChild />
    </div>
  );
};
