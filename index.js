const path = require('path');
const express = require('express');

const app = express();

const port = 8080;

app.use(express.json());

app.get('/', (req, res) => {
  res.redirect('/dashboard');
});

app.use('/r3e', express.static(path.join(__dirname, 'r3e')));

app.use('/dashboard', express.static(path.join(__dirname, 'dashboard')));

app.post('/log', (req, res) => {
  console.log('>>> req: \n', JSON.stringify(req.body));
  console.log('\n ======= \n');
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`r3e-driver-spectator running at: http://localhost:${port}`);
});