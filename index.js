import TelegramBot from "node-telegram-bot-api";
const token = "6634365809:AAG3k_o2pkQ2HJp0_HFX0M0fgtUnh_voHvM";
const bot = new TelegramBot(token, { polling: true });
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Hello World ${msg.text}`);
});
