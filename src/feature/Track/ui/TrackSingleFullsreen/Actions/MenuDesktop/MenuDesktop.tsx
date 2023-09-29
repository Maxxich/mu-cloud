'use client'
import { Fragment } from 'react';
import { Menu } from '@/shared/ui/Menu/Menu' 
import IconMore from '@/shared/assets/svg/More.svg' 
import { backendUrl } from '@/shared/const/backendUrl';
import { Track } from '@/entity/track';
import { IconButton } from '@/shared/ui/IconButton/IconButton';
import { Download } from './Download';
import { Share } from './Share';

interface IMenuDesktopProps {
    track: Track
}

export const MenuDesktop: React.FunctionComponent<IMenuDesktopProps> = ({
    track,
}) => {

    // const userActionText = 'Перейти к ' + track.owners[0].name
    const authorName = track.owners[0].name
    const primary_name = track.name
    const track_src = backendUrl + '/' + track.audio_src
    const id = track.id

    return (
        <Menu.Wrapper as='div' style={{ position: 'relative' }}>
            {({ open }) => (
                <>
                    <Menu.Button as={Fragment}>
                        <IconButton
                            icon={<IconMore/>}
                        />
                    </Menu.Button>
                    <Menu.Items
                        open={open}
                    >
                        {/* <Menu.Item
                            component={'link'}
                            href={`/users/${track.owners[0].adress}`}
                            icon={<IconUser/>}
                            isMobile={isMobile}
                        >
                            {userActionText}
                        </Menu.Item> */}
                        <Download
                            author={authorName} 
                            trackname={primary_name} 
                            src={track_src} 
                        />
                        <Share
                            id={id} 
                        />
                    </Menu.Items>
                </>
            )}
        </Menu.Wrapper>
    )
};