    const Discord = require ('discord.js');
    const client = new Discord.Client();
    const settings = require ('./settings.json')

    client.on('ready',() => {
        console.log('Online');
    })

    var prefix = "Jamesbot, "
    client.on('message', message => {
        if (message.author === client.user) return;
        if (message.content.startsWith(prefix + 'Ping!')) {
            message.channel.sendMessage('Pong!');

        }
    });

    client.login(process.env.BOT_TOKEN);
