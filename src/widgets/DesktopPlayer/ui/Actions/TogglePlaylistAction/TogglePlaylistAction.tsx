import * as React from 'react';
import { Button } from './Button';
import { PlaylistWhileClosedVisualizer } from './PlaylistWhileClosedVisualizer';

interface ITogglePlaylistActionProps {
}

export const TogglePlaylistAction: React.FunctionComponent<ITogglePlaylistActionProps> = (props) => {
    return (
        <>
            <PlaylistWhileClosedVisualizer/>
            <Button/>
        </>
    );
};
