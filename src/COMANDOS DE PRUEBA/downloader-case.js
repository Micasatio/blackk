import { savefrom, instagramStalk, googleImage, mediafiredl, pinterest, youtubeSearch, wallpaper, wallpaperv2, youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import { facebookDl } from './scraper.js'
import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
import { sizeFormatter } from 'human-readable'
import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import instagramGetUrl from 'fg-ig'
import axios from 'axios'
import hx from 'hxz-api' 
import fs from 'fs'
import yts from 'yt-search'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let limit = 80
let formatSize = sizeFormatter({std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B` })

let handler = async (m, { text, conn, args, usedPrefix, command }) => {
let type = (command).toLowerCase()
switch (type) {
        
case 'facebookdownloder': case 'facebookdl': case 'fb': case 'fbdl': case 'facebook':
if (!args[0]) throw `*[โ๐๐๐๐โ] ๐ธ๐ฝ๐ถ๐๐ด๐๐ด ๐๐ฝ ๐ด๐ฝ๐ป๐ฐ๐ฒ๐ด ๐ณ๐ด ๐ต๐ฐ๐ฒ๐ด๐ฑ๐พ๐พ๐บ, ๐ด๐น๐ด๐ผ๐ฟ๐ป๐พ: ${usedPrefix + command}* https://www.facebook.com/HolaSoySkull/videos/982580549178886/?app=fbl`
try {
m.reply(`*[โ] แดแดsแดแดสษขแดษดแดแด sแด แด ษชแดแดแด, แดษขแดแดสแดแด แดษด แดแดแดแดษดแดแด แดแดส าแดแด แดส, แดsแดแด แดสแดแดแดsแด แดแดแดแดแด แดแดสแดส แดษดแดสแด 2 ส 10 แดษชษดแดแดแดs แดแดแดแดษดแดษชแดษดแดแด แดแด สแด แดแดสแดแดษชแดษด แดแดส แด ษชแดแดแด...*`)
let res = await facebookDl(args[0]).catch(async _ => await savefrom(args[0])).catch(_ => null)
let url = res?.url?.[0]?.url || res?.url?.[1]?.url || res?.['720p'] || res?.['360p']
conn.sendMessage(m.chat, { video: { url }, caption: res?.meta?.title || '*๐ฐ๐๐๐ธ ๐ด๐๐๐ฐ ๐๐ ๐๐ธ๐ณ๐ด๐พ*' }, { quoted: m })
} catch (e) {
m.reply('*[โ๐๐๐๐โ] ๐ด๐๐๐พ๐, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐๐๐ด๐ป๐๐ฐ ๐ฐ ๐ธ๐ฝ๐๐ด๐ฝ๐๐ฐ๐๐ป๐พ*\n\n*- ๐ฒ๐พ๐๐๐พ๐ฑ๐พ๐๐ด ๐๐๐ด ๐ด๐ป ๐ด๐ฝ๐ป๐ฐ๐ฒ๐ด ๐๐ด๐ฐ ๐๐ธ๐ผ๐ธ๐ป๐ฐ๐ ๐ฐ:*\n*โ* https://www.facebook.com/HolaSoySkull/videos/982580549178886/?app=fbl')} 
break 
        
case 'gdrive':
if (!args[0]) throw '*[โ๐๐๐๐โ] ๐ด๐๐๐พ๐, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐๐๐ด๐ป๐๐ฐ ๐ฐ ๐ธ๐ฝ๐๐ด๐ฝ๐๐ฐ๐๐ป๐พ*\n\n*- ๐ฒ๐พ๐๐๐พ๐ฑ๐พ๐๐ด ๐๐๐ด ๐ด๐ป ๐ด๐ฝ๐ป๐ฐ๐ฒ๐ด ๐๐ด๐ฐ ๐๐ธ๐ผ๐ธ๐ป๐ฐ๐ ๐ฐ:*\n*โ https://drive.google.com/file/d/1dmHlx1WTbH5yZoNa_ln325q5dxLn1QHU/view*' 
try {
GDriveDl(args[0]).then(async (res) => {
conn.reply(m.chat, '๐ท๐๐ ๐๐๐๐๐๐๐๐ ๐ ๐ข ๐๐๐โ๐๐ฃ๐, ๐๐ ๐๐๐๐ ๐ข๐ ๐๐๐๐๐๐ก๐...\n\n๐ธ๐ ๐ก๐๐๐๐๐ ๐๐ ๐๐ ๐๐๐๐ ๐๐ข๐๐๐ ๐ฃ๐๐๐๐๐ ๐๐๐๐๐๐๐๐๐๐๐ ๐๐๐ ๐๐๐ ๐ ๐๐๐ ๐๐๐โ๐๐ฃ๐, ๐ ๐ ๐๐ ๐๐๐ ๐ ๐ ๐ข๐๐๐๐ ๐๐๐  100 ๐๐ต ๐๐ข๐๐๐ ๐๐ข๐ ๐ ๐ข ๐๐๐โ๐๐ฃ๐ ๐๐ ๐ ๐๐ ๐๐๐ฃ๐๐๐๐', m)
if (!res) throw res
conn.sendFile(m.chat, res.downloadUrl, res.fileName, '', m, null, { mimetype: res.mimetype, asDocument: true })})
} catch {
m.reply('*[โ๐๐๐๐โ] ๐ด๐๐๐พ๐, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐๐๐ด๐ป๐๐ฐ ๐ฐ ๐ธ๐ฝ๐๐ด๐ฝ๐๐ฐ๐๐ป๐พ*\n\n*- ๐ฒ๐พ๐๐๐พ๐ฑ๐พ๐๐ด ๐๐๐ด ๐ด๐ป ๐ด๐ฝ๐ป๐ฐ๐ฒ๐ด ๐๐ด๐ฐ ๐๐ธ๐ผ๐ธ๐ป๐ฐ๐ ๐ฐ:*\n*โ https://drive.google.com/file/d/1dmHlx1WTbH5yZoNa_ln325q5dxLn1QHU/view*')}
break     
        
case 'gitclone':
if (!args[0]) throw `*[โ๐๐๐๐โ] ๐ธ๐ฝ๐ถ๐๐ด๐๐ด ๐๐ฝ ๐ด๐ฝ๐ป๐ฐ๐ฒ๐ด ๐ณ๐ด ๐ถ๐ธ๐๐ท๐๐ฑ, ๐ด๐น๐ด๐ผ๐ฟ๐ป๐พ: ${usedPrefix + command} https://github.com/BrunoSobrino/TheMystic-Bot-MD*`
if (!regex.test(args[0])) throw '*[โ๐๐๐๐โ] ๐ป๐ธ๐ฝ๐บ ๐ธ๐ฝ๐ฒ๐พ๐๐๐ด๐ฒ๐๐พ!*'
try {
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
m.reply(`*[โ๐๐๐๐โ] ๐ด๐๐ฟ๐ด๐๐ด ๐๐ฝ ๐ผ๐พ๐ผ๐ด๐ฝ๐๐พ ๐ด๐ฝ ๐ป๐พ ๐๐๐ด ๐ด๐ฝ๐๐ธ๐พ ๐๐ ๐ฐ๐๐ฒ๐ท๐ธ๐๐พ, ๐๐ธ ๐ด๐๐๐ด ๐ฝ๐พ ๐ด๐ ๐ด๐ฝ๐๐ธ๐ฐ๐ณ๐พ ๐ฟ๐๐ด๐ณ๐ด ๐ณ๐ด๐ฑ๐ด๐๐๐ด ๐ฐ ๐๐๐ด ๐ด๐ป ๐๐ด๐ฟ๐พ๐๐ธ๐๐พ๐๐ธ๐พ ๐ด๐ ๐ผ๐๐ ๐ฟ๐ด๐๐ฐ๐ณ๐พ*`)
conn.sendFile(m.chat, url, filename, null, m)
} catch {
m.reply('*[โ๐๐๐๐โ] ๐ด๐๐๐พ๐, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐๐๐ด๐ป๐๐ฐ ๐ฐ ๐ธ๐ฝ๐๐ด๐ฝ๐๐ฐ๐๐ป๐พ*')}
break  
        
case 'instagram': case 'instagramdl': case 'ig': case 'igdl':
if (!(args[0])) throw `*[โ๐๐๐๐โ] ๐ธ๐ฝ๐ถ๐๐ด๐๐ด ๐๐ฝ ๐ด๐ฝ๐ป๐ฐ๐ฒ๐ด ๐ณ๐ด ๐ธ๐ฝ๐๐๐ฐ๐ถ๐๐ฐ๐ผ, ๐ด๐น๐ด๐ผ๐ฟ๐ป๐พ: ${usedPrefix + command} https://www.instagram.com/reel/Cc0NuYBg8CR/?utm_source=ig_web_copy_link*`
try {
let results = (await instagramGetUrl(args[0])).url_list[0]
let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${results}`)).text()
let txt = `๐ *Url:* ${shortUrl}`.trim()
await conn.sendFile(m.chat, results, 'error.mp4', txt, m)
} catch {
m.reply('*[โ๐๐๐๐โ] ๐ด๐๐๐พ๐, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐๐๐ด๐ป๐๐ฐ ๐ฐ ๐ธ๐ฝ๐๐ด๐ฝ๐๐ฐ๐๐ป๐พ*')}
break                         

case 'igstalk': 
if (!args[0]) throw `*[โ๐๐๐๐โ] ๐ธ๐ฝ๐ถ๐๐ด๐๐ด ๐ด๐ป ๐ฝ๐พ๐ผ๐ฑ๐๐ด ๐ณ๐ด ๐๐๐๐ฐ๐๐ธ๐พ ๐ณ๐ด ๐๐ฝ ๐๐๐๐ฐ๐๐ธ๐พ ๐ณ๐ด ๐ธ๐ฝ๐๐๐ฐ๐ถ๐๐ฐ๐ผ, ๐ด๐น๐ด๐ผ๐ฟ๐ป๐พ: ${usedPrefix + command} luisitocomunica*`
try {
const { username, name, description, followersH, followingH, postsH } = await instagramStalk(args[0])
m.reply(`
${name} *(${username})*
https://instagram.com/${username.replace(/^@/, '')}
*${followersH}* ๐๐ด๐ถ๐๐ธ๐ณ๐พ๐๐ด๐
*${followingH}* ๐๐ด๐ถ๐๐ธ๐ณ๐พ๐
*${postsH}* ๐ฟ๐๐ฑ๐ป๐ธ๐ฒ๐ฐ๐ฒ๐ธ๐พ๐ฝ๐ด๐
*๐ฑ๐ธ๐พ:* ${description}
`.trim())
} catch {
m.reply('*[โ๐๐๐๐โ] ๐ด๐๐๐พ๐, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐๐๐ด๐ป๐๐ฐ ๐ฐ ๐ธ๐ฝ๐๐ด๐ฝ๐๐ฐ๐๐ป๐พ*')}
break                          
        
case 'igstory': case 'ighistoria': 
if (!text) throw `*[โ๐๐๐๐โ] ๐ธ๐ฝ๐ถ๐๐ด๐๐ด ๐ด๐ป ๐ฝ๐พ๐ผ๐ฑ๐๐ด ๐ณ๐ด ๐๐ฝ ๐๐๐๐ฐ๐๐ธ๐พ ๐ณ๐ด ๐ธ๐ฝ๐๐๐ฐ๐ถ๐๐ฐ๐ผ*\n\n*๐ด๐น๐ด๐ผ๐ฟ๐ป๐พ:*\n*${usedPrefix + command} luisitocomunica*`        
try {
hx.igstory(text).then(async (result) => {
for (let i of result.medias) {
if (i.url.includes("mp4")) {            
conn.sendFile(m.chat, i.url, 'igstory.mp4', null, m)
} else {     
conn.sendFile(m.chat, i.url, '', '', m)}}})
} catch {
m.reply('*[โ๐๐๐๐โ] ๐ด๐๐๐พ๐, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐๐๐ด๐ป๐๐ฐ ๐ฐ ๐ธ๐ฝ๐๐ด๐ฝ๐๐ฐ๐๐ป๐พ*')}
break    
        
case 'gimage': case 'image': case 'imagen': 
if (!text) throw `*[โ๐๐๐๐โ] ๐ด๐น๐ด๐ผ๐ฟ๐ป๐พ ๐ณ๐ด ๐๐๐พ ๐ณ๐ด๐ป ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ ${usedPrefix + command} Minecraft*`
try {
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendHydrated(m.chat, `๐ *๐๐ด๐๐๐ป๐๐ฐ๐ณ๐พ ๐ณ๐ด:* ${text}
๐ *๐ฑ๐๐ฒ๐ฐ๐ณ๐พ๐:* Google
`, author, link, link, '๐ ๐๐๐ป', null, null, [
['๐ ๐๐ธ๐ถ๐๐ธ๐ด๐ฝ๐๐ด ๐', `/imagen ${text}`]
], m)
} catch {
m.reply('*[โ๐๐๐๐โ] ๐ด๐๐๐พ๐, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐๐๐ด๐ป๐๐ฐ ๐ฐ ๐ธ๐ฝ๐๐ด๐ฝ๐๐ฐ๐๐ป๐พ*')}
break   
        
case 'mediafire': case 'mediafiredl': case 'dlmediafire': 
if (!args[0]) throw `*[โ๐๐๐๐โ] ๐ธ๐ฝ๐ถ๐๐ด๐๐ด ๐๐ฝ ๐ด๐ฝ๐ป๐ฐ๐ฒ๐ด ๐๐ฐ๐ป๐ธ๐ณ๐พ ๐ณ๐ด ๐ผ๐ด๐ณ๐ธ๐ฐ๐ต๐ธ๐๐ด, ๐ด๐น๐ด๐ผ๐ฟ๐ป๐พ: ${usedPrefix + command} https://www.mediafire.com/file/pbabuzyc7i8ord5/TheMystic-Bot-MD-master_%25285%2529.zip/file*`
try {
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `
*๐ฝ๐พ๐ผ๐ฑ๐๐ด:* ${filename}
*๐ฟ๐ด๐๐พ:* ${filesizeH}
*๐๐ธ๐ฟ๐พ:* ${ext}
*โณ ๐ด๐๐ฟ๐ด๐๐ด ๐ด๐ฝ ๐ป๐พ ๐๐๐ด ๐ด๐ฝ๐๐ธ๐พ ๐๐ ๐ฐ๐๐ฒ๐ท๐ธ๐๐พ. . . .* 
*_- ๐ฐ๐๐ฒ๐ท๐ธ๐๐พ๐ ๐ผ๐ฐ๐๐พ๐๐ด๐ ๐ฐ ๐ท00 ๐ผ๐ฑ ๐ฟ๐๐ด๐ณ๐ด ๐๐๐ด ๐ฝ๐พ ๐๐ด๐ฐ๐ฝ ๐ด๐ฝ๐๐ธ๐ฐ๐ณ๐พ๐_* 
`.trim()
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: caption, contextInfo: { externalAdReply: {title: '๐ณ๐ด๐๐ฒ๐ฐ๐๐ถ๐ฐ๐ ๐ณ๐ด ๐ผ๐ด๐ณ๐ธ๐ฐ๐ต๐ธ๐๐ด', body: 'สส แดสแด แดสsแดษชแด ๏นฃ สแดแด', thumbnail: imagen1, sourceUrl: 'https://github.com/BrunoSobrino/TheMystic-Bot-MD' }, mentionedJid: [m.sender]}}}, { quoted: m })
} catch {
m.reply('*[โ๐๐๐๐โ] ๐ด๐๐๐พ๐, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐๐๐ด๐ป๐๐ฐ ๐ฐ ๐ธ๐ฝ๐๐ด๐ฝ๐๐ฐ๐๐ป๐พ*\n\n*- ๐ฒ๐พ๐๐๐พ๐ฑ๐พ๐๐ด ๐๐๐ด ๐ด๐ป ๐ด๐ฝ๐ป๐ฐ๐ฒ๐ด ๐๐ด๐ฐ ๐๐ธ๐ผ๐ธ๐ป๐ฐ๐ ๐ฐ:*\n*โ https://www.mediafire.com/file/pbabuzyc7i8ord5/TheMystic-Bot-MD-master_%25285%2529.zip/file*')}
break
 
case 'pinterest': case 'pinterest2':         
if (!text) throw `*[โ๐๐๐๐โ] ๐ด๐น๐ด๐ผ๐ฟ๐ป๐พ ๐ณ๐ด ๐๐๐พ ๐ณ๐ด๐ป ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ ${usedPrefix + command} Minecraft*`
try {
const json = await pinterest(text)
conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `*๐๐ด๐๐๐ป๐๐ฐ๐ณ๐พ๐ ๐ณ๐ด ๐ป๐ฐ ๐ฑ๐๐๐๐๐ด๐ณ๐ฐ*
${text}
`.trim(), m)  
} catch {
m.reply('*[โ๐๐๐๐โ] ๐ด๐๐๐พ๐, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐๐๐ด๐ป๐๐ฐ ๐ฐ ๐ธ๐ฝ๐๐ด๐ฝ๐๐ฐ๐๐ป๐พ*\n\n*- ๐ฒ๐พ๐๐๐พ๐ฑ๐พ๐๐ด ๐๐๐ด ๐ด๐ป ๐ด๐ฝ๐ป๐ฐ๐ฒ๐ด ๐๐ด๐ฐ ๐๐ธ๐ผ๐ธ๐ป๐ฐ๐ ๐ฐ:*\n*โ https://www.mediafire.com/file/pbabuzyc7i8ord5/TheMystic-Bot-MD-master_%25285%2529.zip/file*')}        
break     
        
