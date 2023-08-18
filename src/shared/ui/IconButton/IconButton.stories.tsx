import type { Meta, StoryObj } from '@storybook/react'
import { IconButton } from './IconButton'
import Icon from '@/shared/assets/svg/svg.svg'

const meta = {
	title: 'shared/IconButton',
	component: IconButton,
	parameters: {
		layout: 'centered',
	},
	argTypes: { onClick: { action: 'clicked' } },
	tags: ['autodocs'],
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    icon: <Icon/>,
	size: 'm',
    disabled: false

}

export const Default: Story = {
	args
}

export const secondary: Story = {
	args: {
        ...args,
        variant: 'secondary'
    }
}


export const Disabled: Story = {
	args: {
		...args,
		disabled: true
	}
}

export const Large: Story = {
	args: {
		...args,
		size: 'l'
	}
}

export const ExtraLarge: Story = {
	args: {
		...args,
		size: 'xl'
	}
}
