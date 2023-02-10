const env = require("../../../env.json");

var admin = require("firebase-admin");
var serviceAccount = require(`../../../${env.Firebase_Login_File}`);
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: env.Firebase_Project_ID
});

const topicName = 'industry-tech';

module.exports = {
    name: "messageCreate",
    async execute(message, client) {
        try {
            if (message.channel.id == env.SA_Updates_Channel_ID && !message.author.bot) {
                var msgBody = message.content.split("-Body-")[1].trim();
                var msgTitle = message.content.split("-Body-")[0].split("-Title-")[1].trim();

                const firebaseMessage = {
                    notification: {
                        title: msgTitle,
                        body: msgBody
                    },
                    android: {
                        notification: {
                            imageUrl: 'https://foo.bar.pizza-monster.png'
                        }
                    },
                    topic: "updates"
                };
                await admin.messaging().send(firebaseMessage)
                    .then((response) => {
                        message.reply("Notification sent!");
                    })
                    .catch((error) => {
                        message.reply("There was an error sending the notification.");
                        console.log('Error sending message:', error);
                    });
            }
        } catch (err) {

        }
    }
}