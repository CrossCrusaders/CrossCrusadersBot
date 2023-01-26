const roleOptions = [
    "984919273707286588",
    "984916020085018644",
    "984917372064383046",
    "984917964216217671",
    "984918245083578388",
    "984919242795278358",
    "984919313968410624",
    "984919354812551188",
    "984919378661351434",
    "984919397401514024",
    "984919448148394014",
    "984919467224088636",
    "984919501541896252",
    "984919522173673594",
    "984919541803008060",
    "984919571679043664",
    "984919653925142650",
    "984919687165018134",
    "984919709805842452",
    "984919817389735986",
    "984919839762174013",
    "984919872284794930",
    "984919894959202454",
    "984919735227535430",
    "984919425314619392" 
]

module.exports = {
    data: {
        name: "groups"
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