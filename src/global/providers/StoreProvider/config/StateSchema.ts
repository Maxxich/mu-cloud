import { PlayerSchema } from '@/entity/player'
import { ViewerSchema } from '@/entity/viewer'
import { AddNewTrackSchema } from '@/feature/AddNewTrack'
import { SigninSchema } from '@/feature/SignIn'
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'

export interface StateSchema {
    player: PlayerSchema
    viewer: ViewerSchema

    // Async reducers
    signin?: SigninSchema
    addNewTrack?: AddNewTrackSchema
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