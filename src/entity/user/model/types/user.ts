export interface User {
    adress: string
    name: string
    id: number
    picture_source: UserPictureSouces
    email: {
        confirmed: boolean
    }
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