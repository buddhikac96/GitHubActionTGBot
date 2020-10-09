const core = require('@actions/core');
const github = require('@actions/github');
const TelegramBot = require('node-telegram-bot-api');

try {

    const eventName = process.env.GITHUB_EVENT_NAME;
    const payload = github.context.payload;
    const tgtoken = core.getInput('TgToken');
    const chatId = core.getInput('chatId');

    switch (eventName){
        case "push":
            pushEventAction(payload, tgtoken, chatId);
            break;
        case "issue_comment":
            issueCommentEvent(payload);
            break;
        case "issues":
            issuesEvent(payload);
            break;
        case "fork":
            forkEvent(payload);
            break;
        default:
            noEventAction(payload);
    }
    

} catch (error) {

    core.setFailed(error.message);

}

function pushEventAction(payload, tgtoken, chatId){
    console.log("push event triggered");
    console.log(payload.pusher.name);
    
    var chatId = core.getInput('chatId');

    const bot = new TelegramBot(tgtoken, {polling: true});

    const output = `
        #Push Triggered
        By {chatId.chat.first_name}
    `

    bot.sendMessage(chatId.chat.id , output , {parse_mode : "Markdown"})

}


function issueCommentEvent(payload){
    console.log("Issue comment event triggered");
    console.log(`Issue comment done by {payload.comment.user.login}`)
    console.log(`Issue comment {payload.comment.body}`)
}

function issuesEvent(payload){
    console.log("issuesEvent event triggered");
    var chatId = core.getInput('chatId');
}

function forkEvent(payload){
    console.log("forkEvent event triggered");
    var chatId = core.getInput('chatId');
}

function noEventAction(payload){
    console.log("No event triggered");
}