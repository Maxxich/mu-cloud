import React from 'react'
import ThemeProvider from './ThemeProvider'
import { Theme } from '@/shared/const/theme'

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
