import { InterfaceSeparator } from '@/shared/ui/InterfaceSeparator/InterfaceSeparator'
import { NavbarDesktop } from './Desktop/NavbarDesktop';
import { NavbarMobile } from './Mobile/NavbarMobile';
import { ServerSeparator } from '@/shared/ui/InterfaceSeparator/ServerSeparator';

interface INavbarProps {
}

export const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
    return (
        <InterfaceSeparator
            mobileComponent={<NavbarMobile/>}
            desktopComponent={<NavbarDesktop/>}
        />
    )
};