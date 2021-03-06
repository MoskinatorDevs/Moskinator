module.exports = {
  name: "colorAdd",
  type: "messageReactionAdd",
  run: async (client, reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    //filter
    if (user.bot) return;
    if (!reaction.message.guild) return;
    if (!reaction.message.guild.id === "745228171561009153") return;

    //Color
    if (reaction.message.id === "773078230437199892") {
      //Yellow[1]
      if (reaction.emoji.name === "yellow") {
        const role = reaction.message.guild.roles.cache.find(
          (role) => role.name === reaction.emoji.name
        );
        await reaction.message.guild.members.cache.get(user.id).roles.add(role);
        return user.send(`The ${role.name} color has been added!`);
      }
      //White[2]
      if (reaction.emoji.name === "white") {
        const role = reaction.message.guild.roles.cache.find(
          (role) => role.name === reaction.emoji.name
        );
        await reaction.message.guild.members.cache.get(user.id).roles.add(role);
        return user.send(`The ${role.name} color has been added!`);
      }
      //Red[3]
      if (reaction.emoji.name === "red") {
        const role = reaction.message.guild.roles.cache.find(
          (role) => role.name === reaction.emoji.name
        );
        await reaction.message.guild.members.cache.get(user.id).roles.add(role);
        return user.send(`The ${role.name} color has been added!`);
      }
      //Purple[4]
      if (reaction.emoji.name === "purple") {
        const role = reaction.message.guild.roles.cache.find(
          (role) => role.name === reaction.emoji.name
        );
        await reaction.message.guild.members.cache.get(user.id).roles.add(role);
        return user.send(`The ${role.name} color has been added!`);
      }
      //Pink[5]
      if (reaction.emoji.name === "pink") {
        const role = reaction.message.guild.roles.cache.find(
          (role) => role.name === reaction.emoji.name
        );
        await reaction.message.guild.members.cache.get(user.id).roles.add(role);
        return user.send(`The ${role.name} color has been added!`);
      }
      //Orange[6]
      if (reaction.emoji.name === "orange") {
        const role = reaction.message.guild.roles.cache.find(
          (role) => role.name === reaction.emoji.name
        );
        await reaction.message.guild.members.cache.get(user.id).roles.add(role);
        return user.send(`The ${role.name} color has been added!`);
      }
      //Lime[7]
      if (reaction.emoji.name === "lime") {
        const role = reaction.message.guild.roles.cache.find(
          (role) => role.name === reaction.emoji.name
        );
        await reaction.message.guild.members.cache.get(user.id).roles.add(role);
        return user.send(`The ${role.name} color has been added!`);
      }
      //Green[8]
      if (reaction.emoji.name === "green") {
        const role = reaction.message.guild.roles.cache.find(
          (role) => role.name === reaction.emoji.name
        );
        await reaction.message.guild.members.cache.get(user.id).roles.add(role);
        return user.send(`The ${role.name} color has been added!`);
      }
      //Cyan[9]
      if (reaction.emoji.name === "cyan") {
        const role = reaction.message.guild.roles.cache.find(
          (role) => role.name === reaction.emoji.name
        );
        await reaction.message.guild.members.cache.get(user.id).roles.add(role);
        return user.send(`The ${role.name} color has been added!`);
      }
      //Brown[10]
      if (reaction.emoji.name === "brown") {
        const role = reaction.message.guild.roles.cache.find(
          (role) => role.name === reaction.emoji.name
        );
        await reaction.message.guild.members.cache.get(user.id).roles.add(role);
        return user.send(`The ${role.name} color has been added!`);
      }
      //Blue[11]
      if (reaction.emoji.name === "blue") {
        const role = reaction.message.guild.roles.cache.find(
          (role) => role.name === reaction.emoji.name
        );
        await reaction.message.guild.members.cache.get(user.id).roles.add(role);
        return user.send(`The ${role.name} color has been added!`);
      }
      //Black[12]
      if (reaction.emoji.name === "black") {
        const role = reaction.message.guild.roles.cache.find(
          (role) => role.name === reaction.emoji.name
        );
        await reaction.message.guild.members.cache.get(user.id).roles.add(role);
        return user.send(`The ${role.name} color has been added!`);
      }
    }
  },
};
