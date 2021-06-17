"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
function init() {
    var bot = new node_telegram_bot_api_1.default(process.env.token, { polling: true });
    bot.onText(/\/start/, function (message) {
        bot.sendMessage(message.chat.id, "Estoy en línea, MoBikers");
    });
    bot.onText(/\/help/, function (message) {
        bot.sendMessage(message.chat.id, "<b>Saludos, MoBikers.</b>\n\nSoy un Bot desarrollado para dar asistencia básica a nuestro equipo.\n\nSi necesitas ver el mapa de talleres de bicicletas que tenemos registrado, por favor usa el comando /taller", { parse_mode: "HTML" });
    });
    bot.onText(/\/taller/, function (message) {
        var _a;
        bot.sendMessage(message.chat.id, "Hola, @" + ((_a = message.from) === null || _a === void 0 ? void 0 : _a.username) + ". Aqu\u00ED tienes nuestro mapa de talleres. \n \n Mail On Bike: Talleres de bicicletas \n https://goo.gl/maps/gmBKzCJwHVaZVqC57");
    });
}
var BotController = { init: init };
exports.default = BotController;
