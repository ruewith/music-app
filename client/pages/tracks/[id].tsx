import { Button, Grid, TextField } from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";

const TrackPage = () => {
    const track: ITrack = {
        _id: "1",
        name: "Track 1",
        artist: "Artist1",
        text: "Text1",
        listens: 0,
        picture: "http://localhost:5000/image/image1.png",
        audio: "http://localhost:5000/audio/song1.mp3",
        comments: [],
    };

    const router = useRouter();

    return (
        <MainLayout>
            <Button variant="outlined" style={{ fontSize: 20 }} onClick={() => router.push("/tracks")}>
                К списку
            </Button>
            <Grid container style={{ margin: "20px 0" }}>
                <img src={track.picture} width={200} height={200} alt="" />
                <div style={{ marginLeft: 30 }}>
                    <h1> Название: {track.name}</h1>
                    <h1> Исполнитель: {track.artist}</h1>
                    <h1>Прослушиваний - {track.listens}</h1>
                </div>
            </Grid>
            <h1>Слова трека</h1>
            <p>{track.text}</p>
            <h1>Комментарии</h1>
            <Grid>
                <TextField label="Ваше имя" fullWidth />
                <TextField label="Комментарий" fullWidth multiline rows={4} />
                <Button>Отправить</Button>
            </Grid>
        </MainLayout>
    );
};

export default TrackPage;
