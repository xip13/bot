/**
 * @param {import('discord.js').Client} bot 
*/
module.exports = async (bot) => {
    bot.user.setPresence({
        activities: [{
            name: 'За сервером',
            type: 3
        }],
        status:"dnd"
    });
};