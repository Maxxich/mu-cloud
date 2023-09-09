'use client'

import Link from 'next/link'
import cls from './NavLink.module.scss'
import { Url } from 'next/dist/shared/lib/router/router'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'
import { memo } from 'react'

interface ILinkNavbarProps {
  href: string
  icon: React.ReactElement
}

export const NavLink: React.FunctionComponent<ILinkNavbarProps> = memo(({
  href,
  icon,
}) => {

  const pathname = usePathname()

  console.log(pathname)

  let variant: 'primary' | 'secondary' = pathname.startsWith(href) ? 'primary' : 'secondary'

  if (pathname !== '/' && href === '/') variant = 'secondary'

  return (
    <Link
      href={href}
      className={classNames(cls.link, cls[variant])}
    >
      {icon}
    </Link>
  );
})

NavLink.displayName = 'NavLink'