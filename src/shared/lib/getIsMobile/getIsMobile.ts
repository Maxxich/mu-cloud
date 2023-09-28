import 'server-only'
import { headers } from 'next/headers'
import { getSelectorsByUserAgent } from 'react-device-detect'

export function getIsMobile() {
    const userAgent = headers().get('user-agent')
    const selectors = userAgent ? getSelectorsByUserAgent(userAgent) : undefined
    return selectors ? selectors.isMobile : true
}