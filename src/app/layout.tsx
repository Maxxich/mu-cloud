import type { Metadata } from 'next'
import '@/global/styles/index.scss'
import { StoreProvider } from '@/global/providers/StoreProvider'
import { ThemeProvider } from '@/global/providers/ThemeProvider'
import { PlayerProvider } from '@/global/providers/PlayerProvider/PlayerProvider'
import { AudioProvider } from '@/global/providers/AudioProvider'

export const metadata: Metadata = {
  title: 'MuCloud',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <StoreProvider initialState={{
        player: {
          currentTrackId: 1
        }
      }}>
        <html lang="en">
          <body>
              {children}
            <AudioProvider>
              <PlayerProvider/>
            </AudioProvider>
          </body>
        </html>
      </StoreProvider>
    </ThemeProvider>
  )
}
