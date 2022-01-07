import { StyledHelp } from "./style";

type Props = {
   color?: string;
};

const Help = ({ color="#202020" }: Props) => {

    return <StyledHelp color={color}>?</StyledHelp>;
};

export default Help;