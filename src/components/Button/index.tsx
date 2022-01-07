import { Size } from "../../types/Size"
import { ButtonEnum } from "./ButtonEnum"
import {
	StyledPrimaryButton,
	StyledSecondaryButton,
	StyledWarningButton
} from "./style"

type Props = {
	text: string
	size?: Size
	variant?: "rect" | "square" | "round"
	type?: ButtonEnum
	isInverted?: boolean
	isEnabled?: boolean
	isBold?: boolean
	onClick?: (e: React.MouseEvent<HTMLButtonElement>, text: string) => void
}

const Button = ({ text, type, onClick, ...props }: Props) => {
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>
		props.isEnabled && onClick && onClick(e, text)
		
	switch (type) {
		case ButtonEnum.WARNING:
			return (
				<StyledWarningButton children={text} onClick={handleClick} {...props} />
			)
		case ButtonEnum.SECONDARY:
			return (
				<StyledSecondaryButton
					children={text}
					onClick={handleClick}
					{...props}
				/>
			)
		case ButtonEnum.PRIMARY:
		default:
			return (
				<StyledPrimaryButton children={text} onClick={handleClick} {...props} />
			)
	}
}

export default Button
