import type { Meta, StoryObj } from '@storybook/react'
import { TrackListSkeleton } from './TrackListSkeleton'

const meta = {
    title: 'feature/Track/TrackListSkeleton',
    component:  TrackListSkeleton,
    parameters: {
        layout: 'centered',
        nextAuthMock: {
            session: 'authenticated'
        }
    },
    tags: ['autodocs'],
} satisfies Meta<typeof TrackListSkeleton>

export default meta
type Story = StoryObj<typeof meta>

const args: Story['args'] = {
    itemsCount: 10
}

export const Default: Story = {
    args: {
        ...args,
    },
}

