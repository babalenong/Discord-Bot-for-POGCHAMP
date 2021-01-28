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
	// Lowercase to catch caps variants
	const lowercase = message.content.toLowerCase();
	// Word checks starts here

	if (lowercase.match('notpog') || lowercase.match('reverse pog') || lowercase.match('not pog')) {
		message.channel.send('that ain\'t pog', { files: ['https://user-images.githubusercontent.com/13828964/106119989-68679f00-6188-11eb-8b48-8d190ca00a98.png'] });
	}
	else if(lowercase.match('pogchamp')) {
		message.channel.send('POGCHAMP', { files: ['https://user-images.githubusercontent.com/13828964/106120010-6bfb2600-6188-11eb-99d3-e8f15fa91a52.png'] });
	}
	else if (lowercase.match(/\bpog\b/g)) {
		message.channel.send('POG', { files: ['https://user-images.githubusercontent.com/13828964/106119997-6a316280-6188-11eb-9786-fde5c1294b3c.png'] });
	}
	else if (lowercase.match(/\bpogu\b/g)) {
		message.channel.send('PogU', { files: ['https://user-images.githubusercontent.com/13828964/106120033-72899d80-6188-11eb-8a64-3f124164d0c1.png'] });
	}
	else if (lowercase.match('weirdchamp') || lowercase.match('weird champ')) {
		message.channel.send('WeirdChamp', { files: ['https://user-images.githubusercontent.com/13828964/106120035-74536100-6188-11eb-8f97-63029c571fba.png'] });
	}
	else if (lowercase.match(/\badios\b/g)) {
		message.channel.send('Adios...', { files: ['https://user-images.githubusercontent.com/13828964/106126237-b6cc6c00-618f-11eb-8b9e-a34ae7463335.gif'] });
	}
});

// Start bot
client.login(token);