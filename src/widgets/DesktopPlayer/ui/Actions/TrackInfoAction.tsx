import { useAppDispatch, useAppSelector } from 'app/model/store';
import { useCurrentTrack } from 'entities/lib/hooks/useCurrentTrack';
import { toggleShowPlaylist } from 'shared/model';
import { Variants, motion } from 'framer-motion';
import * as React from 'react';
import { Image, Tooltip } from 'shared/UI';
import { whileTapVariant } from 'shared/lib';
import styled from 'styled-components';
import { backUrl } from 'const';

const Container = styled(motion.button)`
width: 300px;
height: 100%;
display: flex;
align-items: center;
gap: 15px;
padding: 0 6px;
justify-content: flex-start;
overflow: hidden;
background: transparent;
cursor: pointer;
`

const variants: Variants = {
    visible:{
        y: '0%',
        opacity: 1
    },
    hidden: {
        y: '150%',
        opacity: 0
    }
}

const Info = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
gap: 2px;
justify-content: space-between;
flex: 0 0 calc(100%-40px);
overflow: hidden;
`

const Text = styled.span`
max-width: 100%;
text-overflow: ellipsis;
font-size: 1.4rem;
line-height: 1.6rem;
color: #fff;
overflow: hidden;
white-space: nowrap;
`

interface ITrackInfoActionProps {
}

export const TrackInfoAction: React.FunctionComponent<ITrackInfoActionProps> = (props) => {

    const track = useCurrentTrack()
    const dispatch = useAppDispatch()
    const tooltipId = React.useId()
    const playlistOpened = useAppSelector(state => state.player.showPlaylist)

    if (!track) return null

    return <>
        <Container
            variants={variants}
            initial={'hidden'}
            animate={'visible'}
            key={track.id}
            whileTap={{ ...whileTapVariant, scale: 0.95 }}
            transition={{
                stiffness: 1
            }}
            onClick={() => dispatch(toggleShowPlaylist())}
            data-tooltip-id={tooltipId}
            id={tooltipId}
            data-tooltip-content={playlistOpened ? 'Закрыть плейлист' : 'Открыть плейлист'}
        >
            <Image
                size={40}
                src={backUrl + track.picture_source.square_small}
            />
            <Info>
                <Text>{track.name} {track.name_secondary}</Text>
                <Text>{track.owners[0].name}</Text>
            </Info>
        </Container>
        <Tooltip id={tooltipId} place={'bottom'}/>
    </>
};