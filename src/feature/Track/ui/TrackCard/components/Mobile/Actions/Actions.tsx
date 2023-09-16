import { SyntheticEvent } from 'react';
import { Url } from 'next/dist/shared/lib/router/router';
import { Like } from './Like';
import { AddToPlaylist } from './AddToPlaylist';
import { Download } from './Download';
import { Share } from './Share';
import { GoToUser } from './GoToUser';

interface IActionsProps {
    id: number,
    track_src: string,
    primary_name: string,
    author: string
    onMenuClose: (e: SyntheticEvent<HTMLButtonElement | HTMLAnchorElement, Event>) => void
    author_href: Url
}

export const Actions: React.FunctionComponent<IActionsProps> = ({
    author, id, primary_name, track_src, onMenuClose, author_href
}) => {
    return (
        <>
            <AddToPlaylist id={id} onMenuClose={onMenuClose}/>
            <Download author={author} trackname={primary_name} src={track_src} onMenuClose={onMenuClose}/>
            <Like id={id} onMenuClose={onMenuClose}/>
            <Share id={id} onMenuClose={onMenuClose}/>
            <GoToUser id={id} author_href={author_href} onMenuClose={onMenuClose} author={author}/>
        </>
    );
};

