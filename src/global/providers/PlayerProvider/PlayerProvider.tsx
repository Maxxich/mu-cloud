import { isMobile } from 'react-device-detect';
import { useSelector } from 'react-redux';
import { getSelectedTrack } from '@/entity/player';
import { MobilePlayerContorls } from '@/feature/MobilePlayerContorls';

interface IPlayerProviderProps {
}

export const PlayerProvider: React.FunctionComponent<IPlayerProviderProps> = (props) => {

    const selectedTrack = useSelector(getSelectedTrack)

    if (!selectedTrack) return null

    if (isMobile) {
        <MobilePlayerContorls selectedTrack={selectedTrack}/>
    }

    return null
};