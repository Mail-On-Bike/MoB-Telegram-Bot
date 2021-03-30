import express from "express";
import dotenv from "dotenv";
dotenv.config();
import BotController from "./bot/controller";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
	res.send("Hello World");
});

BotController.init();

app.listen(PORT, () => {
	console.log(`Bot en línea en http://localhost:${PORT}`);
});
