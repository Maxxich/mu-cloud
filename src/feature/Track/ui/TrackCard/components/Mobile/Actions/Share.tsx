import Icon from '@/shared/assets/svg/svg.svg'
import { Menu } from '@/shared/ui/Menu/Menu';


interface ILikeDesktopProps {
  id: number
}

export const Share: React.FunctionComponent<ILikeDesktopProps> = ({
    id
}) => {

    return (
        <Menu.Item
            component={'button'}
            icon={<Icon/>}
            onClick={() => alert('click')}
        >
    Поделиться
        </Menu.Item>
    )
};