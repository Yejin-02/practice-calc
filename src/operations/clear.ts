import { Dispatch, SetStateAction } from "react";

const clear = (setValue:Dispatch<SetStateAction<string>>) => {
    setValue("");
};

export default clear;