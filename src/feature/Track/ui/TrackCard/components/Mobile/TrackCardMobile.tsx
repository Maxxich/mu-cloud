'use client'

import { SyntheticEvent, memo, useCallback, Fragment } from 'react';
import classNames from 'classnames';
import { toMinuteFormat } from '@/shared/lib/toMinuteFormat/toMinuteFormat';
import { IconButton } from '@/shared/ui/IconButton/IconButton';
import Icon from '@/shared/assets/svg/svg.svg'
import { Menu } from '@/shared/ui/Menu/Menu';
import cls from './TrackCardMobile.module.scss'
import { TrackImage } from './Image/Image';
import { ActionsMenu } from './Actions/ActionsMenu';
import { IMobileCard } from '../../../../model/types/TrackCard';
import { mapWidthToClass } from '../../../helpers/mapPropToClass';

export const TrackCardMobile: React.FunctionComponent<IMobileCard> = memo(({
    author_href, primary_name, image_src, id, track_href, secondary_name,
    isSelected, isPaused, duration, author, track_src, onToggleTrack,
    width
}) => {

    const onContainerClick = useCallback((e: SyntheticEvent<HTMLDivElement>) => {
        onToggleTrack(id)
    }, [onToggleTrack, id])

   
    const classes = classNames(
        cls.container, 
        (width ? mapWidthToClass[width] : undefined)
    )

    return (
        <div
            className={classes}
            onClick={onContainerClick}
        >
            <TrackImage
                active={isSelected}
                alt={primary_name}
                paused={isPaused}
                src={image_src}
                className={cls.image}
            />
            <div className={cls.Info}>
                <span className={cls.name}>
                    <span className={cls.primary_name}>{primary_name}</span>
                    {secondary_name && <>
            &nbsp;<span className={cls.secondary_name}>{secondary_name}</span>
                    </>}
                </span>
                <span className={cls.author}>{author}</span>
            </div>
            <span className={cls.duration}>{toMinuteFormat(duration)}</span>
            <Menu.Wrapper
                as={Fragment}
            >
                {({ open }) => (
                    <>
                        <Menu.Button>
                            <IconButton
                                icon={<Icon/>}
                                variant='secondary'
                            />
                        </Menu.Button>
                        <ActionsMenu
                            author={author}
                            id={id}
                            primary_name={primary_name}
                            track_src={track_src}
                            author_href={author_href}
                            open={open}
                        />
                    </>
                )}
            </Menu.Wrapper>
        </div>
    );
})

TrackCardMobile.displayName = 'TrackCardMobile'