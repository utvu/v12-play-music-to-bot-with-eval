!eval const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };
const broadcast = client.voice.createBroadcast();

message.member.voice.channel.join()
  .then(connection => {
    const stream = ytdl('music link', { filter : 'audioonly' });
    broadcast.play(stream);
    const dispatcher = connection.play(broadcast);
  })
  .catch(console.error);