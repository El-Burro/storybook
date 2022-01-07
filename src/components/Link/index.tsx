import { StyledLink } from "./style"

type Props = {
	text: string
	href: string
	isEnabled?: boolean
	backgroundColor?: string
}

const Link = ({ text, href, isEnabled = true, backgroundColor }: Props) => (
	<StyledLink bgColor={backgroundColor} href={href} isEnabled={isEnabled}>
		{text}
	</StyledLink>
)

export default Link
