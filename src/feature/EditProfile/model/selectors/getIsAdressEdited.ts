import { StateSchema } from '@/global/providers/StoreProvider'

export const getIsAdressEdited = (state: StateSchema) => {
    if (!state.EditProfile) return false
    if (state.EditProfile.adress === state.EditProfile.initialAdress) return false
    return true
}