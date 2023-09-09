import type { Meta, StoryObj } from '@storybook/react'
import { Logo } from './Logo'
import Icon from '@/shared/assets/svg/svg.svg'
import { SyntheticEvent } from 'react'

const meta = {
	title: 'shared/Logo',
	component: Logo,
	parameters: {
		layout: 'centered',
        loki: { skip: true },
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
   
}

export const Default: Story = {
	args
}