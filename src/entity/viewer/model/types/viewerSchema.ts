import { UserPictureSouces } from '@/entity/user'

export interface ViewerSchema {
    adress?: string
    name?: string
    id?: number
    picture_source?: UserPictureSouces
    email?: IEmail
    access_token?: string
    checking: boolean
}

interface IEmail {
    confirmed: boolean
  }
