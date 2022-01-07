import { Size } from "../../types/Size"
import Help from "../Help"
import { StyledP } from "./style"

type Props = {
	children: JSX.Element | string
	size?: Size
	isError?: boolean
}

const P = ({ children, size = "normal", isError = false }: Props) => (
	<StyledP size={size} isError={isError}>
		{isError && <Help color="#C93228" />}
		<div>{children}</div>
	</StyledP>
)

export default P
