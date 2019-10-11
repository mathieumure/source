import { css } from "@emotion/core"
import {
	textSans,
	palette,
	size,
	focusHalo,
	transitions,
} from "@guardian/src-foundations"

export const button = css`
	display: inline-flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	font-weight: bold;
	text-decoration: none;
	${textSans({ level: 3, fontWeight: "bold" })};
	box-sizing: border-box;
	border: none;
	background: transparent;
	cursor: pointer;
	transition: ${transitions.medium};

	&:focus {
		${focusHalo};
	}
`

const lowPriority = css`
	padding: 0;

	&:hover {
		text-decoration: underline;
	}
`

export const highPriorityLight = css`
	background-color: ${palette.yellow.main};
	color: ${palette.neutral[7]};

	&:hover {
		background-color: ${palette.yellow.dark};
	}
`

export const moderatePriorityLight = css`
	background-color: ${palette.neutral[93]};
	color: ${palette.neutral[7]};

	&:hover {
		background-color: ${palette.neutral[86]};
	}
`

export const lowPriorityLight = css`
	${lowPriority};
	background-color: ${palette.neutral[100]};
	color: ${palette.neutral[7]};
`

export const highPriorityDark = css`
	background-color: ${palette.yellow.main};
	color: ${palette.neutral[7]};

	&:hover {
		background-color: ${palette.yellow.dark};
	}
`

export const moderatePriorityDark = css`
	background-color: ${palette.neutral[93]};
	color: ${palette.neutral[7]};

	&:hover {
		background-color: ${palette.neutral[86]};
	}
`

export const lowPriorityDark = css`
	${lowPriority};
	background-color: ${palette.neutral[10]};
	color: ${palette.neutral[100]};
`

export const highPriorityBlue = css`
	background-color: ${palette.yellow.main};
	color: ${palette.neutral[7]};

	&:hover {
		background-color: ${palette.yellow.dark};
	}
`

export const moderatePriorityBlue = css`
	background-color: ${palette.neutral[93]};
	color: ${palette.neutral[7]};

	&:hover {
		background-color: ${palette.neutral[86]};
	}
`

export const lowPriorityBlue = css`
	${lowPriority};
	background-color: ${palette.brand.main};
	color: ${palette.neutral[100]};
`

export const highPriorityYellow = css`
	background-color: ${palette.neutral[7]};
	color: ${palette.neutral[100]};

	&:hover {
		background-color: ${palette.neutral[46]};
	}
`

export const moderatePriorityYellow = css`
	background-color: ${palette.neutral[93]};
	color: ${palette.neutral[7]};

	&:hover {
		background-color: ${palette.neutral[86]};
	}
`

export const lowPriorityYellow = css`
	${lowPriority};
	background-color: ${palette.yellow.main};
	color: ${palette.neutral[7]};
`

export const defaultSize = css`
	height: ${size.large}px;
	min-height: ${size.large}px;
	padding: 0 ${size.large / 2}px;
	border-radius: ${size.large / 2}px;
`

export const smallSize = css`
	height: ${size.medium}px;
	min-height: ${size.medium}px;
	padding: 0 ${size.medium / 2}px;
	border-radius: ${size.medium / 2}px;
`

export const iconDefault = css`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${size.large / 2}px;
		height: auto;
	}
`

export const iconSmall = css`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${size.medium / 2}px;
		height: auto;
	}
`

export const iconLeft = css`
	svg {
		margin: 0 ${-size.large / 8}px 0 ${size.large / 4}px;
	}
`

export const iconRight = css`
	flex-direction: row-reverse;
	svg {
		margin: 0 ${size.large / 4}px 0 ${-size.large / 8}px;
	}
`

export const iconOnlyDefault = css`
	width: ${size.large}px;
	justify-content: center;
`

export const iconOnlySmall = css`
	width: ${size.medium}px;
	justify-content: center;
`