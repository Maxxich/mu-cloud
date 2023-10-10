'use client'
import * as React from 'react';
import { ITooltip, Tooltip as TooltipEl,PlacesType } from 'react-tooltip';
import classNames from 'classnames';
import cls from './Tooltip.module.scss'

interface ITooltipProps extends ITooltip {
    className?: string,
    place: PlacesType | undefined
}

export const Tooltip: React.FunctionComponent<ITooltipProps> = React.memo(({
    className,
    place,
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
            place={place}
            {...rest}
        
        />
    )
})

Tooltip.displayName = 'Tooltip'
