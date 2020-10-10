const core = require('@actions/core');
const github = require('@actions/github');
const TelegramBot = require('node-telegram-bot-api');

const payload = github.context.payload;

const tgtoken = core.getInput('TgToken');
const chatId = core.getInput('chatId');

const bot = new TelegramBot(tgtoken, {polling: true});

const evresp = (gevent) => {
    console.log(gevent);
    return 'Hi';
}

const output = evresp(process.env.ghevent);
bot.sendMessage(chatId, output)
