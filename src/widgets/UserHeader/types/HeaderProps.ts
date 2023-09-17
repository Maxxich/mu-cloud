import { User } from '@/entity/user'

export interface HeaderProps {
    user: User
    totalTracks: number
    listeningCount: number
    viewerId: number | undefined
}