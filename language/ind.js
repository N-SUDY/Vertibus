const moment = require('moment-timezone');
date = moment().tz('Asia/Tokyo').format('dddd')
//dayName = date.toLocaleDateString("in-ID", {weekday: 'long'})

exports.menu = (prefix, botName) => {
return `*${botName} Toram DB*

💰 *Bantu donasi di :*
💲 Saweria : https://saweria.co/mikako
💳 dana : 083831853737


*(Toram Online DB)*
Cmd: ${prefix}lvl
List Leveling character

Cmd: ${prefix}farming
List recommend farming

Cmd: ${prefix}event 
list event
*(Dalam Pengembangan)*

Cmd: ${prefix}maintenance
Menampilkan maintenance terbaru

Cmd: ${prefix}boss
Menampilkan detail tentang boss

Cmd: ${prefix}mobs
Menampilkan detail tentang mob

Cmd: ${prefix}panah
Menampilkan list arrow dengan Element

Cmd: ${prefix}maze
Menampilkan penjelasan tentang labirin serikat

Cmd: ${prefix}mq
Menampilkan list material untuk MQ

Cmd: ${prefix}watk
Menghitung watk/deff tertinggi suatu equipment

Cmd: ${prefix}cdmg
Menghitung Critical Damage suatu char

Cmd: ${prefix}ailment
Menampilkan penjelasan tentang status buruk

Cmd: ${prefix}food
Menampilkan EXP yang dibutuhkan untuk menaikan level masakan buff

Cmd: ${prefix}address
Menampilkan code buff

*(Guild DB)*
Cmd: ${prefix}buff
Menampilkan seluruh Buff serikat

Cmd: ${prefix}push
Menambahkan buff kedalam list buff serikat

Cmd: ${prefix}change
Mengganti salah satu buff di list buff serikat

Cmd: ${prefix}delete
Menghapus salah satu buff di list buff serikat

*(OTHER)*
Cmd: ${prefix}bahasa
Mengganti bahasa bot

Cmd: ${prefix}changelog
Menampilkan update terbaru bot

Cmd: ${prefix}reminder
Menghidupkan/Mematikan Pengingat

Cmd: ${prefix}welcome
Menghidupkan/Mematikan welcome

Cmd: ${prefix}status
Menampilkan seluruh On/Off data

Cmd: ${prefix}sticker
Membuat sticker dari gambar yg dikirim
*Image only*

Cmd: ${prefix}smeme
Membuat sticker dengan teks

Cmd: ${prefix}toimg
Convert stiker menjadi gambar

Cmd: ${prefix}ocr
Mengekstrak teks yang ada dalam gambar

Cmd: ${prefix}report
Report error kepada owner

Cmd: ${prefix}hidetag
Tag semua member yang tersembunyi dengan teks

Cmd: ${prefix}translate
Menerjemahkan teks 

Cmd: ${prefix}promote
Promote member menjadi admin

Cmd: ${prefix}donasi
Mau berdonasi?

`
}

exports.changelog = () => {
	return `
	Changelog ${global.botName}
===== *16 - 07 - 2023* =====
- *Add Changelog at list*
- *add OCR at list*
- *add Report at list*
- *Fix smeme limit usage*
- pre-add fbdl(no resp)

===== *17 - 07 - 2023* =====
- *Add Toimg at list*
- *Add ailment at list*
- fix typo

===== *19 - 07 - 2023* =====
- *Add Hidetag at list*
- *Add Translate at list*
- *Add Promote at list*
- Re-write toggle Raid on/off

===== *22 - 07 - 2023* =====
- *Add Food at list*
- typo on MQ mats at eps 89
	(indo-language)

===== *24 - 07 - 2023* =====
- *Add Welcome at list*
- Mengembalikan bot yang terbanned

===== *12 - 08 - 2023* =====
- _*Mengganti nomor bot*_
- *Add Summer quest*

===== *13 - 08 - 2023* =====
- *Add Address at list*
`
}

