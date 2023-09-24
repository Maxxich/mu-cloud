import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { PlayerSchema } from '@/entity/player'
import { ViewerSchema } from '@/entity/viewer'
import { AddNewTrackSchema } from '@/feature/AddNewTrack'
import { SigninSchema } from '@/feature/SignIn'
import { SignupSchema } from '@/feature/SignUp'
import { rtkApi } from '@/shared/api'
import { EditProfileSchema } from '@/feature/EditProfile'
import { ChangeAvatarSchema } from '@/feature/ChangeAvatar'
import { ChangeNameAndAdressSchema } from '@/feature/ChangeNameAndAdress'

export interface StateSchema {
    player: PlayerSchema
    viewer: ViewerSchema
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

    // Async reducers
    signin?: SigninSchema
    signup?: SignupSchema
    addNewTrack?: AddNewTrackSchema
    changeAvatar?: ChangeAvatarSchema
    ChangeNameAndAdress?: ChangeNameAndAdressSchema
    EditProfile?: EditProfileSchema
}

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (
        state: StateSchema,
        action: AnyAction,
    ) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    // true - вмонтирован, false - демонтирован
    getMountedReducers: () => MountedReducers;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;


export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}