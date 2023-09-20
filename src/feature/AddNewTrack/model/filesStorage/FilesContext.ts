'use client'
import { createContext } from 'react';

const filesFormData = new FormData()

const defaultValue = filesFormData

export const FilesContext = createContext<FormData>(defaultValue)