exports.arrow = () => {
return `
*Element AIR*
*Arrow :* Panah Es
*Mob :* (Pandai Besi)
*Lokasi :* NPC Pandai Besi
*Stat :*\nBase ATK 17(20%)\nCritical Rate +2

*Arrow :* Panah Cermin Cinta
*Mob :* (Quest) Arwah Peneliti lv. 78
*Lokasi :* Halaman Awal Mula
*Stat :*\nBase ATK 37(20%)\nCSPD +100

*Arrow :* Panah Tangis Langit
*Mob :* Floragonet
*Lokasi :* Distrik Fractum
*Stat :*\nBase ATK 84(20%)\nAkurasi Absolut +1%\nBerhenti Jatuh

*Arrow :* Panah Samudra
*Mob :* (Pandai Besi) event Musim Panas
*Lokasi :* NPC pandai besi
*Stat :*\nBase ATK 110(10%)\nMaxMP +200\nAMPR +1\n_Kebal Angin -3%_

*Element API*
*Arrow :* Panah Api
*Mob :* (Pandai Besi)
*Lokasi :* NPC Pandai Besi
*Stat :*\nBase ATK 5(20%)

*Arrow :* Flame Arrow
*Mob :* Sunion
*Lokasi :* Cermin Kegelapan
*Stat :*\nBase ATK 34(20%)\nMaxMP +100

*Arrow :* Panah Cinta
*Mob :* (Pandai Besi) Event Valentine
*Lokasi :* NPC Pandai Besi
*Stat :*\nBase ATK 71(20%)\nCSPD +100

*Arrow :* Panah Kaisar Iblis
*Mob :* Venena MetaCoenubia
*Lokasi :* Reruntuhan Elban Urban
*Stat :*\nBase ATK 120(10%)\nAkurasi +15%\n_Aggro -15%_

*Arrow :* Panah Ekor Membara
*Mob :* Nagakor
*Lokasi :* Terowongan Cobaan
*Stat :*\nBase ATK 152(20%)\nKebal Api +10%\nReduksi DMG (Bowling) +20%

*Element ANGIN*
*Arrow :* Panah Topan
*Mob :* (Pandai Besi)
*Lokasi :* NPC Pandai Besi
*Stat :*\nBase ATK 15(20%)\nCritical Damage +1%

*Arrow :* Panah Topan
*Mob :* Forestia
*Lokasi :* Tanah Kaos
*Stat :*\nBase ATK 15(20%)\nAkurasi +10%\nCritical Damage +1%

*Arrow :* Panah Apel
*Mob :* Coryn
*Lokasi :* Distrik Dikkit
*Stat :*\nBase ATK 92(15%)\n_Aggro -10%_

*Arrow :* Panah Ratu Lebah
*Mob :* Mieli ( _Event Valentine_)
*Lokasi :* Dataran Rakau
*Stat :*\nBase ATK 150(20%)\nTambahan Fisik 10%\nKebal Air +5%\nBerhenti Jatuh

*Element Bumi*
*Arrow :* Panah Bijih Tajam
*Mob :* Tikus Gua
*Lokasi :* Reruntuhan Singolare : Lantai 1
*Stat :*\nBase ATK 43(20%)\nDeff +50\nKekebalan Fisik +3%\n_Akurasi -1%_

*Arrow :* Panah Cacao
*Mob :* (Pandai Besi) Event Valentine
*Lokasi :* NPC Pandai Besi
*Stat :*\nBase ATK 50(20%)\nCritical Rate +3\n_Aggro -6%_

*Arrow :* Panah Daun Berduri
*Mob :* Ghilly ( _Event Valentine_ )
*Lokasi :* Dataran Sable
*Stat :*\nBase ATK 110(20%)\nMaxHP +10%\nPelindung Fraksional +10%\nAggro +10%

*Arrow :* Panah Hutan Lindung
*Mob :* Arbogazella
*Lokasi :* Hutan Lindung : Rimba Sesat
*Stat :*\nBase ATK 163(20%)\nAkurasi +50%\n_Aggro -25%_\n_Luka ke Api -10%_\n_Luka ke Cahaya -20%_

*Element CAHAYA*
*Arrow :* Flash Volt
*Mob :* (Quest) Rasa Lezat Kenangan
*Lokasi :* NPC Juan (El Scaro)
*Stat :*\nBase ATK 3(15%)\nAkurasi +10\n_Luka ke Cahaya -50%_\n( _Dengan Bowgun_ )\nCritical Rate +10

*Arrow :* Panah Seni Permen
*Mob :* (Pandai Besi) Event Valentine
*Lokasi :* NPC Pandai Besi
*Stat :*\nBase ATK 56(20%)\nMdef +10%\nKekebalan Sihir +10%


*Arrow :* Panah Pohon Suci
*Mob :* Santabby ( _Event Natal_ )
*Lokasi :* Paviliun Tomte : Pintu Masuk
*Stat :*\nBase ATK 100(20%)\nAMPR +1\nKebal Gelap +10%

*Element GELAP*
*Arrow :* Panah Senja
*Mob :* Naga Senja
*Lokasi :* Benteng Solfini : Atap
*Stat :*\nBase ATK 40(20%)\nResistensi Status Buruk +5%\n_MaxHP 10%_

*Arrow :* Panah Duri
*Mob :* Ivy
*Lokasi :* Kuil Naga Kegelapan
*Stat :*\nBase ATK 79(20%)\nKekebalan Siir +5%\nReduksi MDG (Lantai) +5%

*Arrow :* Panah Sakura Senja
*Mob :* Amalgam ( _Event Hanami_ )
*Lokasi :* Benteng Sakura Senja
*Stat :*\nBase ATK 100(20%)\nKebal Cahaya +5%

*Arrow :* Panah Hantu
*Mob :* Manomare
*Lokasi :* Hutan Phasma
*Stat :*\nBase ATK 120(20%)\nTambahan Sihir 50%\nBantuan Skti (1 Detik)

*Normal*
*Arrow :* Panah Jelita
*Mob :* Sakura Merah Jelita
*Lokasi :* Air Terjun Pemabuk
*Stat :*\nBase ATK 136(20%)\nLuka ke Normal +5%\nNatural HP Regen +10%\n_Aggro -20%_

`
}

