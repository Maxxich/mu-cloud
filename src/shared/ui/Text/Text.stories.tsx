import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text'
import Icon from '@/shared/assets/svg/svg.svg'

const meta = {
	title: 'shared/Text',
	component: Text,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    children: 'Some awesome text',
}

export const MSize: Story = {
	args
}

export const SSize: Story = {
	args: {
		...args,
		size: 's'
	}
}

export const LSize: Story = {
	args: {
		...args,
		size: 'l'
	}
}

export const Bold: Story = {
	args: {
		...args,
		bold: true
	}
}

export const AlignRight: Story = {
	args: {
		...args,
		align: 'right'
	}
}

export const AlignCenter: Story = {
	args: {
		...args,
		align: 'center'
	}
}

export const Error: Story = {
	args: {
		...args,
		variant: 'error'
	}
}


export const Secondary: Story = {
	args: {
		...args,
		variant: 'secondary'
	}
}

export const Title: Story = {
	args: {
		...args,
		title: true,
		children: 'Some title'
	}
}
