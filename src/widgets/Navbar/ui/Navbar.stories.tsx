import type { Meta, StoryObj } from '@storybook/react'
import { Navbar } from './Navbar'

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    parameters: {
        layout: 'centered',
        session: 'authenticated',
        loki: {
            skip: true
        }
    },
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    isMobile: false
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