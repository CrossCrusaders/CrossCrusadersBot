const roleOptions = [
    "766299198998970438",
    "767221068929695764"
]

module.exports = {
    data: {
        name: "christian"
    },
    async execute(interaction, client) {
        let guild = client.guilds.cache.get(interaction.guildId);
        let role = guild.roles.cache.get(interaction.values[0]);
        interaction.member.roles.add(role);
        roleOptions.forEach((role) => {
            if(role != interaction.values[0]){
                var removeRole = guild.roles.cache.get(role);
                interaction.member.roles.remove(removeRole);
            }
        });
        interaction.reply({
            content: `Added the ${role.name} role!`,
            ephemeral: true
        });
    }
}