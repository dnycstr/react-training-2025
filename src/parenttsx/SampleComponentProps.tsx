import { HDiv } from "../components/HDiv";
import { Header } from "../components/Header";
import { RedDiv } from "../components/RedDiv";

export const SampleComponentProps: React.FC = () => {
  return (
    <div>
      <Header>
        <HDiv>
          <RedDiv>Sample Component Props</RedDiv>
          <RedDiv>Sample Component Props</RedDiv>
          <RedDiv>Sample Component Props</RedDiv>
        </HDiv>
      </Header>
      <div>
        <div> Sample Component Props</div>
        <div>
          <div className="horizontal-div-container">
            <div className="red-div">children</div>
            <div className="red-div">children</div>
            <div className="red-div">children</div>
          </div>
        </div>
      </div>
    </div>
  );
};
