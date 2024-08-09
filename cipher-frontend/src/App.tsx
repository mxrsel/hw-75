import React, {useState} from 'react';
import { TextField, Button, Container, Stack } from '@mui/material';

const App: React.FC = () => {
    const [message, setMessage] = useState('');
    const [password, setPassword] = useState('');
    const [result, setResult] = useState('');

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
