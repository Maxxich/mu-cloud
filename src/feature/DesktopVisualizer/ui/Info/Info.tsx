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

    return (
        <div className={infoClasses}>
            <div className={cls.name}>
                {getNameText()}
            </div>
            <div className={cls.author}>
                {author}
            </div>
        </div> 
    )
};