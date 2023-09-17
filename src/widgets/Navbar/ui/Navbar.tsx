import { InterfaceSeparator } from '@/shared/ui/InterfaceSeparator/InterfaceSeparator'
import { NavbarDesktop } from './Desktop/NavbarDesktop';
import { NavbarMobile } from './Mobile/NavbarMobile';

interface INavbarProps {
}

export const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
    return (
        <InterfaceSeparator
            desktopComponent={<NavbarDesktop/>}
            mobileComponent={<NavbarMobile/>}
        />
    )
};