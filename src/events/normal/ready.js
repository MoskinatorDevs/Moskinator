module.exports = {
  name: "ready",
  type: "ready",
  run: (client) => {
    const serverSize = client.guilds.cache.size;
    const userSize = client.users.cache.size;

    var server = "servers";
    var user = "users";
    if (serverSize === 1) server = "server";
    if (userSize === 1) user = "user";
    console.log(
      `${client.user.username} is ready to serve \n${serverSize} ${server} and ${userSize} ${user}!`
    );
  },
};
