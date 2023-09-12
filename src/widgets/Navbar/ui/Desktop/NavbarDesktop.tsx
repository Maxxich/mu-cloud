import { Logo } from '@/shared/ui/Logo/Logo';
import cls from './NavbarDesktop.module.scss'
import { Links } from './Links/Links';
import { User } from './User';

const NavbarDesktop: React.FunctionComponent = (props) => {

    return ( 
        <div className={cls.container}>
            <nav className={cls.nav}>
                <Logo/>
                <Links/>
                <User/>
            </nav>
        </div>
    )
};

export default NavbarDesktop