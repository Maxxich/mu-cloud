import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { SignUp } from './SignUp'

const meta = {
    title: 'feature/SignUp',
    component: SignUp,
    parameters: {
        layout: 'centered',
        nextAuthMock: {
            session: 'unknown'
        }
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
    StoreDecorator({
        signup: {
            email: 'example@email.ru',
            name: 'Maxich',
            password: '00001111',
            passwordConfirm: '00001111',
            status: 'idle',
            validationErrors: {}
        }
    })
]

export const Loading: Story = {
    args
}
Loading.decorators = [
    StoreDecorator({
        signup: {
            email: 'example@email.ru',
            name: 'Maxich',
            password: '00001111',
            passwordConfirm: '00001111',
            status: 'loading',
            validationErrors: {}
        }
    })
]

export const NameError: Story = {
    args
}
NameError.decorators = [
    StoreDecorator({
        signup: {
            email: 'example@email.ru',
            name: '',
            password: '00001111',
            passwordConfirm: '00001111',
            status: 'idle',
            validationErrors: {
                name: {
                    empty: true
                }
            }
        }
    })
]
export const PasswordEmpty: Story = {
    args
}
PasswordEmpty.decorators = [
    StoreDecorator({
        signup: {
            email: 'example@email.ru',
            name: 'Maxich',
            password: '',
            passwordConfirm: '00001111',
            status: 'idle',
            validationErrors: {
                password: {
                    empty: true
                }
            }
        }
    })
]

export const PasswordsNotEqualsEmpty: Story = {
    args
}
PasswordsNotEqualsEmpty.decorators = [
    StoreDecorator({
        signup: {
            email: 'example@email.ru',
            name: 'Maxich',
            password: '0012',
            passwordConfirm: '00001111',
            status: 'idle',
            validationErrors: {
                passwordConfirm: {
                    notEqualsToPassword: true
                }
            }
        }
    })
]

export const RequestError: Story = {
    args
}
RequestError.decorators = [
    StoreDecorator({
        signup: {
            email: 'example@email.ru',
            name: 'Maxich',
            password: '00001111',
            passwordConfirm: '00001111',
            status: 'error',
            requestError: 'Сервер недоступен',
            validationErrors: {}
        }
    })
]



export const EmailError: Story = {
    args
}
EmailError.decorators = [
    StoreDecorator({
        signup: {
            email: '',
            name: 'Maxich',
            password: '00001111',
            passwordConfirm: '00001111',
            status: 'idle',
            validationErrors: {
                email: {
                    empty: true
                }
            }
        }
    })
]
