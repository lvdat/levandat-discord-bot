const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('minevui')
        .setDescription('Replies with Pong!'),
    async execute(interaction) {
        await interaction.reply('Server fixing!');
    },
};