'use client'

import React from 'react'
import { Theme } from '@/shared/const/theme'
import ThemeProvider from './ThemeProvider'

export const withTheme = (Component: React.ComponentType) => {
    const withThemeComponent = () => {
        return (
            <ThemeProvider initialTheme={Theme.DEFAULT}>
                <Component />
            </ThemeProvider>
        )
    }

    return withThemeComponent
}
