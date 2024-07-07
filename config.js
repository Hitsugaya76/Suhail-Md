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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "243981564138";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_37_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzksXG4gICAgICAgIDUwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDYzLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDM2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ1LFxuICAgICAgICA1NixcbiAgICAgICAgMTc4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYyLFxuICAgICAgICA3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzMixcbiAgICAgICAgMjA1LFxuICAgICAgICA0MixcbiAgICAgICAgODIsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgODksXG4gICAgICAgIDEwNixcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDc3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjA4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDksXG4gICAgICAgIDgyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDksXG4gICAgICAgIDQxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDgsXG4gICAgICAgIDUxLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE4LFxuICAgICAgICA3MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzLFxuICAgICAgICAyNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjgsXG4gICAgICAgIDI2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc3LFxuICAgICAgICA4NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDYsXG4gICAgICAgIDI4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTUwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk5LFxuICAgICAgICA5NixcbiAgICAgICAgMjgsXG4gICAgICAgIDczLFxuICAgICAgICA1MixcbiAgICAgICAgMjUzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODksXG4gICAgICAgIDg1LFxuICAgICAgICAzNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODAsXG4gICAgICAgIDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid2pGL2ZKcXRWaWhUcUljbCswSHJKYUp1TGd4dkQyOWplUkdtdU9jYS9CWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNDM5ODE1NjQxMzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBOEQwRjVCNkZFNDIxNzNFRDQ1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDMzNzg0N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJZYy1adUcxM1NEZTJoZ0R5dGFnM1lBXCIsXG4gIFwicGhvbmVJZFwiOiBcImVkMjU1YTgzLWMwYTUtNDRiYy04ZjBjLTY5YjZiYTBmOTI4M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTgsXG4gICAgICA0NSxcbiAgICAgIDI0NyxcbiAgICAgIDIyNSxcbiAgICAgIDk2LFxuICAgICAgNDksXG4gICAgICAyMzMsXG4gICAgICAyMzAsXG4gICAgICAyMTAsXG4gICAgICAxOTEsXG4gICAgICAxMjYsXG4gICAgICA4OCxcbiAgICAgIDI1LFxuICAgICAgMjA3LFxuICAgICAgNTksXG4gICAgICAxOTUsXG4gICAgICAxNzMsXG4gICAgICAxMCxcbiAgICAgIDE4OCxcbiAgICAgIDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjcsXG4gICAgICAxNzIsXG4gICAgICA4LFxuICAgICAgNTQsXG4gICAgICAzMCxcbiAgICAgIDI1NCxcbiAgICAgIDgxLFxuICAgICAgMTQxLFxuICAgICAgMTI4LFxuICAgICAgMjQ0LFxuICAgICAgMzcsXG4gICAgICAxNzAsXG4gICAgICA3MCxcbiAgICAgIDE4NixcbiAgICAgIDIyNSxcbiAgICAgIDkwLFxuICAgICAgNzcsXG4gICAgICAzMCxcbiAgICAgIDE5OSxcbiAgICAgIDQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1EVkU5TlhXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNDM5ODE1NjQxMzg6NDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCJ8J2QqPCdkKHwnZCa8J2QpyDwnZCL8J2QovCdkJ7wnZCb8J2QnvCdkKvwnZCtXCIsXG4gICAgXCJsaWRcIjogXCIxNDQ3ODM4MzQwOTE1NzU6NDBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHUva1o4TEVLK0xxYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJIYzM4Z050eUtUTnZQbEJwc3dSdWZNNDYwUEdHWWpUUlgxZ0ZXNnBjVnhZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInRDenVxNXVxNDBQdStHdzZVTGloVXovSm84R0hXMlJrbFRackJlUnZ2L2NwZFJqNFprMis2ZkhJQ0YwY1FySkMwWStaSGtvd2JkUWxJMTBQSk5md2pRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjM1bHVqU0swRjl0MFhBWFVEUm93MHlrMU44UEFZWFNnU25qZEszZjlMekFYRnIyNElTR002bnNEa3BQZzNIb3dTSzRleHg4RTRVcm9LZk5YMDFDVWhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI0Mzk4MTU2NDEzODo0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDMzNzg0MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUs3MFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSzcwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiM3FycFV2bDk5L05Yb1ZBVXFXSFNUQkFpb05QRWxCYVBLNk41YnpNQ2x5QT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMDE4MDg4Mzc5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAzMzc4NDM3NjJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Rodrick",
  packname: process.env.PACK_NAME || "don't panique man",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Johan",


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
