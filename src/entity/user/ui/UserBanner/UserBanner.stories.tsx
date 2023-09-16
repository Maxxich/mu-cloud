import type { Meta, StoryObj } from '@storybook/react'
import { UserBanner } from './UserBanner'
import { users } from '../helpers/users'

const meta = {
    title: 'entity/User/UserBanner',
    component:  UserBanner,
    parameters: {
        layout: 'centered',
    },
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
    ]
}

export const Default: Story = {
    args
}

