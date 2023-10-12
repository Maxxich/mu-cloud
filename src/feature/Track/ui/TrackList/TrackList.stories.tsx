import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { TrackList } from './TrackList'
import { tracks } from '../helpers/tracks'

const meta = {
    title: 'feature/Track/TrackList',
    component:  TrackList,
    parameters: {
        layout: 'centered',
        nextAuthMock: {
            session: 'authenticated'
        }
    },
    tags: ['autodocs'],
} satisfies Meta<typeof TrackList>

export default meta
type Story = StoryObj<typeof meta>

const args: Story['args'] = {
    tracks: tracks,
    isMobile: false
}

export const Desktop: Story = {
    args: {
        ...args,
    },
}

Desktop.decorators = [
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

export const Mobile: Story = {
    args: {
        ...args,
        isMobile: true
    },
}

Mobile.decorators = [
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



