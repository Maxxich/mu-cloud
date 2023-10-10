import type { Meta, StoryObj } from '@storybook/react'
import {  BannerSwiper } from './BannerSwiper'
import { coloredElements } from './helpers/story';

const meta = {
    title: 'shared/BannerSwiper (client)',
    component: BannerSwiper,
    tags: ['autodocs']
} satisfies Meta<typeof BannerSwiper>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    children: coloredElements,
    isMobile: false
}

export const OneDesktop: Story = {
    args: {
        ...args,
    },
    render: (args) => (
        <div style={{ width: '600px',margin: '0 auto' }}>
            <BannerSwiper {...args}/>
        </div>
    )
}

export const ThreeDesktop: Story = {
    args: {
        ...args,
        rows: 3
    },
    render: (args) => (
        <div style={{ width: '600px',margin: '0 auto' }}>
            <BannerSwiper {...args}/>
        </div>
    )
}

export const OneMobile: Story = {
    args: {
        ...args,
        isMobile: true
    },
    render: (args) => (
        <div style={{ width: '300px',margin: '0 auto' }}>
            <BannerSwiper {...args}/>
        </div>
    )
}

export const ThreeMobile: Story = {
    args: {
        ...args,
        rows: 3,
        isMobile: true
    },
    render: (args) => (
        <div style={{ width: '300px',margin: '0 auto' }}>
            <BannerSwiper {...args}/>
        </div>
    )
}
