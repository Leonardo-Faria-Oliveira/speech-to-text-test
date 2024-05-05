const express = require('express');
const fs = require("fs");
const OpenAI = require("openai");
const bodyParser = require('body-parser')



const app = express();
const port = 3000;

// const openai = new OpenAI({
// });

app.use(express.json());
app.use(bodyParser.json()) 
app.get('/', async(req, res) => {
    const transcription = await openai.audio.transcriptions.create({
        file: fs.createReadStream("./audio/audio.wav"),
        model: "whisper-1",
      });
  res.send(transcription);
});

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});