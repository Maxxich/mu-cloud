import type { Meta, StoryObj } from '@storybook/react'
import { UserBanner } from './UserBanner'
import { users } from '../helpers/users'

const meta = {
    title: 'entity/User/UserBanner',
    component:  UserBanner,
    tags: ['autodocs'],
} satisfies Meta<typeof UserBanner>

export default meta
type Story = StoryObj<typeof meta>

const args: Story['args'] = {
    users: [
        ...users,
        ...users,
        ...users,
        ...users,
    ],
    isMobile: false
}

export const Desktop: Story = {
    args,
    render: (args) => (
        <div style={{ width: '600px',margin: '0 auto' }}>
            <UserBanner {...args}/>
        </div>
    )
}

export const Mobile: Story = {
    args: {
        ...args,
        isMobile: true
    },
    render: (args) => (
        <div style={{ width: '300px',margin: '0 auto' }}>
            <UserBanner {...args}/>
        </div>
    )
}

