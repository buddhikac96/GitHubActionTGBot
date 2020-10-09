const core = require('@actions/core');
const github = require('@actions/github');

try {

    const eventName = process.env.GITHUB_EVENT_NAME;
    const payload = JSON.stringify(github.context.payload, undefined, 2)

    switch (eventName){
        case "push":
            pushEventAction(payload);
            break;
        case "pull":
            pullEventAction(payload);
            break;
        default:
            noEventAction(payload);
    }
    

} catch (error) {
  
    core.setFailed(error.message);

}

function pushEventAction(payload){
    console.log("push event triggered");
    var chatId = core.getInput('chatId');
    console.log(chatId);
    console.log(payload);
}


function pullEventAction(payload){
    console.log("pull event triggered");
    var chatId = core.getInput('chatId');
    console.log(chatId);
    console.log(payload);
}

function noEventAction(payload){
    console.log("No event triggered");
    var chatId = core.getInput('chatId');
    console.log(chatId);
    console.log(payload);
}