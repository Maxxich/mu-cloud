import type { Meta, StoryObj } from '@storybook/react'
import Icon from '@/shared/assets/svg/svg.svg'
import { Button } from './Button'

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    argTypes: { onClick: { action: 'clicked' } },
    tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    variant: 'default',
    children: 'Click me',
    disabled: false,
    fullwidth: false,
    addonRight: undefined,
    addonLeft: undefined,
    size: 'm'

}

export const Default: Story = {
    args
}

export const Danger: Story = {
    args: {
        ...args,
        variant: 'danger'
    }
}

export const Green: Story = {
    args: {
        ...args,
        variant: 'green'
    }
}

export const Large: Story = {
    args: {
        ...args,
        size: 'l'
    }
}

export const ExtraLarge: Story = {
    args: {
        ...args,
        size: 'xl'
    }
}

export const Fullwidth: Story = {
    args: {
        ...args,
        fullwidth: true
    }
}

export const AddonLeft: Story = {
    args: {
        ...args,
        addonLeft: <Icon/>,
    }
}

export const AddonRight: Story = {
    args: {
        ...args,
        addonRight: <Icon/>,
    }
}
