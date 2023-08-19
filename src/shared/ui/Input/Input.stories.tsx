import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import Icon from '@/shared/assets/svg/svg.svg'

const meta = {
	title: 'shared/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	argTypes: { onClick: { action: 'clicked' } },
	tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    label: 'Name',
    placeholder: 'Type your name...',
}

export const Default: Story = {
	args
}

export const Error: Story = {
	args: {
        ...args,
        errorMessage: 'Something went wrong!'
    }
}


export const WithAddonLeft: Story = {
	args: {
		...args,
		addonLeft: <Icon/>,
	}
}

export const Email: Story = {
	args: {
		...args,
		type: 'email'
	}
}

export const Password: Story = {
	args: {
		...args,
		type: 'password'
	}
}

export const PasswordWithError: Story = {
	args: {
		...args,
		type: 'password',
		errorMessage: 'Something went wrong!'
	}
}