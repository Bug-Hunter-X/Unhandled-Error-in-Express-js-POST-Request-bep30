const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  const { name, email } = req.body;
  //Error Handling
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  if (typeof name !== 'string' || typeof email !== 'string') {
    return res.status(400).json({ error: 'Name and email must be strings' });
  }
  const user = { name, email };
  console.log('User:', user);
  res.status(201).json({ message: 'User created', user });
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});
app.listen(3000, () => console.log('Server listening on port 3000'));