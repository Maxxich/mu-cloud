import type { Meta, StoryObj } from '@storybook/react'
import { Dialog } from './Dialog'
import { Button } from '../Button/Button';

const meta = {
    title: 'shared/Dialog',
    component: Dialog.Wrapper,
    parameters: {
        layout: 'centered',
        loki: { skip: true },
    },
    render: (args) => <Dialog.Wrapper
        {...args}
    >
        <Dialog.Panel>
            <Dialog.Title>
                Dialog tite
            </Dialog.Title>
            <Dialog.Description>
                Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.
            </Dialog.Description>
            <Dialog.ButtonsGroup>
                <Button>
                    Cancel
                </Button>
                <Button>
                    Ok
                </Button>
            </Dialog.ButtonsGroup>
        </Dialog.Panel>
    </Dialog.Wrapper>,
    tags: ['autodocs'],
} satisfies Meta<typeof Dialog.Wrapper>

export default meta
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    // @ts-ignore
    args: {
        open: true,
        onClose: () => {}
    }
}
