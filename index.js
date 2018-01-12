const TOKEN = process.env.TELEGRAM_TOKEN;
const TelegramBot = require('node-telegram-bot-api');
const options = {
  webhook: {
    port: process.env.PORT
  }
};

const url = process.env.APP_URL;
const bot = new TelegramBot(TOKEN, options);


// This informs the Telegram servers of the new webhook.
// Note: we do not need to pass in the cert, as it already provided
bot.setWebHook(`${url}/bot${TOKEN}`);

bot.onText(/\/presale/, (msg, match) => {
  bot.sendMessage(msg.chat.id, 'The pre-sale will start in mid February, follow our official announcements at https://t.me/SwapyNetwork');
});

bot.onText(/\/whitepaper/, (msg, match) => {
  bot.sendMessage(msg.chat.id, 'Swapy Network Whitepaper v0.98.2');
  bot.sendDocument(msg.chat.id, 'files/whitepaper.pdf');
});
