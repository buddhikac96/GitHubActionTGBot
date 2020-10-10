const core = require('@actions/core');
const github = require('@actions/github');
const TelegramBot = require('node-telegram-bot-api');

try {

    var payload = github.context.payload;

    var tgtoken = '1150217718:AAHvIsziEd4v3VTxfZbYGpSoaZ88NFL-Xrg';
    var chatId = '655510580';

    var bot = new TelegramBot(tgtoken);

    console.log("push event triggered");
    console.log(payload.pusher.name);

    bot.sendMessage(chatId , 'hi');

} catch (error) {

    core.setFailed(error.message);

}