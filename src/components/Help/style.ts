import styled from "styled-components"

export const StyledHelp = styled.span<{
	color: string
}>`
	display: inline-flex;
	justify-content: center;
	align-items: center;

	height: 1.2em;
	width: 1.2em;
	aspect-ratio: 1/1;

	font-size: 0.925em;
	margin-right: 1rem;

	border: 1px solid ${({ color }) => color};
	border-radius: 50%;

	cursor: pointer; 
`
