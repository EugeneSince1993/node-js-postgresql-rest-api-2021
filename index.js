const express = require('express');
const userRouter = require('./routes/user.routes');
// 10.55

const PORT = process.env.PORT || 8080;

const app = express();

app.get('/', (req, res) => {
  res.send('HELLO POSTGRES + NODEJS');
});

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
