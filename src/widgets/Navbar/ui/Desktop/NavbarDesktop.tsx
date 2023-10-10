'use client'
import Link from 'next/link';
import { Logo } from '@/shared/ui/Logo';
import cls from './NavbarDesktop.module.scss'
import { Links } from './Links/Links';
import { User } from './User';
import { Search } from './Search/Search';

export const NavbarDesktop: React.FunctionComponent = (props) => {

    return ( 
        <div className={cls.container}>
            <nav className={cls.nav}>
                <Link href={'/'}>
                    <Logo className={cls.flex_fixed_width}/>
                </Link>
                <Links className={cls.flex_fixed_width}/>
                <Search/>
                <User/>
            </nav>
        </div>
    )
};
