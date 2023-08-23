'use client'

import { memo } from 'react'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { StateSchema } from '@/global/providers/StoreProvider';
import { openPlayer } from '@/entity/player';
import { RightAddon } from './RightAddon';
import { TogglePause } from './TogglePause';
import cls from './PlayerMobile.module.scss'
import { Track } from '@/entity/track';

interface PlayerProps {
    selectedTrack: Track
    className?: string;
}

export const MobilePlayerContorls = memo((props: PlayerProps) => {
    const dispatch = useAppDispatch()
    const {list, currentTrackId} = useSelector((state: StateSchema) => state.player)
    
    return (
        <div className={cls.container}
            onClick={() => dispatch(openPlayer())}  
        >
            <TogglePause/>
            <div className={cls.info}>
                <span className={cls.trackname}>{list?.[0]?.name}</span>
                <span className={cls.author}>zxc</span>
            </div>
            <RightAddon/>
        </div>
    )
})

MobilePlayerContorls.displayName = 'MobilePlayerContorls'
