const core = require('@actions/core');
const github = require('@actions/github');
const TelegramBot = require('node-telegram-bot-api');

const payload = github.context.payload;

const tgtoken = core.getInput('TgToken');
const chatId = core.getInput('chatId');

console.log(tgtoken);
console.log(chatId);

const bot = new TelegramBot(tgtoken);

console.log("push event triggered");
console.log(payload.pusher.name);

// bot.sendMessage(chatId , 'hi');
