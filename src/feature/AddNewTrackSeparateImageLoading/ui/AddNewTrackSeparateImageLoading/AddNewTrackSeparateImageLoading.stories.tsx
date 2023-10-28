import type { Meta, StoryObj } from '@storybook/react'
import { backendUrl } from '@/shared/const/backendUrl';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { AddNewTrackSeparateImageLoading } from './AddNewTrackSeparateImageLoading'

const meta = {
    title: 'feature/AddNewTrackSeparateImageLoading (client)',
    component: AddNewTrackSeparateImageLoading,
   
    tags: ['autodocs'],
} satisfies Meta<typeof AddNewTrackSeparateImageLoading>

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
            addNewTrackSeparateImageLoading: {
                audioFileMimeType: undefined,
                imageCroppedSquareMimeType: undefined,
                imageCroppedWideMimeType: undefined,
                imageSquareFileMimeType: undefined,
                imageWideFileMimeType: undefined,
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
                    imageSquareFile: {
                        invalidMimeType: false,
                        empty: false
                    },
                    imageWideFile: {
                        invalidMimeType: false,
                        empty: false
                    },
                    imageCroppedSquareFile: {
                        empty: false
                    },
                    imageCroppedWideFile: {
                        empty: false
                    }
                }
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
            addNewTrackSeparateImageLoading: {
                audioFileMimeType: undefined,
                imageCroppedSquareMimeType: undefined,
                imageCroppedWideMimeType: undefined,
                imageSquareFileMimeType: undefined,
                imageWideFileMimeType: undefined,
                name: undefined,
                name_secondary: undefined,
                status: 'loading',
                progress: 50,
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
                    imageSquareFile: {
                        invalidMimeType: false,
                        empty: false
                    },
                    imageWideFile: {
                        invalidMimeType: false,
                        empty: false
                    },
                    imageCroppedSquareFile: {
                        empty: false
                    },
                    imageCroppedWideFile: {
                        empty: false
                    }
                }
            }
        })
    ],
}