import { Track } from '@/entity/track'
import { useAudio } from '@/shared/lib/useAudio/useAudio';
import { Canvas } from './Canvas/Canvas'
import { Wrapper } from './Wrapper/Wrapper'
import { Info } from './Info/Info';
import { useOverflowY } from '../lib/useOverflowY';
import { useHideInterface } from '../lib/useHideInterface';

interface Props {
    track: Track
}

export const DesktopVisualizer: React.FunctionComponent<Props> = ({
    track,
}) => {

    const audio = useAudio()

    useHideInterface()
    useOverflowY()

    if (!audio) return null

    return (
        <Wrapper>
            <Canvas/>
            <Info track={track}/>
        </Wrapper>
    );
};

