const { Client, GatewayIntentBits, StringSelectMenuBuilder, ActionRowBuilder, StringSelectMenuOptionBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
require('dotenv').config();

const token = process.env.Bot_Token;
const guildID = process.env.Guild_ID;
const rolesChannelID = process.env.Roles_Channel_ID;
const ticketChannelID = process.env.Ticket_Channel_ID;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildVoiceStates,
  ]
});

client.login(token);

client.once("ready", async function(){
  const guild = await client.guilds.cache.get(guildID);
  var channel = await guild.channels.cache.get(rolesChannelID);
  sendRolesChristian(channel);
  sendRolesGroups(channel);
  sendRolesAlerts(channel);
  channel = await guild.channels.cache.get(ticketChannelID);
  sendTicket(channel);
})

async function sendRolesChristian(channel){
  const list = [
    { label: "Christian", value: "766299198998970438" },
    { label: "Non-Christian", value: "767221068929695764" }
  ]
  const embed = new EmbedBuilder()
    .setTitle("Are you a Christian?")
    .setDescription("Select below to add roles.")
    .setColor("#c3e1e1")
  const menu = new StringSelectMenuBuilder()
    .setCustomId("christian")
    .setMaxValues(1)
    .setMinValues(1)
    .setPlaceholder("Please Make a Selection")
    .setOptions(list)
  channel.send({
    embeds: [embed],
    components: [new ActionRowBuilder().addComponents(menu)]
  });
}

async function sendRolesGroups(channel){
  const list = [
    { label: "Independent Fundamental Baptist", value: "984919273707286588" },
    { label: "Non-denominational", value: "984916020085018644" },
    { label: "Roman Catholic", value: "984917372064383046" },
    { label: "Orthodox", value: "984917964216217671" },
    { label: "Protestant", value: "984918245083578388" },
    { label: "Southern Baptist", value: "984919242795278358" },
    { label: "New Independent Fundamental Baptist", value: "984919313968410624" },
    { label: "Reformed Baptist", value: "984919354812551188" },
    { label: "Calvinist", value: "984919378661351434" },
    { label: "Church of Christ", value: "984919397401514024" },
    { label: "Evangelical", value: "984919448148394014" },
    { label: "Jehovah's Witness", value: "984919467224088636" },
    { label: "Lutheran", value: "984919501541896252" },
    { label: "Methodist", value: "984919522173673594" },
    { label: "Mormon", value: "984919541803008060" },
    { label: "Pentecostal", value: "984919571679043664" },
    { label: "Presbyterian", value: "984919653925142650" },
    { label: "Quaker", value: "984919687165018134" },
    { label: "Wesleyan", value: "984919709805842452" },
    { label: "Assemblies of God", value: "984919817389735986" },
    { label: "Messianic Judaism", value: "984919839762174013" },
    { label: "Charismatic", value: "984919872284794930" },
    { label: "Traditionalist", value: "984919894959202454" },
    { label: "Restorationism", value: "984919735227535430" },
    { label: "Episcopal", value: "984919425314619392" }
  ]
  const embed = new EmbedBuilder()
    .setTitle("Which group do you identify with?")
    .setDescription("Select below to add roles.")
    .setColor("#c3e1e1")
  const menu = new StringSelectMenuBuilder()
    .setCustomId("christian")
    .setMaxValues(1)
    .setMinValues(1)
    .setPlaceholder("Please Make a Selection")
    .setOptions(list)
  channel.send({
    embeds: [embed],
    components: [new ActionRowBuilder().addComponents(menu)]
  });
}

async function sendRolesAlerts(channel){
  const embed = new EmbedBuilder()
    .setTitle("Which Events would you like to of?")
    .setDescription("Select below to add roles.")
    .setColor("#c3e1e1")
  const menu = new StringSelectMenuBuilder()
    .setCustomId("alerts")
    .setMaxValues(3)
    .setMinValues(1)
    .setPlaceholder("Please Make a Selection")
    .setOptions(
      new StringSelectMenuOptionBuilder({
        label: "Bible Study",
        value: "767064043697078282"
      }),
      new StringSelectMenuOptionBuilder({
        label: "Hymn Night",
        value: "767064004572872725"
      }),
      new StringSelectMenuOptionBuilder({
        label: "Prayer Night",
        value: "767063981663059999"
      })
    )
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
    .setDescription("> Click the button below and share your personal need to our trusted <@&765902576545693716>.")
    .setColor("#c3e1e1")
    .setAuthor({ name: 'Cross Crusaders', iconURL: 'https://cdn.discordapp.com/avatars/967810428480667709/38cc3c1921ea30366324141f1d4185f8.webp?size=48' })

  await channel.send({
    embeds: [embed],
    components: [new ActionRowBuilder().addComponents(button)]
  })
}