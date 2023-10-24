import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { UserHeaderSkeleton } from './UserHeaderSkeleton'

const meta = {
    title: 'widgets/UserHeader/UserHeaderSkeleton',
    component: UserHeaderSkeleton,
    parameters: {
        layout: 'padded',
    },
    decorators: [
        StoreDecorator({})
    ],
    tags: ['autodocs'],
} satisfies Meta<typeof UserHeaderSkeleton>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    isMobile: false,
}

export const Desktop: Story = {
    args
}

export const Mobile: Story = {
    args: {
        ...args,
        isMobile: true
    }
}