case 'play': case 'play2':         
if (!text) throw `*[โ๐๐๐๐โ] ๐ฝ๐พ๐ผ๐ฑ๐๐ด ๐ณ๐ด ๐ป๐ฐ ๐ฒ๐ฐ๐ฝ๐ฒ๐ธ๐พ๐ฝ ๐ต๐ฐ๐ป๐๐ฐ๐ฝ๐๐ด, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐ธ๐ฝ๐ถ๐๐ด๐๐ด ๐ด๐ป ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ ๐ผ๐ฐ๐ ๐ด๐ป ๐ฝ๐พ๐ผ๐ฑ๐๐ด/๐๐ธ๐๐๐ป๐พ ๐ณ๐ด ๐๐ฝ๐ฐ ๐ฒ๐ฐ๐ฝ๐ฒ๐ธ๐พ๐ฝ*\n\n*โโ ๐ด๐น๐ด๐ผ๐ฟ๐ป๐พ:*\n*${usedPrefix + command} Good Feeling - Flo Rida*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '*[โ๐๐๐๐โ] ๐ป๐พ ๐๐ธ๐ด๐ฝ๐๐พ, ๐ฝ๐พ ๐ฟ๐๐ณ๐ด ๐ด๐ฝ๐ฒ๐พ๐ฝ๐๐๐ฐ๐ ๐ด๐ป ๐ฐ๐๐ณ๐ธ๐พ/๐๐ธ๐ณ๐ด๐พ, ๐ธ๐ฝ๐๐ด๐ฝ๐๐ด ๐ฒ๐พ๐ฝ ๐พ๐๐๐พ ๐ฝ๐พ๐ผ๐ฑ๐๐ด/๐๐ธ๐๐๐ป๐พ*'
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
conn.sendHydrated(m.chat, `
๐ *๐๐ธ๐๐๐ป๐พ:* ${title}
๐ *๐ณ๐ด๐๐ฒ๐๐ธ๐ฟ๐ฒ๐ธ๐พ๐ฝ:* ${description}
๐ *๐ฟ๐๐ฑ๐ป๐ธ๐ฒ๐ฐ๐ณ๐พ:* ${publishedTime}
โ *๐ณ๐๐๐ฐ๐ฒ๐ธ๐พ๐ฝ:* ${durationH}
๐ *๐๐ธ๐๐๐ฐ๐:* ${viewH}
`.trim(), author, thumbnail, `${url}`, '๐๐๐ป', null, null, [
['๐๐๐๐๐', `${usedPrefix}yta ${url}`],
['๐๐๐๐๐', `${usedPrefix}ytv ${url}`],
['๐๐๐ ๐๐๐๐๐๐๐๐๐๐', `${usedPrefix}playlist ${text}`]  
], m)
} catch {
m.reply('*[โ๐๐๐๐โ] ๐ด๐๐๐พ๐, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐๐๐ด๐ป๐๐ฐ ๐ฐ ๐ธ๐ฝ๐๐ด๐ฝ๐๐ฐ๐๐ป๐พ*')}
break 
        
case 'play3': case 'playdoc':         
if (!text) throw `*[โ๐๐๐๐โ] ๐ฝ๐พ๐ผ๐ฑ๐๐ด ๐ณ๐ด ๐ป๐ฐ ๐ฒ๐ฐ๐ฝ๐ฒ๐ธ๐พ๐ฝ ๐ต๐ฐ๐ป๐๐ฐ๐ฝ๐๐ด, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐ธ๐ฝ๐ถ๐๐ด๐๐ด ๐ด๐ป ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ ๐ผ๐ฐ๐ ๐ด๐ป ๐ฝ๐พ๐ผ๐ฑ๐๐ด/๐๐ธ๐๐๐ป๐พ ๐ณ๐ด ๐๐ฝ๐ฐ ๐ฒ๐ฐ๐ฝ๐ฒ๐ธ๐พ๐ฝ*\n\n*โโ ๐ด๐น๐ด๐ผ๐ฟ๐ป๐พ:*\n*${usedPrefix + command} Good Feeling - Flo Rida*`
let vid2 = (await youtubeSearch(text)).video[0]
if (!vid2) throw '*[โ๐๐๐๐โ] ๐ป๐พ ๐๐ธ๐ด๐ฝ๐๐พ, ๐ฝ๐พ ๐ฟ๐๐ณ๐ด ๐ด๐ฝ๐ฒ๐พ๐ฝ๐๐๐ฐ๐ ๐ด๐ป ๐ฐ๐๐ณ๐ธ๐พ/๐๐ธ๐ณ๐ด๐พ, ๐ธ๐ฝ๐๐ด๐ฝ๐๐ด ๐ฒ๐พ๐ฝ ๐พ๐๐๐พ ๐ฝ๐พ๐ผ๐ฑ๐๐ด/๐๐ธ๐๐๐ป๐พ*'
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid2
const url = 'https://www.youtube.com/watch?v=' + videoId
conn.sendHydrated(m.chat, `
*โโ ๐๐๐๐ ๐๐๐๐๐๐๐๐ โโ*
๐ *๐๐ธ๐๐๐ป๐พ:* ${title}
๐ *๐ณ๐ด๐๐ฒ๐๐ธ๐ฟ๐ฒ๐ธ๐พ๐ฝ:* ${description}
๐ *๐ฟ๐๐ฑ๐ป๐ธ๐ฒ๐ฐ๐ณ๐พ:* ${publishedTime}
โ *๐ณ๐๐๐ฐ๐ฒ๐ธ๐พ๐ฝ:* ${durationH}
๐ *๐๐ธ๐๐๐ฐ๐:* ${viewH}
`.trim(), author, thumbnail, `${url}`, '๐๐๐ป', null, null, [
['๐๐๐๐๐', `${usedPrefix}yta.2 ${url}`],
['๐๐๐๐๐', `${usedPrefix}ytv.2 ${url}`]
], m)
} catch {
m.reply('*[โ๐๐๐๐โ] ๐ด๐๐๐พ๐, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐๐๐ด๐ป๐๐ฐ ๐ฐ ๐ธ๐ฝ๐๐ด๐ฝ๐๐ฐ๐๐ป๐พ*')}
break      
        
case 'play.1': case 'play.2':         
if (!text) throw `[โ๐๐๐๐โ] ๐ฝ๐พ๐ผ๐ฑ๐๐ด ๐ณ๐ด ๐ป๐ฐ ๐ฒ๐ฐ๐ฝ๐ฒ๐ธ๐พ๐ฝ ๐ต๐ฐ๐ป๐๐ฐ๐ฝ๐๐ด, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐ธ๐ฝ๐ถ๐๐ด๐๐ด ๐ด๐ป ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ ๐ผ๐ฐ๐ ๐ด๐ป ๐ฝ๐พ๐ผ๐ฑ๐๐ด/๐๐ธ๐๐๐ป๐พ ๐พ ๐ด๐ฝ๐ป๐ฐ๐ฒ๐ด ๐ณ๐ด ๐ฐ๐ป๐ถ๐๐ฝ๐ฐ ๐ฒ๐ฐ๐ฝ๐ฒ๐ธ๐พ๐ฝ ๐พ ๐๐ธ๐ณ๐ด๐พ ๐ณ๐ด ๐๐พ๐๐๐๐ฑ๐ด\n\n*โโ ๐ด๐น๐ด๐ผ๐ฟ๐ป๐พ:\n#play.1 Good Feeling - Flo Rida*`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
if (command == 'play.1') {
conn.reply(m.chat, `*_โณSแด แดsแดแด แดสแดแดแดsแดษดแดแด Sแด แดแดแดษชแด...โณ_*`, m)  
let json = await res.json()
conn.sendFile(m.chat, json.result.audio, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play.2') {
conn.reply(m.chat, `*_โณSแด แดsแดแด แดสแดแดแดsแดษดแดแด Sแด แด ษชแดแดแด...โณ_*`, m)
let json = await res.json()
conn.sendFile(m.chat, json.result.video, 'error.mp4', `_๐๐ก๐ ๐๐ฒ๐ฌ๐ญ๐ข๐ - ๐๐จ๐ญ_`, m)}
} catch {
m.reply('*[โ๐๐๐๐โ] ๐ด๐๐๐พ๐, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐๐๐ด๐ป๐๐ฐ ๐ฐ ๐ธ๐ฝ๐๐ด๐ฝ๐๐ฐ๐๐ป๐พ*')}
break  
        
