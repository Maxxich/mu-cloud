import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from './Slider'

const meta = {
    title: 'feature/Timeline/Slider',
    component: Slider,
    parameters: {
        layout: 'centered',
    },
    render: (args) => <div style={{
        width: 300
    }}>
        asdasdfsf
        <Slider {...args}/>
    </div>,
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    variant: 'desktop'
}

export const Default: Story = {
    args
}