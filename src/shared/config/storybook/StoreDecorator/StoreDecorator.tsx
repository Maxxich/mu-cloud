import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/global/providers/StoreProvider';
import { ReducersList } from '@/shared/config/DynamicModuleLoader/DynamicModuleLoader';
import { rtkApi } from '@/shared/api';
import { playerReducer } from '@/entity/player';
import { signinReducer } from '@/feature/SignIn';
import { signupReducer } from '@/feature/SignUp';
import { AddNewTrackSeparateImageLoadingReducer } from '@/feature/AddNewTrackSeparateImageLoading';
import { EditProfileReducer } from '@/feature/EditProfile';
import { confirmResetPasswordReducer } from '@/feature/ConfirmResetPassword';
import { ResetPasswordReducer } from '@/feature/ResetPassword';

const defaultAsyncReducers: ReducersList = {
    addNewTrackSeparateImageLoading: AddNewTrackSeparateImageLoadingReducer,
    api: rtkApi.reducer,
    player: playerReducer,
    signin: signinReducer,
    signup: signupReducer,
    confirmResetPassword: confirmResetPasswordReducer,
    EditProfile: EditProfileReducer,
    resetPassword: ResetPasswordReducer
};

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => {
        const Decorator = (StoryComponent: StoryFn) => (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
                mode='storybook'
            >
                <StoryComponent />
            </StoreProvider>
        );

        return Decorator
    }


