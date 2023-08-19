import * as React from 'react';
import { ITooltip, Tooltip as TooltipEl } from 'react-tooltip';
import cls from './Tooltip.module.scss'
import classNames from 'classnames';

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
        delayHide={0}
        delayShow={0}
        {...rest}
        
    />
  )
})

Tooltip.displayName = 'Tooltip'
