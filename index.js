const core = require('@actions/core');
const github = require('@actions/github');

try {

    const eventName = process.env.GITHUB_EVENT_NAME;

    switch (eventName){
        case "push":
            pushEventAction();
            break;
        case "pull":
            pullEventAction();
            break;
        default:
            noEventAction();
    }

    // const chatId = core.getInput('chatId');
    // const event = core.getInput('event');

    // console.log(`Hello ${chatId}!`);
   
    
    // const time = (new Date()).toTimeString();
    // core.setOutput("time", time);
    
    // Get the JSON webhook payload for the event that triggered the workflow
    // const payload = JSON.stringify(github.context.payload, undefined, 2)
    // console.log(`The event payload: ${payload}`);

} catch (error) {
  
    core.setFailed(error.message);

}

function pushEventAction(){
    console.log("push event triggered");
    var chatId = core.getInput('chatId');
    console.log(chatId);
}


function pullEventAction(){
    console.log("pull event triggered");
    var chatId = core.getInput('chatId');
    console.log(chatId);
}

function noEventAction(){
    console.log("No event triggered");
    var chatId = core.getInput('chatId');
    console.log(chatId);
}