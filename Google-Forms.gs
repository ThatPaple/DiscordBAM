/*
    DiscordBAM - Ban Appeal Manager (Google Forms)
    Version 0.1
    Created by : thatpaple#9995
    There are a few variables you have to fill in. On line 9, you have to replace "PLACE_WEBHOOK_HERE" with a webhook.
    On line 60, you should replace "LINK_TO_GOOGLE_FORMS_HERE" and "LINK_TO_SPRAEDSHETS_HERE", this is not mandatory to have,
    within my mod team, we have direct access to the forms and ban appeal spreadsheet directly from the embed pushed to the webook.
    
    To edit the webhook, you'd start editing from line 54, if you'd like to grab more info from the google form itself, you'd use the response variable.
    
    Let's say, that you'd like to grab the fifth thing from your google form, which would be the reason reason provided behind a ban, you'd have to set up a
    variable and then grab the response.
    
    var ban_reason = response[4].getResponse() //4 because gs counts from zero :) don't forget that :D
    you can then use that ban_reason within the actual embed which will be pushed.
 
    If you have any questions, please reach out!
*/

var POST_URL = "PLACE_WEBHOOK_HERE!";

function onSubmit(e) {
  var form = FormApp.getActiveForm();
  var allResponses = form.getResponses();
  var latestResponse = allResponses[allResponses.length - 1];
  var response = latestResponse.getItemResponses();
  var items = [];

  for (var i = 0; i < response.length; i++) {
    var question = response[i].getItem().getTitle();
    var answer = response[i].getResponse();
    try {
      var parts = answer.match(/[\s\S]{1,1024}/g) || [];
    } catch (e) {
      var parts = answer;
    }

    if (answer == "") {
      continue;
    }
    for (var j = 0; j < parts.length; j++) {
      if (j == 0) {
        items.push({
          "name": question,
          "value": parts[j],
          "inline": false
        });
      } else {
        items.push({
          "name": question.concat(" (cont.)"),
          "value": parts[j],
          "inline": false
        });
      }
    }
  }

  var user = response[0].getResponse()
  var count = allResponses.length

  var options = {
    "method": "post",
    "headers": {
      "Content-Type": "application/json",
    },
    "payload": JSON.stringify({
      "content": "‌",
      "embeds": [{
        "title": `Ban Appeal #${count}`,
        "description": `${user} just submitted a request!\n჻ [Google Forms](LINK_TO_GOOGLE_FORMS_HERE) ჻ [Appeal Status](LINK_TO_SPRAEDSHETS_HERE) ჻`,
        "color": 15548997,
        "author": {
          "name": "Ban Appeal Manager",
          "url": "https://discordapp.com",
          "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png" // Default blue discord icon
        }
      }]
    })
  };

  UrlFetchApp.fetch(POST_URL, options);
};
