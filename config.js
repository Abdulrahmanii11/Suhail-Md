const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347031853628";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_58_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDQsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzksXG4gICAgICAgIDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0LFxuICAgICAgICA3NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDk0LFxuICAgICAgICA4MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMyxcbiAgICAgICAgMTg4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDksXG4gICAgICAgIDIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjksXG4gICAgICAgIDQxLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA3MixcbiAgICAgICAgMTY5LFxuICAgICAgICA4LFxuICAgICAgICAzNixcbiAgICAgICAgMTI0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTA3LFxuICAgICAgICA2OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg2LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODMsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA5LFxuICAgICAgICA0MSxcbiAgICAgICAgNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDksXG4gICAgICAgIDk4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAzNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDYwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDQxLFxuICAgICAgICAxLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDc3LFxuICAgICAgICA3MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDY3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjUwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM2LFxuICAgICAgICA4NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODcsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDYxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYjdvUmN6Wnp5NEVtWHJkVU40Lzh6UkFQQ0NLb1lSWHFSYlk3L21COHBmbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNzkwZmdlWGFUay02dzBNNzFvY3VMUVwiLFxuICBcInBob25lSWRcIjogXCI3YjJmMjc1ZC1jNDk3LTRkYTItYmYzNC1jN2RmOTg5OThiZjJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE5LFxuICAgICAgMTU4LFxuICAgICAgNTksXG4gICAgICAxOTUsXG4gICAgICA5NCxcbiAgICAgIDE3MSxcbiAgICAgIDIzMSxcbiAgICAgIDE0NixcbiAgICAgIDk3LFxuICAgICAgNjQsXG4gICAgICA1MixcbiAgICAgIDE1NCxcbiAgICAgIDE2OCxcbiAgICAgIDE3NCxcbiAgICAgIDU1LFxuICAgICAgMjAzLFxuICAgICAgMTAyLFxuICAgICAgMjA2LFxuICAgICAgMTcxLFxuICAgICAgMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM5LFxuICAgICAgOTAsXG4gICAgICAzOCxcbiAgICAgIDIzNCxcbiAgICAgIDM4LFxuICAgICAgNjksXG4gICAgICAxMTEsXG4gICAgICAxMzAsXG4gICAgICAxNTEsXG4gICAgICAxNTUsXG4gICAgICAxMDAsXG4gICAgICAxMDgsXG4gICAgICAyMyxcbiAgICAgIDE4MyxcbiAgICAgIDE0NyxcbiAgICAgIDk4LFxuICAgICAgMTIsXG4gICAgICA2NCxcbiAgICAgIDI0OSxcbiAgICAgIDE5NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyMjVaQ0w1WVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAzMTg1MzYyODoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiUmFobWFuXCIsXG4gICAgXCJsaWRcIjogXCIxODg2NTY4NDExNTA2MzU6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNZWVzTm9DRUtMQ3NMVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkEyS2FOLzM2aXJOREtRczVoOTU3Z0VURVlMSjNOSWZPaUw5NytBV2puMDQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiY2wvQmFURkVWNnVrenpFSnZ4R1ZuMjRxbGN3azF5MGZGb2dNSmE0N0ozOXluZEZXM0tZSExsazBqMXA2WUgraW50cTc0QTBvSEQ0Y3VtMmJGMUlXQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiS1dEZE8wV0s4dUQxODVzZEF3TjNUQnBLSzRvTmhWTXpVbTl3b2p2ZGIySjQ5WFRqZ291QmRsUzkxRFZXd0QwbWxkVVJ0Rm9KektuOUl1T2FqOTJjaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAzMTg1MzYyODoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjU1NjcxMFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
