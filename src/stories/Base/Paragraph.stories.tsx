import { ComponentStory, ComponentMeta } from "@storybook/react"
import P from "../../components/P"

const defaultArg = {
	isError: false
}

export default {
	title: "Basic Components/Paragraph",
	component: P,
	args: defaultArg,
	argTypes: {
		size: {
			control: {
				type: "select"
			}
		}
	},
	parameters: { controls: { sort: "requiredFirst" } }
} as ComponentMeta<typeof P>

const Template: ComponentStory<typeof P> = args => <P {...args} />

export const Standard = Template.bind({})
Standard.args = {
	...defaultArg,
	children: "This is a regular paragraph."
}
