import type { Meta, StoryObj } from '@storybook/react'
import { UserCardSkeleton } from './UserCardSkeleton'

const meta = {
    title: 'entity/User/UserCardSkeleton',
    component:  UserCardSkeleton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof UserCardSkeleton>

export default meta
type Story = StoryObj<typeof meta>

const args: Story['args'] = {

}

export const Column: Story = {
    args: {
        ...args,
        variant: 'column',
        width: 'fixed'
    },
}


export const Row: Story = {
    args: {
        ...args,
        variant: 'row',
        width: 'fixed'
    },
}