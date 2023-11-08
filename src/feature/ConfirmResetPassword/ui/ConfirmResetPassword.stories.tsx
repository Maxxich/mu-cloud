import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { backendUrl } from '@/shared/const/backendUrl';
import { ConfirmResetPassword } from './ConfirmResetPassword'

const meta = {
    title: 'feature/ConfirmResetPassword (client)',
    component: ConfirmResetPassword,
    parameters: {
        mockData: [
            {
                url: backendUrl + '/auth/reset',
                method: 'POST',
                status: 201,
                response: '',
                delay: 3000
            },
        ],
        loki: {
            skip: true
        }
        
    },
} satisfies Meta<typeof ConfirmResetPassword>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    
}

export const Idle: Story = {
    args,
    decorators: [
        StoreDecorator({
            confirmResetPassword: {
                password: '',
                errorMessage: undefined,
                passwordConfirm: '',
                requestError: '',
                status: 'idle',
                validationErrors: {
                    password: {
                        empty: false,
                        exceedsMaxLenght: false,
                        exceedsMinLenght: false,
                        hasBannedSymbols: false
                    },
                    passwordConfirm: {
                        empty: false,
                        notEqualsToPassword: false
                    }
                }
            }
        })
    ]
}
