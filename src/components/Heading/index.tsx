import { StyledHeading } from "./style"

type Props = {
	text: string
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const Heading = ({ text, as }: Props) => {
	return <StyledHeading as={as}>{text}</StyledHeading>
}

export default Heading
