import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { TimeLine } from './ui/TimeLine'
import { tracks } from '../Track/ui/helpers/tracks';

const meta = {
    title: 'feature/TimeLine',
    component: TimeLine,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        StoreDecorator({
            player: {
                currentTrackId: 1,
                currentTrackTime: 203,
                currentTrackTimeLenght: 403,
                interfaceHidden: false,
                isAudioExist: true,
                isOpened: false,
                isPaused: true,
                isSmallPictureActive: false,
                list: tracks,
                repeatTrackMode: false,
                showPlaylist: false
            }
        })
    ],
    tags: ['autodocs'],
} satisfies Meta<typeof TimeLine>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    variant: 'desktop'
}

export const Desktop: Story = {
    args
}

export const Mobile: Story = {
    args: {
        ...args,
        variant: 'mobile'
    }
}