case 'playlist': case 'playlist2':         
if (!text) throw `*[โ๐๐๐๐โ] ๐ฝ๐พ๐ผ๐ฑ๐๐ด ๐ณ๐ด ๐ป๐ฐ ๐ฒ๐ฐ๐ฝ๐ฒ๐ธ๐พ๐ฝ ๐ต๐ฐ๐ป๐๐ฐ๐ฝ๐๐ด, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐ธ๐ฝ๐ถ๐๐ด๐๐ด ๐ด๐ป ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ ๐ผ๐ฐ๐ ๐ด๐ป ๐ฝ๐พ๐ผ๐ฑ๐๐ด/๐๐ธ๐๐๐ป๐พ ๐ณ๐ด ๐๐ฝ๐ฐ ๐ฒ๐ฐ๐ฝ๐ฒ๐ธ๐พ๐ฝ*\n\n*โโ ๐ด๐น๐ด๐ผ๐ฟ๐ป๐พ:*\n*${usedPrefix + command} Begin you*`    
try {
let search = await yts(args.join(" "))
let listSerch = []
let listSerch2 = []
let listSerch3 = []
let listSerch4 = []
let teskd = `๐๐ฎ๐ฌ๐ข๐๐ ๐ซ๐๐ฅ๐๐๐ข๐จ๐ง๐๐๐ ๐๐จ๐ง: ${args.join(" ")}`
const sections = [{
title: `|๏ผ๏ผ๏ผ๏ผ๏ผ{ ๏ผก๏ผต๏ผค๏ผฉ๏ผฏ }๏ผ๏ผ๏ผ๏ผ๏ผ|`,
rows: listSerch },
{              
title: `|๏ผ๏ผ๏ผ๏ผ๏ผ{ ๏ผถ๏ผฉ๏ผค๏ผฅ๏ผฏ }๏ผ๏ผ๏ผ๏ผ๏ผ|`,
rows: listSerch2 },
{              
title: `|๏ผ๏ผ{ ๏ผค๏ผฏ๏ผฃ๏ผต๏ผญ๏ผฅ๏ผฎ๏ผด๏ผฏ  ๏ผญ๏ผฐ๏ผ }๏ผ๏ผ|`,
rows: listSerch3 },
{              
title: `|๏ผ๏ผ{ ๏ผค๏ผฏ๏ผฃ๏ผต๏ผญ๏ผฅ๏ผฎ๏ผด๏ผฏ  ๏ผญ๏ผฐ๏ผ }๏ผ๏ผ|`,
rows: listSerch4 }]
const listMessage = {
text: teskd,
footer: '๐๐ฅ๐ข๐ฃ๐ ๐ฎ๐ง๐ ๐จ๐ฉ๐๐ข๐จ๐ง ๐ฒ ๐ฉ๐ซ๐๐๐ข๐จ๐ง๐ ๐๐ง๐ฏ๐ข๐๐ซ',
title: " ใ ๐ ๐จ๐ฆ๐๐๐ ๐ฅ๐๐๐๐๐๐ข๐ก๐๐๐ ใ",
buttonText: "[โฆ ๐๐๐๐๐๐๐๐๐๐ โฆ]",
sections}
for (let i of search.all) {
listSerch.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp3 ${i.url}`})
listSerch2.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp4 ${i.url}`})
listSerch3.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp3doc ${i.url}`})
listSerch4.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp4doc ${i.url}`})}
conn.sendMessage(m.chat, listMessage, { quoted: m })
} catch {
m.reply('*[โ๐๐๐๐โ] ๐ด๐๐๐พ๐, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐๐๐ด๐ป๐๐ฐ ๐ฐ ๐ธ๐ฝ๐๐ด๐ฝ๐๐ฐ๐๐ป๐พ ๐ฒ๐พ๐ฝ ๐พ๐๐๐พ ๐ฝ๐พ๐ผ๐ฑ๐๐ด ๐ณ๐ด ๐๐ฝ๐ฐ ๐ฒ๐ฐ๐ฝ๐ฒ๐ธ๐พ๐ฝ*')}
break      
        
