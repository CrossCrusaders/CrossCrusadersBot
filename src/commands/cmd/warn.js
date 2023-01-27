const { EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("warn")
    .setDescription("Timeout a user.")
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMembers)
    .addUserOption((option) =>
      option
        .setName('user')
        .setDescription('The user you want to warn.')
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName('reason')
        .setDescription('The reason for the warn.')
        .setRequired(false)
    ),
  async execute(interaction, client) {
    try{
      let member = interaction.options.getMember("user")
      let reason = interaction.options.getString("reason") || "No reason given"

      if(reason.length > 513) return interaction.reply('Too many characters. Try a shorter reason. (Less then 513 characters)')

      if (!member) return interaction.reply("Invalid member")

      let Embed = new EmbedBuilder()
        .setColor('#0099ff')
        .setTitle(`You were warned in ${interaction.guild.name}!`)
        .setDescription(`**Reason:**\n${reason}`)
        .setThumbnail(client.avatarURL)
        .setFooter({ text: `You were warned by: ${interaction.user.username}#${interaction.user.discriminator}` })

      let userS = member.guild.members.cache.get(member.id)

      await userS.send({ embeds: [Embed] })
        .catch((err) => {})

      if(!interaction.replied){
        return interaction.reply(`${member.user.tag} has been warned with the reason of ${reason}`)
      }
    } catch (err) {
      if(!interaction.replied){
        return interaction.reply(`Failed to warn ${member.user.tag}.`)
      }
    }
  }
}