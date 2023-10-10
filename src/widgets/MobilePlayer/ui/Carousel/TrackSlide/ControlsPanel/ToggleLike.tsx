'use client'
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useCallback, useState } from 'react';
import { IconButton } from '@/shared/ui/IconButton'
import HeartFill from '@/shared/assets/svg/HeartFill.svg'
import HeartStorke from '@/shared/assets/svg/HeartStroke.svg'
import { trackApi } from '@/entity/track';
import { RequireAuthDialog } from '@/shared/ui/RequireAuthDialog';
import { getIsPlayerOpened, playerActions } from '@/entity/player';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';

interface IToggleLikeTrackProps {
  id: number
}

export const ToggleLike: React.FunctionComponent<IToggleLikeTrackProps> = ({
    id
}) => {

    const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false)
    const session = useSession()
    const isPlayerOpen = useSelector(getIsPlayerOpened)
    const dispatch = useAppDispatch()

    

    const { data: liked } = trackApi.useIsInLikedQuery({ id })
    const [addTrigger] = trackApi.useAddToLikedMutation()
    const [removeTrigger] = trackApi.useRemoveFromLikedMutation()
  
    const icon = liked ? <HeartFill/> : <HeartStorke/>

    const onClose = (willRedirect: boolean) => {
        if (willRedirect && isPlayerOpen) {
            dispatch(playerActions.closePlayer())
        }
        setIsAuthDialogOpen(false)
    }

    const onClick = useCallback(async () => {
        if (!session.data) {

            return setIsAuthDialogOpen(true)
        }
        if (liked) {
            try {
                await removeTrigger({ id }).unwrap()
                toast('Трек убран из добавленных')
            } catch (error) {
                toast('Ошибка')
            }
        } else {
            try {
                await addTrigger({ id }).unwrap()
                toast('Добавлено')
            } catch (error) {
                toast('Ошибка')
            }
        }
    }, [removeTrigger, addTrigger, liked, id, setIsAuthDialogOpen, session])

    return (
        <>
            <IconButton
                onClick={onClick}
                icon={icon}
                size={'s'}
            />
            <RequireAuthDialog
                open={isAuthDialogOpen}
                onClose={onClose}
            />
        </>
    );
};