case 'tiktokfoto': case 'pptiktok': 
if (!text) throw '*[โ๐๐๐๐โ] ๐ธ๐ฝ๐ถ๐๐ด๐๐ด ๐ด๐ป ๐ฝ๐พ๐ผ๐ฑ๐๐ด ๐ณ๐ด ๐๐๐๐ฐ๐๐ธ๐พ ๐ณ๐ด ๐๐ฝ ๐๐๐๐ฐ๐๐ธ๐พ ๐ณ๐ด ๐๐ธ๐บ๐๐พ๐บ*'
try {
let res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`
conn.sendFile(m.chat, res, 'error.jpg', `*[ โ ] ๐ฐ๐๐๐ธ ๐ด๐๐๐ฐ ๐ป๐ฐ ๐ต๐พ๐๐พ ๐ณ๐ด ๐ฟ๐ด๐๐ต๐ธ๐ป ๐ณ๐ด ${text}*`, m, false)
} catch {
m.reply('*[โ๐๐๐๐โ] ๐ด๐๐๐พ๐, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐๐๐ด๐ป๐๐ฐ ๐ฐ ๐ธ๐ฝ๐๐ด๐ฝ๐๐ฐ๐๐ป๐พ*')}
break  
        
case 'ringtone':
if (!text) throw `*[โ] ๐ธ๐ฝ๐ถ๐๐ด๐๐ด ๐ด๐ป ๐๐ด๐๐๐พ ๐๐๐ด ๐ณ๐ด๐๐ด๐ด ๐ฑ๐๐๐ฒ๐ฐ๐, ๐ด๐น๐ด๐ผ๐ฟ๐ป๐พ: ${usedPrefix + command} Hola*`
try {
let vn = await fetch(`https://fatiharridho.herokuapp.com/api/search/ringtone?query=${text}`)
let x = await vn.json()
conn.sendMessage(m.chat, { audio: { url: x.result[0].audio }, mimetype: 'audio/mp4' }, {quoted: m})
} catch {
m.reply('*[โ๐๐๐๐โ] ๐ด๐๐๐พ๐, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐๐๐ด๐ป๐๐ฐ ๐ฐ ๐ธ๐ฝ๐๐ด๐ฝ๐๐ฐ๐๐ป๐พ*')}
break        
        
