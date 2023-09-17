import type { Meta, StoryObj } from '@storybook/react'
import { SessionDecorator } from '@/shared/config/storybook/SessionDecorator/SessionDecorator';
import { NavbarDesktop } from './NavbarDesktop'


const meta = {
    title: 'widgets/Navbar/desktop',
    component: NavbarDesktop,
    parameters: {
        layout: 'centered',
        loki: { skip: true },
    },
    argTypes: { onClick: { action: 'clicked' } },
    tags: ['autodocs'],
} satisfies Meta<typeof NavbarDesktop>

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

