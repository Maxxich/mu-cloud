import type { Meta, StoryObj } from '@storybook/react'
import { UserListSkeleton } from './UserListSkeleton'

const meta = {
    title: 'entity/User/UserListSkeleton',
    component:  UserListSkeleton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof UserListSkeleton>

export default meta
type Story = StoryObj<typeof meta>

const args: Story['args'] = {
    itemsCount: 10
}

export const Default: Story = {
    args
}

