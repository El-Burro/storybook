import { ComponentStory, ComponentMeta } from "@storybook/react"
import Button from "../../components/Button"
import { ButtonEnum } from "../../components/Button/ButtonEnum"
import { Size } from "../../types/Size"
import { Variant } from "../../types/Variant"

const defaultArg = {
	isEnabled: true,
	isInverted: false,
	isBold: false,
	size: "normal" as Size,
	variant: "rect" as Variant
}

export default {
	title: "Basic Components/Button",
	component: Button,
	argTypes: {
		onClick: {
			action: "Clicked"
		},
		size: {
			control: {
				type: "select"
			}
		},
		type: {
			control: {
				type: "select"
			},
			table: {
				disable: true
			}
		},
		variant: {
			control: {
				type: "select"
			}
		}
	},
	parameters: { controls: { sort: "requiredFirst" } }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
	text: "Button"
}

export const Primary = Template.bind({})
Primary.args = {
	...defaultArg,
	text: "Button"
}

export const Secondary = Template.bind({})
Secondary.args = {
	text: "Submit",
	type: ButtonEnum.SECONDARY
}

export const Warning = Template.bind({})
Warning.args = {
	...defaultArg,
	text: "Delete",
	type: ButtonEnum.WARNING
}

export const Small = Template.bind({})
Small.args = {
	...defaultArg,
	text: "Button",
	size: "small"
}
Small.argTypes = {
	size: {
		table: {
			disable: true
		}
	},
	type: {
		table: {
			disable: false
		},
		defaultValue: 0
	},
	variant: {
		table: {
			disable: true
		}
	}
}

export const Normal = Template.bind({})
Normal.args = {
	...defaultArg,
	text: "Button"
}
Normal.argTypes = {
	size: {
		table: {
			disable: true
		}
	},
	type: {
		table: {
			disable: false
		}
	},
	variant: {
		table: {
			disable: true
		}
	}
}

export const Large = Template.bind({})
Large.args = {
	...defaultArg,
	text: "ButtonX",
	size: "large"
}
Large.argTypes = {
	size: {
		table: {
			disable: true
		}
	},
	type: {
		table: {
			disable: false
		}
	},
	variant: {
		table: {
			disable: true
		}
	}
}
