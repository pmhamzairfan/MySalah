const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Placeholder backend – Phase 1 (frontend handles login locally)
app.get('/', (req, res) => {
  res.send('MySalah Backend Running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
