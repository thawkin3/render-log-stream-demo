const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  console.log('Log - home page');
  console.info('Info - home page');
  console.warn('Warn - home page');
  console.error('Error - home page');
  console.debug('Debug - home page');

  return res.sendFile('index.html', { root: 'public' });
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
