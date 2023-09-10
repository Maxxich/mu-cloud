import classNames from 'classnames'
import { default as NextImage } from 'next/image'
import { memo } from 'react'
import cls from './Image.module.scss'

export type ImageSize = 'xs' | 's' | 'm' | 'l'

interface IImage {
  backlight?: boolean
  addon?: React.ReactElement
  className?: string
  src: string
  alt: string
  variant?: 'square' | 'circle'
  size?: ImageSize
  showAddon?: boolean
  disableAddonHover?: boolean
}


export const Image: React.FunctionComponent<IImage> = memo(({
  backlight = false,
  addon,
  className,
  src,
  alt,
  variant = 'square',
  size = 'm',
  showAddon,
  disableAddonHover
}) => {

  const backlightComp = backlight && (
    //eslint-disable-next-line jsx-a11y/alt-text
    <NextImage className={classNames(cls.backlight, cls[variant])} alt={alt} src={src} placeholder='blur' blurDataURL={src} fill/>
  )

  const image = (
    //eslint-disable-next-line jsx-a11y/alt-text
    <NextImage className={classNames(cls.image, cls[variant])} alt={alt} src={src} placeholder='blur' blurDataURL={src} fill/>
  )

  const addonComp = addon && (
    <div className={classNames(cls.addon, cls[variant], { [cls.showAddon]: showAddon, [cls.disableAddonHover]: disableAddonHover })}>
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

Image.displayName = 'Image'

