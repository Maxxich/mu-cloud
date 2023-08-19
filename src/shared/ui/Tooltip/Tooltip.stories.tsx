import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from './Tooltip'

const meta = {
	title: 'shared/Tooltip',
	component: Tooltip,
	parameters: {
		layout: 'centered',
	},
    render: (props) => <>
        <div
            id={'#QASxc'}
            data-tooltip-id={'#QASxc'}
            data-tooltip-content={'I`m a tooltip!'}
            style={{
                display: 'inline-block'
            }}
        >
            Hover me!
        </div>
        <Tooltip {...props}/>
    </>,
	tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
        id: '#QASxc',
        place: 'bottom'
    }
}