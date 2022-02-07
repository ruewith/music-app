import { Button, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import StepWrapper from "../../components/StepWrapper";
import MainLayout from "../../layouts/MainLayout";

const Create = () => {
    const [activeStep, setActiveStep] = useState(0);

    const next = () => {
        if (activeStep !== 2) {
            setActiveStep((prev) => prev + 1);
        }
    };

    const back = () => {
        setActiveStep((prev) => prev - 1);
    };

    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 && (
                    <Grid container direction="column" style={{ padding: 20 }}>
                        <TextField style={{ marginTop: 10 }} label={"Название трека"} />
                        <TextField style={{ marginTop: 10 }} label={"Имя автора"} />
                        <TextField style={{ marginTop: 10 }} label={"Текст песни"} multiline rows={3} />
                    </Grid>
                )}
                {activeStep === 1 && <h1>Step 2</h1>}
                {activeStep === 2 && <h1>Step 3</h1>}
            </StepWrapper>
            <Grid container justifyContent="space-between">
                <Button disabled={activeStep === 0} onClick={back}>
                    Назад
                </Button>
                <Button onClick={next}>Далее</Button>
            </Grid>
        </MainLayout>
    );
};

export default Create;
