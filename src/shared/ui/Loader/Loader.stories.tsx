import type { Meta, StoryObj } from '@storybook/react'
import { Loader } from './Loader'

const meta = {
    title: 'shared/Loader',
    component: Loader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
}

export const MSize: Story = {
    args
}

export const LSize: Story = {
    args: {
        ...args,
        size: 'l'
    }
}


export const XLSize: Story = {
    args: {
        ...args,
        size: 'xl'
    }
}

export const Centered: Story = {
    args: {
        ...args,
        center: true
    }
}
