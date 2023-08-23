import { StateSchema } from '@/global/providers/StoreProvider'

export const getIsViewerSignedIn = (state: StateSchema) => Boolean(state.viewer.id)