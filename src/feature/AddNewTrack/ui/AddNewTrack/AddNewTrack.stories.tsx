import type { Meta, StoryObj } from '@storybook/react'
import { backendUrl } from '@/shared/const/backendUrl';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { AddNewTrack } from './AddNewTrack'

const meta = {
    title: 'feature/AddNewTrack (client)',
    component: AddNewTrack,
   
    tags: ['autodocs'],
} satisfies Meta<typeof AddNewTrack>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    
}

export const Idle: Story = {
    args,
    parameters: {
        mockData: [
            {
                url: backendUrl + '/tracks-private/upload',
                method: 'POST',
                status: 201,
                response: '',
                delay: 3000
            },
        ],
    },
    decorators: [
        StoreDecorator({
            addNewTrack: {
                audioFileMimeType: undefined,
                imageCroppedSquareMimeType: undefined,
                imageCroppedWideMimeType: undefined,
                imageFileMimeType: undefined,
                name: undefined,
                name_secondary: undefined,
                status: 'idle',
                tab: 'form',
                validationErrors: {
                    name: {
                        empty: false,
                        exceedsMaxLenght: false
                    },
                    name_secondary: {
                        exceedsMaxLenght: false
                    },
                    audioFile: {
                        invalidMimeType: false,
                        empty: false
                    },
                    imageFile: {
                        invalidMimeType: false,
                        empty: false
                    },
                    imageCroppedSquareFile: {
                        empty: false
                    },
                    imageCroppedWideFile: {
                        empty: false
                    }
                },
            }
        })
    ],
}

export const Loading: Story = {
    args,
    parameters: {
        mockData: [
            {
                url: backendUrl + '/tracks-private/upload',
                method: 'POST',
                status: 500,
                response: '',
                delay: 3000
            },
        ],
    },
    decorators: [
        StoreDecorator({
            addNewTrack: {
                audioFileMimeType: undefined,
                imageCroppedSquareMimeType: undefined,
                imageCroppedWideMimeType: undefined,
                imageFileMimeType: undefined,
                name: undefined,
                name_secondary: undefined,
                status: 'loading',
                tab: 'form',
                validationErrors: {
                    name: {
                        empty: false,
                        exceedsMaxLenght: false
                    },
                    name_secondary: {
                        exceedsMaxLenght: false
                    },
                    audioFile: {
                        invalidMimeType: false,
                        empty: false
                    },
                    imageFile: {
                        invalidMimeType: false,
                        empty: false
                    },
                    imageCroppedSquareFile: {
                        empty: false
                    },
                    imageCroppedWideFile: {
                        empty: false
                    }
                },
            }
        })
    ],
}