case 'soundcloud': case 'cover':
if (!text) throw `*[โ๐๐๐๐โ] ๐ธ๐ฝ๐ถ๐๐ด๐๐ด ๐ด๐ป ๐ฝ๐พ๐ผ๐ฑ๐๐ด ๐ณ๐ด ๐ฐ๐ป๐ถ๐๐ฝ๐ฐ ๐ฒ๐ฐ๐ฝ๐ฒ๐ธ๐พ๐ฝ ๐ฐ ๐ฑ๐๐๐ฒ๐ฐ๐*`
try {
let res = await fetch(`https://hadi-api.herokuapp.com/api/soundcloud/play?query=${text}`)
let json = await res.json()
let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${json.result.download}`)).text()
let soundcloudt = `โโโโโฌ ๐๐๐๐๐๐๐๐๐๐ โญโโโโพโ\nโฌ\nโโฃโจ *๐๐ธ๐๐๐ป๐พ:* ${json.result.title}\nโด\nโฌ\nโโฃ๐ *๐๐๐ป ๐ณ๐ธ๐๐ด๐ฒ๐๐พ:* ${shortUrl}\nโด\n\n*- ๐ด๐๐๐๐๐๐๐ ๐๐๐๐๐๐...*\n\n_๏นซแดสแด แดสsแดษชแด ๏นฃ สแดแด_`
conn.sendFile(m.chat, json.result.thumbnail, '', soundcloudt, m)
conn.sendFile(m.chat, json.result.download, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch {
m.reply('*[โ๐๐๐๐โ] ๐ด๐๐๐พ๐, ๐ฝ๐พ ๐๐ด ๐ป๐พ๐ถ๐๐พ ๐ฑ๐๐๐ฒ๐ฐ๐ ๐ป๐ฐ ๐ฒ๐ฐ๐ฝ๐ฒ๐ธ๐พ๐ฝ ๐พ ๐ป๐ฐ ๐ฟ๐ฐ๐ถ๐ธ๐ฝ๐ฐ ๐ณ๐ด ๐ฐ๐๐๐ณ๐ฐ ๐ฟ๐ฐ๐๐ฐ ๐ฑ๐๐๐ฒ๐ฐ๐ ๐ป๐ฐ ๐ฒ๐ฐ๐ฝ๐ฒ๐ธ๐พ๐ฝ ๐ด๐๐๐ฐ ๐ฒ๐ฐ๐ธ๐ณ๐ฐ, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐๐๐ด๐ป๐๐ฐ ๐ฐ ๐ธ๐ฝ๐๐ด๐๐ฝ๐๐ฐ๐๐ป๐พ ๐ผ๐ฐ๐ ๐๐ฐ๐๐ณ๐ด*')}
break
        
case 'spotify': case 'music':
if (!text) throw `*[โ๐๐๐๐โ] ๐ธ๐ฝ๐ถ๐๐ด๐๐ด ๐ด๐ป ๐ฝ๐พ๐ผ๐ฑ๐๐ด ๐ณ๐ด ๐ฐ๐ป๐ถ๐๐ฝ๐ฐ ๐ฒ๐ฐ๐ฝ๐ฒ๐ธ๐พ๐ฝ ๐ฐ ๐ฑ๐๐๐ฒ๐ฐ๐*`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${text}`)
let json = await res.json()
let { link } = json.result[0]
let res2 = await fetch(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkeysapi}&url=${link}`)
let json2 = await res2.json()
let { thumbnail, title, artists, preview_url } = json2.result
let spotifyi = `โโโโโโโฌ ๐๐๐๐๐๐๐ โญโโโโโโพโ\nโฌ\nโโฃโจ *๐๐ธ๐๐๐ป๐พ:* ${title}\nโด\nโฌ\nโโฃ๐ฃ๏ธ *๐ฐ๐๐๐ธ๐๐๐ฐ:* ${artists}\nโด\nโฌ\nโโฃ๐ *๐๐๐ป*: ${link}\nโด\nโฌ\nโโฃ๐ *๐๐๐ป ๐ณ๐ด ๐ณ๐ด๐๐ฒ๐ฐ๐๐ถ๐ฐ:* ${preview_url}\nโด`
conn.sendFile(m.chat, thumbnail, 'error.jpg', spotifyi, m)
await conn.sendFile(m.chat, preview_url, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' }) 
} catch {
m.reply('*[โ๐๐๐๐โ] ๐ด๐๐๐พ๐, ๐ฝ๐พ ๐๐ด ๐ป๐พ๐ถ๐๐พ ๐ฑ๐๐๐ฒ๐ฐ๐ ๐ป๐ฐ ๐ฒ๐ฐ๐ฝ๐ฒ๐ธ๐พ๐ฝ ๐พ ๐ป๐ฐ ๐ฟ๐ฐ๐ถ๐ธ๐ฝ๐ฐ ๐ณ๐ด ๐ฐ๐๐๐ณ๐ฐ ๐ฟ๐ฐ๐๐ฐ ๐ฑ๐๐๐ฒ๐ฐ๐ ๐ป๐ฐ ๐ฒ๐ฐ๐ฝ๐ฒ๐ธ๐พ๐ฝ ๐ด๐๐๐ฐ ๐ฒ๐ฐ๐ธ๐ณ๐ฐ, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐๐๐ด๐ป๐๐ฐ ๐ฐ ๐ธ๐ฝ๐๐ด๐๐ฝ๐๐ฐ๐๐ป๐พ ๐ผ๐ฐ๐ ๐๐ฐ๐๐ณ๐ด*')}
break 
        
case 'stickerly': case 'stickerpack':
if (!text) throw `*[โ] ๐ด๐น๐ด๐ผ๐ฟ๐ป๐พ ๐ณ๐ด ๐๐๐พ ๐ณ๐ด๐ป ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ ${usedPrefix + command} https://getstickerpack.com/stickers/flork-memes-4-1*`
try {
let url = text
let res = await fetch(`https://api.zacros.my.id/downloader/stickerpack?link=${url}`)
let json = await res.json()
for (let data of (json.result || json)) {
const stikers = await sticker(false, data, global.packname, global.author)
conn.sendFile(m.chat, stikers, 'sticker.webp', '', m, { asSticker: true })}
} catch {
m.reply('*[โ๐๐๐๐โ] ๐ด๐๐๐พ๐, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐๐๐ด๐ป๐๐ฐ ๐ฐ ๐ธ๐ฝ๐๐ด๐ฝ๐๐ฐ๐๐ป๐พ*')}
break  
        
