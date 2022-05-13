const express = require('express');
const app = express();
const cors = require('cors');
const catRouter = require('./routes/catRouter');

app.use(express.json());

//cors middleware
app.use(cors({
    origin: "*",
    optionsSuccessStatus: 200,
}));

app.use('/cats', catRouter);

const port = 3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})