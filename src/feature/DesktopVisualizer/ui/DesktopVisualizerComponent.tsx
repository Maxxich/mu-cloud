import { Track } from '@/entity/track'
import { useAudio } from '@/shared/lib/hooks/useAudio/useAudio';
import { Canvas } from './Canvas/Canvas'
import { Wrapper } from './Wrapper/Wrapper'
import { Info } from './Info/Info';
import { useOverflowY } from '../lib/useOverflowY';
import { useHideInterface } from '../lib/useHideInterface';

interface Props {
    track: Track
    style: any
}

export const DesktopVisualizerComponent: React.FunctionComponent<Props> = ({
    track,
    style
}) => {

    const audio = useAudio()

    useHideInterface()
    useOverflowY()

    if (!audio) return null

    return (
        <Wrapper style={style}>
            <Canvas/>
            <Info track={track}/>
        </Wrapper>
    );
};

