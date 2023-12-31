'use client'
import { Fragment } from 'react'
import { signOut } from 'next-auth/react';
import { Menu } from '@/shared/ui/Menu' 
import { IconButton } from '@/shared/ui/IconButton'
import IconGear from '@/shared/assets/svg/Gear.svg'
import IconLogout from '@/shared/assets/svg/Logout.svg'
import cls from './Dropdown.module.scss'

export function Dropdown() {

    const logout = () => {
        signOut({
            redirect: false
        }).then(() => {
            location.reload()
        }).catch(() => {
            location.reload()
        })
    }

    return (
        <Menu.Wrapper as='div' className={cls.menu}>
            {({ open }) => (
                <>
                    <Menu.Button as={Fragment}>
                        <IconButton
                            icon={<IconGear/>}
                            size={'s'}
                        />
                    </Menu.Button>
                    <Menu.Items
                        open={open}
                    >
                        <Menu.Item
                            component={'link'}
                            href={'/settings'}
                            icon={<IconGear/>}
                        >
                            Настройки
                        </Menu.Item>
                        <Menu.Item
                            component={'button'}
                            onClick={logout}
                            icon={<IconLogout/>}
                        >
                            Выйти
                        </Menu.Item>
                    </Menu.Items>
                </>
            )}
        </Menu.Wrapper>
    )
}