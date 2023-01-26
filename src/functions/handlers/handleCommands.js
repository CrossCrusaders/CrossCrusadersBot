const { REST } = require("@discordjs/rest");
const { Routes } = require("discord.js");
const fs = require("fs");
require('dotenv').config();

const token = process.env.Bot_Token;
const id = process.env.Bot_ID;

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

    const rest = new REST({ version: 10 }).setToken(token);
    try {
      console.log('Started refreshing application {/} commands.');

      await rest.put(
        Routes.applicationCommands(id), {
        body: commandsLoading,
      })
    } catch (err) {
      console.error(err)
    }
  }
}