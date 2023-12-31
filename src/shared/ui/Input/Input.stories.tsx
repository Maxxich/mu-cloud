import type { Meta, StoryObj } from '@storybook/react'
import Icon from '@/shared/assets/svg/svg.svg'
import { Input } from './Input'

const meta = {
    title: 'shared/Input',
    component: Input,
    argTypes: { onClick: { action: 'clicked' } },
    tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    label: 'Name',
    placeholder: 'Type your name...',
}

export const Default: Story = {
    args
}

export const Error: Story = {
    args: {
        ...args,
        isError: true
    }
}


export const WithAddonLeft: Story = {
    args: {
        ...args,
        addonLeft: <Icon/>,
    }
}

export const WithAddonLeftAndError: Story = {
    args: {
        ...args,
        addonLeft: <Icon/>,
        isError: true
    }
}

export const Email: Story = {
    args: {
        ...args,
        type: 'email'
    }
}

export const Password: Story = {
    args: {
        ...args,
        type: 'password'
    }
}

export const PasswordWithError: Story = {
    args: {
        ...args,
        type: 'password',
        isError: true
    }
}