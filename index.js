const Discord = require('discord.js');
const client = new Discord.Client();
const { token } = require('./config.json');

client.once('ready', () =>{
	console.log('Ready!');
});

client.on('message', message => {
	if(message.author.bot) return;
	const lowercase = message.content.toLowerCase();
	if(lowercase.includes('pogchamp')) {
		message.channel.send('POGCHAMP', { files: ['./pogchamp1.png'] });
	}
});

// Start bot
client.login(token);