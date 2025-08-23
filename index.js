const mineflayer = require('mineflayer')

let loginSent = false; 
let warpSent = false;

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
      // 1️⃣ /login komutu
      setTimeout(() => {
        bot.chat("/login benbitben")
        console.log("/login komutu gönderildi ✅")
        loginSent = true 

        if (!warpSent) {
          // 2️⃣ /warp afk komutu
          setTimeout(() => {
            bot.chat("/warp afk")
            console.log("/warp komutu gönderildi ✅")
            warpSent = true 

            // 3️⃣ Her dakika shard pay
            setInterval(() => {
              bot.chat("/shard pay obbyzz 1")
              console.log("/shard pay obbyzz 1 komutu gönderildi ✅")
            }, 60000)

          }, 5000) // login'den 5 sn sonra warp
        }

      }, 3000) // giriş yaptıktan 3 sn sonra login
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
