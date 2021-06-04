const Dlang = require('discordbot-script');
const keep_alive = require('./keep_alive.js');
const bot = new Dlang({
	token: 'ODIxMzA2MzAxOTQxNjc4MTAx.YFBzGQ.Mcx_W7O_jUcCocFGJwU28c2JvUM',
	prefix: ['RP!']
})

bot.Status({
        0: {
            description: "Minecraft RinikPlex", 
            type: "PLAYING" 
        }, 
        1: {
            description: "RinikPlex server", 
            type: "LISTENING" 
        },
        2: {
           description: "the whole RinikPlex",
           type: "WATCHING"
        }
    }, 13000)

bot.MessageEvent();

bot.Command({
	name: 'ping',
	code: `
 Pong! RinikPlexBot2.0 má ping $ping ms!
  `
});
bot.Command({
	name: 'say',
	code: `
  $message[]
  `
});
bot.Command({
	name: 'help',
	code: `
  $title[HELP]
  $description[**RP!helpmember** ukáže ti aké príkazy može použit hráč \n**RP!helpadmin** ukáže ti aké príkazy može použit admin]
  `
});
bot.Command({
	name: 'helpmember',
	code: `
  $title[HELP MEMBER]
  $description[**RP!say {message}** - napíše toto čo ty \n\n**RP!ping** - ukáže ti ping bota \n\n**RP!help** - ukáže ti help menu \n\n**RP!mcip** - ukáže ti minecraft ip na server \n\n**RP!stranka** - napiše našu webstránku]
  `
});
bot.Command({
	name: 'mcip',
	code: `
  $title[MCIP]
  $description[**coded server** - 192.168.1.7 \n**aternos server** - rinikplex.aternos.me]
  `
});
bot.Command({
	name: 'helpadmin',
	code: `
  $title[HELP ADMIN]
  $description[**RP!say** - napiše to čo ty \n\n**RP!ban {member}** - banne hráča \n\n**RP!kick {member}** - kickne hráča \n\n**RP!warn {member}** - warne hráča \n\n**RP!poll {message}** - hlasovanie]
  `
});
bot.Command({
	name: 'stranka',
	code: `
  $title[Stránka RinikPlexu]
  $description[**coded website** - https://rinikplex.riniki.repl.co]
  `
});
bot.Command({
name: "ban",
code: `
  $onlyPerms[Na toto nemaš práva!]
  $ban[$mentioned[1];$messageSlice[>1]]
  $username[] banned $username[$mentioned[1]]#$discriminator[$mentioned[1]]
  Reason: $messageSlice[>1]
  `
})
bot.Command({
name: "kick",
code: `
  $onlyPerms[Nemaš na toto práva! ]
  $kick[$mentioned[1];Reason here (not necessary)]
  The user was kicked.
  `
})
bot.Command({
name: "poll",
code: `
$title[hlasovanie!]
$description[$message]
$addReactions[✅;❎]
`
})
