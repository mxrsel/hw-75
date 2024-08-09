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

    const handleDecode = async () => {
        try {
            const response = await axiosApi.post('/decode', { message: result, password });
            setMessage(response.data.decoded);
        } catch (error) {
            console.error('Error decoding text:', error);
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant="contained" onClick={handleEncode}>Encode</Button>
                <Button variant="contained" onClick={handleDecode}>Decode</Button>
                <TextField
                    label="Result"
                    variant="outlined"
                    value={result}
                    onChange={(e) => setResult(e.target.value)}
                />
            </Stack>
        </Container>
    );
}

export default App;
