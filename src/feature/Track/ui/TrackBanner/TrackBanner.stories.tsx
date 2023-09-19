import type { Meta, StoryObj } from '@storybook/react'
import { SessionDecorator } from '@/shared/config/storybook/SessionDecorator/SessionDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { TrackBanner } from './TrackBanner'
import { tracks } from '../helpers/tracks'

const meta = {
    title: 'feature/Track/TrackBanner',
    component:  TrackBanner,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [
        SessionDecorator
    ]
} satisfies Meta<typeof TrackBanner>

export default meta
type Story = StoryObj<typeof meta>

const args: Story['args'] = {
    tracks: tracks
}

export const Default: Story = {
    args: {
        ...args,
    },
}

Default.decorators = [
    StoreDecorator({
        player: {
            list: [],
            currentTrackId: undefined,
            currentTrackTime: undefined,
            currentTrackTimeLenght: undefined,
            isPaused: true
        }
    })
]



