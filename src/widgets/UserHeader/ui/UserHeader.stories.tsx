import type { Meta, StoryObj } from '@storybook/react'
import Image from '@/shared/assets/images/neon.jpeg'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { UserHeader } from './UserHeader'

const meta = {
    title: 'widgets/UserHeader',
    component: UserHeader,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        StoreDecorator({})
    ],
    tags: ['autodocs'],
} satisfies Meta<typeof UserHeader>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    isMobile: false,
    listeningCount: 21231,
    totalTracks: 23,
    user: {
        adress: '@maxich',
        id: 1,
        name: 'Maxich',
        picture_source: {
            big: Image.src,
            medium: Image.src,
            small: Image.src,
        },
    },
    viewerId: 2
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