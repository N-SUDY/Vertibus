const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@adiwajshing/baileys");
const fs = require("fs");
const util = require("util");
const chalk = require("chalk");
const { Configuration, OpenAIApi } = require("openai");
const cheerio = require("cheerio")
let setting = require("./key.json");
var packName = "Masbro"
var author = "MiKako"

module.exports = sansekai = async (client, m, chatUpdate, store) => {
  try {
    var body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype == "imageMessage"
        ? m.message.imageMessage.caption
        : m.mtype == "videoMessage"
        ? m.message.videoMessage.caption
        : m.mtype == "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype == "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype == "templateButtonReplyMessage"
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text
        : "";
    var budy = typeof m.text == "string" ? m.text : "";
    // var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/"
    var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/";
    const isCmd2 = body.startsWith(prefix);
    const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
    const botNumber = await client.decodeJid(client.user.id);
    const itsMe = m.sender == botNumber ? true : false;
    let text = (q = args.join(" "));
    const arg = budy.trim().substring(budy.indexOf(" ") + 1);
    const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);
    const mik = (m.quoted || m)
    const quoted = (mik.mtype == 'buttonsMessage') ? mik[Object.keys(mik)[1]] : (mik.mtype == 'templateMessage') ? mik.hydratedTemplate[Object.keys(mik.hydratedTemplate)[1]] : (mik.mtype == 'product') ? mik[Object.keys(mik)[0]] : m.quoted ? m.quoted : m

    const from = m.chat;
    const reply = m.reply;
    const sender = m.sender;
    const mek = chatUpdate.messages[0];
    const qms = (quoted.msg || quoted)
    const mime = (quoted.msg || quoted).mimetype || ''
    const content = JSON.stringify(m.message)

    const color = (text, color) => {
      return !color ? chalk.green(text) : chalk.keyword(color)(text);
    };

    // Group
    const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch((e) => {}) : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";

    /*Media Init*/
    const isMedia = (m.mtype === 'imageMessage' || m.mtype === 'videoMessage')
    const isQuotedImage = m.mtype === 'extendedTextMessage' && content.includes('imageMessage')
    const isQuotedSticker = m.mtype === 'extendedTextMessage' && content.includes('stickerMessage')

    /*Farming Object*/
    let mobs = {
    mats: {
      metal: [{
          monster: 'Goblin{Pedang)',
          lv: '24',
          element: 'Api',
          hp: 'idk',
          exp: 'idk',
          map: 'Gua Ribisco: A3'
      }, 
      {
          monster: 'Stone Soldier',
          lv: '37',
          element: 'Bumi',
          hp: 'idk',
          exp: 'idk',
          map: 'Gua Lutaros: Mulut Gua'
        }, {
          monster: 'Ksatria Terkontrol',
          lv: '93',
          element: 'Gelap',
          hp: 'idk',
          exp: 'idk',
          map: 'Istana Gelap: A2'
        }, {
          monster:'*Malaikat Gelembung(Biru)*',
          lv: '*143*',
          element: '*Air*',
          hp: '*idk*',
          exp: '*idk*',
          map: '*Kuil Dewa Berkah: A2*'
        }, {
          monster: 'Bitum',
          lv: '210',
          element: 'Api',
          hp: '36.600',
          exp: '581',
          map: 'Gunung Vulkani: A3'
        }],

      wood: [{
          monster: 'Shell Mask',
          lv: '27',
          element: 'Bumi',
          hp: 'idk',
          exp: 'idk',
          map: 'Gunung Nisel: Lereng'
        },
        {
          monster: 'Machina Tumbuhan',
          lv: '95',
          element: 'Bumi',
          hp: 'idk',
            exp: 'idk',
            map: 'Pembuangan Peligro'
        }, {
          monster: 'Pohon Parasit',
          lv: '152',
          element: 'Bumi',
          hp: 'idk',
          exp: '94',
          map: 'Distrik Altolae'
        }, {
          monster: '*Ivy*',
          lv: '*150*',
          element: '*Bumi*',
          hp: '*idk*',
          exp: '*195*',
          map: '*Kuil Naga Kegelapan: A2*'
        }],

        beast: [{
          monster: 'Beak',
          lv: '18',
          element: 'Angin',
          hp: 'idk',
          exp: 'idk',
          map: 'Kuil Runtuh: A1'
        }, {
          monster: 'Parasitized Dog',
          lv: '57',
          element: 'Gelap',
          hp: 'idk',
          exp: 'idk',
          map: 'Kota Hilang: Alun-Alun'
        }, {
          monster: '*Venomsch*',
          lv: '*112*',
          element: '*Air*',
          hp: '*7000*',
          exp: '*dk*',
          map: '*Saluran Bawah Tanah Ultimea: Selatan*'
        }, {
          monster: '*Underground Nemico*',
          lv: '*109*',
          element: '*Angin*',
          hp: '*idk*',
          exp: '*idk*',
          map: '*Saluran Bawah Tanah Ultimea: Tenggara*'
        }],

        medic: [{
          monster: '*Jelly Ungu*',
          lv: '*110*',
          element: '*Gelap*',
          hp: '*7000*',
          exp: '*128*',
          map: '*Saluran Bawah Tanah Ultimea: Tenggara*'
        }, {
          monster: 'Acernix',
          lv: '138',
          element: 'Air',
          hp: '4000',
          exp: '197',
          map: 'Taman Es & Salju'
        }, {
          monster: 'Lyark Spesialis',
          lv: '119',
          element: 'Gelap',
          hp: '15000',
          exp: '286',
          map: 'Laboratorium Brahe: Gedung 2'
        }]
    },
  }

  /*Random No.*/
  const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`
}


    // Push Message To Console
    let argsLog = budy.length > 30 ? `${q.substring(0, 30)}...` : budy;

    if (isCmd2 && !m.isGroup) {
      console.log(chalk.black(chalk.bgWhite("[ LOGS ]")), color(argsLog, "turquoise"), chalk.magenta("From"), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`));
    } else if (isCmd2 && m.isGroup) {
      console.log(
        chalk.black(chalk.bgWhite("[ LOGS ]")),
        color(argsLog, "turquoise"),
        chalk.magenta("From"),
        chalk.green(pushname),
        chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`),
        chalk.blueBright("IN"),
        chalk.green(groupName)
      );
    }

    if (isCmd2) {
      switch (command) {
        case "help":
        case "menu":
          m.reply(`*Vertibus Toram DB*
            
*(ChatGPT)*
Cmd: ${prefix}ai 
Tanyakan apa saja kepada AI. 

*(DALL-E)*
Cmd: ${prefix}img
Membuat gambar dari teks

*(Toram Online DB)*
Cmd: ${prefix}lvl
List Leveling character

Cmd: ${prefix}farming
List recommend farming
*(Dalam Pengembangan)*

Cmd: ${prefix}farming 
Saran farming dari Bot
*(Dalam Pengembangan)*

*(OTHER)*
Cmd: ${prefix}sticker
Membuat sticker dari gambar yg dikirim

Cmd: ${prefix}smeme
Membuat sticker dengan teks
`)
          break;
        case "ai": case "openai": 
          try {
            if (setting.keyopenai === "ISI_APIKEY_OPENAI_DISINI") return reply("Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file key.json\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys");
            if (!text) return reply(`Chat dengan AI.\n\nContoh:\n${prefix}${command} Apa itu resesi`);
            const configuration = new Configuration({
              apiKey: setting.keyopenai,
            });
            const openai = new OpenAIApi(configuration);

            const response = await openai.createCompletion({
              model: "text-davinci-003",
              prompt: text,
              temperature: 0.3,
              max_tokens: 2000,
              top_p: 1.0,
              frequency_penalty: 0.0,
              presence_penalty: 0.0,
            });
            m.reply(`${response.data.choices[0].text}`);
          } catch (err) {
            console.log(err);
            m.reply("Maaf, sepertinya ada yang error :" + err);
          }
          break;
        case "img": case "ai-img": case "image": case "images":
          try {
            if (setting.keyopenai === "ISI_APIKEY_OPENAI_DISINI") return reply("Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file key.json\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys");
            if (!text) return reply(`Membuat gambar dari AI.\n\nContoh:\n${prefix}${command} Wooden house on snow mountain`);
            const configuration = new Configuration({
              apiKey: setting.keyopenai,
            });
            const openai = new OpenAIApi(configuration);
            const response = await openai.createImage({
              prompt: text,
              n: 1,
              size: "512x512",
            });
            //console.log(response.data.data[0].url)
            client.sendImage(from, response.data.data[0].url, text, mek);
          } catch (err) {
            console.log(err);
            m.reply("Maaf, sepertinya ada yang error :"+ err);
          }
          break;

          case 'lv':
          case 'lvl':
          case 'lvling' : 
          case 'leveling':
        let lvl = q.split('|')[0]
        let bexp = q.split('|')[1]
         if (!lvl) return m.reply(`cara penggunaan ${prefix + command} level|bonus exp`)
           if (!bexp) return m.reply(`cara penggunaan ${prefix + command} level|bonus exp`)
          if( isNaN(lvl)) return m.reply(`cara penggunaan ${prefix + command} level|bonus exp`)
            if( isNaN(bexp)) return m.reply(`cara penggunaan ${prefix + command} level|bonus exp`)
        

    axios.get(`https://toram-id.info/leveling?level=${lvl}&bonusexp=${bexp}&range=5`)
  .then((response) => {
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);
      const array = []
      $('tr.text-danger').each(function(i, elem) {
        array[i] = {
          boss: $(this).find('.px-2 > div').text().trim(),
          location: $(this).find('.text-muted > a').text().trim(),
          exp: $(this).find('.text-primary').text().trim()
        }
      });
      let gb = `*Leveling lvl ${lvl} dengan bonus exp ${bexp}*\n`
      for(let i = 0; i < array.length; i++) {
          gb += `-------------------------------\nBoss: ${array[i].boss}\nLocation: ${array[i].location}\nEXP: ${array[i].exp}\n`
      }
      console.log(gb)
      client.sendText(from, gb, mek)
      console.log(array[0])
    }
  })
  break;

  case 'farm':
  case 'farming':
  if (!text) return reply("Mau farming apa?\n\n/logam\n/kayu\n/fauna\n/obat\n/kain _(Comming Soon)_\n/lainnya _(Comming Soon)_")
    if(text == "logam") {
      db = `*Berikut ini list Spot Farming ${text} yang saya ketahui:*\n`
      for(let i = 0; i < mobs.mats.metal.length; i++) {
         db += `\n------------------\nMonster: ${mobs.mats.metal[i].monster}\nLevel: ${mobs.mats.metal[i].lv}\nElement: ${mobs.mats.metal[i].element}\nHP: ${mobs.mats.metal[i].hp}\nEXP: ${mobs.mats.metal[i].exp}\nLokasi: ${mobs.mats.metal[i].map}`
      }
      client.sendText(from, db, mek)
    } else if(text == "kayu") {
      db = `*Berikut ini list Spot Farming ${text} yang saya ketahui:*\n`
      for(let i = 0; i < mobs.mats.wood.length; i++) {
         db += `\n------------------\nMonster: ${mobs.mats.wood[i].monster}\nLevel: ${mobs.mats.wood[i].lv}\nElement: ${mobs.mats.wood[i].element}\nHP: ${mobs.mats.wood[i].hp}\nEXP: ${mobs.mats.wood[i].exp}\nLokasi: ${mobs.mats.wood[i].map}`
      }
      client.sendText(from, db, mek)
    } else if(text == 'fauna') {
      db = `*Berikut ini list Spot Farming ${text} yang saya ketahui:*\n`
      for(let i = 0; i < mobs.mats.beast.length; i++) {
         db += `\n------------------\nMonster: ${mobs.mats.beast[i].monster}\nLevel: ${mobs.mats.beast[i].lv}\nElement: ${mobs.mats.beast[i].element}\nHP: ${mobs.mats.beast[i].hp}\nEXP: ${mobs.mats.beast[i].exp}\nLokasi: ${mobs.mats.beast[i].map}`
      }
      client.sendText(from, db, mek)
    } else if(text == 'obat') {
      db = `*Berikut ini list Spot Farming ${text} yang saya ketahui:*\n`
      for(let i = 0; i < mobs.mats.medic.length; i++) {
         db += `\n------------------\nMonster: ${mobs.mats.medic[i].monster}\nLevel: ${mobs.mats.medic[i].lv}\nElement: ${mobs.mats.medic[i].element}\nHP: ${mobs.mats.medic[i].hp}\nEXP: ${mobs.mats.medic[i].exp}\nLokasi: ${mobs.mats.medic[i].map}`
      }
      client.sendText(from, db, mek)
    }
    break;

  case 'logam':
  case 'metal':
     db = `*Berikut ini list Spot Farming ${text} yang saya ketahui:*\n`
      for(let i = 0; i < mobs.mats.metal.length; i++) {
         db += `\n------------------\nMonster: ${mobs.mats.metal[i].monster}\nLevel: ${mobs.mats.metal[i].lv}\nElement: ${mobs.mats.metal[i].element}\nHP: ${mobs.mats.metal[i].hp}\nEXP: ${mobs.mats.metal[i].exp}\nLokasi: ${mobs.mats.metal[i].map}`
      }
      client.sendText(from, db, mek)
  break;

  case 'kayu':
  case 'wood':
     db = `*Berikut ini list Spot Farming ${text} yang saya ketahui:*\n`
      for(let i = 0; i < mobs.mats.wood.length; i++) {
         db += `\n------------------\nMonster: ${mobs.mats.wood[i].monster}\nLevel: ${mobs.mats.wood[i].lv}\nElement: ${mobs.mats.wood[i].element}\nHP: ${mobs.mats.wood[i].hp}\nEXP: ${mobs.mats.wood[i].exp}\nLokasi: ${mobs.mats.wood[i].map}`
      }
      client.sendText(from, db, mek)
  break;

