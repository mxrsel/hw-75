import React, {useState} from 'react';
import { TextField, Button, Container, Stack } from '@mui/material';
import axiosApi from "./axiosApi.ts";

const App: React.FC = () => {
    const [message, setMessage] = useState('');
    const [password, setPassword] = useState('');
    const [result, setResult] = useState('');


    const handleEncode = async () => {
        try {
            const response = await axiosApi.post('/encode', { message, password });
            setResult(response.data.encoded);
        } catch (error) {
            console.error('Error encoding text:', error);
        }
    };
    return (
        <Container>
            <Stack spacing={2}>
                <TextField
                    label="Message"
                    variant="outlined"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <TextField
                    label="Password"
                    variant="outlined"
                />
                <Button variant="contained" onClick={handleEncode}>Encode</Button>
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
