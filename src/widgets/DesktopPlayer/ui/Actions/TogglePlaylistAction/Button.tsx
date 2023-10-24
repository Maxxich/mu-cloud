import { useSelector } from 'react-redux';
import { useTransition, animated } from '@react-spring/web';
import { useId } from 'react';
import { getPlaylistOpened, getSelectedTrack, playerActions } from '@/entity/player';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { Tooltip } from '@/shared/ui/Tooltip';
import { Image } from '@/shared/ui/Image';
import cls from './Button.module.scss'

export const Button: React.FunctionComponent = () => {

    const track = useSelector(getSelectedTrack)
    const dispatch = useAppDispatch()
    const tooltipId = useId()
    const playlistOpened = useSelector(getPlaylistOpened)

    const onToggle = () => dispatch(playerActions.toggleShowPlaylist())

    const transition = useTransition(track!.id, {
        from: { opacity: 0, y: 10 },
        enter: { opacity: 1, y: 0 },
        config: {
            duration: 300,
        },
    }) 

    return transition((style, item) => 
        item 
            ? (
                <>
                    <animated.button
                        className={cls.container}
                        onClick={onToggle}
                        data-tooltip-id={tooltipId}
                        id={tooltipId}
                        data-tooltip-content={playlistOpened ? 'Закрыть плейлист' : 'Открыть плейлист'}
                        style={style}
                    >
                        <Image
                            size={'size_40'}
                            alt={track!.name}
                            src={track!.picture_source.square_small}
                        />
                        <div className={cls.info}>
                            <span className={cls.text}>{track!.name} {track!.name_secondary}</span>
                            <span className={cls.text}>{track!.owners[0].name}</span>
                        </div>
                    </animated.button>
                    <Tooltip id={tooltipId} place={'bottom'}/>
                </>
            )
            : null
    )
};