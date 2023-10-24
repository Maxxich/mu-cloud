import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import classNames from 'classnames'
import { isDesktop } from 'react-device-detect';
import { memo } from 'react'
import { Image, ImageSize } from '@/shared/ui/Image';
import cls from './UserCard.module.scss'

export type Variant = 'column' | 'row'
export type Width = 'full' | 'adaptive' | 'fixed'

type ColumnProps =  {
    href: Url
    name: string
    image_src: string
    variant?: 'column'
    width?: 'fixed'
}

type RowProps = {
    href: Url
    name: string
    image_src: string
    variant?: 'row'
    width?: Width
}

export type IUserCardProps = ColumnProps | RowProps

const mapVariantToSize: Record<Variant, ImageSize> = {
    'column': 'm',
    'row': 's' 
}

export const mapWidthToClass: Record<Width, string> = {
    'full': cls.fullwidth,
    'adaptive': cls.adaptive,
    'fixed': ''
}

export const UserCard: React.FunctionComponent<IUserCardProps> = memo(({
    variant = 'row',
    href,
    name,
    image_src,
    width = 'fixed'
}) => {


    const mods: Mods = {
        [cls.hover_name]: isDesktop,
    }

    const classes = classNames(
        cls[variant], 
        mods, 
        (width ? mapWidthToClass[width] : undefined)
    )

    return (
        <Link href={href} className={classes} draggable={false}>
            <Image
                src={image_src}
                alt={name}
                variant='circle'
                size={mapVariantToSize[variant]}
            />
            <span className={cls.name}>{name}</span>
        </Link>
    )

})

UserCard.displayName = 'UserCard'

