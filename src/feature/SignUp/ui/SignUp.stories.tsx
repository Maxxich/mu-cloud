import type { Meta, StoryObj } from '@storybook/react'
import { SignUp } from './SignUp'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
	title: 'features/SignUp',
	component: SignUp,
	parameters: {
		layout: 'centered',
	},
	argTypes: { onClick: { action: 'clicked' } },
	tags: ['autodocs'],
} satisfies Meta<typeof SignUp>

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
        signup: {
            errorMessage: 'Неправильные данные для входа'
        }
    })
]
