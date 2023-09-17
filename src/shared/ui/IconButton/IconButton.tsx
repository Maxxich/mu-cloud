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
  rotated?: boolean,
  willRotate?: boolean
}

interface IIconButtonWillRotateProps extends IBaseIconButtonProps {
    rotated?: boolean,
    willRotate: true
}

interface IIconButtonWillNotRotateProps extends IBaseIconButtonProps {
    rotated?: never,
    willRotate?: never
}

type IButtonWithRotate = IIconButtonWillRotateProps | IIconButtonWillNotRotateProps

type IIconButtonProps = IButtonWithRotate & {
    tooltipId?: never,
    tooltipContent?: never
    tooltipPlace?: never
}

type IIconButtonWithTooltipProps = IButtonWithRotate &  {
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
    rotated,
    willRotate,
    ...rest
}) => {

    const mods: Mods = {
        [cls.rotated]: rotated
    }

    const btn = 
        <button
            className={classNames(cls.IconButton, cls[size], cls[variant], className)}
            id={tooltipId}
            data-tooltip-id={tooltipId}
            data-tooltip-content={tooltipContent}
            {...rest}
        >
            {icon}
        </button>

    return (
        <>
            {
                willRotate
                    ?  (
                        <div className={classNames(cls.willRotate, mods)}>
                            {btn}
                        </div>
                    )
                    : btn 
            }
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