import type { Meta, StoryObj } from '@storybook/react'
import { Image } from './Image'
import Picture from '@/shared/assets/images/images.jpg'
import Svg from '@/shared/assets/svg/svg.svg'

const meta = {
	title: 'shared/Image',
	component: Image,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Image>

export default meta
type Story = StoryObj<typeof meta>;

const Addon = <Svg style={{positon: 'absolute', top: '50%', left: '50%', fill: '#fff'}}/>

const args: Story['args'] = {
	alt: 'source',
    src: Picture.src,
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

