import { OperationProps } from "./division";

const multiplication = ({
  setValue,
  value,
}: OperationProps) => {
  setValue(value + "*");
};

export default multiplication;