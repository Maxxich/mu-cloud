import type { Meta, StoryObj } from '@storybook/react'
import { UserCard } from './UserCard'
import Image from '@/shared/assets/images/images.jpg'

const meta = {
	title: 'entity/UserCard',
	component:  UserCard,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof UserCard>

export default meta
type Story = StoryObj<typeof meta>

const args: Story['args'] = {
	href: '',
	image_src: Image.src,
	name: 'Maxich',
}

export const Row: Story = {
	args
}

export const Column: Story = {
	args: {
		...args,
		variant: 'column'
	},
}
