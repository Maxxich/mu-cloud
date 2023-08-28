import { useDispatch } from 'react-redux'
import { CombinedState, Reducer, ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { playerReducer } from '@/entity/player';
import { StateSchema } from './StateSchema';
import { viewerReducer } from '@/entity/viewer';
import { createReducerManager } from './ReducerManager';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    player: playerReducer,
    viewer: viewerReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
      reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
      preloadedState: initialState,
      devTools: true
  });
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
export const useAppDispatch: () => AppDispatch = useDispatch

