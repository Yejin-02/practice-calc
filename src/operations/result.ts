import { OperationProps } from "./division";

const result = ({
  setValue,
  value,
}: OperationProps) => {
    setValue(eval(value).toString());
};

export default result;