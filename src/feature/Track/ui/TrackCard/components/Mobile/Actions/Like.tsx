import { useCallback } from 'react'
import HeartFill from '@/shared/assets/svg/HeartFill.svg'
import HeartStorke from '@/shared/assets/svg/HeartStroke.svg'
import { Menu } from '@/shared/ui/Menu/Menu';
import { trackApi } from '@/entity/track';


interface ILikeDesktopProps {
  id: number
}

export const Like: React.FunctionComponent<ILikeDesktopProps> = ({
    id
}) => {

    const { data: liked } = trackApi.useIsInLikedQuery({ id })
    const [addTrigger] = trackApi.useAddToLikedMutation()
    const [removeTrigger] = trackApi.useRemoveFromLikedMutation()
  
    const icon = liked ? <HeartFill/> : <HeartStorke/>
    const text = liked ? 'Убрать из добавленных' :  'Добавить к себе'

    const onClick = useCallback(() => {
        if (liked) removeTrigger({ id })
        else addTrigger({ id })
    }, [removeTrigger, addTrigger, liked, id])

    return (
        <Menu.Item
            component='button'
            icon={icon}
            onClick={onClick}
        >
            {text}
        </Menu.Item>
    )
};