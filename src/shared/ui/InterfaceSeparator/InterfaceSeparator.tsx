import { ReactElement } from 'react';
import { ClientWrapper } from './ui/ClientWrapper';
import { Separator } from './ui/Separator';

export interface IInterfaceSeparatorProps {
    mobileComponent: ReactElement
    desktopComponent: ReactElement
}

export const InterfaceSeparator: React.FunctionComponent<IInterfaceSeparatorProps> = ({
    desktopComponent,
    mobileComponent,
}) => {

    return <ClientWrapper
        separator={<Separator
            desktopComponent={desktopComponent}
            mobileComponent={mobileComponent}
        />}
    />
};