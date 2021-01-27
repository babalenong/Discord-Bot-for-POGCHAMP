const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.TOKEN;
// for local testing
// const { token } = require('./config.json');

client.once('ready', () =>{
	client.user.setActivity('for pogchamps', { type: 'WATCHING' });
	console.log('Ready!');
});

client.on('message', message => {
	if(message.author.bot) return;
	const lowercase = message.content.toLowerCase();
	if(lowercase.includes('pogchamp')) {
		message.channel.send('POGCHAMP', { files: ['https://raw.githubusercontent.com/babalenong/Discord-Bot-for-POGCHAMP/main/pogchamp1.png'] });
	}
});

// Start bot
client.login(token);