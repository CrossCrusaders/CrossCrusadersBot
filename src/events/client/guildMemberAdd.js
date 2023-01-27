const env = require("../../../env.json");

module.exports = {
  name: "guildMemberAdd",
  async execute(member, client) {
    let guild = client.guilds.cache.get(env.Guild_ID);
    let memRole = guild.roles.cache.get(env.Member_Role_ID);
    let annoRole = guild.roles.cache.get(env.Announcement_Role_ID);
    member.roles.add(memRole);
    member.roles.add(annoRole);
  }
}