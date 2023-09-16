import type { Meta, StoryObj } from '@storybook/react'
import { ItemsTitle } from './ItemsTitle'

const meta = {
    title: 'shared/ItemsTitle',
    component: ItemsTitle,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ItemsTitle>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    title: 'Заголовок'
}

export const OnlyTitle: Story = {
    args
}

export const WithHref: Story = {
    args: {
        ...args,
        href: '#'
    }
}
