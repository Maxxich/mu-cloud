import * as React from 'react';
import { IconButton, IconHeartFill, IconHeartStroke } from 'shared/UI';
import { useAddTrackToViewerAddedByIdMutation, useCheckTrackAddedToViewerByIdQuery, useRemoveTrackFromViewerAddedByIdMutation } from 'shared/api';
import { useAppSelector, useAppDispatch } from 'app/model/store';
import { useErrorPopup, usePopup } from 'shared/lib';
import { closePlayer } from 'shared/model';

interface IToggleLikeActionProps {
}

export const ToggleLikeAction: React.FunctionComponent<IToggleLikeActionProps> = (props) => {
    const tooltipId = React.useId()
    const viewerId = useAppSelector(state => state.auth.id)
    const currentId = useAppSelector(state => state.player.currentTrackId)

    const { data: liked, isLoading, isError } = useCheckTrackAddedToViewerByIdQuery({ id: currentId! })
    const [add, { isLoading: isAddLoading, isError: isAddError }] = useAddTrackToViewerAddedByIdMutation()
    const [removeAdd, { isLoading: isRemoveLoading, isError: isRemoveError }] = useRemoveTrackFromViewerAddedByIdMutation()
    const openPopup = usePopup()
    const dispatch = useAppDispatch()


    const onClick = () => {
        if (!viewerId) {
            dispatch(closePlayer())
            return openPopup({
                ids: [],
                popup: 'auth-required',
                type: 'like',
            })
        }
        if (isError) return openPopup({
            ids: [],
            popup: 'error',
        })
        if (liked) {
            removeAdd({ id: currentId! })
        } else {
            add({ id: currentId! })
        }
    } 

    useErrorPopup([isAddError, isRemoveError])

    const icon = (isAddLoading || isRemoveLoading || isLoading) ? <></> : (!viewerId ? <IconHeartStroke/> : (liked ? <IconHeartFill/> : <IconHeartStroke/>))

    return (
        <IconButton
            extraIcon={icon}
            size={25}
            onClick={onClick}
            tooltipId={`${tooltipId}`}
            tooltipContent={liked ? 'Убрать из добавленных' : 'Добавить к себе'}
            tooltipPlace='bottom'
        />
    );
};