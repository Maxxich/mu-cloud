import { useSession } from 'next-auth/react';
import { SyntheticEvent, useCallback } from 'react'
import HeartFill from '@/shared/assets/svg/HeartFill.svg'
import HeartStorke from '@/shared/assets/svg/HeartStroke.svg'
import { trackApi } from '@/entity/track';
import { MobileMenu } from '@/shared/ui/MobileMenu/MobileMenu';


interface ILikeDesktopProps {
  id: number
  onMenuClose: (e: SyntheticEvent<HTMLButtonElement, Event>) => void
}

export const Like: React.FunctionComponent<ILikeDesktopProps> = ({
    id, onMenuClose
}) => {
    const session = useSession()
    const { data: liked } = trackApi.useIsInLikedQuery({ id })
    const [addTrigger] = trackApi.useAddToLikedMutation()
    const [removeTrigger] = trackApi.useRemoveFromLikedMutation()
  
    const icon = liked ? <HeartFill/> : <HeartStorke/>
    const text = liked ? 'Убрать из добавленных' :  'Добавить к себе'

    const onClick = useCallback(() => {
        if (liked) removeTrigger({ id })
        else addTrigger({ id })
    }, [removeTrigger, addTrigger, liked, id])

    if (!session.data) {
        return null
    }

    return (
        <MobileMenu.Button
            icon={icon}
            onClick={onClick}
            onClose={onMenuClose}
        >
            {text}
        </MobileMenu.Button>
    )
};