const core = require('@actions/core');
const TelegramBot = require('node-telegram-bot-api');

const tgtoken = core.getInput('TgToken');
const chatId = core.getInput('chatId');

const bot = new TelegramBot(tgtoken);

bot.sendMessage(chatId, 'hi');
