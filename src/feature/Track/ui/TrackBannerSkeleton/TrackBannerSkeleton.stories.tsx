import type { Meta, StoryObj } from '@storybook/react'
import { TrackBannerSkeleton } from './TrackBannerSkeleton'

const meta = {
    title: 'feature/Track/TrackBannerSkeleton',
    component:  TrackBannerSkeleton,
    parameters: {
        layout: 'centered',
        nextAuthMock: {
            session: 'authenticated'
        }
    },
    tags: ['autodocs'],
} satisfies Meta<typeof TrackBannerSkeleton>

export default meta
type Story = StoryObj<typeof meta>

const args: Story['args'] = {
    itemsCount: 5,
}

export const Desktop: Story = {
    args: {
        ...args,
    },
}
