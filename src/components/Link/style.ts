import styled from "styled-components"

export const StyledLink = styled.a<{ isEnabled: boolean; bgColor?: string }>`
	color: ${props => (props.isEnabled ? "#1C7368" : "#464646")};
	font-size: 1.8rem;
	padding: 0.3rem;
	background: ${({ isEnabled, bgColor }) =>
		isEnabled ? bgColor || "#d9faea60" : "#d4d4d4"};
	border-radius: 5px;

	transition: 0.3s;

	&:hover {
		${({ isEnabled }) =>
			isEnabled &&
			`
				color: #d9ebe8;
				background: #4f856b;
			`};
	}
`
