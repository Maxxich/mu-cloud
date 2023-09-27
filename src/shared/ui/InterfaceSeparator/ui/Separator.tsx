import 'server-only'
import { ReactElement } from 'react';
import { getSelectorsByUserAgent } from 'react-device-detect';
import { headers } from 'next/headers';

export interface ISeparatorProps {
    mobileComponent: ReactElement
    desktopComponent: ReactElement
}

export const Separator: React.FunctionComponent<ISeparatorProps> = ({
    desktopComponent,
    mobileComponent,
}) => {

    const userAgent = headers().get('user-agent')
    const selectors = userAgent ? getSelectorsByUserAgent(userAgent) : undefined
    const isMobile = selectors ? selectors.isMobile : true
    
    if (isMobile) return mobileComponent
    return desktopComponent
};