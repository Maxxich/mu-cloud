import type { Meta, StoryObj } from '@storybook/react'
import { SessionDecorator } from '@/shared/config/storybook/SessionDecorator/SessionDecorator';
import { Navbar } from './Navbar'

const meta = {
    title: 'widgets/Navbar/Navbar',
    component: Navbar,
    parameters: {
        layout: 'centered',
    },
    argTypes: { onClick: { action: 'clicked' } },
    tags: ['autodocs'],
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    
}

export const Default: Story = {
    args
}
Default.decorators = [
    SessionDecorator
]