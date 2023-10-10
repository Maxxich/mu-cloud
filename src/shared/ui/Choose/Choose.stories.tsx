import type { Meta, StoryObj } from '@storybook/react'
import { Choose } from './Choose'

const meta = {
    title: 'shared/Choose',
    component: Choose.Link,
    render: () => <>
        <Choose.Link
            href='/'
        >
            Variant 1
        </Choose.Link>
        <Choose.Separator>
            or
        </Choose.Separator>
        <Choose.Link
            href='/'
        >
            Variant 2
        </Choose.Link>
    </>,
} satisfies Meta<typeof Choose.Link>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    //@ts-ignore
    args: {
        
    }
}