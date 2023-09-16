import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { TrackCard } from './TrackCard'
import { tracks } from '../helpers/tracks'

const meta = {
    title: 'feature/Track/TrackCard',
    component:  TrackCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof TrackCard>

export default meta
type Story = StoryObj<typeof meta>

const args: Story['args'] = {
    track: tracks[0],
    tracks: [tracks[0]]
}

export const Playing: Story = {
    args: {
        ...args,
    },
}

Playing.decorators = [
    StoreDecorator({
        player: {
            list: [tracks[0]],
            currentTrackId: tracks[0].id,
            currentTrackTime: 0,
            currentTrackTimeLenght: tracks[0].duration,
            isPaused: false
        }
    })
]

export const Paused: Story = {
    args: {
        ...args,
    },
}

Paused.decorators = [
    StoreDecorator({
        player: {
            list: [tracks[0]],
            currentTrackId: tracks[0].id,
            currentTrackTime: 0,
            currentTrackTimeLenght: tracks[0].duration,
            isPaused: true
        }
    })
]

export const NotSelected: Story = {
    args: {
        ...args,
    },
}

NotSelected.decorators = [
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



