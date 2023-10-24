import type { Meta, StoryObj } from '@storybook/react'
import { UserBannerSkeleton } from './UserBannerSkeleton'

const meta = {
    title: 'entity/User/UserBannerSkeleton',
    component:  UserBannerSkeleton,
    tags: ['autodocs'],
} satisfies Meta<typeof UserBannerSkeleton>

export default meta
type Story = StoryObj<typeof meta>

const args: Story['args'] = {
    itemsCount: 5
}

export const Desktop: Story = {
    args,
    render: (args) => (
        <div style={{ width: '600px',margin: '0 auto' }}>
            <UserBannerSkeleton {...args}/>
        </div>
    )
}

export const Mobile: Story = {
    args: {
        ...args,
    },
    render: (args) => (
        <div style={{ width: '300px',margin: '0 auto' }}>
            <UserBannerSkeleton {...args}/>
        </div>
    )
}

