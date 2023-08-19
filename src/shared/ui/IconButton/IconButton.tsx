import classNames from 'classnames'
import cls from './IconButton.module.scss'
import { PlacesType } from 'react-tooltip'
import { Tooltip } from '../Tooltip/Tooltip'
import { memo } from 'react'

type ButtonVariant = 'default' | 'secondary'

interface IBaseIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactElement
  variant?: ButtonVariant
  size?: 'm' | 'l' | 'xl',
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