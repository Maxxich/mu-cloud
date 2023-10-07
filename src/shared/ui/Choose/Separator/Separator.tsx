import { ReactNode, memo } from 'react'
import cls from './Separator.module.scss'

interface ISeparatorProps {
    children: ReactNode
}

export type SeparatorComponent =  React.FunctionComponent<ISeparatorProps>

export const Separator: SeparatorComponent = memo(({
    children
}) => {
    return (
        <span className={cls.separator}>
            {children}
        </span>
    )
})

Separator.displayName = 'Separator'