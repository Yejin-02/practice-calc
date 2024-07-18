import { OperationProps } from "./division";

const subtraction = ({
  setValue,
  value,
}: OperationProps) => {
  setValue(value + "-");
};

export default subtraction;