exports.ailment = () => {
	return `
*1. Bergidik* ❗
*to Enemy*
Membuat musuh tidak dapat menggunakan skill selama 1 detik, memiliki jeda waktu (cooldown) 3 detik dengan durasi kesempatan break (break-chance) 2 detik. Jeda waktu (cooldown) bervariasi tergantung musuh, skill,dan kesulitan boss.
*to Player*
Membuat anda tidak dapat menggunakan skill dan rentan terhadap serangan musuh selama 1 detik, serta membatalkan combo yang sedang berjalan.

*2. Jatuh* ☄
*to Enemy*
Membuat musuh tidak dapat menggunakan skill selama 3 detik, memiliki jeda waktu (cooldown) 15 detik dengan durasi kesempatan break (break-chance) 4 detik. Jeda waktu (cooldown) bervariasi tergantung musuh, skill,dan kesulitan boss.
*to Player*
Membuat anda tidak dapat menggunakan skill dan rentan terhadap serangan musuh selama 3 detik, serta membatalkan combo yang sedang berjalan.

*3. Pingsan* 💫
*to Enemy*
Membuat musuh tidak dapat bergerak,lumpuh, menggunakan skill. selama 5 detik, memiliki jeda waktu (cooldown) 25 detik dengan durasi kesempatan break (break-chance) 6 detik. Menggunakan ini sebelum status bergidik (flinch) dan jatuh (tumble) akan memperpanjang durasi kesempatan break. Jeda waktu (cooldown) bervariasi tergantung musuh, skill,dan kesulitan boss.
*to Player*
Membuat anda tidak dapat bergerak,lumpuh, menggunakan skill dan rentan terhadap serangan musuh selama 5 detik, serta membatalkan combo yang sedang berjalan.

*4. Terpelanting* ⏸
*to Enemy*
Membuat musuh terpelanting kebelakang. Berbeda serangan (attkacks) beda juga jarak terpelantingnya. Jeda waktu (cooldown) tergantung pada jarak terpelanting.
(Dibutuhkan informasi lebih lanjut)
*to Player*
Jarak terpelanting tergantung pada jenis musuh dan skill yang digunakan.
(Dibutuhkan informasi lebih lanjut)

*5. Keracunan* ☠
*to Enemy*
Menghasilkan luka (damage) fraksional setiap interval waktu tertentu tergantung pada HP target dan INT dan DEX pemain.
(Dibutuhkan informasi lebih lanjut)
Memiliki durasi 10 detik.
*to Player*
Menyerap atau mengurangi 5% HP ketika menggunakan skill aktif maupun support skill, durasi 10 detik. Luka ini tidak membunuh Player.

*6. Lumpuh* ⚡
*to Enemy*
Menunda serangan musuh selama 2 detik (1 detik untuk boss). Memiliki durasi 10 detik. Dapat digunakan kembali setelah durasinya berakhir.
*to Player*
Mengurangi 50% ASPD (Attack Speed/Kecepatan Serangan), durasi 10 detik.

*7. Buta* 👁
*to Enemy*
Mengurangi hit target sebesar 60% (20% untuk boss). Memiliki durasi 10 detik. Dapat digunakan kembali setelah durasinya berakhir.
*to Player*
Jika pemain mendapatkan status tersebut, tergantung jarak antara pemain dengan musuh. Jika pemain 8m atau lebih mereka mendapatkan pinalti hit 40% (hit * 0,600000023841858), jika 7m kurang akan mendapatkan pinalti hit 20% (hit * 0,800000011920929). Mengurangi hit atau akurasi pemain, durasi 10 detik.

*8. Terbakar* 🔥
*to Enemy*
Menghasilkan luka (damage) fraksional setiap interval waktu tertentu tergantung pada HP target. Memiliki durasi 10 detik. Dapat digunakan kembali setelah durasinya berakhir.
*to Player*
Menyerap atau mengurangi 15% HP saat ini setiap 3 detik, durasi 10 detik.
Debuff Terbakar (Ignite) yang ada pada Skill Kairiki Ranshin pada Skill Samurai lv4 (Pengujian lebih lanjut diperlukan). Bisa disembuhkan dengan vaccine dan recorvery tapi tidak dapat disembuhkan dengan 100% resistensi status buruk (ailment resistance).
Terbakar (Ignite) pada peta Graben Membara. Status Buruk (Ailments) yang tidak dapat disembuhkan dengan Skill Recorvery dan Vaccine. Tapi masih bisa dicegah dengan menggunkan karakter 100% resistensi status buruk. Luka ini tidak membunuh Player.

*9. Beku* ❄
*to Enemy*
Meningkatkan penundaan serangan (attack) hingga 100% (50% untuk boss). Memiliki durasi 10 detik. Dapat digunakan kembali setelah durasinya berakhir.
*to Player*
Mengurangi 50% kecepatan gerak (moontion speed) dan Ayunan Dewa (Godspeed Wield) dari Skill Tombak lv4. Memiliki durasi 10 detik.

*10. Pecah Zirah* 🛡
*to Enemy*
Mengurangi M/DEF target sebesar 50%, total M/DEF dihitung dari bagian pertama Armor Break kemudian Penetrasi Sihir/Fisik (M/P Pierce) diterapkan. Memiliki durasi 5 detik. Dapat digunakan kembali setelah durasinya berakhir.
*to Player*
Mengurangi 50% kekebalan fisik dan sihir, durasi 5 detik.
Tidak dapat guard dan guard recharge terhenti.

*11. Lambat* 🕸
*to Enemy*
Mengurangi kecepatan gerakan target sebesar 50% (25% untuk boss). Memiliki durasi 10 detik. Dapat digunakan kembali setelah durasinya berakhir.
*to Player*
Menurunkan 50% kecepatan berjalan (movement speed), durasi 10 detik.
Tidak dapat evasion dan evasion recharge terhenti.

*12. Berhenti* ⛔
*to Enemy*
Mengikat musuh pada posisinya berdiri selama 10 detik, memiliki jeda waktu (cooldown) 50 detik. Kurang efektif melawan bos karena hanya mengurangi kecepatan gerakan boss hingga 50% (tidak mengikat boss), lebih efektif untuk normal monster dan mini boss. Pola serangan (attack) seperti lari secara linear dan rapalan dapat digunakan saat mendapatkan debuff berhenti.
*to Player*
Tidak dapat berpindah tempat atau berjalan, atau mengikat pemain pada posisi berdiri saat ini, durasi 10 detik Masih bisa menggunakan skil gerak (motion) dan rapalan seperti slash dapat digunakan saat mendapatkan debuff berhenti.
Tidak dapat evasion dan evasion recharge terhenti.

*13. Takut* 👻
*to Enemy*
30% peluang membatalkan serangan target (10% untuk boss). Memiliki durasi 10 detik. Dapat digunakan kembali setelah durasinya berakhir.
*to Player*
30% Peluang gagal dalam menggunakan skill atau serangan, durasi 10 detik.

*14. Pening* 😵
*to Enemy*
Mencegah penghindaran dan pertahanan (evasion dan guard rate), (50% untuk boss). Memiliki durasi 10 detik. Dapat digunakan kembali setelah durasinya berakhir.
*to Player*
Mengurangi 50% evasion dan guard rate, durasi 10 detik.

*15. Lesu* 💪
*to Enemy*
Mengurangi luka (damage) yang diberikan sebesar 30% (damage * 0,699999988079071). Memiliki durasi 10 detik. Dapat digunakan kembali setelah durasinya berakhir.
*to Player*
Mengurangi 30% luka (damage) kepada musuh, durasi 10 detik.

*16. Lemah* 📉
*to Enemy*
Mengurangi MDEF target sebesar 25%.
*to Player*
Menambah konsumsi MP Skill sebesar +100MP, durasi 5 detik.

*17. Bisu* 😐
Tidak dapat menggunakan skill sihir, durasi 5 detik.

*18. Berdarah* 🩸
Tidak dapat menggunakan skill fisik, durasi 5 detik.

*19. Lelah* 🥵
*to Enemy/Player*
Mengurangi stabilitas 50%, pada serangan durasi terakhir akan mengalami graze.
Kelelahan (Fatigue) pada peta Plastida, Pos Depan Plastida. dapat disembuhkan dengan vaccine dan skill recorvery.

*20. Silau* ☀
*to Enemy*
Jika musuh berada pada pengaruh ini, mendapatkan peluang tidak terjadinya graze 50%. Memiliki durasi 10 detik. Jeda waktu (cooldown) selama 50 detik.

*21. Ledakan Mana* 💥
*to Player*
Setelah durasi berakhir, konsumsi semua mp menjadi 0 dan memberikan damage sama dengan konsumsi mp x10.

*22. Tidur* 💤
*to Enemy*
Melumpuhkan untuk waktu yang lama, bangun saat menerima serangan, Bos memulihkan 3% dari HP maksimal saat bangun.
*to Player*
Melumpuhkan untuk waktu yang lama, bangun saat menerima serangan, mengaktifkan regenerasi alami.

*23. Sakit* 💊
*to Player*
Menurunkan resistensi status buruk sebesar -50% (masih dapat terkena bahkan jika Anda memiliki resistensi status buruk 100%).


*24. Terkutuk* 🎭
*to Player*
Menurunkan CRT damage pemain sebesar -50%.

*25. Item Disable* 🚫
*to Player*
Tidak dapat menggunakan item.

*26. Lari* ⏩
*to Player*
Mengkonsumsi HP saat MP tidak mencukupi untuk melakukan skill, juga menerapkan tenacity (Gigih) ke semua skill dalam kombo (tidak mengganti tag yang ada).

*27. Terhisap* 🌪
*to Enemy*
Menarik ke pusat serangan, 50% peluang tarik untuk Bos.
*to Player*
Menarik ke pusat serangan, saat terkena menonaktifkan evasion dan Guard selama 1 detik

*28. Kaku* ⬛
*to Player*
Menghindar Mutlak +100%, & menghapus aggro saat ini sebesar 99%

*29. Inversion* 🔁
*to Player*
Mengganti HP% dan MP% Anda saat ini

- ${global.botName} -
`
}

