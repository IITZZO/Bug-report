const Discord = require("discord.js"); // discord.js@12.5.3
const client = new Discord.Client();
const chalk = require('chalk'); //chalk@4.1.2
const {token , act , type , status , bchannel , role1 , role2 , role3 , repm , emot , logch} = require(`./config.json`);

client.on("ready", () =>{
    const channel1 = client.channels.cache.get(`${logch}`) 
    console.log(chalk.blue.underline(`Succesfully Log in ${client.user.tag}`))
    client.user.setPresence({
        status : `${status}`,
        activity : {
            name : `${act}`,
            type : `${type}`
        }
    })

    channel1.send(`Bot Status Is Ready ! ✅`)
})

client.on("message", async (message) =>{
    if(message.author.id === client.user.id ) return;
    if(message.author.bot) return ;
    if(message.channel.type === "dm"){
        const channel2 = client.channels.cache.get(`${logch}`) 
        const channel = client.channels.cache.get(`${bchannel}`)
        const msg = message.content ;
        const user = message.author.username ;
        const id = message.author.id;
        const sname = message.guild.name;
        const pic = message.author.displayAvatarURL({ dynamic: true , format: "jpg" })
        message.reply(`${repm}`)
        const embed = new Discord.MessageEmbed()
         .setTitle(`New Report `)
         .setColor(`RANDOM`)
         .addField(`Report By __${user}__`,`**Report** : __ ${msg} __`)
         .setThumbnail(`${pic}`)
         .setTimestamp()
         .setFooter(`${sname}`)


        channel.send(`|| <@&${role2}> & <@&${role1}> & <@&${role3}> ||`)
        channel.send(`|| <@${id}> ||`)
        channel.send(embed).then(
            message.react(`${emot}`)
        )
        channel2.send(`New Bug Is Require !`)
        

    }
})


client.login(`${token}`)
