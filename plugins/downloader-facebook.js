import fetch from 'node-fetch'
import { facebookDl } from './scraper.js'
import { savefrom, facebookdl, facebookdlv2 } from '@bochilteam/scraper'
import fbDownloader from 'fb-downloader-scrapper'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!args[0]) throw `*[โ๐๐๐๐โ] ๐ธ๐ฝ๐ถ๐๐ด๐๐ด ๐๐ฝ ๐ด๐ฝ๐ป๐ฐ๐ฒ๐ด ๐ณ๐ด ๐ต๐ฐ๐ฒ๐ด๐ฑ๐พ๐พ๐บ, ๐ด๐น๐ด๐ผ๐ฟ๐ป๐พ: ${usedPrefix + command}* https://fb.watch/fOTpgn6UFQ/` 
if (!args[0].match(/www.facebook.com|fb.watch/g)) throw `*[โ๐๐๐๐โ] ๐ธ๐ฝ๐ถ๐๐ด๐๐ด ๐๐ฝ ๐ด๐ฝ๐ป๐ฐ๐ฒ๐ด ๐ณ๐ด ๐ต๐ฐ๐ฒ๐ด๐ฑ๐พ๐พ๐บ, ๐ด๐น๐ด๐ผ๐ฟ๐ป๐พ: ${usedPrefix + command}* https://fb.watch/fOTpgn6UFQ/`
try {
await m.reply(`*[โ] แดแดsแดแดสษขแดษดแดแด sแด แด ษชแดแดแด, แดษขแดแดสแดแด แดษด แดแดแดแดษดแดแด แดแดส าแดแด แดส, แดsแดแด แดสแดแดแดsแด แดแดแดแดแด แดแดสแดส แดษดแดสแด 2 ส 10 แดษชษดแดแดแดs แดแดแดแดษดแดษชแดษดแดแด แดแด สแด แดแดสแดแดษชแดษด แดแดส แด ษชแดแดแด...*`)
switch (command) {    
case "facebook": case "fb": case "facebookdl": case "fbdl":                
let res = await fbDownloader(args[0])
for (let result of res.download) {
let ur = result.url    
await conn.sendMessage(m.chat, { video: { ur }, caption: '*๐ฐ๐๐๐ธ ๐ด๐๐๐ฐ ๐๐ ๐๐ธ๐ณ๐ด๐พ*' }, { quoted: m })}
break      
case "facebook2": case "fb2": case "facebookdl2": case "fbdl2":                  
let ress = await facebookDl(args[0]).catch(async _ => await savefrom(args[0])).catch(_ => null)
let urll = ress?.url?.[0]?.url || ress?.url?.[1]?.url || ress?.['720p'] || ress?.['360p']
await conn.sendMessage(m.chat, { video: { urll }, caption: '*๐ฐ๐๐๐ธ ๐ด๐๐๐ฐ ๐๐ ๐๐ธ๐ณ๐ด๐พ*' }, { quoted: m })    
break
case "facebook3": case "fb3": case "facebookdl3": case "fbdl3":   
let res3 = await fetch(`https://latam-api.vercel.app/api/facebookdl?apikey=brunosobrino&q=${args[0]}`)  
let json = await res3.json()
let url3 = json.video
await conn.sendMessage(m.chat, { video: { url3 }, caption: '*๐ฐ๐๐๐ธ ๐ด๐๐๐ฐ ๐๐ ๐๐ธ๐ณ๐ด๐พ*' }, { quoted: m })    
break    
case "facebook4": case "fb4": case "facebookdl4": case "fbdl4":   
const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
for (const { url, isVideo } of result.reverse()) await conn.sendMessage(m.chat, { video: { url }, fileName: `error.mp4`, mimetype: 'video/mp4' , caption: '*๐ฐ๐๐๐ธ ๐ด๐๐๐ฐ ๐๐ ๐๐ธ๐ณ๐ด๐พ*' }, { quoted: m })    
break    
case "facebook5": case "fb5": case "facebookdl5": case "fbdl5":
let vio = await fetch(`https://api.violetics.pw/api/downloader/facebook?apikey=beta&url=${args[0]}`)  
let vioo = await vio.json()
let videovio = `${vioo.result.hd.url || vioo.result.sd.url}`
await conn.sendFile(m.chat, videovio, `error.mp4`, '*๐ฐ๐๐๐ธ ๐ด๐๐๐ฐ ๐๐ ๐๐ธ๐ณ๐ด๐พ*', m)
break
}} catch {
await m.reply('*[โ๐๐๐๐โ] ๐ด๐๐๐พ๐, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐๐๐ด๐ป๐๐ฐ ๐ฐ ๐ธ๐ฝ๐๐ด๐ฝ๐๐ฐ๐๐ป๐พ*\n\n*- ๐ฒ๐พ๐๐๐พ๐ฑ๐พ๐๐ด ๐๐๐ด ๐ด๐ป ๐ด๐ฝ๐ป๐ฐ๐ฒ๐ด ๐๐ด๐ฐ ๐๐ธ๐ผ๐ธ๐ป๐ฐ๐ ๐ฐ:*\n*โ* https://fb.watch/fOTpgn6UFQ/')
}}
handler.command = /^(facebook|fb|facebookdl|fbdl|facebook2|fb2|facebookdl2|fbdl2|facebook3|fb3|facebookdl3|fbdl3|facebook4|fb4|facebookdl4|fbdl4|facebook5|fb5|facebookdl5|fbdl5)$/i
export default handler   
