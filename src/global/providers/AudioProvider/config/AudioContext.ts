'use client'
import { createContext } from 'react';

const audio = new Audio()
audio.crossOrigin = 'anonymous'

const defaultValue = audio

type Audio = HTMLAudioElement

export const AudioContext = createContext<Audio>(defaultValue)