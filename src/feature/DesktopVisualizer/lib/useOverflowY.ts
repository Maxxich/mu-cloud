import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getIsPlayerOpened } from '@/entity/player'

export const useOverflowY = () => {

    const isOpened = useSelector(getIsPlayerOpened)

    useEffect(() => {
        if (isOpened) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'auto'
        }
    }, [isOpened])
}