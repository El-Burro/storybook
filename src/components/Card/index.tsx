import { MouseEvent } from "react"
import Button from "../Button"
import {
	StyledCard,
	StyledCardBar,
	CardContainer,
	StyledContent,
	StyledButtons
} from "./style"
import Title from "./Title"

type Props = {
	title: string
	children: JSX.Element
	titleIsCamel?: boolean
	closeButtonText?: string
	onClose?: (e: MouseEvent<HTMLButtonElement>, title: string) => void
}

const Card = ({
	title,
	children,
	titleIsCamel = false,
	closeButtonText,
	onClose
}: Props) => {
	const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) =>
		onClose && onClose(e, title)

	return (
		<StyledCard>
			<StyledCardBar />
			<CardContainer>
				<Title titleIsCamel={titleIsCamel}>{title}</Title>
				<StyledContent>{children}</StyledContent>
				<StyledButtons>
					<Button
						text={closeButtonText || "Submit"}
						isInverted
						isEnabled
						onClick={handleButtonClick}
					/>
				</StyledButtons>
			</CardContainer>
		</StyledCard>
	)
}

export default Card
