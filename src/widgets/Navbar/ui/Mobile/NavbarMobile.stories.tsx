import type { Meta, StoryObj } from '@storybook/react'
import { SessionDecorator } from '@/shared/config/storybook/SessionDecorator/SessionDecorator';
import { NavbarMobile } from './NavbarMobile'

const meta = {
    title: 'widgets/Navbar/mobile',
    component: NavbarMobile,
    parameters: {
        layout: 'centered',
        loki: { skip: true },
    },
    argTypes: { onClick: { action: 'clicked' } },
    tags: ['autodocs'],
} satisfies Meta<typeof NavbarMobile>

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

Default.parameters = {
    nextAuthMock: {
        session: 'unknown'
    }
};