case 'tt': case 'tiktok': case 'ttdl': case 'tiktokdl': case 'ttnowm': case 'tiktoknowm': case 'tiktokaudio': case 'tiktokwm':
if (!text) throw `*[โ๐๐๐๐โ] ๐ด๐ฝ๐ป๐ฐ๐ฒ๐ด ๐ณ๐ด ๐๐ธ๐บ๐๐พ๐บ ๐ต๐ฐ๐ป๐๐ฐ๐ฝ๐๐ด, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐ธ๐ฝ๐ถ๐๐ด๐๐ด ๐ด๐ฝ ๐ด๐ฝ๐ป๐ฐ๐ฒ๐ด/๐ป๐ธ๐ฝ๐บ ๐ณ๐ด ๐ฐ๐ป๐ถ๐๐ฝ ๐๐ธ๐ณ๐ด๐พ ๐ณ๐ด ๐๐ธ๐บ๐๐พ๐บ*\n\n*โโ ๐ด๐น๐ด๐ผ๐ฟ๐ป๐พ:*\n*${usedPrefix + command} https://vm.tiktok.com/ZML42vSnn/*`
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw `*[โ๐๐๐๐โ] ๐ด๐ฝ๐ป๐ฐ๐ฒ๐ด ๐ณ๐ด ๐๐ธ๐บ๐๐พ๐บ ๐ธ๐ฝ๐ฒ๐พ๐๐๐ด๐ฒ๐๐พ, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐ธ๐ฝ๐ถ๐๐ด๐๐ด ๐ด๐ฝ ๐ด๐ฝ๐ป๐ฐ๐ฒ๐ด/๐ป๐ธ๐ฝ๐บ ๐ณ๐ด ๐ฐ๐ป๐ถ๐๐ฝ ๐๐ธ๐ณ๐ด๐พ ๐ณ๐ด ๐๐ธ๐บ๐๐พ๐บ*\n\n*โโ ๐ด๐น๐ด๐ผ๐ฟ๐ป๐พ:*\n*${usedPrefix + command} https://vm.tiktok.com/ZML42vSnn/*`
let texto = `*[โ] @${m.sender.split`@`[0]} ๐ฐ๐ถ๐๐ฐ๐๐ณ๐ด ๐๐ฝ ๐ผ๐พ๐ผ๐ด๐ฝ๐๐พ ๐ด๐ฝ ๐ป๐พ ๐๐๐ด ๐ด๐ฝ๐๐ธ๐พ ๐๐ ๐๐ธ๐ณ๐ด๐พ ๐ณ๐ด ๐๐ธ๐บ๐๐พ๐บ*`
try {
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: 'แดสแด แดสsแดษชแด - สแดแด', body: null, thumbnail: imagen1, sourceUrl: 'https://github.com/BrunoSobrino/TheMystic-Bot-MD' }, mentionedJid: [m.sender] }}}, { quoted: m })
let url = (await fetch(text)).url
let res = await (await fetch(`https://api2.musical.ly/aweme/v1/aweme/detail/?aweme_id=${url.split('?')[0].split('/')[5]}`)).json()
let data = res.aweme_detail.video.play_addr.url_list
let meta = await getInfo(url).catch(_ => {})
await conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })
let buttons = [{ buttonText: { displayText: '๐ฐ๐๐ณ๐ธ๐พ' }, buttonId: `${usedPrefix}tomp3` }]
conn.sendMessage(m.chat, { video: { url: data[data.length - 1] }, caption: '_แดสแด แดสsแดษชแด ๏นฃ สแดแด_', footer: await shortUrl(data[data.length - 1]), buttons }, { quoted: m })
} catch {
try {
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: 'แดสแด แดสsแดษชแด - สแดแด', body: null, thumbnail: imagen1, sourceUrl: 'https://github.com/BrunoSobrino/TheMystic-Bot-MD' }, mentionedJid: [m.sender] }}}, { quoted: m })
const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0]))
const url = video.no_watermark_raw || video.no_watermark || video.no_watermark_hd || video.with_watermark
await conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })
let buttons = [{ buttonText: { displayText: '๐ฐ๐๐ณ๐ธ๐พ' }, buttonId: `${usedPrefix}tomp3` }]
conn.sendMessage(m.chat, { video: { url: url}, caption: '_แดสแด แดสsแดษชแด ๏นฃ สแดแด_', footer: await shortUrl(url), buttons }, { quoted: m })
} catch {
await m.reply('*[โ๐๐๐๐โ] ๐ป๐พ ๐ป๐ฐ๐ผ๐ด๐ฝ๐๐พ, ๐พ๐ฒ๐๐๐๐ธ๐พ ๐๐ฝ ๐ด๐๐๐พ๐ ๐ฐ๐ป ๐ณ๐ด๐๐ฒ๐ฐ๐๐ถ๐ฐ๐ ๐๐ ๐๐ธ๐ณ๐ด๐พ, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐๐๐ด๐ป๐๐ฐ ๐ฐ ๐ธ๐ฝ๐๐ด๐ฝ๐๐ฐ๐๐ป๐พ*')  
}}    
break   
        
