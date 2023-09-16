'use client'
import { memo, useCallback, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { toMinuteFormat } from '@/shared/lib/toMinuteFormat/toMinuteFormat';
import cls from './TrackCardDesktop.module.scss'
import { TrackImage } from './Image/Image';
import { AddToPlaylist } from './Actions/AddToPlaylist';
import { Download } from './Actions/Download';
import { Like } from './Actions/Like';
import { Share } from './Actions/Share';
import { IDesktopCard } from '../../../../model/types/TrackCard';
import { mapWidthToClass } from '../../../helpers/mapPropToClass';



export const TrackCardDesktop: React.FunctionComponent<IDesktopCard> = memo(({
    author_href, primary_name, image_src, id, track_href, secondary_name,
    duration, author, track_src, onToggleTrack, isSelected, isPaused,
    width
}) => {
  
    const onImageClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        onToggleTrack(id)
    }, [onToggleTrack, id])

    const [isHoverAddonVisible, setHoverAddonVisiblity] = useState<boolean>(false)

    const classes = classNames(
        cls.container, 
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
            {isHoverAddonVisible && (
                <div className={cls.actions}>
                    <AddToPlaylist id={id}/>
                    <Download author={author} trackname={primary_name} src={track_src}/>
                    <Like id={id}/>
                    <Share id={id}/>
                </div>
            )}
            <span className={cls.duration}>{toMinuteFormat(duration)}</span>
        </div>
    );
})

TrackCardDesktop.displayName = 'TrackCardDesktop'
