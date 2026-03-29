const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => res.json({ message: "Gateway is running!" }));
app.get('/health', (req, res) => res.json({ status: "ok", timestamp: new Date() }));

app.listen(PORT, () => console.log('Gateway listening on port ' + PORT));
