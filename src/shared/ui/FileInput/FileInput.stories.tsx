import type { Meta, StoryObj } from '@storybook/react'
import Icon from '@/shared/assets/svg/svg.svg'
import { FileInput } from './FileInput'

const meta = {
    title: 'shared/FileInput (client)',
    component: FileInput,
    parameters: {
        layout: 'centered',
    },
    argTypes: { onClick: { action: 'clicked' } },
    tags: ['autodocs'],
} satisfies Meta<typeof FileInput>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    label: 'File',
    placeholder: 'Choose file...',
    onChangeFileSuccess: (file) => alert('Get file in callback with name: ' + file.name),
    onChangeFileUndefined: () => alert('Change file error'),


}

export const Default: Story = {
    args
}

export const Error: Story = {
    args: {
        ...args,
        isError: true
    }
}


export const WithAddonLeft: Story = {
    args: {
        ...args,
        addonLeft: <Icon/>,
    }
}

export const WithAddonLeftAndError: Story = {
    args: {
        ...args,
        addonLeft: <Icon/>,
        isError: true
    }
}