const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const bot = new Discord.Client({disableEveryone: true});

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} servers.`); 
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});


client.on("ready", () => {
client.user.setActivity('In Troopers House', { type: 'PLAYING' })
.then(presence => console.log(`Activity set to ${presence.game.name}`))
.catch(console.error);
});

client.on("ready", () => {
  client.user.setStatus("online");
});

client.on("guildCreate", guild => {
  console.log(`New server joined: ${guild.name} (id: ${guild.id}). This serer has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});


client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];


  if(command === "ping") {
 
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }

  if(command === "troopersay") {

    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }

  client.on("message", (message) => {
    if (message.content.startsWith("patrolclear")) {
      message.channel.send("@everyone Server: 1 Weather: Default Traffic: Default");
    }
  });

  client.on("message", (message) => {
    if (message.content.startsWith("info")) {
      message.channel.send("```Hello everyone my name is Trooper Solo and i am here to welcome you my very first discord bot. With that being said it will still be in development until probably late 2018 as im still new to all this coding. I plan to add a ton of commands such as games etc. Stuff that would make people interested. I also have made some commands for roleplay communitys where it sends out patrol notifications which i think is really cool. I ask for everyone not to abuse my bot and im a really nice person so i will let you guys send me command suggestions and also I might add some. Hope you all have an amazing day.```");
    }
  });

  client.on("message", (message) => {
    if (message.content.startsWith("patrolstormy")) {
      message.channel.send("@everyone Server: 1 Weather: Stormy Traffic: Default");
    }
  });

  client.on("message", (message) => {
    if (message.content.startsWith("patrolsnow")) {
      message.channel.send("@everyone Server: 1 Weather: Snow Traffic: Default");
    }
  });

  client.on("message", (message) => {
    if (message.content.startsWith("911")) {
      message.channel.send("What's the details of you emergency please feel out the following Name: Location: Call Details:");
    }
});

client.on("message", (message) => {
    if (message.content.startsWith("Name:")) {
      message.channel.send("Okay. We will have officers en route to your location.");
    }
  });

  client.on("message", (message) => {
    if (message.content.startsWith("Signal 100")) {
      message.channel.send("**Attention** All units please **__ HOLD ALL BUT EMERGENCY TRAFFIC__**");
    }
  });

  client.on("message", (message) => {
    if (message.content.startsWith("Code Zero")) {
      message.channel.send("10-4 Showing you out of game");
    }
  });
  
  
  client.on("message", (message) => {
    if (message.content.startsWith("Code 4")) {
      message.channel.send("10-4 showing your call under control");
    }
  });
  
  
  client.on("message", (message) => {
    if (message.content.startsWith("Code 5")) {
      message.channel.send("10-4 Showing you on a felony stop / high risk stop");
    }
  });
  
  
  client.on("message", (message) => {
    if (message.content.startsWith("10-0")) {
      message.channel.send("10-4 Disappeared ");
    }
  });

  client.on("message", (message) => {
    if (message.content.startsWith("10-3")) {
      message.channel.send("**ATTENTION** all units 10-3 is now in effect.");
    }
  });
  
  
  client.on("message", (message) => {
    if (message.content.startsWith("10-6")) {
      message.channel.send("10-4 Showing you 10-6");
    }
  });
  
  
  client.on("message", (message) => {
    if (message.content.startsWith("10-7")) {
      message.channel.send("10-4 Showing you 10-7, 10-42 have a great day.");
    }
  });
  
  
  client.on("message", (message) => {
    if (message.content.startsWith("10-8")) {
      message.channel.send("10-4 Showing you 10-41, 10-8 have an amazing patrol.");
    }
  });
  
  
  client.on("message", (message) => {
    if (message.content.startsWith("10-10")) {
      message.channel.send("10-4 Showing fight in progress please request additional units if needed.");
    }
  });
  
  
  client.on("message", (message) => {
    if (message.content.startsWith("10-11")) {
      message.channel.send("10-4 Showing you on a traffic stop.");
    }
  });

  client.on("message", (message) => {
    if (message.content.startsWith("10-12")) {
      message.channel.send("10-4 Showing you on active ride along.");
    }
  });
  
  
  client.on("message", (message) => {
    if (message.content.startsWith("10-13")) {
      message.channel.send("10-4 Attention all available units please respond to the location of shots fired.");
    }
  });
  
  
  client.on("message", (message) => {
    if (message.content.startsWith("10-15")) {
      message.channel.send("10-4 Showing subject in custody.");
    }
  });
  
  
  client.on("message", (message) => {
    if (message.content.startsWith("10-16")) {
      message.channel.send("10-4 What's the vehicle description amd location?");
    }
  });
  
  
  client.on("message", (message) => {
    if (message.content.startsWith("10-23")) {
      message.channel.send("10-4 Showing you on scene.");
    }
  });
  
  
  client.on("message", (message) => {
    if (message.content.startsWith("10-26")) {
      message.channel.send("Unknown please ask a fellow officer/FF.");
    }
  });
  client.on("message", (message) => {
    if (message.content.startsWith("10-50")) {
      message.channel.send("10-4 Fire and EMS or en route to your location.");
    }
  });
  

  if(cmd === `${prefix}serverinfo`){

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);

    return message.channel.send(serverembed);
  }
 
  });

client.login(config.token);