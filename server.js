const express = require('express');
const cors = require('cors');
const app = express();
const port = 8081;

app.use(cors());

const videos = [
  { id: '16', name: 'Intro to NuxtJs' },
  { id: '17', name: 'Intro to VueJs' },
  { id: '18', name: 'Intro to Advanced Techniques' },
];

app.get('/', (req, res) => {
  res.send(videos);
});

app.listen(port, () => {
  console.log(`Nuxt suit n tie api running on port ${port}`);
});
