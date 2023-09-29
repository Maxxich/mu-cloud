'use client'

import { useCallback, useState } from 'react';
import { CloseMenuEvent, MobileMenu as MobileMenuComp, OpenMenuEvent } from '@/shared/ui/MobileMenu/MobileMenu';
import IconMore from '@/shared/assets/svg/More.svg' 
import { IconButton } from '@/shared/ui/IconButton/IconButton';
import { Track } from '@/entity/track';
import { Download } from '../../../TrackCard/components/Mobile/Actions/Download';
import { Share } from '../../../TrackCard/components/Mobile/Actions/Share';
import { GoToUser } from '../../../TrackCard/components/Mobile/Actions/GoToUser';
import { backendUrl } from '@/shared/const/backendUrl';

interface ISignedProps {
    track: Track
}

export const MobileMenu: React.FunctionComponent<ISignedProps> = ({
    track
}) => {
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false)

    const onCloseMenu = useCallback((e: CloseMenuEvent) => {
        e.stopPropagation()
        setMenuOpen(false)
    }, [setMenuOpen])

    const onOpenMenu = useCallback((e: OpenMenuEvent) => {
        e.stopPropagation()
        setMenuOpen(true)
    }, [setMenuOpen])

    const authorName = track.owners[0].name
    const authorHref = `/users/${track.owners[0].adress}` 
    const primary_name = track.name
    const track_src = backendUrl + '/' + track.audio_src
    const id = track.id
        
    return (
        <>
            <IconButton 
                onClick={onOpenMenu}
                icon={<IconMore/>}
            />                
            <MobileMenuComp
                isOpen={isMenuOpen}
                onClose={onCloseMenu}
            >
                <Download 
                    author={authorName} 
                    trackname={primary_name} 
                    src={track_src} 
                    onMenuClose={onCloseMenu}
                />
                <Share 
                    id={id} 
                    onMenuClose={onCloseMenu}
                />
                <GoToUser 
                    id={id} 
                    author_href={authorHref} 
                    onMenuClose={onCloseMenu} 
                    author={authorName}
                />
            </MobileMenuComp>
        </>
    );
};