import express from 'express';
import {vigenereCipher} from "../vigenereCipher/vigenereCipher";

const router = express.Router();

router.post('/encode', (req, res) => {
    const { password, message } = req.body;
    if (!password || !message) {
        return res.send({ error: 'Password and message are required' });
    }

    const encodedMessage = vigenereCipher(message, password, true);
    res.send({ encoded: encodedMessage });
});

router.post('/decode', (req, res) => {
    const { password, message } = req.body;
    if (!password || !message) {
        return res.send({ error: 'Password and message are required' });
    }

    const decodedMessage = vigenereCipher(message, password, false);
    res.send({ decoded: decodedMessage });
});

export default router;
