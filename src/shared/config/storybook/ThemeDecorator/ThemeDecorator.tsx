'use client'
import '@/global/styles/index.scss'
import { Decorator } from '@storybook/react'
import { ThemeProvider } from '@/global/providers/ThemeProvider'
import { Theme } from '@/global/providers/ThemeProvider/Theme'

export const ThemeDecorator = (theme: Theme) => {
    const decorator: Decorator = (story) => (
        <ThemeProvider>
            {story()}
        </ThemeProvider>
    )

    return decorator
}