case 'fauna':
  case 'beast':
    db = `*Berikut ini list Spot Farming ${text} yang saya ketahui:*\n`
      for(let i = 0; i < mobs.mats.beast.length; i++) {
         db += `\n------------------\nMonster: ${mobs.mats.beast[i].monster}\nLevel: ${mobs.mats.beast[i].lv}\nElement: ${mobs.mats.beast[i].element}\nHP: ${mobs.mats.beast[i].hp}\nEXP: ${mobs.mats.beast[i].exp}\nLokasi: ${mobs.mats.beast[i].map}`
      }
      client.sendText(from, db, mek)
  break;

  case 'obat':
  case 'medic':
  case 'medicine':
     db = `*Berikut ini list Spot Farming ${text} yang saya ketahui:*\n`
      for(let i = 0; i < mobs.mats.medic.length; i++) {
         db += `\n------------------\nMonster: ${mobs.mats.medic[i].monster}\nLevel: ${mobs.mats.medic[i].lv}\nElement: ${mobs.mats.medic[i].element}\nHP: ${mobs.mats.medic[i].hp}\nEXP: ${mobs.mats.medic[i].exp}\nLokasi: ${mobs.mats.medic[i].map}`
      }
      client.sendText(from, db, mek)
  break;

  case 'sticker': case 's': case 'stickergif': case 'sgif': 
     if(q.split('|')[0]) {
      packName = q.split('|')[0]
     }
     if(q.split('|')[1]) {
      author = q.split('|')[1]
     }
             if (/image/.test(mime)) {

                  let media = await client.downloadMediaMessage(qms)
                  let encmedia = await client.sendImageAsSticker(from, media, m, { packname: packName, author: author })
                 await fs.unlinkSync(encmedia)
             } else if (/video/.test(mime)) {

                  if (qms.seconds > 11) return reply('Maksimal 10 detik!')
                 let media = await client.downloadMediaMessage(qms)
                 let encmedia = await client.sendVideoAsSticker(from, media, m, { packname: packName, author: author })
                  await fs.unlinkSync(encmedia)
              } else {
                 m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
                 }
              
              break;

