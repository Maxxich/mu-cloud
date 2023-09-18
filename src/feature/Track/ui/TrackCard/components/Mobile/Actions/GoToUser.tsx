import { Url } from 'next/dist/shared/lib/router/router';
import Icon from '@/shared/assets/svg/svg.svg'
import { Menu } from '@/shared/ui/Menu/Menu';


interface IGoToUserProps {
  id: number
  author_href: Url
  author: string
}

export const GoToUser: React.FunctionComponent<IGoToUserProps> = ({
    id, author_href, author
}) => {

    return (
        <Menu.Item
            component='link'
            icon={<Icon/>}
            href={author_href}
        >
            {'Перейти к ' + author}
        </Menu.Item>
    )
};