import express from "express";
import studentRouter from "./routes/students.js";

const app = express();

app.use(express.json());
const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Hello");
});

app.use("/students", studentRouter);

app.listen(PORT, () => console.log(`The server is running on Port ${PORT}`));
