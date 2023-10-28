import type { Meta, StoryObj } from '@storybook/react'
import { Progress } from './Progress'

const meta = {
    title: 'shared/Progress',
    component: Progress,
    render: (args) => <div style={{ width: 300 }}>
        <Progress {...args}/>
    </div>,
    tags: ['autodocs'],
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    margin: '15px',
    progress: 50
}

export const Progress50: Story = {
    args
}

export const Progress0: Story = {
    args: {
        ...args,
        progress: 0
    }
}

export const Progress100: Story = {
    args: {
        ...args,
        progress: 100
    }
}
