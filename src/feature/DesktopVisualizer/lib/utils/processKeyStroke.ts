import { playerActions } from '@/entity/player'
import { AppDispatch } from '@/global/providers/StoreProvider'


export const processKeystroke = (e: KeyboardEvent, audio: HTMLAudioElement | undefined, dispatch: AppDispatch) => {
    if ((e.code == 'ArrowRight') && !e.ctrlKey ) {
        if (!audio) return
        audio.currentTime = audio.currentTime + 10
    } else if ((e.code == 'ArrowLeft') && !e.ctrlKey) {
        if (!audio) return
        audio.currentTime = audio.currentTime - 10
    } else if ((e.key == ' ') || (e.key == 'SpaceBar')) {
        dispatch(playerActions.togglePause())
    } else if ((e.code == 'ArrowRight') && (e.ctrlKey)){
        dispatch(playerActions.setNextTrack())
    } else if ((e.code == 'ArrowLeft') && (e.ctrlKey)) {
        dispatch(playerActions.setPreviusTrack())
    }  else if (e.code === 'Escape') {
        dispatch(playerActions.closePlayer())
    }
}