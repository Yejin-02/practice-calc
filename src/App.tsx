import { useEffect, useState } from "react";
import styled from "styled-components";

function App() {
  const [numbers, setNumbers] = useState<number[]>([NaN]);
  const [operation, setOperation] = useState<string>("");

  const clear = () => {
    setNumbers([NaN]);
    setOperation("");
  };

  const changeSign = () => {
    const newNumbers = [...numbers];
    newNumbers[newNumbers.length - 1] *= -1;
    setNumbers(newNumbers); // Update the state with the new array
  };

  const percent = () => {};

  const division = () => {
    setNumbers([...numbers, NaN]);
    setOperation("division");
  };

  const multiplication = () => {
    setNumbers([...numbers, NaN]);
    setOperation("multiplication");
  };

  const subtraction = () => {
    if (isNaN(numbers[numbers.length - 1])) {
      console.log("어떻게 처리하지?");
      return 0;
    }
    setNumbers([...numbers, NaN]);
    setOperation("subtraction");
  };

  const addition = () => {
    setNumbers([...numbers, NaN]);
    setOperation("addition");
  };

  const result = () => {
    if (numbers.length > 1 && !isNaN(numbers[1])) {
      const numA = numbers[0];
      const numB = numbers[1];
      if (numB != undefined) {
        switch (operation) {
          case `division`:
            numbers[0] = numA / numB;
            break;
          case `multiplication`:
            numbers[0] = numA * numB;
            break;
          case `subtraction`:
            numbers[0] = numA - numB;
            break;
          case `addition`:
            numbers[0] = numA + numB;
            break;
          default:
            console.error("Unknown operation");
        }
        numbers.pop();
        setOperation("");
      }
    }
  };

  const getNumber = (event: React.MouseEvent<HTMLButtonElement>) => {
    const clickedElement = event.target as HTMLButtonElement;
    const inputNum = parseFloat(clickedElement.innerText);
    setNumbers((prevNumbers) => {
      const updatedNumbers = [...prevNumbers];
      const lastIndex = updatedNumbers.length - 1;
      if (isNaN(updatedNumbers[lastIndex])) {
        updatedNumbers[lastIndex] = inputNum;
      } else {
        updatedNumbers[lastIndex] = updatedNumbers[lastIndex] * 10 + inputNum;
      }
      return updatedNumbers;
    });
  };

  useEffect(() => {
    console.log("numbers:", numbers, "operation:", operation);
  }, [numbers, operation]);

  return (
    <StyledApp className="App">
      <StyledDiv>
        <OutputDiv>
          {isNaN(numbers[numbers.length - 1]) ? 0 : numbers[numbers.length - 1]}
        </OutputDiv>
        <InputDiv>
          <div className="firstRow">
            <LightButton onClick={() => clear()}>C</LightButton>
            <LightButton onClick={() => changeSign()}>+/-</LightButton>
            <LightButton onClick={() => percent()}>%</LightButton>
            <OrangeButton onClick={() => division()}>/</OrangeButton>
          </div>
          <div className="secondRow">
            <DarkButton className="numberButton" onClick={getNumber}>
              7
            </DarkButton>
            <DarkButton className="numberButton" onClick={getNumber}>
              8
            </DarkButton>
            <DarkButton className="numberButton" onClick={getNumber}>
              9
            </DarkButton>
            <OrangeButton onClick={() => multiplication()}>*</OrangeButton>
          </div>
          <div className="thirdRow">
            <DarkButton className="numberButton" onClick={getNumber}>
              4
            </DarkButton>
            <DarkButton className="numberButton" onClick={getNumber}>
              5
            </DarkButton>
            <DarkButton className="numberButton" onClick={getNumber}>
              6
            </DarkButton>
            <OrangeButton onClick={() => subtraction()}>-</OrangeButton>
          </div>
          <div className="forthRow">
            <DarkButton className="numberButton" onClick={getNumber}>
              1
            </DarkButton>
            <DarkButton className="numberButton" onClick={getNumber}>
              2
            </DarkButton>
            <DarkButton className="numberButton" onClick={getNumber}>
              3
            </DarkButton>
            <OrangeButton onClick={() => addition()}>+</OrangeButton>
          </div>
          <div className="fifthRow">
            <LongButton className="numberButton" onClick={getNumber}>
              0
            </LongButton>
            <DarkButton>.</DarkButton>
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
