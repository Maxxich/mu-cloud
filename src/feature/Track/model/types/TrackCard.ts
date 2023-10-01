import { Url } from 'next/dist/shared/lib/router/router'

export type Width = 'full' | 'adaptive' | 'fixed'
interface ITrackCard {
    id: number
    primary_name: string
    secondary_name?: string
    author: string
    image_src: string
    isSelected: boolean
    isPaused: boolean
    onToggleTrack: (id: number) => void
    duration: number
    track_href: Url
    author_href: Url
    track_src: string
    width?: Width
    showIsDeleted?: boolean
  }
  
export interface IDesktopCard extends ITrackCard {

  }
  
export interface IMobileCard extends ITrackCard {
  }