import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import Picture from '@/shared/assets/images/images.jpg'
import { TrackCardDesktop } from './TrackCardDesktop'

const meta = {
    title: 'feature/Track/TrackCard/desktop',
    component:  TrackCardDesktop,
    parameters: {
        layout: 'centered',
        nextAuthMock: {
            session: 'authenticated'
        },
        loki: {
            skip: true
        }
    },
    tags: ['autodocs'],
    decorators: [
        StoreDecorator({})
    ]
} satisfies Meta<typeof TrackCardDesktop>

export default meta
type Story = StoryObj<typeof meta>

const args: Story['args'] = {
    id: 1,
    author: 'Maxich',
    author_href: 'https://www.google.com/',
    track_href: 'https://www.google.com/',
    image_src: Picture.src,
    track_src: 'https://www.google.com/',
    primary_name: 'Alive',
    secondary_name: 'Jaiden Stylez',
    duration: 123,
    isSelected: true,
    isPaused: false,
}

export const Playing: Story = {
    args: {
        ...args,
    },
}

export const Paused: Story = {
    args: {
        ...args,
        isPaused: true
    },
}

export const NotSelected: Story = {
    args: {
        ...args,
        isSelected: false
    },
}



