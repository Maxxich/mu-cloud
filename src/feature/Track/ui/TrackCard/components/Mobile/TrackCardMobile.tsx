'use client'

import { SyntheticEvent, memo, useCallback, useState } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { getIsPlayerOpened, playerActions } from '@/entity/player';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { toMinuteFormat } from '@/shared/lib/helpers/toMinuteFormat/toMinuteFormat';
import { IconButton } from '@/shared/ui/IconButton';
import IconMore from '@/shared/assets/svg/More.svg'
import { RequireAuthDialog } from '@/shared/ui/RequireAuthDialog';
import { MobileMenu } from '@/shared/ui/MobileMenu';
import cls from './TrackCardMobile.module.scss'
import { TrackImage } from './Image/Image';
import { ActionsMenu } from './Actions/ActionsMenu';
import { IMobileCard } from '../../../../model/types/TrackCard';
import { mapWidthToClass } from '../../../helpers/mapPropToClass';

export const TrackCardMobile: React.FunctionComponent<IMobileCard> = memo(({
    author_href, primary_name, image_src, id, secondary_name,
    isSelected, isPaused, duration, author, track_src, onToggleTrack,
    width, showIsDeleted
}) => {

    const isPlayerOpen = useSelector(getIsPlayerOpened)
    const dispatch = useAppDispatch()

    const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false)
    const [isDeleted, setIsDeleted] = useState(false)

    const onDialogClose = (willRedirect: boolean) => {
        if (willRedirect && isPlayerOpen) {
            dispatch(playerActions.closePlayer())
        }
        setIsAuthDialogOpen(false)
    }

    const onContainerClick = useCallback((e: SyntheticEvent<HTMLDivElement>) => {
        onToggleTrack(id)
    }, [onToggleTrack, id])

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const onOpenMenu = useCallback((e: SyntheticEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        setIsMenuOpen(true)
    }, [setIsMenuOpen])

    const onMenuClose = useCallback((e: SyntheticEvent<HTMLDivElement | HTMLButtonElement | HTMLAnchorElement>) => {
        e.stopPropagation()
        setIsMenuOpen(false)
    }, [setIsMenuOpen])

    const mods: Mods = {
        [cls.deleted]: isDeleted && showIsDeleted
    }
   
    const classes = classNames(
        cls.container, 
        mods,
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
            <IconButton
                icon={<IconMore/>}
                variant='secondary'
                onClick={onOpenMenu}
            />
            <RequireAuthDialog
                open={isAuthDialogOpen}
                onClose={onDialogClose}
            />
            <MobileMenu
                isOpen={isMenuOpen}
                onClose={onMenuClose}
            >
                <ActionsMenu
                    author={author}
                    id={id}
                    onMenuClose={onMenuClose}
                    primary_name={primary_name}
                    track_src={track_src}
                    author_href={author_href}
                    setIsAuthDialogOpen={setIsAuthDialogOpen}
                    setIsDeleted={setIsDeleted}
                />
            </MobileMenu>
        </div>
    );
})

TrackCardMobile.displayName = 'TrackCardMobile'