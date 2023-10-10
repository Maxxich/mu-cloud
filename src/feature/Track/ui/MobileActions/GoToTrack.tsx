'use client'
import { SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import IconVinyl from '@/shared/assets/svg/Vinyl.svg'
import { MobileMenu } from '@/shared/ui/MobileMenu';
import { getIsPlayerOpened, playerActions } from '@/entity/player';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';


interface IGoToTrackProps {
  id: number
  onMenuClose: (e: SyntheticEvent<HTMLAnchorElement, Event>) => void
}

export const GoToTrack: React.FunctionComponent<IGoToTrackProps> = ({
    id, onMenuClose
}) => {

    const isPlayerOpened = useSelector(getIsPlayerOpened)
    const dispatch = useAppDispatch() 

    const onClick = (e: SyntheticEvent<HTMLAnchorElement, Event>) => {
        if (isPlayerOpened) {
            dispatch(playerActions.closePlayer())
        }
        onMenuClose(e)
    }

    return (
        <MobileMenu.Link
            icon={<IconVinyl/>}
            href={'/tracks/' + id}
            onClose={onClick}
        >
            {'Перейти к треку'}
        </MobileMenu.Link>
    )
};