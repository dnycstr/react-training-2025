import { Child } from "./Child";

export const Parent = () => {
  console.log("Parent Render");
  return (
    <div>
      <div
        style={{
          margin: "10px 0px",
          border: "3px solid green",
          padding: "10px",
        }}
      >
        <h1>Parent</h1>
        <Child />
      </div>
    </div>
  );
};
