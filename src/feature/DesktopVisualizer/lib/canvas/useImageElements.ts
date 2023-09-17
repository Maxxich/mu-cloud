import { useEffect, useState } from 'react'
import { Track } from '@/entity/track'

export const useImageElements = (track: Track) => {

    const [image, setImage] = useState<HTMLImageElement>(new Image())
    const [imageSquare, setImageSquare] = useState<HTMLImageElement>(new Image())

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