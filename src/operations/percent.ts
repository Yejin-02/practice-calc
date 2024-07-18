import { OperationProps } from "./division";

const percent = ({
  setValue,
  value,
}: OperationProps) => {
    setValue(eval(value + "*0.01").toString());
};

export default percent;