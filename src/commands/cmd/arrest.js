const { EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const { SlashCommandBuilder } = require("discord.js");
require('dotenv').config();

const ArrestRoleID = process.env.Arrest_Role_ID;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("arrest")
    .setDescription("Arrest a user.")
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMembers)
    .addUserOption((option) =>
      option
        .setName('user')
        .setDescription('The user you want to arrest.')
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName('reason')
        .setDescription('The reason for the arrest.')
        .setRequired(false)
    ),
  async execute(interaction, client) {
    let member = interaction.options.getMember("user")
    let reason = interaction.options.getString("reason") || "No reason given"

    if (!member) return interaction.reply("Invalid member")

    try{
      let Embed = new EmbedBuilder()
        .setColor('#ff0000')
        .setTitle(`You were arrested in ${interaction.guild.name}!`)
        .setDescription(`**Reason:**\n${reason}`)
        .setThumbnail(client.avatarURL)
        .setFooter({ text: `You were arrested by: ${interaction.user.username}#${interaction.user.discriminator}` })

      let userS = member.guild.members.cache.get(member.id)
      
      await userS.send({ embeds: [Embed] })
        .catch((err) => {})

      await member.roles.add(member.guild.roles.cache.get(ArrestRoleID));

      if(!interaction.replied){
        let Embed2 = new EmbedBuilder()
          .setTitle("Put your hands up!")
          .setDescription(`🚨 ${member.user.tag} has been arrested with the reason of ${reason} 🚨`)
          .setColor("#ff0000")
        return interaction.reply({ embed: [Embed2] })
      }
    } catch (err) {
      if(!interaction.replied){
        return interaction.reply(`Failed to arrest ${member.user.tag}.`)
      }
    }      
  }
}