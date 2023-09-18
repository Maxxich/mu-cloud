import Icon from '@/shared/assets/svg/svg.svg'
import { Menu } from '@/shared/ui/Menu/Menu';

interface IDownloadFeatureProps {
  src: string
  trackname: string
  author: string
}

export const Download: React.FunctionComponent<IDownloadFeatureProps> = ({
    src,
    author,
    trackname,
}) => {


    return (
        <Menu.Item
            component='button'
            icon={<Icon/>}
            onClick={() => alert('click')}
        >
    Скачать
        </Menu.Item>
    )
};