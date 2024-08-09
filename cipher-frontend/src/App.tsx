import React from 'react';
import { TextField, Button, Container, Stack } from '@mui/material';

const App: React.FC = () => {


    return (
        <Container>
            <Stack spacing={2}>
                <TextField
                    label="Message"
                    variant="outlined"
                />
                <TextField
                    label="Password"
                    variant="outlined"
                />
                <Button variant="contained">Encode</Button>
                <Button variant="contained" >Decode</Button>
                <TextField
                    label="Result"
                    variant="outlined"
                />
            </Stack>
        </Container>
    );
}

export default App;
