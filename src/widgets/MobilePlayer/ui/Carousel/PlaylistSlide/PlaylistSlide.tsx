import { FunctionComponent } from 'react';
import cls from './PlaylistSlide.module.scss'

interface IPlaylistSlideProps {
  tracklist: React.ReactElement
  playlistId: string
}

export const PlaylistSlide: FunctionComponent<IPlaylistSlideProps> = ({
    tracklist, 
    playlistId
}) => {

    return (
        <div className={cls.container}>
            <div className={cls.next}>Далее</div>
            <div className={cls.scroll} id={playlistId}>
                {
                    tracklist
                }
            </div>
        </div>
    );
}
