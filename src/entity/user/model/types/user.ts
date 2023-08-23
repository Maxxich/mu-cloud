export interface User {
    adress: string
    name: string
    id: number
    picture_source: UserPictureSouces
  }
  
export interface UserPictureSouces{
    small: string | null | undefined
    medium: string | null | undefined
    big: string | null | undefined
  }
  