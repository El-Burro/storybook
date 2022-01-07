import { ComponentStory, ComponentMeta } from "@storybook/react"
import Link from "../../components/Link"

const defaultArg = {
	isEnabled: true,
	href: "spoton.se"
}

export default {
	title: "Basic Components/Link",
	component: Link,
	argTypes: {
		backgroundColor: { control: "color" }
	},
	args: defaultArg
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = args => <Link {...args} />

export const Primary = Template.bind({})
Primary.args = {
	...defaultArg,
	text: "Some link text"
}
