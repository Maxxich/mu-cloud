'use client'
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import { Dispatch, SetStateAction, SyntheticEvent, useCallback } from 'react'
import HeartFill from '@/shared/assets/svg/HeartFill.svg'
import HeartStorke from '@/shared/assets/svg/HeartStroke.svg'
import { trackApi } from '@/entity/track';
import { MobileMenu } from '@/shared/ui/MobileMenu/MobileMenu';


interface ILikeDesktopProps {
  id: number
  onMenuClose: (e: SyntheticEvent<HTMLButtonElement, Event>) => void
  setIsAuthDialogOpen: Dispatch<SetStateAction<boolean>>
  setIsDeleted?: (bool: boolean) => void
}

export const Like: React.FunctionComponent<ILikeDesktopProps> = ({
    id, 
    onMenuClose,
    setIsAuthDialogOpen,
    setIsDeleted,
}) => {
    const session = useSession()
    const { data: liked } = trackApi.useIsInLikedQuery({ id })
    const [addTrigger] = trackApi.useAddToLikedMutation()
    const [removeTrigger] = trackApi.useRemoveFromLikedMutation()
  
    const icon = liked ? <HeartFill/> : <HeartStorke/>
    const text = liked ? 'Убрать из добавленных' :  'Добавить к себе'

    const onClick = useCallback(async () => {
        if (!session.data) {
            return setIsAuthDialogOpen(true)
        }
        if (liked) {
            try {
                await removeTrigger({ id }).unwrap()
                toast('Трек убран из добавленных')
                setIsDeleted && setIsDeleted(true)
            } catch (error) {
                toast('Ошибка')
                setIsDeleted && setIsDeleted(false)
            }
        } else {
            try {
                await addTrigger({ id }).unwrap()
                toast('Добавлено')
                setIsDeleted && setIsDeleted(false)
            } catch (error) {
                toast('Ошибка')
                setIsDeleted && setIsDeleted(true)
            }
        }
    }, [removeTrigger, addTrigger, liked, id, setIsAuthDialogOpen, session, setIsDeleted])

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