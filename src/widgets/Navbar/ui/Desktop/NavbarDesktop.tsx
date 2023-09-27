import { Logo } from '@/shared/ui/Logo/Logo';
import cls from './NavbarDesktop.module.scss'
import { Links } from './Links/Links';
import { User } from './User';
import { Search } from './Search/Search';

export const NavbarDesktop: React.FunctionComponent = (props) => {

    return ( 
        <div className={cls.container}>
            <nav className={cls.nav}>
                <Logo className={cls.flex_fixed_width}/>
                <Links className={cls.flex_fixed_width}/>
                <Search/>
                <User/>
            </nav>
        </div>
    )
};
