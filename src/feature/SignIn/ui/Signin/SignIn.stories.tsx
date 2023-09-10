import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { SignIn } from './Signin'

const meta = {
	title: 'features/SignIn',
	component: SignIn,
	parameters: {
		layout: 'centered',
	},
	argTypes: { onClick: { action: 'clicked' } },
	tags: ['autodocs'],
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
	
}

export const Default: Story = {
	args
}
Default.decorators = [
    StoreDecorator({})
]

export const Error: Story = {
	args
}
Error.decorators = [
    StoreDecorator({
        signin: {
            errorMessage: 'Неправильные данные для входа',
            email: 'asdfasdfasdf'
        }
    })
]
