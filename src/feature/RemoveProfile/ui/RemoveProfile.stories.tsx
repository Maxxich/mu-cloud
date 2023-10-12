import type { Meta, StoryObj } from '@storybook/react'
import { RemoveProfile } from './RemoveProfile'

const meta = {
    title: 'feature/RemoveProfile (client)',
    component: RemoveProfile,
    parameters: {
        nextAuthMock: {
            session: 'authenticated'
        }
    }
} satisfies Meta<typeof RemoveProfile>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    
}

export const Default: Story = {
    args,
}
