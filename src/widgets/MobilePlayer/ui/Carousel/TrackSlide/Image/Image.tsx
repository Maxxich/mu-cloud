'use client'
import { useEffect, useRef, useState } from 'react'
import { default as NextImage } from 'next/image'
import classNames from 'classnames';
import cls from './Image.module.scss'



interface IImage extends React.ImgHTMLAttributes<HTMLImageElement>{
  smaller?: boolean
  src: string
  alt: string
}


export const Image: React.FunctionComponent<IImage> = ({
    smaller,
    alt,
    src,
    ...imageProps
}) => {

    const [height, setHeight] = useState<number>()
    const [loaded, setIsLoaded] = useState<boolean>(false)

    const ref = useRef<HTMLImageElement>()

    const onImageLoad = () => {
        setIsLoaded(true)
    }

    useEffect(() => {
        setIsLoaded(false)
    }, [src])

    useEffect(() => {
        setHeight(ref?.current?.offsetHeight)
        window.onresize = () => {
            if (ref && ref.current) {
                setHeight(ref.current.offsetHeight)
            }
        }
        return () => {
            window.onresize = null
        }
    }, [])

    const mods: Mods = {
        [cls.small]: smaller,
        [cls.skeleton]: !loaded
    }

    return (
        <div 
            className={cls.container} 
            style={{
                width: height
            }}
            ref={ref as any}
        >
            {height && <NextImage className={classNames(cls.image, mods)} 
                src={src}
                placeholder='blur'
                blurDataURL={src}
                alt={alt}
                height={height || 0}
                width={height || 0}
                onLoad={onImageLoad}
                key={src}
                {...imageProps as any}
            />}
        </div>
    )
}

