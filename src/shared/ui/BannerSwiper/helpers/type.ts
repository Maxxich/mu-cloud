import { ReactNode } from 'react'

export interface BannerSwiperProps {
    children: ReactNode[]
    rows?: 1 | 3
    overflow?: 'hidden' | 'visible'
    className?: string
}