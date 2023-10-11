
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { shuffle } from '@/shared/lib/helpers/shuffle/shuffle'
import { Track } from '@/entity/track'
import { PlayerSchema } from '../types/playerSchema'


interface overwriteList {
  list: Track[]
  startsWithId: number
}



const initialState = { 
    isPaused: true,
    isAudioExist: false,
    repeatTrackMode: false,
    isOpened: false,
    list: [] as Track[],
    currentTrackId: undefined,
    interfaceHidden: false,
    showPlaylist: false,
    isSmallPictureActive: true
} as PlayerSchema

const slice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        togglePause: (state: PlayerSchema) => {
            state.isPaused = !state.isPaused
        },
        playAudio: (state: PlayerSchema) => {
            state.isPaused = false
        },
        stopAudio: (state: PlayerSchema) => {
            state.isPaused = true
        },
        setAudioExist(state: PlayerSchema, action: PayloadAction<boolean>) {
            state.isAudioExist = action.payload
        },
        toggleRepeatTrackMode(state: PlayerSchema) {
            state.repeatTrackMode = !state.repeatTrackMode
        },
        togglePlayerIsOpened(state: PlayerSchema) {
            state.isOpened = !state.isOpened
        },
        closePlayer(state: PlayerSchema) {
            state.isOpened = false
        },
        openPlayer(state: PlayerSchema) {
            state.isOpened = true
        },
        overwriteList(state:PlayerSchema, action: PayloadAction<overwriteList>) {
            state.list = action.payload.list
            state.currentTrackId = action.payload.startsWithId
            state.currentTrackTime = 0
            state.currentTrackTimeLenght = 0
            state.isPaused = false
        },
        overwriteCurrentTrackTime(state:PlayerSchema, action: PayloadAction<number>){
            state.currentTrackTime = action.payload
        },
        overwriteCurrentTrackTimeLenght(state:PlayerSchema, action: PayloadAction<number>){
            state.currentTrackTimeLenght = action.payload
        },
        setPreviusTrack(state:PlayerSchema) {
            if (!state.currentTrackId) return
            let id
            let index
            let currentIndex = state.list.findIndex(t =>  t.id === state.currentTrackId)
            if (currentIndex === 0) {
                index = state.list.length - 1
                id = state.list[index].id
            } else {
                index = currentIndex - 1
                id = state.list[index].id
            }
            state.currentTrackId = id
        },
        setNextTrack(state:PlayerSchema) {
            if (!state.currentTrackId) return
            let id
            let index
            let currentIndex = state.list.findIndex(t =>  t.id === state.currentTrackId)
            if (currentIndex === (state.list.length - 1)) {
                index = 0
                id = state.list[index].id
            } else {
                index = currentIndex + 1
                id = state.list[index].id
            }
            state.currentTrackId = id
        },
        shufflePlaylist(state: PlayerSchema) {
            state.list = shuffle(state.list)
            if (state.list.length === 0) {
                state.currentTrackId = undefined
            } else {
                state.currentTrackId = state.list[0].id
            }
        },
        clearPlaylist(state: PlayerSchema) {
            state.list = []
            state.currentTrackId = undefined
            state.currentTrackTimeLenght =  undefined
            state.currentTrackTime = undefined
        },
        setInterfaceHidden(state: PlayerSchema, action: PayloadAction<boolean>) {
            state.interfaceHidden = action.payload
        },
        toggleShowPlaylist(state: PlayerSchema){
            state.showPlaylist = !state.showPlaylist
        },
        closeShowPlaylist(state: PlayerSchema){
            state.showPlaylist = false
        },
        openShowPlaylist(state: PlayerSchema){
            state.showPlaylist = true
        },
        toggleIsSmallPictureActive(state: PlayerSchema) {
            state.isSmallPictureActive = !state.isSmallPictureActive
        }
    },
})

export const playerActions = slice.actions
export const playerReducer = slice.reducer 