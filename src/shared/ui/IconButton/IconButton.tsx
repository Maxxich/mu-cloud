import classNames from 'classnames'
import { PlacesType } from 'react-tooltip'
import { memo } from 'react'
import cls from './IconButton.module.scss'
import { Tooltip } from '../Tooltip/Tooltip'

type ButtonVariant = 'default' | 'secondary'

interface IBaseIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactElement
  variant?: ButtonVariant
  size?: 's' | 'm' | 'l' | 'xl',
  className?: string,
}

interface IIconButtonProps extends IBaseIconButtonProps {
    tooltipId?: never,
    tooltipContent?: never
    tooltipPlace?: never
}

interface IIconButtonWithTooltipProps extends IBaseIconButtonProps {
  tooltipId: string,
  tooltipContent: string
  tooltipPlace?: PlacesType
}

type IProps = IIconButtonProps | IIconButtonWithTooltipProps

export const IconButton: React.FunctionComponent<IProps> = memo(({
    icon,
    size = 'm',
    className,
    variant = 'default',
    tooltipContent,
    tooltipId,
    tooltipPlace,
    ...rest
}) => {

    return (
        <>
            <button
                className={classNames(cls.IconButton, cls[size], cls[variant], className)}
                id={tooltipId}
                data-tooltip-id={tooltipId}
                data-tooltip-content={tooltipContent}
                {...rest}
            >
                {icon}
            </button>
            {
                tooltipId && 
        <Tooltip
            id={tooltipId}
            place={tooltipPlace}
        />
            }
        </>
    )
})

IconButton.displayName = 'IconButton'