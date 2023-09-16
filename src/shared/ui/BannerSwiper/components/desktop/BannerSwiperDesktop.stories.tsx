import type { Meta, StoryObj } from '@storybook/react'
import { BannerSwiperDesktop } from './BannerSwiperDesktop'
import { coloredElements } from '../../helpers/story';

const meta = {
    title: 'shared/BannerSwiper/desktop',
    component: BannerSwiperDesktop,
    parameters: {
        layout: 'centered',
    },
    render: (args) => (
        <div style={{ border: 'red 1px solid', width: '90%', margin: '0 auto' }}>
            <BannerSwiperDesktop {...args}/>
        </div>
    )
} satisfies Meta<typeof BannerSwiperDesktop>

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
