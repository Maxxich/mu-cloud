'use client'
import { useSession } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { useCallback, useState } from 'react';
import { trackApi } from '@/entity/track';
import { Button } from '@/shared/ui/Button';
import IconHeartFill from '@/shared/assets/svg/HeartFill.svg'
import IconHeartStroke from '@/shared/assets/svg/HeartStroke.svg'
import { RequireAuthDialog } from '@/shared/ui/RequireAuthDialog';

interface IPlayActionProps {
    id: number
}

export const LikeAction: React.FunctionComponent<IPlayActionProps> = ({
    id,
}) => {

    const session = useSession()
    const { data: liked } = trackApi.useIsInLikedQuery({ id })
    const [addTrigger] = trackApi.useAddToLikedMutation()
    const [removeTrigger] = trackApi.useRemoveFromLikedMutation()

    const [isOpen, setIsOpen] = useState(false)

    const onClose = () => {
        setIsOpen(false)
    }

    const onClick = useCallback(async () => {
        if (!session.data) {
            return setIsOpen(true)
        }
        if (liked) {
            try {
                await removeTrigger({ id }).unwrap()
                toast('Удалено из добавленных')
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
    }, [removeTrigger, addTrigger, liked, id, session.data])

    const icon = liked ? <IconHeartFill/> : <IconHeartStroke/>
    const text = liked ? 'Добавлено' : 'Добавить'

    return (
        <>
            <Button
                addonLeft={icon}
                onClick={onClick}
            >
                {text}
            </Button>
            <RequireAuthDialog
                open={isOpen}
                onClose={onClose}
            />
        </>
    );

};
