'use client'
import { useTransition, animated } from '@react-spring/web';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { getIsInterfaceHidden } from '@/entity/player';
import { Track } from '@/entity/track';
import cls from './Info.module.scss'

interface Props {
    track: Track
}

export const Info: React.FunctionComponent<Props> = ({
    track
}) => {

    const author = track.owners[0].name
    const name_secondary = track.name_secondary
    const name = track.name

    const isInterfaceHidden = useSelector(getIsInterfaceHidden)

    const infoMods: Mods = {
        [cls.info_hidden]: isInterfaceHidden
    }
    
    const infoClasses = classNames(
        cls.info,
        infoMods
    )

    const getNameText = () => {
        if (!name_secondary) return name
        return name + ' - ' + name_secondary
    }

    const transition = useTransition(track.id, {
        from: { opacity: 0, y: -50 },
        enter: { opacity: 1, y: 0 },
        config: {
            duration: 300,
        },
    })

    return transition((style, item) => 
        item 
            ? (
                <animated.div className={infoClasses} style={style}>
                    <div className={cls.name}>
                        {getNameText()}
                    </div>
                    <div className={cls.author}>
                        {author}
                    </div>
                </animated.div> 
            )
            : null
    )
};