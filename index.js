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
	if(lowercase.includes('pogchamp')) {
		message.channel.send('POGCHAMP', { files: ['https://user-images.githubusercontent.com/13828964/106120010-6bfb2600-6188-11eb-99d3-e8f15fa91a52.png'] });
	}
	else if (lowercase.includes('pog\b')) {
		message.channel.send('POG', { files: 'https://user-images.githubusercontent.com/13828964/106119997-6a316280-6188-11eb-9786-fde5c1294b3c.png' });
	}
	else if (lowercase.includes('notpog') || lowercase.includes('reverse pog') || lowercase.includes('not pog')) {
		message.channel.send('that ain\'t pog', { files: 'https://user-images.githubusercontent.com/13828964/106119989-68679f00-6188-11eb-8b48-8d190ca00a98.png' });
	}
	else if (lowercase.includes('pogu\b')) {
		message.channel.send('PogU', { files: 'https://user-images.githubusercontent.com/13828964/106120033-72899d80-6188-11eb-8a64-3f124164d0c1.png' });
	}
	else if (lowercase.includes('weirdchamp') || lowercase.includes('weird champ')) {
		message.channel.send('WeirdChamp', { files: 'https://user-images.githubusercontent.com/13828964/106120035-74536100-6188-11eb-8f97-63029c571fba.png' });
	}
	else if (lowercase.includes('adios\b')) {
		message.channel.send('Adios...', { files: 'https://media.tenor.co/videos/2b9443866424feea184db117fe54bacc/mp4' });
	}
});

// Start bot
client.login(token);