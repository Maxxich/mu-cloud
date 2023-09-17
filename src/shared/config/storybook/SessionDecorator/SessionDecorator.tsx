import { StoryFn } from '@storybook/react'
import { SessionProvider } from 'next-auth/react'

export const SessionDecorator = (StoryComponent: StoryFn) => (
    <SessionProvider>
        <StoryComponent />
    </SessionProvider>
);


