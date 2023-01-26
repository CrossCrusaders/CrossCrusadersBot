const { ChannelType, PermissionFlagsBits } = require("discord.js")
require('dotenv').config();
const guildID = process.env.Guild_ID;

module.exports = {
    data: {
        name: "ticket"
    },
    async execute(interaction, client){
        var category = await interaction.guild.channels.cache.get("898390460308009041");
        var random = Math.random().toString(16);
        var channel = await category.children.create({
            name: `Help ${random}`,
            type: ChannelType.GuildText,
            permissionOverwrites: [
                {
                    id: interaction.member.id,
                    allow: [PermissionFlagsBits.ViewChannel],
                },
                {
                    id: interaction.guild.roles.cache.get("765902576545693716"),
                    allow: [PermissionFlagsBits.ViewChannel],
                },
                {
                    id: interaction.guild.roles.everyone,
                    deny: [PermissionFlagsBits.ViewChannel],
                },
            ],
        });
      
        await interaction.reply({
            content: `<#${channel.id}> Created`,
            ephemeral: true
        })
    }
}