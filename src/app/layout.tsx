import type { Metadata } from 'next'
import '@/global/styles/index.scss'
import { StoreProvider } from '@/global/providers/StoreProvider'
import { ThemeProvider } from '@/global/providers/ThemeProvider'
import { PlayerProvider } from '@/global/providers/PlayerProvider/PlayerProvider'
import { AudioProvider } from '@/global/providers/AudioProvider'
import { Navbar } from '@/widgets/Navbar'
import { SessionProvider } from '@/global/providers/SessionProvider/SessionProvider'
import { PageContainer } from '@/shared/ui/PageContainer/PageContainer'
import { getIsMobile } from '@/shared/lib/getIsMobile/getIsMobile'

export const metadata: Metadata = {
    title: 'MuCloud',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {

    const isMobile = getIsMobile()

    return (
        <ThemeProvider>
            <SessionProvider>
                <StoreProvider initialState={{
                    player: {
                        currentTrackId: 1
                    }
                }}>
                    <html lang="en">
                        <body className='app__default_theme'>
                            <PageContainer isMobile={isMobile}>
                                {children}
                            </PageContainer>
                            <Navbar isMobile={isMobile}/>
                            <AudioProvider>
                                <PlayerProvider isMobile={isMobile}/>
                            </AudioProvider>
                        </body>
                    </html>
                </StoreProvider>
            </SessionProvider>
        </ThemeProvider>
    )
}
