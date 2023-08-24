'use client'

import { memo } from 'react'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { StateSchema } from '@/global/providers/StoreProvider';
import { playerActions } from '@/entity/player';
import { RightAddon } from './RightAddon';
import { useEffect } from 'react'
import { TogglePause } from './TogglePause';
import cls from './PlayerMobile.module.scss'
import { Track } from '@/entity/track';
import { useAudio } from '@/shared/lib/useAudio/useAudio';

interface PlayerProps {
    selectedTrack: Track
    className?: string;
}

export const MobilePlayerContorls = memo(({
    selectedTrack
}: PlayerProps) => {
    const dispatch = useAppDispatch()

    
    return (
        <div className={cls.container}
            // onClick={() => dispatch(playerActions.openPlayer())}  
        >
            <TogglePause/>
            <div className={cls.info}>
                <span className={cls.trackname}>{selectedTrack.name}</span>
                <span className={cls.author}>zxc</span>
            </div>
            <RightAddon/>
        </div>
    )
})

MobilePlayerContorls.displayName = 'MobilePlayerContorls'
