export interface User {
    adress: string
    name: string
    id: number
    picture_source: UserPictureSouces
}
  
export interface UserPictureSouces{
    small: string
    medium: string
    big: string 
  }


export interface UsersResponse {
    users: User[],
    total: number
}