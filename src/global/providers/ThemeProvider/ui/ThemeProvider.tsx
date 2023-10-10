'use client'

import { ReactNode, useEffect, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage'
import { Theme } from '@/shared/const/theme'
import { ThemeContext } from '@/shared/lib/context/ThemeContext'

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}


const ThemeProvider = (props: ThemeProviderProps) => {
    const { initialTheme, children } = props
    const [isThemeInited, setThemeInited] = useState(false)

    const [theme, setTheme] = useState<Theme>(Theme.DEFAULT)

    useEffect(() => {
        if (!isThemeInited && initialTheme) {
            setTheme(initialTheme)
            setThemeInited(true)
        }
    }, [initialTheme, isThemeInited])

    useEffect(() => {
        document.body.classList.add(theme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
        return () => {
            document.body.classList.remove(theme)
        }
    }, [theme])

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    )

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
