const roleOptions = [
    "767064043697078282",
    "767064004572872725",
    "767063981663059999"
]

module.exports = {
    data: {
        name: "alerts"
    },
    async execute(interaction, client) {
        let guild = client.guilds.cache.get(interaction.guildId);
        let role = guild.roles.cache.get(interaction.values[0]);
        roleOptions.forEach((role) => {
            if(role != interaction.values[0] && role != interaction.values[1] && role != interaction.values[2]){
                var removeRole = guild.roles.cache.get(role);
                interaction.member.roles.remove(removeRole);
            }
            else{
                interaction.member.roles.add(role);
            }
        });
        interaction.reply({
            content: `Added ${interaction.values.length} roles!`,
            ephemeral: true
        });
    }
}