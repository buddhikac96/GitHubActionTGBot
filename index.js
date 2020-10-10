const core = require('@actions/core');
const github = require('@actions/github');
const TelegramBot = require('node-telegram-bot-api');

const payload = github.context.payload;

const tgtoken = core.getInput('TgToken');

const bot = new TelegramBot(tgtoken, {polling: true});

console.log("push event triggered");
console.log(payload.pusher.name);

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
  
    bot.sendMessage(chatId, 'Received your message');
});
