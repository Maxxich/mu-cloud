import { avatarPlaceholderSmall } from '@/shared/const/avatarPlaceholders'
import { User } from '../model/types/user'

type ReturnImages = User['picture_source']

export const createUserImagesSrc = (user: User): ReturnImages => {
    return {
        big: user.picture_source.big ? user.picture_source.big : avatarPlaceholderSmall,
        medium: user.picture_source.medium ?  user.picture_source.medium : avatarPlaceholderSmall,
        small: user.picture_source.small ? user.picture_source.small : avatarPlaceholderSmall
    }
}