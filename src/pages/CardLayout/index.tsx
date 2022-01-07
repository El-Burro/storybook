import { MouseEvent, useState } from "react"
import { StyledcardLayout } from "./style"
import Card from "../../components/Card"
import P from "../../components/P"
import Link from "../../components/Link"

const cardData = [
	{ title: "This is One nice title", children: <>No kids</> },
	{
		title: "title Two is nice TOO",
		children: (
			<>
				<P isError>You got an error!</P>
				<Link text="Learn more here" href="#" />
			</>
		)
	}
]

const CardLayout = () => {
	const [clicked, setClicked] = useState("")

	const handleClose = (_e: MouseEvent<HTMLButtonElement>, title: string) => {
		setClicked(title)
	}

	return (
		<>
			<P>
				<>Clicked Card: {clicked}</>
			</P>
			<StyledcardLayout>
				{cardData.map((c, i) => (
					<Card
						title={c.title}
						onClose={handleClose}
						titleIsCamel={i % 2 !== 0}
					>
						{c.children || <></>}
					</Card>
				))}
			</StyledcardLayout>
		</>
	)
}
export default CardLayout
