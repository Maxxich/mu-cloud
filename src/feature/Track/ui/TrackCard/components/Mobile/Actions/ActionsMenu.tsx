import { Url } from 'next/dist/shared/lib/router/router';
import { Menu } from '@/shared/ui/Menu/Menu';
import { Like } from './Like';
import { Download } from './Download';
import { Share } from './Share';
import { GoToUser } from './GoToUser';

interface IActionsProps {
    id: number,
    track_src: string,
    primary_name: string,
    author: string
    author_href: Url
    open: boolean
}

export const ActionsMenu: React.FunctionComponent<IActionsProps> = ({
    author, id, primary_name, track_src, author_href, open
}) => {
    return (
        <Menu.Items
            open={open}
        >
            <Download author={author} trackname={primary_name} src={track_src}/>
            <Like id={id}/>
            <Share id={id}/>
            <GoToUser id={id} author_href={author_href} author={author}/>
        </Menu.Items>
    );
};

