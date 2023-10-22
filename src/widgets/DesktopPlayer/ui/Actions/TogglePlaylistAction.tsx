import { useSelector } from 'react-redux';
import { useId } from 'react';
import { getPlaylistOpened, getSelectedTrack, playerActions } from '@/entity/player';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { Tooltip } from '@/shared/ui/Tooltip';
import { Image } from '@/shared/ui/Image';
import cls from './TogglePlaylistAction.module.scss'

export const TogglePlaylistAction: React.FunctionComponent = () => {

    const track = useSelector(getSelectedTrack)
    const dispatch = useAppDispatch()
    const tooltipId = useId()
    const playlistOpened = useSelector(getPlaylistOpened)

    const onToggle = () => dispatch(playerActions.toggleShowPlaylist())

    if (!track) return null

    return <>
        <button
            className={cls.container}
            onClick={onToggle}
            data-tooltip-id={tooltipId}
            id={tooltipId}
            data-tooltip-content={playlistOpened ? 'Закрыть плейлист' : 'Открыть плейлист'}
        >
            <Image
                size={'size_40'}
                alt={track.name}
                src={track.picture_source.square_small}
            />
            <div className={cls.info}>
                <span className={cls.text}>{track.name} {track.name_secondary}</span>
                <span className={cls.text}>{track.owners[0].name}</span>
            </div>
        </button>
        <Tooltip id={tooltipId} place={'bottom'}/>
    </>
};