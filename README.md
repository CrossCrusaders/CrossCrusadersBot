<img src="./README/banner.png"/>

<div align="center">
    <a href="https://discord.gg/3BdrYPtE38"><img src="https://img.shields.io/badge/Discord-blue?style=for-the-badge&logo=Discord&logoColor=white"/></a>
</div>

# I'm the Developer
As a developer for Cross Crusaders, I had the opportunity to help out the Discord server by creating a bot for them. However, I love open source. And that is why you are even reading this. This source code is mostly unmodified from what is actually used in the server (I say "mostly" because I removed the token from the `.env` file). This source code can be used by anyone and they don't need to credit me.

# How to Use:
1. Install the latest version of Node.js.
2. Clone this repository to your device.
3. Open up the root directory of the repository in either CMD(Windows) or Terminal(macOS or Linux).
4. Create a discord application by going [here](https://discord.com/developers/applications) and clicking "New Application".
5. Follow the steps on screen.
6. Once your application is created, go to the side menu and click "Bot" then click "Add Bot".
7. Now click "Reset Token" and follow the steps.
8. When that is done, copy the token and paste it as the value of the `Bot_Token` variable in the `.env` file.
9. Back in the Developer Portal, copy the application ID of your application.
10. Paste that in the `.env` file as the variable `Bot_ID`.
11. Set all the other variables to work with your server. (Variables that need changed can be found in many files throughout the bot's code. All of the IDs outside of the `.env` file are just role IDs that will need changed)
12. Back in CMD/Terminal, run `npm i` and `npm start`.
13. Your bot is now running!

# Issues?
If you are having issues with setting up the bot/bugs, you can create an issue on this repository and I will look over them and help in the respective manner.