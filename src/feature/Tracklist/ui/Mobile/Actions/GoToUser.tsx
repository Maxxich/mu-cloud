import { IconButton } from '@/shared/ui/IconButton/IconButton';
import Icon from '@/shared/assets/svg/svg.svg'
import { SyntheticEvent, useId } from 'react';
import { Menu } from '@/shared/ui/Menu/Menu';
import { Url } from 'next/dist/shared/lib/router/router';


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