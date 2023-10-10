import type { Meta, StoryObj } from '@storybook/react'
import Image from '@/shared/assets/images/neon.jpeg'
import { CropImage } from './CropImage'

const meta = {
    title: 'shared/CropImage',
    component: CropImage,
} satisfies Meta<typeof CropImage>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        aspectRatio: 2/1,
        cancelButtonText: 'Cancel',
        info: 'Crop image',
        minHeight: 700,
        minWidth: 700,
        submitButtonText: 'Crop',
        title: 'Cropper',
        imageFileURL: Image.src
    }
}