import type { Meta, StoryObj } from '@storybook/react'
import { Menu } from './Menu'
import Icon from '@/shared/assets/svg/svg.svg'
import { SyntheticEvent } from 'react'

const meta = {
	title: 'shared/Menu',
	component: Menu,
	parameters: {
		layout: 'centered',
	},
    render: (args) => <Menu {...args}>
        <Menu.Button
            icon={<Icon/>}
            onClick={(e: SyntheticEvent<HTMLButtonElement | HTMLAnchorElement | HTMLDivElement>) => {}}
            // @ts-ignore
            onClose={args.onClose}
        >
            Удалить
        </Menu.Button>
        <Menu.Link
            icon={<Icon/>}
            href={'asdf'}
            // @ts-ignore
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
    onClose: (e: SyntheticEvent<HTMLButtonElement | HTMLAnchorElement | HTMLDivElement>) => {}
}

export const Default: Story = {
	args
}
