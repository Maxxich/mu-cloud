import type { Meta, StoryObj } from '@storybook/react'
import { Form } from './Form'
import { Input } from '../Input';
import { Button } from '../Button';

const meta = {
    title: 'shared/Form',
    component: Form,
    render: (props) => <Form>
        <Input placeholder='Your name...' label='Name'/>
        <Input placeholder='Your email...' label='Email'/>
        <Button fullwidth type='button'>Submit</Button>
    </Form>,
    tags: ['autodocs'],
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    //@ts-ignore
    args: {
        
    }
}