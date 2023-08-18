import '@/global/styles/index.scss'
import { Decorator } from '@storybook/react'
import { ThemeProvider } from '@/global/providers/ThemeProvider'
import { Theme } from '@/shared/const/theme'

export const ThemeDecorator = (theme: Theme) => {
    const decorator: Decorator = (story) => (
        <ThemeProvider>
            <div className={`${theme}`}>
                {story()}
            </div>
        </ThemeProvider>
    )

    return decorator
}
