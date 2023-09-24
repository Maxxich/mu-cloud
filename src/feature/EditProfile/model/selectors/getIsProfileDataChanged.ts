import { StateSchema } from '@/global/providers/StoreProvider'
import { getIsAdressEdited } from './getIsAdressEdited'
import { getIsNameEdited } from './getIsNameEdited'
import { getIsAvatarEdited } from './getIsAvatarEdited'

export const getIsProfileDataChanged = (state: StateSchema) => {
    return [
        getIsAdressEdited(state),
        getIsNameEdited(state),
        getIsAvatarEdited(state)
    ].some(value => value === true)
}