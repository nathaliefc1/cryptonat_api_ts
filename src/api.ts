import express from "express";
import { PORT, DBURL } from "./config";
var cors = require('cors');
const app = express();

app.use(cors());

const mongoose = require('mongoose');
mongoose.connect(`${DBURL}`, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log(`Connected to DB ${DBURL}`)
})


const userRoute = require('./routes/user');
app.use('/api/user', userRoute)



app.listen(PORT, ()=> console.log(`✅  Ready on port http://localhost:${PORT}`));

