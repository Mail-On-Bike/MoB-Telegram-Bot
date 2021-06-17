"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var controller_1 = __importDefault(require("./bot/controller"));
var app = express_1.default();
var PORT = process.env.PORT || 3000;
app.get("/", function (req, res) {
    res.send("Hello World");
});
controller_1.default.init();
app.listen(PORT, function () {
    console.log("Bot en l\u00EDnea en http://localhost:" + PORT);
});
