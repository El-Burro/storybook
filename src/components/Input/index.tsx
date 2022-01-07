import { ExecFileSyncOptionsWithBufferEncoding } from "child_process";
import { StyledInput } from "./style";

type Props = {
    name: string;
    
    id?: string;
    
    onClick?: (e: MouseEvent) => void
    onFocus?: (e: MouseEvent) => void
};

const Input = ({  }: Props) => {

    return <StyledInput></StyledInput>;
};

export default Input;