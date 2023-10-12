import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { backendUrl } from '@/shared/const/backendUrl';
import { ResetPassword } from './ResetPassword'

const meta = {
    title: 'feature/ResetPassword (client)',
    component: ResetPassword,
    parameters: {
        mockData: [
            {
                url: backendUrl + '/auth/reset/link',
                method: 'GET',
                status: 201,
                response: '',
                delay: 3000
            },
        ],
    },
} satisfies Meta<typeof ResetPassword>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    
}

export const Idle: Story = {
    args,
    decorators: [
        StoreDecorator({
            resetPassword: {
                email: '',
                error: undefined,
                status: 'idle'
            }
        })
    ]
}

export const Loading: Story = {
    args,
    decorators: [
        StoreDecorator({
            resetPassword: {
                email: '',
                error: undefined,
                status: 'loading'
            }
        })
    ]
}