case 'tiktokstalk': case 'ttstalk':
if (!text) return conn.reply(m.chat, '*[โ๐๐๐๐โ] ๐ธ๐ฝ๐๐ด๐๐๐ด ๐ด๐ป ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ ๐ผ๐ฐ๐ ๐ด๐ป ๐ฝ๐พ๐ผ๐ฑ๐๐ด ๐ณ๐ด ๐๐๐๐ฐ๐๐ธ๐พ ๐ณ๐ด ๐๐ฝ ๐๐๐๐ฐ๐๐ธ๐พ ๐ณ๐ด ๐๐ธ๐บ๐๐พ๐บ*', m)
try {
let res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=${lolkeysapi}`)
let res2 = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`
let json = await res.json()
if (res.status !== 200) throw await res.text()
if (!json.status) throw json
let thumb = await (await fetch(json.result.user_picture)).buffer()
let Mystic = `*๐๐๐๐ฐ๐๐ธ๐พ:* ${json.result.username}\n*๐ฝ๐พ๐ผ๐ฑ๐๐ด:* ${json.result.nickname}\n*๐๐ด๐ถ๐๐ธ๐ณ๐พ๐๐ด๐:* ${json.result.followers}\n*๐๐ด๐ถ๐๐ธ๐ณ๐พ๐:* ${json.result.followings}\n*๐ป๐ธ๐บ๐ด๐:* ${json.result.likes}\n*๐๐ธ๐ณ๐ด๐พ๐:* ${json.result.video}\n*๐ณ๐ด๐๐ฒ๐๐ธ๐ฟ๐ฒ๐ธ๐พ๐ฝ:* ${json.result.bio}`.trim()
conn.sendFile(m.chat, res2, 'error.jpg', Mystic, m, false)
} catch {
m.reply('*[โ๐๐๐๐โ] ๐ด๐๐๐พ๐, ๐ฝ๐พ ๐๐ด ๐ด๐ฒ๐พ๐ฝ๐๐๐พ ๐ด๐ป ๐ฝ๐พ๐ผ๐ฑ๐๐ด ๐ณ๐ด ๐๐๐๐ฐ๐๐ธ๐พ ๐ธ๐ฝ๐ถ๐๐ด๐๐ฐ๐ณ๐พ*')}
break  
        
