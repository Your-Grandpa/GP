const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="abilewamichael01@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Your-Grandpa/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/EYHA0EjGsN41mO0psPG5HT";
global.website=process.env.GURL || "https://chat.whatsapp.com/EYHA0EjGsN41mO0psPG5HT" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "POWERED BY GRANDPA-MD" 


global.devs = "2349010756236" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349010756236";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349010756236";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "false"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349066021641,234xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_18_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc1LFxuICAgICAgICA4NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODYsXG4gICAgICAgIDQ0LFxuICAgICAgICA3NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDM5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzksXG4gICAgICAgIDI2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDM5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDU3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDExLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDUxLFxuICAgICAgICAzMSxcbiAgICAgICAgNSxcbiAgICAgICAgMjA0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA3OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNyxcbiAgICAgICAgODQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQyLFxuICAgICAgICA3NixcbiAgICAgICAgNDQsXG4gICAgICAgIDczLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI5LFxuICAgICAgICA2MixcbiAgICAgICAgMTAwLFxuICAgICAgICA0NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA4MixcbiAgICAgICAgMTc1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNixcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4LFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDUwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDg5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE3LFxuICAgICAgICA4OSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI2LFxuICAgICAgICA5MixcbiAgICAgICAgMTYwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNixcbiAgICAgICAgNDYsXG4gICAgICAgIDIxLFxuICAgICAgICAzNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjksXG4gICAgICAgIDk3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM1LFxuICAgICAgICA1MyxcbiAgICAgICAgODEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjksXG4gICAgICAgIDE3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MixcbiAgICAgICAgOTQsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTUzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTExLFxuICAgICAgICAzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLRGxOdEI3K3h2SEt1aEF5alA4N2JvTFZ2bitHczVxSGxzbk9JOEdudXN3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJCRFBWQmpxOFRhcWxiX3cybTlNMy13XCIsXG4gIFwicGhvbmVJZFwiOiBcIjU2YzE5YmE4LTdiY2MtNDE3OS1hNDU5LWI2NGM0ODM2OTNmMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNyxcbiAgICAgIDE2MSxcbiAgICAgIDUzLFxuICAgICAgMjI0LFxuICAgICAgNixcbiAgICAgIDI1MCxcbiAgICAgIDExOCxcbiAgICAgIDU3LFxuICAgICAgMTE4LFxuICAgICAgMTgzLFxuICAgICAgMjAyLFxuICAgICAgMjQ1LFxuICAgICAgMjAyLFxuICAgICAgMzUsXG4gICAgICA4LFxuICAgICAgOTIsXG4gICAgICA5OSxcbiAgICAgIDcxLFxuICAgICAgMTQ0LFxuICAgICAgMTQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OSxcbiAgICAgIDIxLFxuICAgICAgMTgsXG4gICAgICAxODIsXG4gICAgICAxMTcsXG4gICAgICAyNTIsXG4gICAgICA1MCxcbiAgICAgIDI1MSxcbiAgICAgIDc3LFxuICAgICAgMTUxLFxuICAgICAgNzMsXG4gICAgICA5MSxcbiAgICAgIDIsXG4gICAgICAyNTQsXG4gICAgICAyNDksXG4gICAgICAyOSxcbiAgICAgIDYzLFxuICAgICAgMTQsXG4gICAgICAxODAsXG4gICAgICAyMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPU2EyN2tIRUk2bW1iVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImFjM0tibWtUYm1YaGV4K3RCTTlIYWV6QlJ5ZVhSRGtMeWEwOUtlaVVzaW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTTVISnlQdjk3WmVjWGI1NFRVNk1UZ3NOemFRQkJUZGtMTmtXZWQ1b1p0TkVPRDR0d0NBMS9kc2xsZGgxQSt3c1IxWVhQVFBiUW9pL1VqVjZTbGhVQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiT21uMmpNcHBEdDVsSmhYZHdqN2JoazNoMTRFRElBeGs3cWR1YU5xYUltV3lMMGplQVlkaEhRaEhJNzdncmJia0l4ZkRjV1FoRTRhdndZYUpZdjFqZ3c9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDEwNzU2MjM2OjU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjc4Mjk4ODI0MjEzOTE6NTVAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDEwNzU2MjM2OjU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDQyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIxNzYyNzRcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Grandpa-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GRANDPA-MD 』```"),
 
  author : process.env.PACK_AUTHER|| "GRANDPA",
  packname: process.env.PACK_NAME || "Yes it is me.",
  botname : process.env.BOT_NAME  || "GRANDPA-MD",
  ownername:process.env.OWNER_NAME|| "GRANDPA-MD",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "GRANDPA"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "28c7b9e9be12c2f0e01e2e021483211d";
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
