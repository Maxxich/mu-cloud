import type { Meta, StoryObj } from '@storybook/react'
import Icon from '@/shared/assets/svg/svg.svg'
import { IconButton } from './IconButton'

const meta = {
    title: 'shared/IconButton',
    component: IconButton,
    argTypes: { onClick: { action: 'clicked' } },
    tags: ['autodocs'],
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    icon: <Icon/>,
    size: 'm',
    disabled: false

}

export const Default: Story = {
    args
}

export const Secondary: Story = {
    args: {
        ...args,
        variant: 'secondary'
    }
}


export const Disabled: Story = {
    args: {
        ...args,
        disabled: true
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

export const WithTooltip: Story = {
    args: {
        ...args,
        tooltipContent: 'Click me',
        tooltipId: '$#dmkc',
    }
}

export const WillRotate: Story = {
    args: {
        ...args,
        willRotate: true
    }
}