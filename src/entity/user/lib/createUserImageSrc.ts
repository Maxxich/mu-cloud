import { backendUrl } from '@/shared/const/backendUrl'
import { avatarPlaceholderSmall } from '@/shared/const/avatarPlaceholders'
import { User } from '../model/types/user'

type ReturnImages = User['picture_source']

export const createUserImagesSrc = (user: User): ReturnImages => {
    return {
        big: user.picture_source.big ? (backendUrl + '/' + user.picture_source.big) : avatarPlaceholderSmall,
        medium: user.picture_source.medium ? (backendUrl + '/' + user.picture_source.medium) : avatarPlaceholderSmall,
        small: user.picture_source.small ? (backendUrl + '/' + user.picture_source.small) : avatarPlaceholderSmall
    }
}