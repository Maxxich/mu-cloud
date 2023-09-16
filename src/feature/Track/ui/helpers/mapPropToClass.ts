import { Width } from '../../model/types/TrackCard';
import cls from '../TrackCard/components/Sizes.module.scss'

export const mapWidthToClass: Record<Width, string> = {
    'full': cls.fullwidth,
    'adaptive': cls.adaptive,
    'fixed': ''
}