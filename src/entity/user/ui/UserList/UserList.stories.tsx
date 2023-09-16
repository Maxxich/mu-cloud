import type { Meta, StoryObj } from '@storybook/react'
import { UserList } from './UserList'
import { users } from '../helpers/users'

const meta = {
    title: 'entity/User/UserList',
    component:  UserList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof UserList>

export default meta
type Story = StoryObj<typeof meta>

const args: Story['args'] = {
    users
}

export const Default: Story = {
    args
}

