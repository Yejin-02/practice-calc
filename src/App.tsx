import { useEffect, useState } from "react";
import styled from "styled-components";

function App() {
  const [value, setValue] = useState<string>("");

  const clear = () => {
    setValue("");
  };

  const changeSign = () => {
    setValue(eval(value + "*(-1)").toString());
  };

  const percent = () => {
    setValue(eval(value + "*0.01").toString());
  };

  const division = () => {
    setValue(value + "/");
  };

  const multiplication = () => {
    setValue(value + "*");
  };

  const subtraction = () => {
    setValue(value + "-");
  };

  const addition = () => {
    setValue(value + "+");
  };

  const result = () => {
    setValue(eval(value).toString());
  };

  const getInput = (event: React.MouseEvent<HTMLButtonElement>) => {
    const clickedElement = event.target as HTMLButtonElement;
    const inputNum = clickedElement.innerText;
    setValue(value + inputNum);
  };

  useEffect(() => {
    console.log("value:", value);
  }, [value]);

  return (
    <StyledApp className="App">
      <StyledDiv>
        <OutputDiv>{value}</OutputDiv>
        <InputDiv>
          <div className="firstRow">
            <LightButton onClick={() => clear()}>C</LightButton>
            <LightButton onClick={() => changeSign()}>+/-</LightButton>
            <LightButton onClick={() => percent()}>%</LightButton>
            <OrangeButton onClick={() => division()}>/</OrangeButton>
          </div>
          <div className="secondRow">
            <DarkButton className="numberButton" onClick={getInput}>
              7
            </DarkButton>
            <DarkButton className="numberButton" onClick={getInput}>
              8
            </DarkButton>
            <DarkButton className="numberButton" onClick={getInput}>
              9
            </DarkButton>
            <OrangeButton onClick={() => multiplication()}>*</OrangeButton>
          </div>
          <div className="thirdRow">
            <DarkButton className="numberButton" onClick={getInput}>
              4
            </DarkButton>
            <DarkButton className="numberButton" onClick={getInput}>
              5
            </DarkButton>
            <DarkButton className="numberButton" onClick={getInput}>
              6
            </DarkButton>
            <OrangeButton onClick={() => subtraction()}>-</OrangeButton>
          </div>
          <div className="forthRow">
            <DarkButton className="numberButton" onClick={getInput}>
              1
            </DarkButton>
            <DarkButton className="numberButton" onClick={getInput}>
              2
            </DarkButton>
            <DarkButton className="numberButton" onClick={getInput}>
              3
            </DarkButton>
            <OrangeButton onClick={() => addition()}>+</OrangeButton>
          </div>
          <div className="fifthRow">
            <LongButton className="numberButton" onClick={getInput}>
              0
            </LongButton>
            <DarkButton onClick={getInput}>.</DarkButton>
            <OrangeButton onClick={() => result()}>=</OrangeButton>
          </div>
        </InputDiv>
      </StyledDiv>
    </StyledApp>
  );
}

export const Button = styled.button`
  width: 56px;
  height: 56px;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 28px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
  }
`;

const OrangeButton = styled(Button)`
  background-color: #ff962d;
  color: white;
`;

const DarkButton = styled(Button)`
  background-color: rgb(47, 47, 47);
  color: white;
`;

const LightButton = styled(Button)`
  background-color: darkgray;
`;

const LongButton = styled(DarkButton)`
  width: 117px;
`;

const InputDiv = styled.div`
  height: 300px;
  padding-left: 5px;
`;

const OutputDiv = styled.div`
  height: 130px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 200px;
  padding-bottom: 20px;
`;

const StyledDiv = styled.div`
  background-color: rgb(0, 0, 0);
  height: 460px;
  width: 249px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 10px;
  border-radius: 15px;
`;

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default App;
