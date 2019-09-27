import { linkTo } from "@storybook/addon-links"
import React, { ReactNode } from "react"
import { css } from "@emotion/core"

const spaceBetween = css`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

export const WithBackgroundToggle = ({
	storyKind,
	storyName,
	selectedValue,
	children,
}: {
	storyKind: string
	storyName: string
	selectedValue: string
	children: ReactNode
}) => (
	<div css={spaceBetween}>
		{children}
		<select
			value={`${storyName} ${selectedValue}`}
			onChange={linkTo(storyKind, (e: Event) => {
				const target = e.currentTarget as HTMLSelectElement

				if (!target) {
					return ""
				}

				return target.value
			})}
		>
			<option value={`${storyName} light`}>Light mode</option>
			<option value={`${storyName} dark`}>Dark mode</option>
			<option value={`${storyName} blue`}>Blue background</option>
			<option value={`${storyName} yellow`}>Yellow background</option>
		</select>
	</div>
)
