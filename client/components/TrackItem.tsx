import { Card, Grid, IconButton } from "@material-ui/core";
import React from "react";
import { ITrack } from "../types/track";
import styles from "../styles/TrackItem.module.sass";
import { Delete, Pause, PlayArrow } from "@material-ui/icons";
import { useRouter } from "next/router";

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
    const router = useRouter();

    return (
        <Card className={styles.track} onClick={() => router.push(`/tracks/${track._id}`)}>
            <IconButton onClick={(event) => event.stopPropagation()}>{!active ? <PlayArrow /> : <Pause />}</IconButton>
            <img width={70} height={70} src={track.picture} />
            <Grid container direction="column" style={{ width: 200, margin: "0 20px" }}>
                <div>{track.name}</div>
                <div style={{ fontSize: 12, color: "gray" }}>{track.artist}</div>
            </Grid>
            {active && <div>2:22/3:33</div>}
            <IconButton onClick={(event) => event.stopPropagation()} style={{ marginLeft: "auto" }}>
                <Delete />
            </IconButton>
        </Card>
    );
};

export default TrackItem;
