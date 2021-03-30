import TelegramBot from "node-telegram-bot-api";

function init() {
	const bot = new TelegramBot(process.env.token as string, { polling: true });

	bot.onText(/\/start/, (message) => {
		bot.sendMessage(message.chat.id, "Estoy en línea, MoBikers");
	});

	bot.onText(/\/help/, (message) => {
		bot.sendMessage(
			message.chat.id,
			`Saludos, MoBikers.\n\nSoy un Bot desarrollado para dar asistencia básica a nuestro equipo.\n\nSi necesitas ver el mapa de talleres de bicicletas que tenemos registrado, por favor usa el comando /taller`
		);
	});

	bot.onText(/\/taller/, (message) => {
		bot.sendMessage(
			message.chat.id,
			`Hola, @${message.from?.username}. Aquí tienes nuestro mapa de talleres. \n \n Mail On Bike: Talleres de bicicletas \n https://goo.gl/maps/gmBKzCJwHVaZVqC57`
		);
	});
}

const BotController = { init };
export default BotController;
