'use client'
import { ReactElement } from 'react';
import { isMobile } from 'react-device-detect';

interface IInterfaceSeparatorProps {
    mobileComponent: ReactElement
    desktopComponent: ReactElement
}

export const InterfaceSeparator: React.FunctionComponent<IInterfaceSeparatorProps> = ({
    desktopComponent,
    mobileComponent,
}) => {
    if (isMobile) return mobileComponent

    return (
        desktopComponent
    );
};