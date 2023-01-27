const { Client, GatewayIntentBits, StringSelectMenuBuilder, ActionRowBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const env = require("../env.json");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildVoiceStates,
  ]
});

client.login(env.Bot_Token);

client.once("ready", async function(){
  const guild = await client.guilds.cache.get(env.Guild_ID);
  var channel = await guild.channels.cache.get(env.Roles_Channel_ID);
  sendRolesChristian(channel);
  sendRolesGroups(channel);
  sendRolesAlerts(channel);
  channel = await guild.channels.cache.get(env.Ticket_Channel_ID);
  sendTicket(channel);
})

async function sendRolesChristian(channel){
  const embed = new EmbedBuilder()
    .setTitle("Are you a Christian?")
    .setDescription("Select below to add roles.")
    .setColor("#c3e1e1")
  const menu = new StringSelectMenuBuilder()
    .setCustomId("christian")
    .setMaxValues(1)
    .setMinValues(1)
    .setPlaceholder("Please Make a Selection")
    .setOptions(env["Christian?"])
  channel.send({
    embeds: [embed],
    components: [new ActionRowBuilder().addComponents(menu)]
  });
}

async function sendRolesGroups(channel){
  const embed = new EmbedBuilder()
    .setTitle("Which group do you identify with?")
    .setDescription("Select below to add roles.")
    .setColor("#c3e1e1")
  const menu = new StringSelectMenuBuilder()
    .setCustomId("christian")
    .setMaxValues(1)
    .setMinValues(1)
    .setPlaceholder("Please Make a Selection")
    .setOptions(env.Denominations)
  channel.send({
    embeds: [embed],
    components: [new ActionRowBuilder().addComponents(menu)]
  });
}

async function sendRolesAlerts(channel){
  const embed = new EmbedBuilder()
    .setTitle("Which Events would you like to be notified of?")
    .setDescription("Select below to add roles.")
    .setColor("#c3e1e1")
  const menu = new StringSelectMenuBuilder()
    .setCustomId("alerts")
    .setMaxValues(3)
    .setMinValues(1)
    .setPlaceholder("Please Make a Selection")
    .setOptions(env.Assignable_Roles)
  channel.send({
    embeds: [embed],
    components: [new ActionRowBuilder().addComponents(menu)]
  });
}

async function sendTicket(channel){
  const button = new ButtonBuilder()
    .setCustomId('ticket')
    .setLabel("🎫 Create Ticket!")
    .setStyle(ButtonStyle.Primary)

  const embed = new EmbedBuilder()
    .setTitle("Support Line")
    .setDescription(`> Click the button below and share your personal need to our trusted <@&${env.Staff_Role_ID}>.`)
    .setColor("#c3e1e1")
    .setAuthor({ name: 'Cross Crusaders', iconURL: 'https://cdn.discordapp.com/avatars/967810428480667709/38cc3c1921ea30366324141f1d4185f8.webp?size=48' })

  await channel.send({
    embeds: [embed],
    components: [new ActionRowBuilder().addComponents(button)]
  })
}