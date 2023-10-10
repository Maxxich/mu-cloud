import type { Meta, StoryObj } from '@storybook/react'
import { Logo } from './Logo'

const meta = {
    title: 'shared/Logo',
    component: Logo,
    parameters: {
        loki: { skip: true },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
   
}

export const Default: Story = {
    args
}
