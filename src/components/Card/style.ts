import styled from "styled-components"
export const StyledCard = styled.div`
	position: relative;
	box-sizing: border-box;
	overflow-y: hidden;

	max-height: 400px;
	aspect-ratio: 1/1.3;

	border: 1px solid #cdcdcd;
	border-radius: 10px;
	box-shadow: 0 0 8px 2px #cdcdcdcd;
	padding: 1.8rem 0.8rem;

    color: #464646;
`

export const StyledCardBar = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 6px;
	width: 100%;
	background: #9ec8e0;
`

export const CardContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 0.1fr auto 0.2fr;
	height: 100%;
`

export const StyledContent = styled.div`
	align-self: start;
`

export const StyledButtons = styled.div`
	align-self: end;
	justify-self: center;
`
