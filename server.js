const express = require("express");
const app = express();

app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


setInterval(() => {
console.clear();
}, 1)

const setTitle = require('node-bash-title');
var _0xd9c7=["\uD83C\uDF7B\x20\x44\x61\x72\x6B\x20\x42\x6F\x74\x20\x5B\x44\x61\x72\x6B\x44\x65\x76\x73\x5D","\x0A\x4C\x6F\x61\x64\x69\x6E\x67\x2E\x2E\x2E","\x6C\x6F\x67","\x49\x66\x20\x54\x68\x69\x73\x20\x54\x61\x6B\x65\x20\x54\x6F\x6F\x20\x6C\x6F\x6E\x67\x20\x6D\x61\x6B\x65\x20\x73\x75\x72\x65\x20\x75\x20\x68\x61\x76\x65\x20\x61\x64\x64\x20\x72\x69\x67\x68\x74\x20\x74\x6F\x6B\x65\x6E\x21"];setTitle(_0xd9c7[0]);console[_0xd9c7[2]](_0xd9c7[1]);console[_0xd9c7[2]](_0xd9c7[3])
const fs = require('fs')
const yaml = require("js-yaml");
const { mainprefix , status } = yaml.load(fs.readFileSync("./config.yml"));
const Discord = require('discord.js')
const client = new Discord.Client();
const db = require('quick.db')
const { join } = require('path');
const { readdirSync } = require('fs');
client.commands= new Discord.Collection();
client.login(process.env.TOKEN);
const jimp = require('jimp')
const ms = require('ms')

  // fuctions ..
