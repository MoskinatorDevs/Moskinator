const validateEvents = (events) => {
  const validEvents = [
    "channelCreate",
    "channelDelete",
    "channelPinsUpdate",
    "channelUpdate",
    "debug",
    "emojiCreate",
    "emojiDelete",
    "emojiUpdate",
    "error",
    "guildBanAdd",
    "guildBanRemove",
    "guildCreate",
    "guildDelete",
    "guildIntegrationsUpdate",
    "guildMemberAdd",
    "guildMemberRemove",
    "guildMembersChunk",
    "guildMemberSpeaking",
    "guildMemberUpdate",
    "guildUnavailable",
    "guildUpdate",
    "invalidated",
    "inviteCreate",
    "inviteDelete",
    "message",
    "messageDelete",
    "messageDeleteBulk",
    "messageReactionAdd",
    "messageReactionRemove",
    "messageReactionRemoveAll",
    "messageReactionRemoveEmoji",
    "messageUpdate",
    "presenceUpdate",
    "rateLimit",
    "ready",
    "roleCreate",
    "roleDelete",
    "roleUpdate",
    "shardDisconnect",
    "shardError",
    "shardReady",
    "shardReconnecting",
    "shardResume",
    "typingStart",
    "userUpdate",
    "voiceStateUpdate",
    "warn",
    "webhookUpdate",
  ];

  for (const event of events) {
    if (!validEvents.includes(event)) {
      throw new Error(`ERROR: UNKNOWN EVENT: ${event}`);
    }
  }
};

module.exports = (client, eventOptions) => {
  let { type = [], name = [], run } = eventOptions;

  // Ensure the event type is valid
  if (type.length) {
    if (typeof type === "string") {
      type = [type];
    }

    validateEvents(type);
  }

  // Ensure the event name are in an array
  if (typeof name === "string") {
    name = [name];
  }

  // Handle the custom event code
  client.on(type, run.bind(null, client));
};
