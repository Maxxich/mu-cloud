import { Track } from '@/entity/track'
import { useAudio } from '@/shared/lib/useAudio/useAudio';
import { Canvas } from './Canvas/Canvas'
import { Wrapper } from './Wrapper/Wrapper'
import { Info } from './Info/Info';
import { useOverflowY } from '../lib/useOverflowY';
import { useImageElements } from '../lib/useImageElements';
import { useHideInterface } from '../lib/useHideInterface';

interface Props {
    track: Track
}

export const DesktopVisualizer: React.FunctionComponent<Props> = ({
    track
}) => {

    const audio = useAudio()
    const {
        image, imageSquare
    } = useImageElements(track)

    useHideInterface()
    useOverflowY()

    if (!audio || !image || !imageSquare) return null

    return (
        <Wrapper>
            <Canvas
                audio={audio}
                image={image}
                squareImage={imageSquare}
                color={track.color}
            />
            <Info track={track}/>
        </Wrapper>
    );
};

