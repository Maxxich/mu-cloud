'use client'

import { useCallback, useState, SyntheticEvent } from 'react';
import { useSession } from 'next-auth/react';
import { MobileMenu as MobileMenuComp } from '@/shared/ui/MobileMenu';
import IconMore from '@/shared/assets/svg/More.svg' 
import { backendUrl } from '@/shared/const/backendUrl';
import { IconButton } from '@/shared/ui/IconButton';
import { Track } from '@/entity/track';
import { GoToUser } from '../../../MobileActions/GoToUser'
import { Copy } from '../../../MobileActions/Copy'
import { Download } from '../../../MobileActions/Download'
import { Delete } from '../../../MobileActions/Delete';

interface ISignedProps {
    track: Track
}

export const MobileMenu: React.FunctionComponent<ISignedProps> = ({
    track
}) => {
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false)

    const onCloseMenu = useCallback((e: SyntheticEvent<HTMLDivElement | HTMLButtonElement | HTMLAnchorElement>) => {
        e.stopPropagation()
        setMenuOpen(false)
    }, [setMenuOpen])

    const onOpenMenu = useCallback((e: SyntheticEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        setMenuOpen(true)
    }, [setMenuOpen])

    const authorName = track.owners[0].name
    const authorHref = `/users/${track.owners[0].adress}` 
    const primary_name = track.name
    const track_src = backendUrl + '/' + track.audio_src
    const id = track.id

    const session = useSession()
    const userId = session?.data?.user?.id
        
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
                <Copy 
                    id={id} 
                    onMenuClose={onCloseMenu}
                />
                <GoToUser 
                    author_href={authorHref} 
                    onMenuClose={onCloseMenu} 
                    author={authorName}
                />
                {
                    track.owners[0].id === userId && <Delete 
                        id={id}
                        onMenuClose={onCloseMenu}
                    />
                }
            </MobileMenuComp>
        </>
    );
};