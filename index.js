var Discordie = require("discordie");
var client = new Discordie();

const prefix = "add a prefix";
const ownerid = "your id";

client.connect({
  token: "Add your token here"
});

client.Dispatcher.on("GATEWAY_READY", e => {
var streamingGame = {type: 1, name: "Your prefix help | In " + client.Guilds.length + " servers.", url: "https://twitch.tv/yourtwitchaccount"};
    client.User.setGame(streamingGame);
  console.log("Connected as: " + client.User.username);
});

client.Dispatcher.on("GUILD_CREATE", () => {
var streamingGame = {type: 1, name: "Your prefix help | In " + client.Guilds.length + " servers.", url: "https://twitch.tv/yourtwitchaccount"};
    client.User.setGame(streamingGame);
});

client.Dispatcher.on("MESSAGE_CREATE", e => {
  if (e.message.content == prefix + "myroles") {
  var member = e.message.member;
  var member = e.message.author.memberOf(e.message.guild);
  const roleNames = member.roles.map(role => role.name);
  e.message.channel.sendMessage("", false, {
          color: 0x0033FF,
                        footer: {
      icon_url: "your avatar",
      text: "your bot name | Using BotGoPvP template <3"
    },
       "author": {
      "name": "Your roles",
      "icon_url": "still your bot avatar"
    },
          fields: [
    {
        name: 'Roles:', value: roleNames.join(", ") || "no roles"
        }
        ]
        })
}
    if (e.message.content == prefix + "ping") {
    e.message.channel.sendMessage(`Pong!`).then(sentMessage => {
          sentMessage.edit(`${sentMessage.content} | ${Date.parse(sentMessage.timestamp) - Date.parse(e.message.timestamp)}ms`);
        console.log(e.message.author.username + " executed Ping.");
        }).catch(err => { return });
    }

    if (e.message.content == prefix + "help") {
       e.message.channel.sendMessage("", false, {
          color: 0x0033FF,
                        footer: {
      icon_url: "your avatar",
      text: "your bot name | Using BotGoPvP template <3"
    },
       "author": {
      "name": "Help.",
      "icon_url": "bot avatar"
    },
          fields: [
    {
        name: "Help", value: `Here is all commands.`
        }, 
        
        {
        name: `bb!myroles`, value: `Show all of the roles you got.`
        },
        {
        name: 'bb!ping', value: `Says pong with the ms.`
        },
        {
        name: 'bb!userinfo', value: `All the infos about you or someone else.`
        },
        {
        name: 'bb!eval', value: `Owner only.`
        },
        {
        name: 'bb!aboutbot', value: `Where the bot is hosted and all the credits.`
        }
        ]
        })
    e.message.addReaction("\u2705");
    } 
	
    if (e.message.content == prefix + "aboutbot") {
    e.message.channel.sendMessage("", false, {
          color: 0x0033FF,
                        footer: {
      icon_url: "your avatar",
      text: "your bot name | Using BotGoPvP template <3"
    },
       "author": {
      "name": "Aboutbot.",
      "icon_url": "bot avatar"
    },
          fields: [
    {
        name: "Aboutbot.", value: `About the bot and credits.`
        }, 
        
        {
        name: `Credits.`, value: `Credits to DarkPhoenix10 and Mr.Firey for the ping. Mr.Firey, Dͥoͫmenic Waterdash and Soren1Know for eval. Soren1Know for userinfo.`
        },
        {
        name: 'Host.', value: `This is hosted on the computer of BlueGoPvP my owner and maybe later on Amazon S3. It's a laptop : ASUS In search of incredible R511L.`
        }
        ]
        })
    } 

     if (e.message.content.startsWith(prefix + "eval")) {
      if (e.message.author.id == your ownerid here) {
      try {
        var sliced = e.message.content.slice(8);
        var evaluated = eval(sliced);
        console.log(sliced);
        console.log("[INFO] ".info + e.message.author.username + " (OWNER) executed Eval.");
          e.message.channel.sendMessage("", false, {
            color: 0x0033FF,
            fields: [{name: "Output:", value: "" + evaluated}]
          });
      } catch (err) {
        console.log("[EVAL-ERROR] ".error + " " + err.message)
          var lol333 = err.message;
          e.message.channel.sendMessage("", false, {
            color: 0xFF0000,
            fields: [{name: "Error:", value: "" + lol333}]
          });
      };
      };
};
	if (e.message.content.startsWith(prefix + "userinfo")) {
		e.message.channel.sendMessage("", false, {
            color: 0x0033FF,
                        footer: {
      icon_url: "your avatar",
      text: "your bot name | Using BotGoPvP template <3"
    },
       "author": {
      "name": "Userinfo.",
      "icon_url": "bot avatar"
    },
			thumbnail: {url: `${e.message.mentions[0].avatarURL}`},
            title: `:information_source: About ${e.message.mentions[0].username}`,
                fields: [{name: "Username:", value: `${e.message.mentions[0].username}`}, {name: "ID:", value: `${e.message.mentions[0].id}`}, {name: "Discriminator:", value: `#${e.message.mentions[0].discriminator}`}, {name: "Status:", value: `${e.message.mentions[0].status}`}, {name: "Is Bot:", value: `${e.message.mentions[0].bot}`}]},
        });
	}
});
