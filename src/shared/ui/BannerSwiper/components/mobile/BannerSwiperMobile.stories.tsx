import type { Meta, StoryObj } from '@storybook/react'
import {  BannerSwiperMobile } from './BannerSwiperMobile'
import { coloredElements } from '../../helpers/story';


const meta = {
    title: 'shared/BannerSwiper/mobile',
    component: BannerSwiperMobile,
    parameters: {
        layout: 'centered',
    },
    render: (args) => (
        <div style={{ border: 'red 1px solid', width: '90%', margin: '0 auto' }}>
            <BannerSwiperMobile {...args}/>
        </div>
    )
} satisfies Meta<typeof BannerSwiperMobile>

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
