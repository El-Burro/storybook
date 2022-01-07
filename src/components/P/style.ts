import styled from "styled-components"
import { Size } from "../../types/Size"

const getSize = (size: Size) => {
	const Sizes = {
		small: "1.2",
		normal: "1.8",
		large: "3.2"
	}

	return Sizes[size] || Sizes.normal
}

export const StyledP = styled.p<{ isError: boolean; size: Size }>`
	display: flex;
	align-items: center;
	color: #${({ isError }) => (isError ? "c93228" : "202020")};
	line-height: 3.2rem;
	border: 1px solid transparent;
	font-size: ${({ size }) => getSize(size)}rem;
	margin: 0.2rem 0 0.6rem;
	padding: 0.6rem;

	cursor: pointer;

	&:hover {
		${({ isError }) =>
			isError &&
			`
				background: #f0c6c380;
				border-color: #c93228;
				border-radius: 5px;
				color: #77160f;

				& span {
					border-color: #77160f;
				}
			`}
	}
`
