import { StateSchema } from '@/global/providers/StoreProvider';

export const getIsSoftReset = (state: StateSchema) => state?.addNewTrackSeparateImageLoading?.softReset