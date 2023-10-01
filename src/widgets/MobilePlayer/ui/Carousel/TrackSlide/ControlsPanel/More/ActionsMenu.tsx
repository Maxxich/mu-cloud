import { SyntheticEvent } from 'react';
import { Url } from 'next/dist/shared/lib/router/router';
import { Copy, Download, GoToTrack, GoToUser } from '@/feature/Track';

interface IActionsProps {
    id: number,
    track_src: string,
    primary_name: string,
    author: string
    author_href: Url
    onMenuClose: (e: SyntheticEvent<HTMLButtonElement | HTMLAnchorElement, Event>) => void
}

export const ActionsMenu: React.FunctionComponent<IActionsProps> = ({
    author, id, primary_name, track_src, author_href, onMenuClose,
}) => {
    return (
        <>
            <Download author={author} trackname={primary_name} src={track_src} onMenuClose={onMenuClose}/>
            <Copy id={id} onMenuClose={onMenuClose}/>
            <GoToTrack id={id} onMenuClose={onMenuClose}/>
            <GoToUser author_href={author_href} onMenuClose={onMenuClose} author={author}/>
        </>
    );
};

