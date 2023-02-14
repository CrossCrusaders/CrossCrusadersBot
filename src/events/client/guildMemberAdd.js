const { EmbedBuilder } = require("discord.js");
const env = require("../../../env.json");

module.exports = {
  name: "guildMemberAdd",
  async execute(member, client) {
    let guild = await client.guilds.cache.get(env.Guild_ID);
    let memRole = await guild.roles.cache.get(env.Member_Role_ID);
    let annoRole = await guild.roles.cache.get(env.Announcement_Role_ID);
    await member.roles.add(memRole);
    await member.roles.add(annoRole);
    const embed = new EmbedBuilder()
      .setTitle("Welcome!")
      .setDescription(`Welcome to **Cross Crusaders**!\nWe are so glad you are here! Check out and select your roles from <#${env.Roles_Channel_ID}>. Our <@&${env.Staff_Role_ID}> will be here soon to welcome you. Have fun in Cross Crusaders!`)
      .setColor("#c3e1e1")
    let genChnl = await client.channels.cache.get(env.General_Channel_ID);
    genChnl.send({
      content: `<@${member.id}>`,
      embeds: [embed]
    });
  }
}