exports.maze = (query) => {
query = query.toLowerCase()
	if (query == "drop") {
    console.log(date)
		switch(date) {

case "Saturday" :
return `
Drop Guild Maze hari Sabtu(Peti Cokelat)
NB : Drop Gemstone Tinggi

*1. Kaca Mosaik*
*2. Gemstone :*
- Beril
- Ruby
- Topaz
- Aquamarine
- Onyx
- Akik Merah
- Lapiz Lazuli
- Sapphire
- Tourmaline
- Emerald
- Amethyst
- Garnet
- Rose Quartz
- Zircon
- Peridot
- Citrine
*3. Anti-Degradasi*
(F1-600) Anti-Degradasi
(F601-900) Anti-Degradasi Super
(F901-1000) Anti-Degradasi Hiper
*4. Bubuk Tempa*
(F1-600) Bubuk Tempa
(F601-900) Bubuk Tempa Super
(F901-1000) Bubuk Tempa Hiper
*5. Palu Ajaib*
(F1-600) Palu Ajaib
(F601-900) Palu Ajaib Super
(F901-1000) Palu Ajaib Hiper
*6. Katalog Sobek* (Rare)
*7. Permata Labirin* (Rare)
*8. Buku Skill* ((F601-1000) Rare)
- Buku Kegelapan
- Buku Penari
- Buku Ksatria Sihir
- Buku Minstrel
- Buku Tangan Kosong
- Buku Ninja
`

break

case 'Sunday' :
return `
Drop Guild Maze hari Minggu(Hijau Muda)
NB : Drop Bijih Tinggi

*1. Kachaya*
*2. Gemstone :*
- MoonStone
- Sunstone
- Mutiara 
- Kaca Vulkanik
- Berlian
*3. Bijih :*
- Besi Murni
- Damaskus Murni
- Mithril Murni
- Orichalcum Murni
*4. Katalog Sobek* (Rare)
*5. Permata Labirin* (Rare)
*6. Buku Skill* ((F601-1000) Rare)
- Buku Kegelapan
- Buku Penari
- Buku Ksatria Sihir
- Buku Minstrel
- Buku Tangan Kosong
- Buku Ninja
*7. Batu Ganti Jenis Kelamin* (Super RARE)
`

break

case 'Monday' :
return `
Drop Guild Maze hari Senin(Ungu)

*1. Kachaya*
*2. Kaca Mosaik
*3. Gemstone :*
- Beryl
- Ruby
- Topaz
- Aquamarine
- Onyx
- Akik Merah
- MoonStone
*4. Anti-Degradasi*
(F1-600) Anti-Degradasi
(F601-900) Anti-Degradasi Super
(F901-1000) Anti-Degradasi Hiper
*5. Bubuk Tempa*
(F1-600) Bubuk Tempa
(F601-900) Bubuk Tempa Super
(F901-1000) Bubuk Tempa Hiper
*6. Palu Ajaib*
(F1-600) Palu Ajaib
(F601-900) Palu Ajaib Super
(F901-1000) Pali Ajaib Hiper
*7. Bijih :*
- Besi Murni
- Damaskus Murni
- Mithril Murni
- Orichalcum Murni
*8. Katalog Sobek* (Rare)
*9. Permata Labirin* (Rare)
*10. Katalog Rambut* (Rare)
`
	break

case 'Tuesday' :
return `
Drop Guild Maze hari Selasa(Merah)

*1. Kachaya*
*2. Kaca Mosaik
*3. Gemstone :*
- Beryl
- Ruby
- Topaz
- Lapiz Lazuli
- Sapphire
- Tourmaline
- SunStone
*4. Anti-Degradasi*
(F1-600) Anti-Degradasi
(F601-900) Anti-Degradasi Super
(F901-1000) Anti-Degradasi Hiper
*5. Bubuk Tempa*
(F1-600) Bubuk Tempa
(F601-900) Bubuk Tempa Super
(F901-1000) Bubuk Tempa Hiper
*6. Palu Ajaib*
(F1-600) Palu Ajaib
(F601-900) Palu Ajaib Super
(F901-1000) Pali Ajaib Hiper
*7. Bijih :*
- Besi Murni
- Damaskus Murni
- Mithril Murni
- Orichalcum Murni
*8. Katalog Sobek* (Rare)
*9. Permata Labirin* (Rare)
*10. Katalog Rambut* (Rare)
`
break

case 'Wednesday' :
	return `
Drop Guild Maze hari Rabu(Biru)

*1. Kachaya*
*2. Kaca Mosaik
*3. Gemstone :*
- Lapiz Lazuli
- Sapphire
- Tourmaline
- Emerald
- Amethyst
- Garnet
- Mutiara
*4. Anti-Degradasi*
(F1-600) Anti-Degradasi
(F601-900) Anti-Degradasi Super
(F901-1000) Anti-Degradasi Hiper
*5. Bubuk Tempa*
(F1-600) Bubuk Tempa
(F601-900) Bubuk Tempa Super
(F901-1000) Bubuk Tempa Hiper
*6. Palu Ajaib*
(F1-600) Palu Ajaib
(F601-900) Palu Ajaib Super
(F901-1000) Pali Ajaib Hiper
*7. Bijih :*
- Besi Murni
- Damaskus Murni
- Mithril Murni
- Orichalcum Murni
*8. Katalog Sobek* (Rare)
*9. Katalog Wajah* (Rare)
*10. Katalog Rambut* (Rare)
`
	break

case 'Thursday' :
	return `
Drop Guild Maze hari Kamis(Hijau)

*1. Kachaya*
*2. Kaca Mosaik
*3. Gemstone :*
- Emerald
- Amethyst
- Garnet
- Rose Quartz
- Zircon
- Peridot
- Kaca Vulkanik
*4. Anti-Degradasi*
(F1-600) Anti-Degradasi
(F601-900) Anti-Degradasi Super
(F901-1000) Anti-Degradasi Hiper
*5. Bubuk Tempa*
(F1-600) Bubuk Tempa
(F601-900) Bubuk Tempa Super
(F901-1000) Bubuk Tempa Hiper
*6. Palu Ajaib*
(F1-600) Palu Ajaib
(F601-900) Palu Ajaib Super
(F901-1000) Pali Ajaib Hiper
*7. Bijih :*
- Besi Murni
- Damaskus Murni
- Mithril Murni
- Orichalcum Murni
*8. Katalog Sobek* (Rare)
*9. Katalog Wajah* (Rare)
*10. Katalog Rambut* (Rare)
`
	break

case 'Friday' :
	return `
Drop Guild Maze hari Jum'at(Ungu Muda)

*1. Kachaya*
*2. Kaca Mosaik
*3. Gemstone :*
- Aquamarine
- Onyx
- Rose Quartz
- Zircon
- Peridot
- Berlian
- Citrine
*4. Anti-Degradasi*
(F1-600) Anti-Degradasi
(F601-900) Anti-Degradasi Super
(F901-1000) Anti-Degradasi Hiper
*5. Bubuk Tempa*
(F1-600) Bubuk Tempa
(F601-900) Bubuk Tempa Super
(F901-1000) Bubuk Tempa Hiper
*6. Palu Ajaib*
(F1-600) Palu Ajaib
(F601-900) Palu Ajaib Super
(F901-1000) Pali Ajaib Hiper
*7. Bijih :*
- Besi Murni
- Damaskus Murni
- Mithril Murni
- Orichalcum Murni
*8. Katalog Sobek* (Rare)
*9. Katalog Mata* (Rare)
*10. Katalog Rambut* (Rare)
`
	break
		}
	} else if (query == "guide") {
return `
Guild Maze/Labirin serikat adalah sebuah tempat seperti dungeon dimana kamu harus mencari jalan untuk keluar. Disana juga terdapat monster yang akan menghalangi jalanmu sambil mencari peti tang terletak secara acak di suatu tempat. disana juga terdapat jebakan yang di sembunyikan adapun detail tentang jebakan tersebut :
*1. Jebakan Bom*
- damage : 40% HP
- efek : -
*2. Reruntuhan Batu*
- damage : 20% HP
- efek : Mengurangi 10 MaxHP
*3. Jebakan Jarum*
- damage : 20% HP
- efek : Mengurangi 10 MaxHP
*4. Jebakan Loncat*
- damage : -
- efek : Menarik perhatian musuh
Monster di dalam labirin akan melemah seiring bergantinya tanggal dalam sebulan. Monster akan sangat kuat di awal bulan dan akan sangat lemah di akhir bulan. Kamu dapat mengabaikan Monster di labirin/tidak harus membunuh semuanya.
Kamu dapat mengabaikan peti dan menuju lantai 600 untuk mendapatkan item spesial di dalam peti. Peti juga akan di boost di Minggu ke 3 dalam 1 bulan. Peti akan berganti warna sesuai hari (ketik "/maze drop" untuk selengkapnya).
Kamu dapat bermain dengan anggota party(NPC/Bodyguard tidak termasuk) dan jangan khawatir jika salah satu anggota party mati/knock. mereka tetap bisa membuka peti & menunjukan jalan ke lantai berikutnya.

itu saja guide Guild Maze yang bisa saya jelaskan. Semoga Beruntung.
- Vertibus -
`

	} else if (query == "build") {
		return `
Untuk memainkan Guild Maze di rekomendasikan menggunakan char level 1 dengan job Bowgun(untuk yang sudah T5 skill) atau job Bow. Status yang di isi adalah Full DEX/(DEX/AGI) untuk menambah aspd

 build skillnya :
Crosfire/Tembakan silang lvl 10
twin storm/badai kembar(untuk bowgun) lvl 10
mp charge lvl 1 (optional. bisa menggunakan ampr)
Shukuchi lvl 1
untuk equipment di sarankan menggunakan eq yang ada MaxHP & MaxMP nya
`
	} else {
		return console.log("masukan query !\contoh : /maze guide\n/maze build\n/maze drop")
	}
}

