import { OperationProps } from "./division";

const addition = ({
  setValue,
  value,
}: OperationProps) => {
  setValue(value + "+");
};

export default addition;