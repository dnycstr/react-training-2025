import { useState, createContext } from "react";
import { Parent } from "./Parent";

interface HomeContextType {
  home: string;
  setHome: any;
}

const defaultContextValue: HomeContextType = {
  home: "",
  setHome: () => {},
};

export const HomeContext = createContext(defaultContextValue);

export const GrandParent = () => {
  const [home, setHome] = useState("PH");

  console.log("GrandParent Render");

  return (
    <HomeContext.Provider
      value={{ home: home, setHome: setHome } as HomeContextType}
    >
      <div
        style={{
          margin: "10px 0px",
          border: "3px solid blue",
          padding: "10px",
        }}
      >
        <h1>GrandParent</h1>
        <div>My Home is {home}</div>

        <Parent />
      </div>
    </HomeContext.Provider>
  );
};
