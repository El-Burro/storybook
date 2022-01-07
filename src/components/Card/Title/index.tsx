import { toCamel } from "../../../helpers/CaseChange"
import P from "../../P"
import { StyledTitle } from "./style"

type Props = {
	children: string
	titleIsCamel: boolean
}

const Title = ({ children, titleIsCamel }: Props) => {
	const title = titleIsCamel ? toCamel(children) : children

	return (
		<StyledTitle>
			<P size="large">{title}</P>
		</StyledTitle>
	)
}

export default Title
