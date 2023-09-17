import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { SignIn } from './Signin'

const meta = {
    title: 'feature/SignIn',
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
    StoreDecorator({
        signin: {
            email: 'example@email.ru',
            password: '00001111',
            status:'idle'
        }
    })
]

export const Loading: Story = {
    args
}
Loading.decorators = [
    StoreDecorator({
        signin: {
            email: 'example@email.ru',
            password: '00001111',
            status:'loading'
        }
    })
]

export const Error: Story = {
    args
}
Error.decorators = [
    StoreDecorator({
        signin: {
            email: 'example@email.ru',
            password: '00001111',
            status: 'error',
            errorMessage: 'Неправильные данные для входа'
        }
    })
]
