const express = require('express');
const app = express();
const port = 3000;

// Une route simple
app.get('/', (req, res) => {
  res.send('Hello, backend !');
});

// Le serveur écoute sur le port 3000
app.listen(port, () => {
  console.log(`Serveur backend démarré sur http://localhost:${port}`);
});
