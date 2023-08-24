import { FunctionComponent } from 'react';
import cls from './PlaylistSlide.module.scss'

interface IPlaylistSlideProps {
  tracklist: React.ReactElement
}

export const PlaylistSlide: FunctionComponent<IPlaylistSlideProps> = ({
    tracklist
}) => {

  return (
    <div className={cls.container}>
      <div className={cls.next}>Далее</div>
      <div className={cls.scroll}>
        {
          tracklist
        }
      </div>
    </div>
  );
}
