const { EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Bans a user.")
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
    .addUserOption((option) =>
      option
        .setName('user')
        .setDescription('The user you want to ban.')
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName('reason')
        .setDescription('The reason for the ban.')
        .setRequired(false)
    ),
  async execute(interaction, client) {
    let member = interaction.options.getMember("user")
    let reason = interaction.options.getString("reason") || "No reason given"

    if(reason.length > 513) return interaction.reply('Too many characters. Try a shorter reason. (Less then 513 characters)')

    if (!member) return interaction.reply("Invalid member")

    try{
      let Embed = new EmbedBuilder()
        .setColor('#0099ff')
        .setTitle(`You were banned from ${interaction.guild.name}!`)
        .setDescription(`**Reason:**\n${reason}`)
        .setThumbnail(client.avatarURL)
        .setFooter({ text: `You were banned by: ${interaction.user.username}#${interaction.user.discriminator}` })

      let userS = member.guild.members.cache.get(member.id)

      await userS.send({ embeds: [Embed] })
        .catch((err) => {})

      await interaction.guild.bans.create(member, { reason })

      if(!interaction.replied){
        return interaction.reply(`${member.user.tag} has been banned with the reason of ${reason}`)
      }
    } catch (err) {
      if(!interaction.replied){
        return interaction.reply(`Failed to ban ${member.user.tag}.`)
      }
    }
  }
}