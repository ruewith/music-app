import { Grid } from "@material-ui/core";
import { Box } from "@material-ui/system";
import React from "react";
import { ITrack } from "../types/track";
import TrackItem from "./TrackItem";

interface TrackListProps {
    tracks: ITrack[];
}

const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
    return (
        <div>
            <Grid container direction="column">
                <Box p={2}>
                    {tracks.map((track) => (
                        <TrackItem key={track._id} track={track} />
                    ))}
                </Box>
            </Grid>
        </div>
    );
};

export default TrackList;