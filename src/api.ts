import express from "express";
import { PORT } from "./config";

const app = express();

app.get("/", (req, res) =>{
    res.json({
        cabeceras: req.headers,
    });
});

app.listen(PORT, ()=> console.log(`✅  Ready on port http://localhost:${PORT}`));