var _0x1e8f=["\x72\x65\x61\x64\x79","\x50\x4C\x41\x59\x49\x4E\x47","\x73\x65\x74\x41\x63\x74\x69\x76\x69\x74\x79","\x75\x73\x65\x72","\x63\x6C\x65\x61\x72","\x1B\x5B\x33\x36\x6D\x25\x73\x1B\x5B\x30\x6D","\x0D\x0A\x20\x20\x20\x20\u2593\u2588\u2588\u2588\u2588\u2588\u2584\x20\x20\u2584\u2584\u2584\x20\x20\x20\x20\x20\x20\x20\u2588\u2588\u2580\u2588\u2588\u2588\x20\x20\x20\u2588\u2588\x20\u2584\u2588\u2580\x20\x20\x0D\x0A\x20\x20\u2592\u2588\u2588\u2580\x20\u2588\u2588\u258C\u2592\u2588\u2588\u2588\u2588\u2584\x20\x20\x20\x20\u2593\u2588\u2588\x20\u2592\x20\u2588\u2588\u2592\x20\u2588\u2588\u2584\u2588\u2592\x20\x20\x20\x0D\x0A\x20\x20\u2591\u2588\u2588\x20\x20\x20\u2588\u258C\u2592\u2588\u2588\x20\x20\u2580\u2588\u2584\x20\x20\u2593\u2588\u2588\x20\u2591\u2584\u2588\x20\u2592\u2593\u2588\u2588\u2588\u2584\u2591\x20\x20\x20\x0D\x0A\x20\x20\u2591\u2593\u2588\u2584\x20\x20\x20\u258C\u2591\u2588\u2588\u2584\u2584\u2584\u2584\u2588\u2588\x20\u2592\u2588\u2588\u2580\u2580\u2588\u2584\x20\x20\u2593\u2588\u2588\x20\u2588\u2584\x20\x20\x20\x0D\x0A\x20\x20\u2591\u2592\u2588\u2588\u2588\u2588\u2593\x20\x20\u2593\u2588\x20\x20\x20\u2593\u2588\u2588\u2592\u2591\u2588\u2588\u2593\x20\u2592\u2588\u2588\u2592\u2592\u2588\u2588\u2592\x20\u2588\u2584\x20\x20\x0D\x0A\x20\x20\x20\u2592\u2592\u2593\x20\x20\u2592\x20\x20\u2592\u2592\x20\x20\x20\u2593\u2592\u2588\u2591\u2591\x20\u2592\u2593\x20\u2591\u2592\u2593\u2591\u2592\x20\u2592\u2592\x20\u2593\u2592\x20\x20\x20\x0D\x0A\x20\x20\x20\u2591\x20\u2592\x20\x20\u2592\x20\x20\x20\u2592\x20\x20\x20\u2592\u2592\x20\u2591\x20\x20\u2591\u2592\x20\u2591\x20\u2592\u2591\u2591\x20\u2591\u2592\x20\u2592\u2591\x20\x20\x20\x20\x20\x0D\x0A\x20\x20\x20\u2591\x20\u2591\x20\x20\u2591\x20\x20\x20\u2591\x20\x20\x20\u2592\x20\x20\x20\x20\x20\u2591\u2591\x20\x20\x20\u2591\x20\u2591\x20\u2591\u2591\x20\u2591\x20\x20\x20\x20\x20\x20\x0D\x0A\x20\x20\x20\x20\x20\u2591\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\u2591\x20\x20\u2591\x20\x20\x20\u2591\x20\x20\x20\x20\x20\u2591\x20\x20\u2591\x20\x20\x20\x20\x20\x20\x20\x0D\x0A\x20\x20\x20\u2591\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20","\x6C\x6F\x67","\x0A\x1B\x5B\x33\x32\x6D\x25\x73\x1B\x5B\x30\x6D","\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x24\x5B\x49\x4E\x46\x4F\x5D\x3A\x20\x4C\x6F\x67\x67\x65\x64\x20\x6F\x6E\x20","\x74\x61\x67","","\x1B\x5B\x33\x32\x6D\x25\x73\x1B\x5B\x30\x6D","\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x24\x5B\x49\x4E\x46\x4F\x5D\x3A\x20\x50\x52\x45\x46\x49\x58\x20","\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x24\x5B\x45\x58\x54\x52\x41\x5D\x3A\x20\x43\x55\x53\x54\x4F\x4D\x20\x4D\x41\x44\x45\x20\x54\x49\x43\x4B\x45\x54\x2D\x53\x59\x53\x54\x45\x4D","\x0A\x1B\x5B\x33\x31\x6D\x25\x73\x1B\x5B\x30\x6D","\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x24\x5B\x48\x4F\x57\x5D\x3A\x20\x54\x6F\x20\x43\x68\x65\x63\x6B\x20\x43\x6F\x6D\x6D\x61\x6E\x64\x73\x20\x4C\x69\x73\x74\x20\x54\x79\x70\x65\x20","\x68\x65\x6C\x70","\x1B\x5B\x33\x31\x6D\x25\x73\x1B\x5B\x30\x6D","\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x24\x5B\x43\x52\x45\x44\x49\x54\x53\x5D\x3A\x20\x4D\x61\x64\x65\x20\x42\x79\x20\x44\x61\x72\x6B\x42\x6F\x79\x2F\x44\x61\x72\x6B\x4D\x69\x73\x65\x68\x6C\x20\x59\x54","\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x24\x5B\x53\x55\x50\x50\x4F\x52\x54\x5D\x3A\x20\x44\x61\x72\x6B\x44\x65\x76\x73\x3A\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x67\x67\x2F\x72\x53\x76\x6D\x59\x78\x38\x20","\x6F\x6E","\x2E\x6A\x73","\x65\x6E\x64\x73\x57\x69\x74\x68","\x66\x69\x6C\x74\x65\x72","\x63\x6F\x6D\x6D\x61\x6E\x64\x73","\x6E\x61\x6D\x65","\x73\x65\x74","\x6D\x65\x73\x73\x61\x67\x65","\x70\x72\x65\x66\x69\x78\x5F","\x69\x64","\x67\x75\x69\x6C\x64","\x67\x65\x74","\x62\x6F\x74","\x61\x75\x74\x68\x6F\x72","\x74\x79\x70\x65","\x63\x68\x61\x6E\x6E\x65\x6C","\x64\x6D","\x73\x74\x61\x72\x74\x73\x57\x69\x74\x68","\x63\x6F\x6E\x74\x65\x6E\x74","\x73\x70\x6C\x69\x74","\x74\x72\x69\x6D","\x6C\x65\x6E\x67\x74\x68","\x73\x6C\x69\x63\x65","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x73\x68\x69\x66\x74","\x68\x61\x73","\x72\x75\x6E","\x65\x72\x72\x6F\x72"];client[_0x1e8f[21]](_0x1e8f[0],()=>{client[_0x1e8f[3]][_0x1e8f[2]](status,{type:_0x1e8f[1]});console[_0x1e8f[4]]();console[_0x1e8f[7]](_0x1e8f[5],`${_0x1e8f[6]}`);console[_0x1e8f[7]](_0x1e8f[8],`${_0x1e8f[9]}${client[_0x1e8f[3]][_0x1e8f[10]]}${_0x1e8f[11]}`);console[_0x1e8f[7]](_0x1e8f[12],`${_0x1e8f[13]}${mainprefix}${_0x1e8f[11]}`);console[_0x1e8f[7]](_0x1e8f[12],`${_0x1e8f[14]}`);console[_0x1e8f[7]](_0x1e8f[15],`${_0x1e8f[16]}${mainprefix}${_0x1e8f[17]}`);console[_0x1e8f[7]](_0x1e8f[18],`${_0x1e8f[19]}`);console[_0x1e8f[7]](_0x1e8f[18],`${_0x1e8f[20]}`)});const commandFiles=readdirSync(join(__dirname,_0x1e8f[25]))[_0x1e8f[24]]((file)=>file[_0x1e8f[23]](_0x1e8f[22]));for(const file of commandFiles){const command=require(join(__dirname,_0x1e8f[25],`${_0x1e8f[11]}${file}${_0x1e8f[11]}`));client[_0x1e8f[25]][_0x1e8f[27]](command[_0x1e8f[26]],command)};client[_0x1e8f[21]](_0x1e8f[28],async (_0xb759x4)=>{let _0xb759x5= await db[_0x1e8f[32]](`${_0x1e8f[29]}${_0xb759x4[_0x1e8f[31]][_0x1e8f[30]]}${_0x1e8f[11]}`);if(_0xb759x5=== null){_0xb759x5= mainprefix};if(_0xb759x4[_0x1e8f[34]][_0x1e8f[33]]){return};if(_0xb759x4[_0x1e8f[36]][_0x1e8f[35]]=== _0x1e8f[37]){return};if(_0xb759x4[_0x1e8f[39]][_0x1e8f[38]](_0xb759x5)){const _0xb759x6=_0xb759x4[_0x1e8f[39]][_0x1e8f[43]](_0xb759x5[_0x1e8f[42]])[_0x1e8f[41]]()[_0x1e8f[40]](/ +/);const command=_0xb759x6[_0x1e8f[45]]()[_0x1e8f[44]]();if(!client[_0x1e8f[25]][_0x1e8f[46]](command)){return};try{client[_0x1e8f[25]][_0x1e8f[32]](command)[_0x1e8f[47]](client,_0xb759x4,_0xb759x6)}catch(error){console[_0x1e8f[48]](error)}}})
   const { CanvasSenpai } = require("canvas-senpai")
   const canva = new CanvasSenpai();
   
   client.on('guildMemberAdd', async member => {
    let channel = db.get(`Welcomeroom_${member.guild.id}`)
    if (!channel) {
         return console.log(`${member.guild.name} are nubs`);
         }
    const { defaultwelcomebackground, defaultwelcomemessage } = yaml.load(fs.readFileSync("./config.yml"));
    let welcomem = await db.get(`welcomemsg_${member.guild.id}`)
    if(welcomem === null) welcomem = defaultwelcomemessage;
   let data = await canva.welcome(member, { link: defaultwelcomebackground })
   let memberguildmessage = welcomem.replace('{user}', member.user.username).replace('{guild}', member.guild.name)

    const attachment = new Discord.MessageAttachment(
      data,
      "welcome-image.png"
    );

    member.guild.channels.cache.get(channel).send(`${memberguildmessage}`,
      attachment
    );   
   });

   client.on('guildMemberAdd', async member => {
  let dmmessage = db.get(`welcomedm_${member.guild.id}`)
  if(!dmmessage) {
      return console.log(`This Guild Doesn't Have Welcome DM MEssage`)
  }
  let mess2age = dmmessage.replace('{user}', member.user.username).replace('{guild}', member.guild.name)
  member.send(mess2age)
   });




["command"].forEach(handler => {
});



//IS URL FUNCTION - START


//FINISH


//STOP
client.on("message", async message => {
  if (message.author.bot) return;  
  //START

  
  //END
  if (!message.guild) return;
  let prefix = db.get(`prefix_${message.guild.id}`);
  if (prefix === null) prefix = mainprefix;

  if (!message.content.startsWith(prefix)) return;

  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

let cmdx = db.get(`cmd_${message.guild.id}`)

if(cmdx) {
  let cmdy = cmdx.find(x => x.name === cmd)
  if(cmdy) message.channel.send(cmdy.responce)
}

  // Get the command
  // If none is found, try to find it by alias



  // If a command is finally found, run the command


});
client.on("guildMemberAdd", async member => {
  let chx = db.get(`welchannel_${member.guild.id}`);

  if (chx === null) {
    return;
  }

  
   let data = await canva.welcome(member, { link: "https://i.pinimg.com/originals/f3/1c/39/f31c39d56512dc8fbf30f9d0fb3ee9d3.jpg" })
 
    const attachment = new Discord.MessageAttachment(
      data,
      "welcome-image.png"
    );
  
  


  client.channels.cache.get(chx).send("Welcome to our Server " + member.user.username, attachment);
})
