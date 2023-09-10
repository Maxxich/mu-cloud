import { useEffect, useRef, useState } from 'react';
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

  const ref = useRef<HTMLImageElement>()

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
    [cls.small]: smaller 
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
            height={height}
            width={height}
            {...imageProps as any}
        />}
    </div>
  )
}

