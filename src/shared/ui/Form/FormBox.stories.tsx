import type { Meta, StoryObj } from '@storybook/react'
import { Form } from './Form'

const meta = {
    title: 'shared/FormBox',
    component: Form.Box,
    render: (props) => <Form.Box>
        Some error 
    </Form.Box>,
    tags: ['autodocs'],
} satisfies Meta<typeof Form.Box>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    //@ts-ignore
    args: {
        
    }
}