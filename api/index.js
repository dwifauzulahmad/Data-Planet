import express from "express";
import {client} from "./db.js";


const app = express();

//middleware
app.use(express.static("public"));

// app.use((req, res, next) => {
//     console.log("ada request masuk");
//     next();
// });

//route
app.get("/api/planet", async (_req, res) => {
    const results = await client.query("SELECT * FROM planet");
    res.send(results.rows);
});

app.listen(3000, () => {
    console.log("Berhasil Jalan");
});