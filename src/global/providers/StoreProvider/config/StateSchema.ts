import { PlayerSchema } from '@/entity/player'
import { ViewerSchema } from '@/entity/viewer'
import { SigninSchema } from '@/feature/SignIn'

export interface StateSchema {
    player: PlayerSchema
    viewer: ViewerSchema
    signin: SigninSchema
}