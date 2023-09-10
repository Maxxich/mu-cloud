import { SyntheticEvent } from 'react';
import { Url } from 'next/dist/shared/lib/router/router';
import Icon from '@/shared/assets/svg/svg.svg'
import { Menu } from '@/shared/ui/Menu/Menu';


interface IGoToUserProps {
  id: number
  author_href: Url
  onMenuClose: (e: SyntheticEvent<HTMLAnchorElement, Event>) => void
  author: string
}

export const GoToUser: React.FunctionComponent<IGoToUserProps> = ({
  id, author_href, onMenuClose, author
}) => {

  return (
    <Menu.Link
        icon={<Icon/>}
        href={author_href}
        onClose={onMenuClose}
    >
        {'Перейти к ' + author}
    </Menu.Link>
  )
};