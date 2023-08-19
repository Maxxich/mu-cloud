import classNames from 'classnames'
import cls from './Avatar.module.scss'
import Image from 'next/image'
import { memo } from 'react'


interface IImage {
  backlight?: boolean
  addon?: React.ReactElement
  className?: string
  src: string
  alt: string
  variant?: 'square' | 'circle'
  size?: 's' | 'm' | 'l'
}


export const Avatar: React.FunctionComponent<IImage> = memo(({
  backlight = false,
  addon,
  className,
  src,
  alt,
  variant = 'square',
  size = 'm'
}) => {

  const backlightComp = backlight && (
    //eslint-disable-next-line jsx-a11y/alt-text
    <Image className={classNames(cls.backlight, cls[variant])} alt={alt} src={src} placeholder='blur' blurDataURL={src} fill/>
  )

  const image = (
    //eslint-disable-next-line jsx-a11y/alt-text
    <Image className={classNames(cls.image, cls[variant])} alt={alt} src={src} placeholder='blur' blurDataURL={src} fill/>
  )

  const addonComp = addon && (
    <div className={classNames(cls.addon, cls[variant])}>
      {addon}
    </div>
  )

  return (
    <div
      className={classNames(cls.container, cls[size], className)}
    >
      {backlightComp}
      {image}
      {addonComp}
    </div>
  )
  ;
})

Avatar.displayName = 'Avatar'

