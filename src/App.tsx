import "./App.css";
import { SampleComponentProps } from "./parenttsx/SampleComponentProps";
import { SampleDataProps } from "./parenttsx/SampleDataProps";
import { SampleEventProps } from "./parenttsx/SampleEventProps";
import { SampleInputForm } from "./parenttsx/SampleInputForm";
import { SampleInputFormWithFunction } from "./parenttsx/SampleInputFormWithFunction";

function App() {
  return (
    <div>
      {/* <SampleDataProps />
      <SampleEventProps />
      <SampleComponentProps /> */}

      {/* <SampleInputForm /> */}
      <SampleInputFormWithFunction />
    </div>
  );
}

export default App;
