export { playerActions, playerReducer } from './model/slices/playerSlice'
export type { PlayerSchema } from './model/types/playerSchema'
export { getIsPaused } from './model/selectors/getIsPaused/getIsPaused'
export { getSelectedTrackId } from './model/selectors/getSelectedTrackId/getSelectedTrackId'
export { getColor } from './model/selectors/getColor/getColor'
export { getSelectedTrack } from './model/selectors/getSelectedTrack/getSelectedTrack'
export { getPlaylistOpened } from './model/selectors/getPlaylistOpened/getPlaylistOpened'
export { getIsInterfaceHidden } from './model/selectors/getIsInterfaceHidden/getIsInterfaceHidden'
export { getIsSmallPictureActive } from './model/selectors/getIsSmallPictureActive/getIsSmallPictureActive'
export { getCurrentTrackTime } from './model/selectors/getCurrentTrackTime/getCurrentTrackTime'
export { getCurrentTrackTimeLenght } from './model/selectors/getCurrentTrackTimeLenght/getCurrentTrackTimeLenght'
export { getIsPlayerOpened } from './model/selectors/getIsPlayerOpened/getIsPlayerOpened'
export { getRepeatTrackMode } from './model/selectors/getRepeatTrackMode/getRepeatTrackMode'
export { getPlaylist } from './model/selectors/getPlaylist/getPlaylist'
export { useObserveChangeCurrentTrack } from './lib/useObserveChangeSelectedTrack'
export { useObserveTogglePause } from './lib/useObserveTogglePause'
export { useObserveChangeRepeatMode } from './lib/useObserveChangeRepeatMode'
export { useObserverChangeCurrentTime } from './lib/useObserverChangeCurrentTime'