exports.mq = () => {
	return `
	*List MQ material*

*BAB 1*
*eps 8 : Dupa Permunian*
_Item :_ Sulur (3pcs)
_Mobs :_ Pain Leaf
_Map :_ Tanah Genting Kaus

_Item :_ Paruh Tebal (3pcs)
_Mobs :_ Beak
_Map :_ Kuil Runtuh

_Item :_ Sayap Peri (3pcs)
_Mobs :_ Roar
_Map :_ Kuil Runtuh A3

*BAB 2*
*eps 13 : Ujian Kastil Setan Bulan*
_Item :_ Koin Ksatria (20pcs)
_Mobs :_ Boneka Pendekar
_Map :_ Kastil Setan Bulan : Ruang ke-1

*BAB 3*
*eps 18 : Musuh Terkuat...?*
_Item :_ Daging Tikus Pasir (1pcs)
_Mobs :_ Tikus Pasir
_Map :_ Tanah Tinggi Centerio

_Item :_ Cakar Binatang Buas (3pcs)
_Mobs :_ Foxiger
_Map :_ Tanah Tinggi Centerio

_Item :_ Kulit Kodok Pasir (5pcs)
_Mobs :_ Sand Frosch
_Map :_ Tanah Tinggi Centerio

*eps 21 : Takdir Benteng*
_Item :_ Taring Bergerigi (10pcs)
_Mobs :_ Miwi
_Map :_ Danau Icule

_Item :_ Kristal Saham (5pcs)
_Mobs :_ Rotta Nemico
_Map :_ Gua Bawah Tanah Saham

_Item :_ Permata Jiwa
_Mobs :_ Cassy
_Map :_ Makam Ratu kuno

*BAB 8*
*eps 62 : Persembunyian Relik Para Dewa*
_Item :_ Anggur Rokoko (5pcs)
_Mobs :_ Kijimu
_Map :_ Dataran Rokoko

*BAB 9*
*eps 13 : Operasi Markas Pos depan*
_Item :_ Kayu Labilans (10pcs)
_Mobs :_ Toretta
_Map :_ Distrik labilans : A1


*BAB 11*
*eps 89 : Hutan Berjalan*
_Item :_ Tanduk Patah (20pcs)
_Mobs :_ Rhinoceros
_Map :_ Rawa Danau Pelarian : A3


*BAB 12*
*eps 102 : Perbaikan Bahtera*
_Item :_ Bijih Berkembang (5pcs)
_Mobs :_ pertaceras
_Map :_ Kabla Jabali

_Item :_ Batu jabali (5pcs)
_Mobs :_ Gemare
_Map :_ Kabla Jabali
	`
}

exports.raid = () => {
	return`
*Announcement*

Malam ini akan di adakan Raid Rutin malam Minggu Jam 19.30 WIB Member dan Pengurus Guild mohon tepat waktu agar waktu tidak molor.`
}

exports.eventguild = () => {
  return `
*Announcement*

Halo para member guild tercinta sebentar lagi guild kita akan mengadakan event collab bersama guild aliansi Shinra Tensei & Log Horizon yang akan diadakan pada tanggal 4 juni jam 7.30 malam.

Tempat : Einklang (tempat awal masuk), inter 3

Event kali ini adalah cosplay yang bertemakan isekai/petualangan, jadi kalian bisa berkreasi sepuasnya sesuai dengan tema yang ada mau itu karakter game,anime dan sebagainya.

 *Berikut rulesnya*

 *1* . Tidak boleh memakai lebih dari 1 ava/kostume

*2* . Dilarang chat teriak selain juri

*3* . Wajib menggunakan pesan mood sesuai dengan karakter/tema yang sedang di cosplay

 *Note : keputusan juri mutlak* 

Berikut hadiah bagi yang juara :
 *1* .  *20m spina* 
 *2* .  *10m spina* 
 *3* .  *6m spina*  

*Juara harapan 1-3 dapat 1m*

 yg ikutan tapi tidak juara dpt hadiah partisipasi juga loh.


Terimakasih .`
}

