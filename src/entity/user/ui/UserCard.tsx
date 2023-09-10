import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import classNames from 'classnames'
import { isDesktop } from 'react-device-detect';
import { memo } from 'react'
import { Image, ImageSize } from '@/shared/ui/Image/Image';
import cls from './UserCard.module.scss'

type Variant = 'column' | 'row'

interface IUserCardProps {
    href: Url
    name: string
    image_src: string
    variant?: Variant
}

const mapVariantToSize: Record<Variant, ImageSize> = {
    'column': 'm',
    'row': 's' 
}

export const UserCard: React.FunctionComponent<IUserCardProps> = memo(({
    variant = 'row',
    href,
    name,
    image_src
}) => {


    const mods: Mods = {
        [cls.hover_name]: isDesktop
    }

    return (
        <Link href={href} className={classNames(cls[variant], mods)}>
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

