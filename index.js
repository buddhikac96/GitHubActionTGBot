const core = require('@actions/core');
const github = require('@actions/github');
const TelegramBot = require('node-telegram-bot-api');

try {

    var payload = github.context.payload;

    var tgtoken = core.getInput('TgToken');
    var chatId = core.getInput('chatId');

    var bot = new TelegramBot(tgtoken);

    console.log("push event triggered");
    console.log(payload.pusher.name);

    bot.sendMessage(chatId , 'hi');

} catch (error) {

    core.setFailed(error.message);

}