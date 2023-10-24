'use client'
import { memo, useCallback, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { toMinuteFormat } from '@/shared/lib/helpers/toMinuteFormat/toMinuteFormat';
import cls from './TrackCardDesktop.module.scss'
import { TrackImage } from './Image/Image';
import { Download } from './Actions/Download';
import { Like } from './Actions/Like';
import { Copy } from './Actions/Copy';
import { IDesktopCard } from '../../../../model/types/TrackCard';
import { mapWidthToClass } from '../../../helpers/mapPropToClass';



export const TrackCardDesktop: React.FunctionComponent<IDesktopCard> = memo(({
    author_href, primary_name, image_src, id, track_href, secondary_name,
    duration, author, track_src, onToggleTrack, isSelected, isPaused,
    width, showIsDeleted, activeInMenu
}) => {
  
    const onImageClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        onToggleTrack(id)
    }, [onToggleTrack, id])

    const [isHoverAddonVisible, setHoverAddonVisiblity] = useState<boolean>(false)
    const [isDeleted, setIsDeleted] = useState(false)

    const mods: Mods = {
        [cls.deleted]: isDeleted  && showIsDeleted,
        [cls.activeInMenu]: activeInMenu
    }

    const classes = classNames(
        cls.container, 
        mods,
        (width ? mapWidthToClass[width] : undefined)
    )

    return (
        <div
            onMouseEnter={() => setHoverAddonVisiblity(true)}
            onMouseLeave={() => setHoverAddonVisiblity(false)}
            className={classes}
        >
            <TrackImage
                active={isSelected}
                alt={primary_name}
                paused={isPaused}
                src={image_src}
                onClick={onImageClick}
                className={cls.image}
            />
            <div className={cls.Info}>
                <Link href={track_href} className={cls.flex_link}>
                    <span className={cls.primary_name}>{primary_name}</span>
                    {secondary_name && <>
            &nbsp;<span className={cls.secondary_name}>{secondary_name}</span>
                    </>}
                </Link>
                <Link href={author_href} className={cls.link_author}>{author}</Link>
            </div>
            <div className={classNames(cls.actions, {
                [cls.hidden]: !isHoverAddonVisible
            })}>
                <Download author={author} trackname={primary_name} src={track_src}/>
                <Like id={id} setIsDeleted={setIsDeleted}/>
                <Copy id={id}/>
            </div>
            <span className={cls.duration}>{toMinuteFormat(duration)}</span>
        </div>
    );
})

TrackCardDesktop.displayName = 'TrackCardDesktop'
