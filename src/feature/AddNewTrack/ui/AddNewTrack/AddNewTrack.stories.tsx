import type { Meta, StoryObj } from "@storybook/react"
import { AddNewTrack } from "./AddNewTrack"

const meta = {
	title: "feature/AddNewTrack",
	component:  AddNewTrack,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof AddNewTrack>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		
	},
}

export const Secondary: Story = {
	args: {
		
	},
}
