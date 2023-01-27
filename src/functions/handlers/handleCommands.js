const { REST } = require("@discordjs/rest");
const { Routes } = require("discord.js");
const fs = require("fs");
const env = require("../../../env.json");

module.exports = (client) => {
  client.handleCommands = async () => {
    const commandFolders = fs.readdirSync(`./src/commands`);
    for (const folder of commandFolders) {
      const commandFiles = fs.readdirSync(`./src/commands/${folder}`)
        .filter(file => file.endsWith(".js"));

      const { commands, commandArray } = client;
      for (const file of commandFiles) {
        const command = require(`../../commands/${folder}/${file}`);
        commands.set(command.data.name, command);
        commandArray.push(command.data);
        console.log(`Loaded in the ${command.data.name} command.`)
      }
    }

    const commandsLoading = client.commandArray.map(command => command.toJSON());

    const rest = new REST({ version: 10 }).setToken(env.Bot_Token);
    try {
      console.log('Started refreshing application {/} commands.');

      await rest.put(
        Routes.applicationCommands(env.Bot_ID), {
        body: commandsLoading,
      })
    } catch (err) {
      console.error(err)
    }
  }
}