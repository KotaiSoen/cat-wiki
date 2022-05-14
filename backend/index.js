const express = require('express');
const app = express();
const cors = require('cors');
const catRouter = require('./routes/catRouter');

app.use(express.json());
var distDir = __dirname + "/dist";
 app.use(express.static(distDir));

//cors middleware
app.use(cors({
    origin: "*",
    optionsSuccessStatus: 200,
}));

app.use('/cats', catRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})