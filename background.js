var action = null;
var questionTags = "";

chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {

    if (request.action == "voteUp") {
        action = "VoteUp";
        sendAction();
        //alert("vote-up");
    }
    else if (request.action == "voteDown") {
        action = "VoteDown";
        sendAction();
    }
    else if (request.action == "star") {
        action = "Star";
        sendAction();
    }
    else if (request.action == "comment") {
        action = "Comment";
        sendAction();
    }
    else if (request.action == "btn"){
        action = "AskQuestion";
        sendAction();
    }
    else if (request.action == "pageload"){
        action = "PageLoaded";
        questionTags = request.questionTags;
        sendAction();
    }
        
    // else if (request.action == "scroll"){
    //     action = "Scroll";
    //     sendAction();
    // }
});

function sendAction() {
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
    var jax = new XMLHttpRequest();
    jax.open("POST", "https://behaviourlog-service.herokuapp.com/eventLog", true);
    //jax.open("POST", "http://localhost:3000/eventLog", true);
    jax.setRequestHeader("Content-Type", "application/json");
    jax.send(JSON.stringify({ eventType: action, tags: questionTags, time: datetime }));
    jax.onreadystatechange = function () { if (jax.readyState == 4) { console.log(jax.responseText); } }
}