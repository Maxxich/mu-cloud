import type { Meta, StoryObj } from '@storybook/react'
import { ItemsTitleSkeleton } from './ItemsTitleSkeleton'

const meta = {
    title: 'shared/ItemsTitleSkeleton',
    component: ItemsTitleSkeleton,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ItemsTitleSkeleton>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
}

export const Default: Story = {
    args
}
