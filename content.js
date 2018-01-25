chrome.runtime.sendMessage({ todo: "showPageAction" });
//alert("Hello! I am an alert box!!");

var action = null;

$(document).ready(function () {

    $(".vote-up-off").click(function () {
        chrome.runtime.sendMessage({ action: "voteUp" });
    });
    $(".vote-down-off").click(function () {
        chrome.runtime.sendMessage({ action: "voteDown" });
    });
    $(".star-off").click(function () {
        chrome.runtime.sendMessage({ action: "star" });
    });
    $(".comments-link").click(function () {
        chrome.runtime.sendMessage({ action: "comment" });
    });
    $(".btn").click(function () {
        chrome.runtime.sendMessage({ action: "btn" });
    });

});
window.addEventListener("load", function () {   
    var tags = "";
    $('.post-tag').each(function () {
        if ($(this).hasClass("js-gps-track")) {
            if(!($(this).hasClass("no-tag-menu"))){
                var str = $(this).html();
                tags += "//" + str;
            }
        }
        //str += $(this).html();
    });

    tags = tags.substring(2);
    console.log(tags);

    chrome.runtime.sendMessage({ action: "pageload", questionTags: tags });
});


//  window.addEventListener("scroll", function(){
//      //var elems = document.body.getElementsByTagName("post-tag js-gps-track");
//      var x = document.getElementsByClassName("post-tag js-gps-track").item;
//      //alert(x);
//      chrome.runtime.sendMessage({action: "scroll"});
//  });


