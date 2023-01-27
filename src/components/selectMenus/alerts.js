const env = require("../../../env.json");

module.exports = {
    data: {
        name: "alerts"
    },
    async execute(interaction, client) {
        let guild = client.guilds.cache.get(interaction.guildId);
        env.Assignable_Roles.forEach((role) => {
            if(role.value != interaction.values[0] && role.value != interaction.values[1] && role.value != interaction.values[2]){
                var removeRole = guild.roles.cache.get(role.value);
                interaction.member.roles.remove(removeRole);
            }
            else{
                interaction.member.roles.add(role.value);
            }
        });
        interaction.reply({
            content: `Added ${interaction.values.length} roles!`,
            ephemeral: true
        });
    }
}