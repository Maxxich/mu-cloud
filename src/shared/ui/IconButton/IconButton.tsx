import classNames from 'classnames'
import cls from './IconButton.module.scss'
// import { PlacesType } from "react-tooltip"
// import { Tooltip } from '../tooltip';

type ButtonVariant = 'default' | 'secondary'

interface IIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactElement
    variant?: ButtonVariant
    size?:  'm' | 'l' | 'xl',
    className?: string,
    // tooltipId?: never,
    // tooltipContent?: never
    // tooltipPlace?: never
}

interface IIconButtonWithTooltipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactElement
  variant?: ButtonVariant
  size?: 'm' | 'l' | 'xl',
  className?: string,
//   tooltipId: string,
//   tooltipContent: string
//   tooltipPlace?: PlacesType | undefined
}

type IProps = IIconButtonProps | IIconButtonWithTooltipProps

export const IconButton: React.FunctionComponent<IProps> = ({
    icon,
    size = 'm',
    className,
    variant = 'default',
    ...rest
}) => {

  return (
    <>
      <button
        className={classNames(cls.IconButton, cls[size], cls[variant], className)}
        // id={tooltipId}
        // data-tooltip-id={tooltipId}
        // data-tooltip-content={tooltipContent}
        {...rest}
      >
        {icon}
      </button>
      {/* {
        tooltipId && 
        <Tooltip
          id={tooltipId}
          place={tooltipPlace}
        />
      } */}
    </>
  )
}
