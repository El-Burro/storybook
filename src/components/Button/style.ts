import styled, { css } from "styled-components"
import { Size } from "../../types/Size"
import { Variant } from "../../types/Variant"

const getButtonVariations = (size?: Size, variant?: Variant) => {
	let base = 12
	if (size === "small") base /= 2
	if (size === "large") base *= 2.5
	return `border-radius: ${variant === "round" ? "50%" : "10px"};
			width: ${base}rem;
			height: ${variant && variant !== "rect" ? base : base / 2}rem;
			aspect-ratio: ${variant !== "rect" && "1 / 1"};
			font-size:  ${base / 6}rem;`
}

const Button = styled.button<{
	children: string
	variant?: Variant
	size?: Size
	isEnabled?: boolean
	isInverted?: boolean
	isBold?: boolean
}>`
	display: block;

	border: 2px solid #c4c4c4;
	background: #ebebeb;
	color: #959595;
	font-weight: ${({ isBold }) => (isBold ? 600 : 200)};
	${({ size, variant }) => getButtonVariations(size, variant)}

	cursor: ${props => (props.isEnabled ? "pointer" : "not-allowed")};

	transition: background-color 0.4s, border-color 0.2s;
`
export const StyledStandardButton = styled(Button)`
	${({ isEnabled, isInverted }) =>
		isEnabled && (isInverted ? "color: #f6f6f6;" : "background: #fbfbfb;")}
`

export const StyledPrimaryButton = styled(StyledStandardButton)`
	${({ isEnabled, isInverted }) =>
		isEnabled &&
		(isInverted
			? css`
					background: #203f6d;
					border-color: #203f6d;

					&:hover {
						background: #cce7f6;
						border-color: #6b93ce;
						color: #203f6d;
					}
			  `
			: css`
					border-color: #9ec8e0;
					color: #203f6d;

					&:hover {
						background: #cce7f6;
						border-color: #6b93ce;
						color: #0b70c2;
					}
			  `)}
`

export const StyledSecondaryButton = styled(StyledStandardButton)`
	${({ isEnabled, isInverted }) =>
		isEnabled &&
		(isInverted
			? css`
					background: #1c7368;
					border-color: #1c7368;

					&:hover {
						background: #70ceb7;
						border-color: #32a194;
					}
			  `
			: css`
					border-color: #94dcb9;
					color: #1c7368;

					&:hover {
						background: #d9faea;
						border-color: #70ceb7;
					}
			  `)}
`

export const StyledWarningButton = styled(Button)`
	${({ isEnabled, isInverted }) =>
		isEnabled &&
		(isInverted
			? css`
					background: #7e130c;
					border-color: #7e130c;
					color: #f6f6f6;

					&:hover {
						background: #c93228;
						border-color: #7e130c;
					}
			  `
			: css`
					background: #fbfbfb;
					border-color: #c93228;
					color: #c93228;

					&:hover {
						background: #f5dddd;
					}
			  `)}
`
