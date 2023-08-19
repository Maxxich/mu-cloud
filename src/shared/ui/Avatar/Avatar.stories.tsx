import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'
import Image from '@/shared/assets/images/images.jpg'
import Svg from '@/shared/assets/svg/svg.svg'

const meta = {
	title: 'shared/Avatar',
	component: Avatar,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>;

const Addon = <Svg style={{positon: 'absolute', top: '50%', left: '50%', fill: '#fff'}}/>

const args: Story['args'] = {
	alt: 'source',
    src: Image.src,
}

export const Default: Story = {
	args
}

export const WithBacklight: Story = {
	args: {
        ...args,
        backlight: true
    }
}

export const WithAddon: Story = {
	args: {
        ...args,
        addon: Addon
    }
}

export const WithAddonAndBacklight: Story = {
	args: {
        ...args,
        addon: Addon,
        backlight: true
    }
}

export const MSizeWithAddonAndBacklight: Story = {
	args: {
        ...args,
        addon: Addon,
        backlight: true,
        size: 'm'
    }
}

export const LSizeWithAddonAndBacklight: Story = {
	args: {
        ...args,
        addon: Addon,
        backlight: true,
        size: 'l'
    }
}

export const LSizeWithAddonAndBacklightCircle: Story = {
	args: {
        ...args,
        addon: Addon,
        backlight: true,
        size: 'l',
        variant: 'circle'
    }
}