case 'smeme': case 'stickmeme':
  if (!text) return m.reply(`cara penggunaan ${prefix + command} teks atas|teks bawah`)
top = q.split('|')[0]
bottom = q.split('|')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && !m.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(m).replace('quotedM','m')).message.extendedTextMessage.contextInfo : m
ranp = getRandom('54')
owgi = await  client.downloadAndSaveMediaMessage(qms,ranp)
anu = await imgbb("29f0fec470786b62364c5072718e41be", owgi)
teks = `${anu.display_url}`
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
client.sendImageAsSticker(from, `${anu1}`, m, { packname: packName, author: author })
fs.unlinkSync(owgi)
} else {
m.reply('Gunakan foto/stiker!')
}
break

        default: {
          if (isCmd2 && budy.toLowerCase() != undefined) {
            if (m.chat.endsWith("broadcast")) return;
            if (m.isBaileys) return;
            if (!budy.toLowerCase()) return;
            if (argsLog || (isCmd2 && !m.isGroup)) {
              // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("tidak tersedia", "turquoise"));
            } else if (argsLog || (isCmd2 && m.isGroup)) {
              // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("tidak tersedia", "turquoise"));
            }
          }
        }
      }
    }
  } catch (err) {
    m.reply(util.format(err));
  }
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
