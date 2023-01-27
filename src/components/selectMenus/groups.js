const env = require("../../../env.json");

module.exports = {
    data: {
        name: "groups"
    },
    async execute(interaction, client) {
        let guild = client.guilds.cache.get(interaction.guildId);
        let role = guild.roles.cache.get(interaction.values[0]);
        interaction.member.roles.add(role);
        env.Denominations.forEach((r) => {
            if(r.value != interaction.values[0]){
                var removeRole = guild.roles.cache.get(r.value);
                interaction.member.roles.remove(removeRole);
            }
        });
        interaction.reply({
            content: `Added the ${role.name} role!`,
            ephemeral: true
        });
    }
}