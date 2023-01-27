const { ChannelType, PermissionFlagsBits } = require("discord.js")
const env = require("../../../env.json");

module.exports = {
    data: {
        name: "ticket"
    },
    async execute(interaction, client){
        var category = await interaction.guild.channels.cache.get(env.Ticket_Category_ID);
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
                    id: interaction.guild.roles.cache.get(env.Staff_Role_ID),
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