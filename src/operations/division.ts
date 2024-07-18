import { Dispatch, SetStateAction } from "react";

export interface OperationProps {
  setValue: Dispatch<SetStateAction<string>>;
  value: string;
}

const division = ({
  setValue,
  value,
}: OperationProps) => {
  setValue(value + "/");
};

export default division;