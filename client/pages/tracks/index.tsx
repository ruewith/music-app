import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { Button, Card, Grid } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { useRouter } from "next/router";
import { ITrack } from "../../types/track";
import TrackList from "../../components/TrackList";

const Index = () => {
    const router = useRouter();

    const tracks: ITrack[] = [
        {
            _id: "1",
            name: "Track 1",
            artist: "Artist1",
            text: "Text1",
            listens: 0,
            picture: "http://localhost:5000/image/image1.png",
            audio: "http://localhost:5000/audio/song1.mp3",
            comments: [],
        },
        {
            _id: "2",
            name: "Track 2",
            artist: "Artist2",
            text: "Text1",
            listens: 0,
            picture: "http://localhost:5000/image/image2.png",
            audio: "http://localhost:5000/audio/song2.mp3",
            comments: [],
        },
        {
            _id: "3",
            name: "Track 3",
            artist: "Artist3",
            text: "Text3",
            listens: 0,
            picture: "http://localhost:5000/image/image3.png",
            audio: "http://localhost:5000/audio/song3.mp3",
            comments: [],
        },
    ];

    return (
        <MainLayout>
            <Grid container justifyContent="center">
                <Card style={{ width: 900 }}>
                    <Box p={3}>
                        <Grid container justifyContent="space-between">
                            <h1>Список треков</h1>
                            <Button onClick={() => router.push("/tracks/create")}>Загрузить</Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks} />
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;