case 'wallpaper2': case 'wallpaper':
if (!text) throw `*[โ๐๐๐๐โ] ๐ด๐น๐ด๐ผ๐ฟ๐ป๐พ ๐ณ๐ด ๐๐๐พ ๐ณ๐ด๐ป ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ ${usedPrefix + command} Minecraft*`
try {
const res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text)
const img = res[Math.floor(Math.random() * res.length)]
conn.sendFile(m.chat, img, 'error.jpg', `*๐๐ด๐๐๐ป๐๐ฐ๐ณ๐พ ๐ณ๐ด ${text}*`, m)
} catch {
m.reply('*[โ๐๐๐๐โ] ๐ด๐๐๐พ๐, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐๐๐ด๐ป๐๐ฐ ๐ฐ ๐ธ๐ฝ๐๐ด๐ฝ๐๐ฐ๐๐ป๐พ*')}
break  
        
case 'ytmp3doc': case 'ytadoc': case 'ytmp3.2': case 'yta.2':
if (!args[0]) throw '*[โ๐๐๐๐โ] ๐ธ๐ฝ๐๐ด๐๐๐ด ๐ด๐ป ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ ๐ผ๐ฐ๐ ๐ด๐ป ๐ด๐ฝ๐ป๐ฐ๐ฒ๐ด / ๐ป๐ธ๐ฝ๐บ ๐ณ๐ด ๐๐ฝ ๐๐ธ๐ณ๐ด๐พ ๐ณ๐ด ๐๐พ๐๐๐๐ฑ๐ด*'
await m.reply(`*_โณSแด แดsแดแด แดสแดแดแดsแดษดแดแด Sแด แดแดแดษชแด...โณ_*\n\n*โ Sษช Sแด แดแดแดษชแด ษดแด แดs แดษดแด ษชแดแดแด, แดสแดแดสแด แดแดษด แดส แดแดแดแดษดแดแด #playdoc แด #play.2 แด #ytmp4doc โ*`)
try {
let q = '128kbps'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await conn.sendMessage(m.chat, { document: { url: dl_url}, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3`}, {quoted: m})
} catch {
await conn.reply(m.chat, '*[โ] ๐ด๐๐๐พ๐ ๐ฝ๐พ ๐ต๐๐ด ๐ฟ๐พ๐๐ธ๐ฑ๐ป๐ด ๐ณ๐ด๐๐ฒ๐ฐ๐๐ถ๐ฐ๐ ๐ด๐ป ๐ฐ๐๐ณ๐ธ๐พ*', m)}
break          
        

    
default:
}}
handler.command = /^(facebookdownloder|facebookdl|fb|fbdl|facebook|gdrive|gitclone|instagram|instagramdl|ig|igdl|igstalk|igstory|ighistoria|gimage|image|imagen|mediafire|mediafiredl|dlmediafire|pinterest|pinterest2|play|play2|play3|playdoc|play.1|play.2|playlist|playlist2|tiktokfoto|pptiktok|ringtone|soundcloud|cover|spotify|music|stickerly|stickerpack|tt|tiktok|ttdl|tiktokdl|tiktokaudio|tiktoknowm|ttnowm|tiktokwm|tiktokstalk|ttstalk|wallpaper2|wallpaper|ytmp3doc|ytadoc|ytmp3.2|yta.2)$/i
export default handler










async function GDriveDl(url) {
let id
if (!(url && url.match(/drive\.google/i))) throw 'Invalid URL'
id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1]
if (!id) throw 'ID Not Found'
let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
method: 'post',
headers: {
'accept-encoding': 'gzip, deflate, br',
'content-length': 0,
'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
'origin': 'https://drive.google.com',
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
'x-drive-first-party': 'DriveWebUi',
'x-json-requested': 'true'  }})
let { fileName, sizeBytes, downloadUrl } =  JSON.parse((await res.text()).slice(4))
if (!downloadUrl) throw 'Link Download Limit!'
let data = await fetch(downloadUrl)
if (data.status !== 200) throw data.statusText
return { downloadUrl, fileName, fileSize: formatSize(sizeBytes), mimetype: data.headers.get('content-type')}}

async function getInfo(url) {
let id = url.split('?')[0].split('/')
let res = await (await fetch(`https://www.tiktok.com/node/share/video/${id[3]}/${id[5]}/`)).json()
return res?.seoProps?.metaParams}
async function shortUrl(url) {
return await (await fetch(`https://tinyurl.com/api-create.php?url=${url}`)).text()}
