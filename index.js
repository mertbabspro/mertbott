const mineflayer = require('mineflayer')

let loginSent = false; // login komutunun gönderilip gönderilmediğini kontrol etmek için

function createBot() {
  const bot = mineflayer.createBot({
    host: "zurnacraft.net",
    port: 25565,
    username: "obbyzzafk5",
    version: "1.19"
  })

  bot.on('login', () => {
    console.log("Bot sunucuya bağlandı ✅")

    if (!loginSent) {
      // 1️⃣ /login
      setTimeout(() => {
        bot.chat("/register benbitben benbitben")
        console.log("/login komutu gönderildi ✅")
        loginSent = true // sadece bir kez gönderildi

        // 2️⃣ Her dakika /shard pay obbyzz 1
        setInterval(() => {
          bot.chat("/shard pay obbyzz 1")
          console.log("/shard pay obbyzz 1 komutu gönderildi ✅")
        }, 60000) // 1 dakika
      }, 5000)
    }
  })

  // Chat logları
  bot.on('chat', (username, message) => {
    console.log(`[CHAT] <${username}> ${message}`)
  })

  bot.on('whisper', (username, message) => {
    console.log(`[WHISPER] <${username}> ${message}`)
  })

  bot.on('end', () => {
    console.log("Bağlantı koptu, 5 sn sonra tekrar bağlanacak...")
    setTimeout(createBot, 5000)
  })

  bot.on('error', err => console.log("Hata:", err))
}

createBot()
