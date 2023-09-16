import { User } from '@/entity/user'

export interface Track {
  id: number
  name: string
  name_secondary?: string
  audio_src: string
  picture_source: ITrackPictureSource
  duration: number
  color?: string
  feates: User[]
  owners: User[]
}

interface ITrackPictureSource {
  square_small: string
  square_medium: string
  wide: string
  square: string
}