exports.donate = () => {
  return `
💰 *Bantu donasi di:*
💲 Saweria : https://saweria.co/mikako
💳 dana : 083831853737
`
}

exports.eror = (err) => {
	return `Maaf, sepertinya ada yang error: ${err}`
}

exports.success = () => {
	return 'Sukses...'
}

exports.unreg = (text) => {
	return `${text} tidak ada di dalam list buff serikat!!`
}

exports.bump = (text) => {
	return `${text} sudah ada dalam list buff serikat!!`
}

exports.nonApikey = () => {
	return "Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file key.json\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys"
}

exports.format = (prefix, command) => {
	// if(command == "lv" || command == "lvl" || command == "lvling" || command == "leveling") {
	// 	return `How to use?\n${prefix + command} level|bonus exp`
	// }
	// if(command == "push" || command == "add" || command == "change") {
	// 	return `How to use?\n${prefix + command} ign|buffland`
	// }
	// if (command == "cn") {
	// 	return `How to use?\n${prefix}${command} old ign|new ign`
	// }
	switch(command) {
		case 'lv':
          case 'lvl':
          case 'lvling' : 
          case 'leveling':
          	return `Cara penggunaan\n${prefix + command} level|bonus exp`
          break;

      case 'push':
      case 'add':
      case 'change':
      	return `Cara penggunaan\n${prefix + command} ign|buffland`
      break;

  		case 'cn':
  			return `Cara penggunaan\n${prefix}${command} ign lama|ign baru`
  		break;

  		case 'getbuff':
  			return `Cara penggunaan\n${prefix}${command} ign`
  		break;

  		case 'gmbuff':
  			return `Cara penggunaan\n${prefix}${command} buffland`
  		break;

  		case 'ai':
  		case 'openai': 
  		case "img": 
  		case "ai-img": 
  		case "image": 
  		case "images":
  		case 'mobs':
		case 'boss':
		case 'monster':
		case 'language':
		case 'bahasa':
		case 'promote':
    case 'spam':
    case 'ytdl':
    case 'watk':
    case 'cdmg':
    case 'fbdl':
    case 'report':
    case 'ytmp3':
    case 'ytmp4':
    case 'hidetag':
  			return `mohon masukan query!!\nContoh: ${prefix + command} masukan query disini`
  		break;

  		case 'farm':
  		case 'farming':
  			return `Anda mau farming apa?\n\n/logam\n/kayu\n/beast\n/obat\n/kain\n/lainnya _(Comming Soon)_`
  		break;

  		case 'event':
  			return `Anda mau mencari event apa??\n- valentine\n- natal\n- hanami\n- summer`
  		break;

  		case 'reminder':
  		case 'raid':
  		case 'welcome':
  			return `Tidak ada yang perlu di ganti\nquery = on/off`
  		break
  			}
}

exports.onGroup = () => {
	return `Hanya di grup!`
}

exports.onGuild = () => {
	return `Tidak bisa digunakan di grup ini!`
}

exports.onAdmin = () => {
	return `Hanya bisa dilakukan oleh admin gup!`
}
exports.botAdmin = () => {
	return 'Jadikan Bot sebagai Admin!'
}

exports.owner = () => {
  return 'Hanya bisa dilakukan oleh owner bot!'
}

exports.head = (command, text = '') => {
  switch(command) {
  	case 'farm':
  	case 'farming':
  		return `*Berikut ini list spot farming ${text} yang saya ketahui:*\n`
  	break;

  	case 'logam':
  	case 'metal':
  	case 'kayu':
  	case 'wood':
  	case 'fauna':
  	case 'beast':
  	case 'obat':
  	case 'medic':
  	case 'medicine':
  	case 'kain':
  	case 'cloth':
  		return `*Berikut ini list spot farming ${command} yang saya ketahui:*\n`
  	break;

  default:

  }
}

exports.quest = (command, text = '') => {
	switch(command) {
	case 'valentine':
		return `Berikut ini list quest ${command} yang saya ketahui:\n\n`
	break;

	case 'summer':
	case 'sumer':
		return `Berikut ini list quest ${command} yang saya ketahui:\n\n`
	break;

	case 'event':
		return `Berikut ini list quest ${text} yang saya ketahui:\n\n`
	break;


default: 

	}
}

