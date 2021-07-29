/*
    DiscordBAM - Ban Appeal Manager (Google Sheets - Mobile hotfix)
    Version 0.1
    Created by : thatpaple#9995
 
    This method is not as info-rich in terms of logging, but it does work on mobile devices.
      This method does not have the fill-in form from Google-Sheets.gs.
     
    There are a few variables you have to fill in. On line 18, you have to replace "PLACE_WEBHOOK_HERE" with a webhook.
    I recommend using a webhook from modlogs!
    
    If you have any questions, please reach out!
*/

var POST_URL = "PLACE_WEBHOOK_HERE";


function DiscordNotif(e) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = e.range;
  var getCol = range.getColumn();
  var getRow = range.getRow();
  var userNameCol = 3;
  var origValue = e.oldValue
  var ui = SpreadsheetApp.getUi();

  var state = "default";
  var time = new Date();
  var clrState = 0;
  var edit = sheet.getRange(getRow, getCol).getValue();
  var member = sheet.getRange(getRow, userNameCol).getValue();
      
  if(edit == "-" || member.toString().length == 0) {
      // DO NOTHING
      
  } else if(edit == "A" || edit == "a" || edit == "D" || edit == "d"){

    if (edit == "A" || edit == "a") {
      state = "approved";
      clrState = 3066993;

    } else if (edit == "D" || edit == "d") {
      state = "denied";
      clrState = 15548997;
    }
    
      var options = {
        "method": "post",
        "headers": {
          "Content-Type": "application/json",
        },
        "payload": JSON.stringify({
          "content": "‌",
          "embeds": [{
            "title": `${member}\'s ban appeal was ${state}`,
            "description": `Current Time : ${time}`,
            "color": `${clrState}`,
            "author": {
              "name": "Ban Appeal Manager",
              "url": "https://discordapp.com",
              "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
            }
          }]
        })
      };
}
