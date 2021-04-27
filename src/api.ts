import express from "express";

const app = express();

const PORT = 3000;
app.listen(()=> console.log(`Ready on port http://localhost:${PORT}`));