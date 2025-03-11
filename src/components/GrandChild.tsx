import { useContext } from "react";
import { HomeContext } from "./GrandParent";

export const GrandChild = () => {
  const homeContext = useContext(HomeContext);
  console.log("GrandChild Render");
  return (
    <div
      style={{
        margin: "10px 0px",
        border: "3px solid yellow",
        padding: "10px",
      }}
    >
      <h1>GrandChild</h1>
      <div>My home is {homeContext.home}</div>
      <div>
        <input
          type="text"
          value={homeContext.home}
          onChange={(e) => homeContext.setHome(e.target.value)}
        />
      </div>
    </div>
  );
};
