import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { backendUrl } from '@/shared/const/backendUrl';
import { EditProfile } from './EditProfile/EditProfile'

const meta = {
    title: 'feature/EditProfile (client)',
    component: EditProfile,
    parameters: {
        mockData: [
            {
                url: backendUrl + '/user-private/edit-profile',
                method: 'POST',
                status: 201,
                response: '',
                delay: 3000
            },
        ],
        nextAuthMock: {
            session: 'authenticated'
        }
    },
} satisfies Meta<typeof EditProfile>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    
}

export const Idle: Story = {
    args,
    decorators: [
        StoreDecorator({
            EditProfile: {
                adress: '',
                initialAdress: '',
                name: '',
                initialName: '',
                uploadedAvatarMimeType: undefined,
                avatarCroppedExist: false,
                validationErrors: {
                    adress: {
                        empty: false,
                        exceedsMaxLenght: false,
                        hasBannedSymbols: false
                    },
                    name: {
                        empty: false,
                        exceedsMaxLenght: false
                    },
                    uploadedAvatarMimeType: {
                        invalidMimeType: false,
                    },
                    avatarCropped: {
                        empty: false
                    }
                },
                status: 'idle'
            }
        })
    ]
}

export const Loading: Story = {
    args,
    decorators: [
        StoreDecorator({
            EditProfile: {
                adress: '',
                initialAdress: '',
                name: '',
                initialName: '',
                uploadedAvatarMimeType: undefined,
                avatarCroppedExist: false,
                validationErrors: {
                    adress: {
                        empty: false,
                        exceedsMaxLenght: false,
                        hasBannedSymbols: false
                    },
                    name: {
                        empty: false,
                        exceedsMaxLenght: false
                    },
                    uploadedAvatarMimeType: {
                        invalidMimeType: false,
                    },
                    avatarCropped: {
                        empty: false
                    }
                },
                status: 'loading'
            }
        })
    ]
}