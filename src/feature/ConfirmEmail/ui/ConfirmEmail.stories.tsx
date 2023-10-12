import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { backendUrl } from '@/shared/const/backendUrl';
import { ConfirmEmail } from './ConfirmEmail'

const meta = {
    title: 'feature/ConfirmEmail (client)',
    component: ConfirmEmail,
} satisfies Meta<typeof ConfirmEmail>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    
}

export const Default: Story = {
    args,
    parameters: {
        mockData: [
            {
                url: backendUrl + '/auth-private/confirm/link',
                method: 'GET',
                status: 200,
                response: '',
                delay: 3000
            },
        ],
    },
    decorators: [
        StoreDecorator({})
    ]
}
