
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => res.send('DOOARSCINEMAX backend is running'));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
