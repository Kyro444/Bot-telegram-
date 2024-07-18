const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const SHEETS_API_URL = process.env.SHEETS_API_URL;

app.post(`/bot${TELEGRAM_TOKEN}`, async (req, res) => {
    const { message } = req.body;
    const chatId = message.chat.id;

    if (message.text === '/start') {
        await sendMessage(chatId, 'Welcome to the Sales Reporting Bot!');
    } else {
        await sendMessage(chatId, 'Command not recognized.');
    }

    res.sendStatus(200);
});

async function sendMessage(chatId, text) {
    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
    await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text })
    });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
