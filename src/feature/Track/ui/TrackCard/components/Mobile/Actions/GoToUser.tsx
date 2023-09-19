import { SyntheticEvent } from 'react';
import { Url } from 'next/dist/shared/lib/router/router';
import Icon from '@/shared/assets/svg/User.svg'
import { MobileMenu } from '@/shared/ui/MobileMenu/MobileMenu';


interface IGoToUserProps {
  id: number
  author_href: Url
  author: string
  onMenuClose: (e: SyntheticEvent<HTMLAnchorElement, Event>) => void
}

export const GoToUser: React.FunctionComponent<IGoToUserProps> = ({
    id, author_href, author, onMenuClose
}) => {

    return (
        <MobileMenu.Link
            icon={<Icon/>}
            href={author_href}
            onClose={onMenuClose}
        >
            {'Перейти к ' + author}
        </MobileMenu.Link>
    )
};