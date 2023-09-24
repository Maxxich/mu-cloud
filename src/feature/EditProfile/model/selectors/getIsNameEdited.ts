import { StateSchema } from '@/global/providers/StoreProvider'

export const getIsNameEdited = (state: StateSchema) => {
    if (!state.EditProfile) return false
    if (state.EditProfile.name === state.EditProfile.initialName) return false
    return true
}