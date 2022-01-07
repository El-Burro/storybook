import { ComponentStory, ComponentMeta } from "@storybook/react"
import { useState } from "react"
import { ButtonEnum } from "../../components/Button/ButtonEnum"
import Card from "../../components/Card"
import Link from "../../components/Link"
import P from "../../components/P"
import { Default } from "../Base/Button.stories"

const cardContent = (
	<>
		<P>
			<>
				<span>Nothing here yet, except for this </span>
				<Link text="very special link" href="#" />
				...
			</>
		</P>
		<P isError> Except for this little error!</P>
	</>
)

const defaultArg = {
	title: "SpotOn",
	titleIsCamel: false,
	closeButtonText: "Close"
}

export default {
	title: "Expanded Components/Card",
	component: Card,
	argTypes: {
		backgroundColor: { control: "color" },
		onClose: {}
	},
	args: defaultArg
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = args => {
	const [show, setShow] = useState(false)

	const toggleShow = () => setShow(!show)

	return (
		<div style={{ margin: "3em" }}>
			{show ? (
				<Card {...args} onClose={toggleShow}>
					{cardContent}
				</Card>
			) : (
				<Default
					text="Show card"
					type={ButtonEnum.SECONDARY}
					isEnabled
					isInverted
					onClick={toggleShow}
				/>
			)}
		</div>
	)
}

export const Primary = Template.bind({})
Primary.args = { ...defaultArg }
