import * as React from 'react';
import { ITooltip, Tooltip as TooltipEl } from 'react-tooltip';
import classNames from 'classnames';
import cls from './Tooltip.module.scss'

interface ITooltipProps extends ITooltip {
    className?: string
}

export const Tooltip: React.FunctionComponent<ITooltipProps> = React.memo(({
    className,
    ...rest
}) => {

    return (
        <TooltipEl
            className={classNames(cls, className)}
            style={{ 
                backgroundColor: 'var(--tooltip-background-color)', 
                color: 'var(--tooltip-color)', 
                padding: '0 5px'
            }}
            delayHide={0}
            delayShow={0}
            {...rest}
        
        />
    )
})

Tooltip.displayName = 'Tooltip'
