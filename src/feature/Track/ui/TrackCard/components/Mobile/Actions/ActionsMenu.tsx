import { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { Url } from 'next/dist/shared/lib/router/router';
import { Download } from '../../../../MobileActions/Download'
import { Copy } from '../../../../MobileActions/Copy'
import { GoToTrack } from '../../../../MobileActions/GoToTrack'
import { Like } from '../../../../MobileActions/Like'
import { GoToUser } from '../../../../MobileActions/GoToUser'

interface IActionsProps {
    id: number,
    track_src: string,
    primary_name: string,
    author: string
    author_href: Url
    onMenuClose: (e: SyntheticEvent<HTMLButtonElement | HTMLAnchorElement, Event>) => void
    setIsAuthDialogOpen: Dispatch<SetStateAction<boolean>>
    setIsDeleted?: (bool: boolean) => void
}

export const ActionsMenu: React.FunctionComponent<IActionsProps> = ({
    author, id, primary_name, track_src, author_href, onMenuClose,
    setIsAuthDialogOpen, setIsDeleted
}) => {
    return (
        <>
            <Download author={author} trackname={primary_name} src={track_src} onMenuClose={onMenuClose}/>
            <Like id={id} onMenuClose={onMenuClose} setIsAuthDialogOpen={setIsAuthDialogOpen} setIsDeleted={setIsDeleted}/>
            <Copy id={id} onMenuClose={onMenuClose}/>
            <GoToTrack id={id} onMenuClose={onMenuClose}/>
            <GoToUser author_href={author_href} onMenuClose={onMenuClose} author={author}/>
        </>
    );
};

