const core = require('@actions/core');
const github = require('@actions/github');
const TelegramBot = require('node-telegram-bot-api');
require("dotenv").config

const {
    INPUT_TOKEN: tgtoken, 
    INPUT_CHAT: chatid,
} = process.env;


const payload = github.context.payload;

console.log(tgtoken);
console.log(chatid);

const bot = new TelegramBot(tgtoken);

console.log("push event triggered");
console.log(payload.pusher.name);

bot.sendMessage(chatid , 'hi');
