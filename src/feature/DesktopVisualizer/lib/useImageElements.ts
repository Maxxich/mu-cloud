import { useEffect, useState } from 'react'
import { Track } from '@/entity/track'

export const useImageElements = (track: Track) => {

    const [image, setImage] = useState<HTMLImageElement>()
    const [imageSquare, setImageSquare] = useState<HTMLImageElement>()

    useEffect(() => {
        if (!track) return
        const imageSrc = track.picture_source.wide
        const image = new Image()
        image.src = imageSrc
        setImage(image)
    
        const imageSquareSrc = track.picture_source.square
        const imageSquare = new Image()
        imageSquare.src = imageSquareSrc
        setImageSquare(imageSquare)
    }, [track])


    return {
        image, imageSquare
    }
}