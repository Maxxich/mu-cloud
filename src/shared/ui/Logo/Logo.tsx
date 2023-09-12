import { memo } from 'react';
import classNames from 'classnames';
import LogoSvg from '@/shared/assets/svg/Logo.svg'
import cls from './Logo.module.scss'

interface Props {
  className?: string 
}

export const Logo: React.FunctionComponent = memo(({
    className
}: Props) => {


    return (
        <div className={classNames(cls.container, className)}>
            <LogoSvg className={cls.logo}/>
            <span className={cls.text}>MUSICLOUD</span>
        </div>
    )
})

Logo.displayName = 'Logo'

