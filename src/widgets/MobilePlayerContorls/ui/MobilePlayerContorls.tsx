'use client'

import { memo, useCallback } from 'react'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { playerActions } from '@/entity/player';
import { Track } from '@/entity/track';
import { RightAddon } from './RightAddon';
import { TogglePause } from './TogglePause';
import cls from './PlayerMobile.module.scss'

interface PlayerProps {
    selectedTrack: Track
    className?: string;
}

export const MobilePlayerContorls = memo(({
    selectedTrack
}: PlayerProps) => {
    const dispatch = useAppDispatch()

    const onOpenPlayer = useCallback(() => {
        dispatch(playerActions.openPlayer())
    }, [dispatch])

    
    return (
        <div className={cls.container}
            onClick={onOpenPlayer}  
        >
            <TogglePause/>
            <div className={cls.info}>
                <span className={cls.trackname}>{selectedTrack.name}</span>
                <span className={cls.author}>{selectedTrack.owners[0].name}</span>
            </div>
            <RightAddon/>
        </div>
    )
})

MobilePlayerContorls.displayName = 'MobilePlayerContorls'
