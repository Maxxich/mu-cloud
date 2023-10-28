import { useSelector } from 'react-redux'
import { getColor } from '@/entity/player'
import { decreaseColorIntensity } from '@/shared/lib/helpers/decreaseColorIntensity/decreaseColorIntensity'

export const useColor = (
    variant: 'primary' | 'secondary' = 'primary'
) => {
    const color = useSelector(getColor)
    if (color) {
        if (variant === 'primary') {
            return color
        } else if (variant === 'secondary') {
            return decreaseColorIntensity(color, 1.5)
        }
    }
    return undefined
}