'use client'
import { SyntheticEvent, useCallback, useState } from 'react';
import { IconButton } from '@/shared/ui/IconButton/IconButton'
import IconMore from '@/shared/assets/svg/More.svg'
import { backendUrl } from '@/shared/const/backendUrl';
import { MobileMenu } from '@/shared/ui/MobileMenu/MobileMenu';
import { Track } from '@/entity/track';
import { ActionsMenu } from './ActionsMenu';

interface IMoreTrackProps {
    track: Track
}

export const More: React.FunctionComponent<IMoreTrackProps> = ({
    track
}) => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const onOpenMenu = useCallback((e: SyntheticEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        setIsMenuOpen(true)
    }, [setIsMenuOpen])

    const onMenuClose = useCallback((e: SyntheticEvent<HTMLDivElement | HTMLButtonElement | HTMLAnchorElement>) => {
        e.stopPropagation()
        setIsMenuOpen(false)
    }, [setIsMenuOpen])

    const author = track.owners[0].name
    const id = track.id
    const primary_name = track.name
    const track_src = backendUrl + '/' + track.audio_src
    const author_href = '/users/' + track.owners[0].adress

    return (
        <>
        
            <IconButton
                icon={<IconMore/>}
                size={'s'}
                onClick={onOpenMenu}
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
                />
            </MobileMenu>
        </>
    );
};
