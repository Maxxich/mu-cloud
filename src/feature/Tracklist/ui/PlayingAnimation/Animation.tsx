import classNames from 'classnames';
import cls from './Animation.module.scss'

interface IAnimtaionProps {
    paused: boolean
}

export const Animtaion: React.FunctionComponent<IAnimtaionProps> = ({
    paused
}) => {
const mods: Mods = {
    [cls.paused]: paused
    }

    const classes = classNames(
    cls.animation_element,
    mods
    )

  return (
    <div className={cls.animation}>
        <div className={classes}/>
        <div className={classes}/>
        <div className={classes}/>
        <div className={classes}/>
    </div>
  );
};