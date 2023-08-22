import type { Meta, StoryObj } from '@storybook/react'
import { Menu } from './Menu'
import Icon from '@/shared/assets/svg/svg.svg'

const meta = {
	title: 'shared/Menu',
	component: Menu,
	parameters: {
		layout: 'centered',
	},
    render: (args) => <Menu {...args}>
        <Menu.Button
            icon={<Icon/>}
            onClick={() => {}}
            onClose={args.onClose}
        >
            Удалить
        </Menu.Button>
        <Menu.Link
            icon={<Icon/>}
            href={'asdf'}
            onClose={args.onClose}
        >
            Удалить
        </Menu.Link>
    </Menu>,
	tags: ['autodocs'],
} satisfies Meta<typeof Menu>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    isOpen: true,
    children: 123,
}

export const Default: Story = {
	args
}
