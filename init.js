import "./db";
import app from"./app";
import dotenv from "dotenv";
dotenv.config()

const PORT = process.env.PORT;

const handleListening = () => console.log(`Listening on : Http://localhost:${PORT}`)

app.listen(PORT, handleListening);