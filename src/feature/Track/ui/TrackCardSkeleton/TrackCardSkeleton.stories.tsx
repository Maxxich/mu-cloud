import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { TrackCardSkeleton } from './TrackCardSkeleton'

const meta = {
    title: 'feature/Track/TrackCardSkeleton',
    component:  TrackCardSkeleton,
    parameters: {
        layout: 'centered',
        nextAuthMock: {
            session: 'authenticated'
        }
    },
    decorators: [
        StoreDecorator({})
    ],
    tags: ['autodocs'],
} satisfies Meta<typeof TrackCardSkeleton>

export default meta
type Story = StoryObj<typeof meta>

const args: Story['args'] = {
    width: 'full'
}

export const Default: Story = {
    args: {
        ...args,
    },
}