exports.buff = (text = "") => {
	if (!text) {
		return `
LIST CODE FOOD BUFF TORAM ONLINE

STR
lv 10 4016699 
lv 10 7070777 
lv 10 7031997 
lv 10 3010095
lv 10 2180000 (hard to access)
lv 10 2010085
lv 9 3010003
lv 9 4010417
lv 9 Elscaro-A-1
lv 8 1011201
lv 5 6070013

 DEX 
lv 10 2020222 
lv 10 7011001 
lv 10 7200002
lv 10 1010058 
lv 10 5010031
lv 10 6010003 
lv 10 5010092 
lv 10 1234567 
lv 9 1020001
lv 9 6140110
lv 9 1234567
lv 7 7246969 
lv 7 1010106 

 INT
lv 10 7010018
lv 10 6010701
Iv 10 6061294 
lv 10 1018989 
lv 10 1032222 
lv 9 2020707 
lv 9 3012000 
lv 8 1010036
lv 8 4269420 
lv 8 Elscaro-Z-1234

 AGI
lv 10 3192311 
lv 10 7162029 
lv 9 7190001 
lv 9 5130123 
lv 9 3260777
lv 8 4010228
lv 8 5419191
lv 8 1010050
lv 8 3181227
lv 8 3192311
lv 7 4240021

VIT 
lv 8 2020909 
lv 8 1010050
lv 4 1012144 

 CRIT RATE 
lv 10 7162029
lv 10 7057050
lv 10 7010086 
lv 10 5010098
lv 10 5112709
lv 10 3010048
lv 10 1012000
lv 10 1010006
lv 10 1010092
lv 10 1010017
lv 10 1010050
lv 10 1100000
lv 10 1011010
lv 10 1069927 
lv 10 1037777
lv 10 1100000 
lv 9 6040107
lv 9 3061206
lv 9 3246969
lv 9 7190311
lv 9 31608822 (gacha aja)
lv 8 1010038

 ACCURACY
lv 10 1010013
lv 9 1010013
lv 9 7010077 
lv 8 3188000

 WEAPON ATK
lv 10 7010023
lv 10 7086969
lv 10 1067777
lv 10 1010099 
lv 10 1011126
lv 10 6010024 
lv 10 6100000
lv 10 2020404 
lv 10 2010136 
lv 10 2010007
lv 10 3132109 
lv 10 1010029 
lv 9 3070028
lv 9 7162029
lv 9 2221806

 AMPR
lv 10 4040404
lv 10 3063101
lv 10 3062111
lv 10 1011010
lv 10 3062728 
lv 10 5252525
lv 10 1010017 
lv 10 5010103
lv 10 1010092 
lv 10 2010068
lv 10 3062728
lv 10 1010006 
lv 10 5240001 
lv 10 4206969
lv 10 1010050 
lv 10 5010031
lv 10 1019696 
lv 10 3226325 
lv 10 5010103 
lv 9 1010001
lv 9 1030002
lv 9 1234321 (hard to access)
lv 9 1023040 
lv 9 5240202
lv 8 1010058
lv 8 2011111

 MAX MP
lv 10 1111999
lv 10 4011793
lv 10 1011212
lv 10 1027777
lv 10 3113105
lv 10 3010037
lv 10 3010069
lv 10 3204544
lv 10 1100008
lv 10 1010013
lv 10 5010044
lv 10 2010079
lv 10 5010080
lv 10 2010091
lv 10 1016646 
lv 10 1010216 
lv 10 1010142
lv 10 3080021 
lv 10 6010021 
lv 10 6052000 
lv 10 7010047 
lv 10 6070013 
lv 8 4046666 
lv 9 1010004
lv 8 1059999
lv 6 1010017

 MAX HP
lv 10 1234567
lv 10 3191130 
lv 10 1010084
lv 10 1180755 
lv 10 3010058
lv 10 3010006
lv 10 1010032 
lv 10 3011143
lv 10 1010084 
lv 10 3066969
lv 10 1010101 
lv 10 1011945 
lv 10 1222002 
lv 9 7121252
lv 9 3011143 
lv 9 3015555
lv 9 sofya-A-420
lv 7 1260303
lv 5 1250555

 -AGGRO 
lv 10 1010038 
lv 10 1016646
lv 10 1010002 
lv 10 6010009 
lv 10 3010018
lv 10 sofya-A-2
lv 9 2020808 
lv 9 7190001 

 +AGGRO 
lv 10 1264321 
lv 10 6262000 
lv 10 1010207
lv 10 3204544 
lv 10 3158668
lv 10 3053131
lv 10 1016646
lv 9 3066969
lv 9 2020606 
lv 9 2010136 
lv 9 1190069 
lv 9 1014230
lv 9 1013000 
lv 7 3030110 
lv 7 1012000

 DROP RATE 
lv 6 4196969

 P.RESIST
lv 10 1020001
lv 10 7010014
lv 10 3010034 
lv 9 6010701 
lv 9 4200069
lv 9 1100000 
lv 9 3011999 
lv 8 1018989 

 M.RESIST
lv 10 1010004 
lv 10 2020505 
lv 10 5246969
lv 10 7010016 
lv 10 7030023 
lv 9 4080087
lv 9 7227777
lv 9 7222227
lv 7 4010417

 P.DEFF

 M.DEFF
lv 2 4040404

 FRACTIONAL BARRIER
lv 10 7010082
lv 8 1222002 
lv 8 6181999 

 DTE EARTH 
lv 9 3210103
lv 8 1016646 
lv 8 4083005
lv 8 4046666 
lv 8 2020202 
lv 8 1010002 
lv 8 6010003
lv 8 2022222 
lv 7 3011143 
lv 7 2099876
lv 7 1016646
lv 7 1010142
lv 7 1011111
lv 6 7121252
lv 6 7010005 
lv 6 6010024
lv 6 5419191

 DTE DARK
lv 9 1010006 
lv 9 3210104
lv 9 5010092  
lv 8 7010023
lv 8 1016646 
lv 8 6010003 
lv 7 3030324
lv 7 1190072
lv 7 1010006

 DTE FIRE
lv 9 3210106
lv 8 7011001
lv 7 1012610 
lv 7 1010799 
lv 6 2010091
lv 2 1010101

 DTE WIND
lv 9 3210101
lv 8 3062111
lv 8 3030303
lv 7 1010055
lv 7 7190001 
lv 7 4099876
lv 4 3030303 

 DTE WATER 
lv 9 7120030
lv 9 3210100
lv 8 7011001 
lv 8 3030777 
lv 8 3062111 
lv 8 2260006 
lv 8 1110111
lv 7 3226325 
lv 7 3010018
lv 6 2173179
lv 4 1110007 

 DTE LIGHT 
lv 9 3210106
lv 9 1020345
lv 8 1020345 
lv 8 4046666 
lv 8 Rugio-Z-6
lv 6 4016699 
lv 6 7031000

 DTE NATURAL 
lv 9 3210102
lv 9 2010071
lv 9 1019696
lv 9 1016969
lv 8 3010095
lv 7 3099876
lv 7 1011902 
lv 6 6061294 
lv 6 4206969 
lv 6 1019696

Note: kalu ada yang salah atau ingin menyumbangkan Codenya. Tolong diisi dikolom komentar, nanti saya tambahkan kedalam list ini`
	}
	if (text) {
		switch(text) {
		case 'str':
			return`STR
lv 10 4016699 
lv 10 7070777 
lv 10 7031997 
lv 10 3010095
lv 10 2180000 (hard to access)
lv 10 2010085
lv 9 3010003
lv 9 4010417
lv 9 Elscaro-A-1
lv 8 1011201
lv 5 6070013
`
break

case 'dex': 
	return`
	DEX 
lv 10 2020222 
lv 10 7011001 
lv 10 7200002
lv 10 1010058 
lv 10 5010031
lv 10 6010003 
lv 10 5010092 
lv 10 1234567 
lv 9 1020001
lv 9 6140110
lv 9 1234567
lv 7 7246969 
lv 7 1010106 
`
break

case 'int':
	return`
	INT
lv 10 7010018
lv 10 6010701
Iv 10 6061294 
lv 10 1018989 
lv 10 1032222 
lv 9 2020707 
lv 9 3012000 
lv 8 1010036
lv 8 4269420 
lv 8 Elscaro-Z-1234`
break

case 'agi':
	return`
	AGI
lv 10 3192311 
lv 10 7162029 
lv 9 7190001 
lv 9 5130123 
lv 9 3260777
lv 8 4010228
lv 8 5419191
lv 8 1010050
lv 8 3181227
lv 8 3192311
lv 7 4240021`
break

case 'vit':
	return`
	VIT 
lv 8 2020909 
lv 8 1010050
lv 4 1012144 `
	break

case 'crit':
case 'cr':
	return`
	CRIT RATE 
lv 10 7162029
lv 10 7057050
lv 10 7010086 
lv 10 5010098
lv 10 5112709
lv 10 3010048
lv 10 1012000
lv 10 1010006
lv 10 1010092
lv 10 1010017
lv 10 1010050
lv 10 1100000
lv 10 1011010
lv 10 1069927 
lv 10 1037777
lv 10 1100000 
lv 9 6040107
lv 9 3061206
lv 9 3246969
lv 9 7190311
lv 9 31608822 (gacha aja)
lv 8 1010038`
break

case 'accuracy':
	return`
	ACCURACY
lv 10 1010013
lv 9 1010013
lv 9 7010077 
lv 8 3188000
`
break

case 'watk':
case 'w.atk':
	return`
	WEAPON ATK
lv 10 7010023
lv 10 7086969
lv 10 1067777
lv 10 1010099 
lv 10 1011126
lv 10 6010024 
lv 10 6100000
lv 10 2020404 
lv 10 2010136 
lv 10 2010007
lv 10 3132109 
lv 10 1010029 
lv 9 3070028
lv 9 7162029
lv 9 2221806`
	break

case 'ampr':
	return`
	AMPR
lv 10 4040404
lv 10 3063101
lv 10 3062111
lv 10 1011010
lv 10 3062728 
lv 10 5252525
lv 10 1010017 
lv 10 5010103
lv 10 1010092 
lv 10 2010068
lv 10 3062728
lv 10 1010006 
lv 10 5240001 
lv 10 4206969
lv 10 1010050 
lv 10 5010031
lv 10 1019696 
lv 10 3226325 
lv 10 5010103 
lv 9 1010001
lv 9 1030002
lv 9 1234321 (hard to access)
lv 9 1023040 
lv 9 5240202
lv 8 1010058
lv 8 2011111`
break

case 'max mp':
case 'maxmp':
	return`
	MAX MP
lv 10 1111999
lv 10 4011793
lv 10 1011212
lv 10 1027777
lv 10 3113105
lv 10 3010037
lv 10 3010069
lv 10 3204544
lv 10 1100008
lv 10 1010013
lv 10 5010044
lv 10 2010079
lv 10 5010080
lv 10 2010091
lv 10 1016646 
lv 10 1010216 
lv 10 1010142
lv 10 3080021 
lv 10 6010021 
lv 10 6052000 
lv 10 7010047 
lv 10 6070013 
lv 8 4046666 
lv 9 1010004
lv 8 1059999
lv 6 1010017`
break

case 'max hp':
case 'maxhp':
	return`
	MAX HP
lv 10 1234567
lv 10 3191130 
lv 10 1010084
lv 10 1180755 
lv 10 3010058
lv 10 3010006
lv 10 1010032 
lv 10 3011143
lv 10 1010084 
lv 10 3066969
lv 10 1010101 
lv 10 1011945 
lv 10 1222002 
lv 9 7121252
lv 9 3011143 
lv 9 3015555
lv 9 sofya-A-420
lv 7 1260303
lv 5 1250555
`
	break

case '-aggro':
	return`
	-AGGRO 
lv 10 1010038 
lv 10 1016646
lv 10 1010002 
lv 10 6010009 
lv 10 3010018
lv 10 sofya-A-2
lv 9 2020808 
lv 9 7190001 
`
break

case 'aggro':
	return`
	+AGGRO 
lv 10 1264321 
lv 10 6262000 
lv 10 1010207
lv 10 3204544 
lv 10 3158668
lv 10 3053131
lv 10 1016646
lv 9 3066969
lv 9 2020606 
lv 9 2010136 
lv 9 1190069 
lv 9 1014230
lv 9 1013000 
lv 7 3030110 
lv 7 1012000
`
break

case 'drop rate':
return`
 DROP RATE 
lv 6 4196969`
break

case 'p.ress':
case 'p.resist':
	return`
	P.RESIST
lv 10 1020001
lv 10 7010014
lv 10 3010034 
lv 9 6010701 
lv 9 4200069
lv 9 1100000 
lv 9 3011999 
lv 8 1018989 `
break

case 'm.ress':
case 'm.resist':
	return`
	M.RESIST
lv 10 1010004 
lv 10 2020505 
lv 10 5246969
lv 10 7010016 
lv 10 7030023 
lv 9 4080087
lv 9 7227777
lv 9 7222227
lv 7 4010417`
break

case 'frac':
case 'fracc':
case 'fractional barrier':
	return`
	FRACTIONAL BARRIER
lv 10 7010082
lv 8 1222002 
lv 8 6181999 `
break

case 'dte earth':
case 'dte bumi':
	return`
	DTE EARTH 
lv 9 3210103
lv 8 1016646 
lv 8 4083005
lv 8 4046666 
lv 8 2020202 
lv 8 1010002 
lv 8 6010003
lv 8 2022222 
lv 7 3011143 
lv 7 2099876
lv 7 1016646
lv 7 1010142
lv 7 1011111
lv 6 7121252
lv 6 7010005 
lv 6 6010024
lv 6 5419191`
break

case 'dte wind':
case 'dte angin':
	return`
	DTE WIND
lv 9 3210101
lv 8 3062111
lv 8 3030303
lv 7 1010055
lv 7 7190001 
lv 7 4099876
lv 4 3030303 `

case 'dte fire':
	case 'dte api':
		return`
		DTE FIRE
lv 9 3210106
lv 8 7011001
lv 7 1012610 
lv 7 1010799 
lv 6 2010091
lv 2 1010101`
break

case 'dte water':
case 'dte air':
	return`
	DTE WATER 
lv 9 7120030
lv 9 3210100
lv 8 7011001 
lv 8 3030777 
lv 8 3062111 
lv 8 2260006 
lv 8 1110111
lv 7 3226325 
lv 7 3010018
lv 6 2173179
lv 4 1110007`
break

case 'dte dark':
case 'dte gelap':
	return`
	DTE DARK
lv 9 1010006 
lv 9 3210104
lv 9 5010092  
lv 8 7010023
lv 8 1016646 
lv 8 6010003 
lv 7 3030324
lv 7 1190072
lv 7 1010006`
break

case 'dte light':
case 'dte cahaya':
	return`
	DTE LIGHT 
lv 9 3210106
lv 9 1020345
lv 8 1020345 
lv 8 4046666 
lv 8 Rugio-Z-6
lv 6 4016699 
lv 6 7031000`
break

case 'dte netral':
	case 'dte natural':
	case 'dte normal':
		return`
		DTE NATURAL 
lv 9 3210102
lv 9 2010071
lv 9 1019696
lv 9 1016969
lv 8 3010095
lv 7 3099876
lv 7 1011902 
lv 6 6061294 
lv 6 4206969 
lv 6 1019696`
break
		}

	}
} 
