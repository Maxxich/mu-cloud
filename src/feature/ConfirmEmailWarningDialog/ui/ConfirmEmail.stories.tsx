import type { Meta, StoryObj } from '@storybook/react'
import { ConfirmEmailWarningDialog } from './ConfirmEmailWarningDialog'

const meta = {
    title: 'feature/ConfirmEmailWarningDialog (client)',
    component: ConfirmEmailWarningDialog,
    parameters: {
        nextAuthMock: {
            session: 'authenticatedNotConfirmed'
        },
        loki: {
            skip: true
        }
    }
} satisfies Meta<typeof ConfirmEmailWarningDialog>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    
}

export const Default: Story = {
    args,

}
