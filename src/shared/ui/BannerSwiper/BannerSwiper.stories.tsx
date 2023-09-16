import type { Meta, StoryObj } from '@storybook/react'
import {  BannerSwiper } from './BannerSwiper'
import { coloredElements } from './helpers/story';

const meta = {
    title: 'shared/BannerSwiper',
    component: BannerSwiper,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    render: (args) => (
        <div style={{ width: '90%', margin: '0 auto' }}>
            <BannerSwiper {...args}/>
        </div>
    )
} satisfies Meta<typeof BannerSwiper>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    children: coloredElements
}

export const One: Story = {
    args: {
        ...args,
    }
}

export const Three: Story = {
    args: {
        ...args,
        rows: 3
    }
}
