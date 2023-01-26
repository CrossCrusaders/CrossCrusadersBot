module.exports = {
  name: "guildMemberAdd",
  async execute(member, client) {
    let guild = client.guilds.cache.get("765706818096726057");
    let memRole = guild.roles.cache.get("871160434198212668");
    let annoRole = guild.roles.cache.get("768158926184906792");
    member.roles.add(memRole);
    member.roles.add(annoRole);
  }
}