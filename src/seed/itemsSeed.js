const Item = require("../item/item.model");

const itemsSeed=[{
    "_id": {
      "$oid": "63209d45563ab3725d87cc2e"
    },
    "name": "Darwin's Game",
    "image": "https://cdn.myanimelist.net/images/anime/1016/107222.jpg",
    "votes": 6,
    "votation": {
      "$oid": "63209d45563ab3725d87cc28"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "63209d45563ab3725d87cc2c"
    },
    "name": "Tomodachi Game",
    "image": "https://cdn.myanimelist.net/images/anime/1247/121345.jpg",
    "votes": 4,
    "votation": {
      "$oid": "63209d45563ab3725d87cc28"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "631ffc2bbc6f7aa0cd0916f8"
    },
    "name": "Sword Art Online Movie: Ordinal Scale - Sword Art Offline",
    "image": "https://cdn.myanimelist.net/images/anime/12/87940.jpg",
    "votes": 1,
    "votation": {
      "$oid": "631ffc2abc6f7aa0cd0916f3"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6324ee6c4ec5c942c45029f6"
    },
    "name": "Fate/kaleid liner Prisma☆Illya",
    "image": "https://cdn.myanimelist.net/images/anime/1773/121542.jpg",
    "votes": 3,
    "votation": {
      "$oid": "6324ee6c4ec5c942c45029f2"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "632613cdfb0f049d9c270a39"
    },
    "name": "Love Live! School Idol Project",
    "image": "https://cdn.myanimelist.net/images/anime/11/56849.jpg",
    "votes": 1,
    "votation": {
      "$oid": "632613cdfb0f049d9c270a32"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "632613cdfb0f049d9c270a35"
    },
    "name": "Gakusen Toshi Asterisk",
    "image": "https://cdn.myanimelist.net/images/anime/5/76034.jpg",
    "votes": 2,
    "votation": {
      "$oid": "632613cdfb0f049d9c270a32"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "63200b2d44308cea87cd7722"
    },
    "name": "Sword Art Online: Sword Art Offline",
    "image": "https://cdn.myanimelist.net/images/anime/8/43461.jpg",
    "votes": 0,
    "votation": {
      "$oid": "63200b2d44308cea87cd7720"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "631ffc2bbc6f7aa0cd0916f5"
    },
    "name": "Sword Art Online: Sword Art Offline",
    "image": "https://cdn.myanimelist.net/images/anime/8/43461.jpg",
    "votes": 1,
    "votation": {
      "$oid": "631ffc2abc6f7aa0cd0916f3"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "63200b2d44308cea87cd7725"
    },
    "name": "Sword Gai",
    "image": "https://cdn.myanimelist.net/images/anime/8/76898.jpg",
    "votes": 0,
    "votation": {
      "$oid": "63200b2d44308cea87cd7720"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "632014e944308cea87cd775b"
    },
    "name": "Yuru Camp△ Movie",
    "image": "https://cdn.myanimelist.net/images/anime/1052/123863.jpg",
    "votes": 5,
    "votation": {
      "$oid": "632014e944308cea87cd7758"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6324ee6c4ec5c942c45029f7"
    },
    "name": "Fate/kaleid liner Prisma☆Illya Specials",
    "image": "https://cdn.myanimelist.net/images/anime/3/51235.jpg",
    "votes": 2,
    "votation": {
      "$oid": "6324ee6c4ec5c942c45029f2"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "63200b2d44308cea87cd7723"
    },
    "name": "Sword Art Online II: Sword Art Offline II",
    "image": "https://cdn.myanimelist.net/images/anime/3/68219.jpg",
    "votes": 0,
    "votation": {
      "$oid": "63200b2d44308cea87cd7720"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "63209d45563ab3725d87cc2d"
    },
    "name": "No Game No Life",
    "image": "https://cdn.myanimelist.net/images/anime/1074/111944.jpg",
    "votes": 7,
    "votation": {
      "$oid": "63209d45563ab3725d87cc28"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "63209d45563ab3725d87cc2a"
    },
    "name": "New Game!!",
    "image": "https://cdn.myanimelist.net/images/anime/4/86790.jpg",
    "votes": 11,
    "votation": {
      "$oid": "63209d45563ab3725d87cc28"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6324ee6c4ec5c942c45029f5"
    },
    "name": "Fate/Grand Carnival",
    "image": "https://cdn.myanimelist.net/images/anime/1239/117596.jpg",
    "votes": 2,
    "votation": {
      "$oid": "6324ee6c4ec5c942c45029f2"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "63200c9244308cea87cd7731"
    },
    "name": "Sword Art Online: Sword Art Offline - Extra Edition",
    "image": "https://cdn.myanimelist.net/images/anime/1944/122685.jpg",
    "votes": 1,
    "votation": {
      "$oid": "63200c9244308cea87cd772e"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "63200b2d44308cea87cd7724"
    },
    "name": "Sword Art Online: Sword Art Offline - Extra Edition",
    "image": "https://cdn.myanimelist.net/images/anime/1944/122685.jpg",
    "votes": 1,
    "votation": {
      "$oid": "63200b2d44308cea87cd7720"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "63200b2d44308cea87cd7726"
    },
    "name": "Sword of Phantasia",
    "image": "https://cdn.myanimelist.net/images/anime/11/84319.jpg",
    "votes": 0,
    "votation": {
      "$oid": "63200b2d44308cea87cd7720"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "63253a1f0fec54dfd60d1a9d"
    },
    "name": "angular",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
    "votes": 4,
    "votation": {
      "$oid": "63253a1f0fec54dfd60d1a99"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "631ffc2bbc6f7aa0cd0916f9"
    },
    "name": "Sword of Phantasia",
    "image": "https://cdn.myanimelist.net/images/anime/11/84319.jpg",
    "votes": 0,
    "votation": {
      "$oid": "631ffc2abc6f7aa0cd0916f3"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "632095b2563ab3725d87cb98"
    },
    "name": "Owari no Seraph",
    "image": "https://cdn.myanimelist.net/images/anime/5/73474.jpg",
    "votes": 3,
    "votation": {
      "$oid": "632095b1563ab3725d87cb94"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "632095b2563ab3725d87cb96"
    },
    "name": "Bleach: Sennen Kessen-hen",
    "image": "https://cdn.myanimelist.net/images/anime/1764/126627.jpg",
    "votes": 4,
    "votation": {
      "$oid": "632095b1563ab3725d87cb94"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6324ee6c4ec5c942c45029f8"
    },
    "name": "Fate/kaleid liner Prisma☆Illya 3rei!!",
    "image": "https://cdn.myanimelist.net/images/anime/7/80834.jpg",
    "votes": 1,
    "votation": {
      "$oid": "6324ee6c4ec5c942c45029f2"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "632613cdfb0f049d9c270a38"
    },
    "name": "Prison School",
    "image": "https://cdn.myanimelist.net/images/anime/1286/112161.jpg",
    "votes": 1,
    "votation": {
      "$oid": "632613cdfb0f049d9c270a32"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "63200c9244308cea87cd7732"
    },
    "name": "Sword Art Online II: Sword Art Offline II",
    "image": "https://cdn.myanimelist.net/images/anime/3/68219.jpg",
    "votes": 2,
    "votation": {
      "$oid": "63200c9244308cea87cd772e"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "63253a1f0fec54dfd60d1a9f"
    },
    "name": "astro",
    "image": "data:image/png;base64,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",
    "votes": 1,
    "votation": {
      "$oid": "63253a1f0fec54dfd60d1a99"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "632095b2563ab3725d87cb97"
    },
    "name": "Bleach",
    "image": "https://cdn.myanimelist.net/images/anime/3/40451.jpg",
    "votes": 2,
    "votation": {
      "$oid": "632095b1563ab3725d87cb94"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6325fdd1d5040f56024b0281"
    },
    "name": "jugo de mango",
    "image": "https://cdn.colombia.com/gastronomia/2011/08/03/jugo-de-mango-1610-1.gif",
    "votes": 3,
    "votation": {
      "$oid": "6325fdd1d5040f56024b027e"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6325fdd1d5040f56024b0283"
    },
    "name": "juego de papaya",
    "image": "data:image/jpeg;base64,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",
    "votes": 3,
    "votation": {
      "$oid": "6325fdd1d5040f56024b027e"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "632613cdfb0f049d9c270a36"
    },
    "name": "School Days",
    "image": "https://cdn.myanimelist.net/images/anime/1593/122440.jpg",
    "votes": 1,
    "votation": {
      "$oid": "632613cdfb0f049d9c270a32"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "632095b2563ab3725d87cb99"
    },
    "name": "Owari no Seraph: The Beginning of the End",
    "image": "https://cdn.myanimelist.net/images/anime/13/76490.jpg",
    "votes": 1,
    "votation": {
      "$oid": "632095b1563ab3725d87cb94"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "632014e944308cea87cd775c"
    },
    "name": "Yuru Yuri Nachuyachumi!",
    "image": "https://cdn.myanimelist.net/images/anime/2/73281.jpg",
    "votes": 3,
    "votation": {
      "$oid": "632014e944308cea87cd7758"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "632014e944308cea87cd775e"
    },
    "name": "Yama no Susume",
    "image": "https://cdn.myanimelist.net/images/anime/7/75525.jpg",
    "votes": 4,
    "votation": {
      "$oid": "632014e944308cea87cd7758"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "63209d45563ab3725d87cc2b"
    },
    "name": "New Game!",
    "image": "https://cdn.myanimelist.net/images/anime/9/80417.jpg",
    "votes": 10,
    "votation": {
      "$oid": "63209d45563ab3725d87cc28"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "63253a1f0fec54dfd60d1a9e"
    },
    "name": "svelte",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png",
    "votes": 1,
    "votation": {
      "$oid": "63253a1f0fec54dfd60d1a99"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "631ffc2bbc6f7aa0cd0916f6"
    },
    "name": "Sword Art Online: Sword Art Offline - Extra Edition",
    "image": "https://cdn.myanimelist.net/images/anime/1944/122685.jpg",
    "votes": 0,
    "votation": {
      "$oid": "631ffc2abc6f7aa0cd0916f3"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6324ee6c4ec5c942c45029f4"
    },
    "name": "Fate/stay night",
    "image": "https://cdn.myanimelist.net/images/anime/4/30327.jpg",
    "votes": 1,
    "votation": {
      "$oid": "6324ee6c4ec5c942c45029f2"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6325fdd1d5040f56024b0282"
    },
    "name": "jugo de fresa",
    "image": "https://mejorconsalud.as.com/wp-content/uploads/2013/06/batido-de-avena-fresa-500x331.jpg",
    "votes": 1,
    "votation": {
      "$oid": "6325fdd1d5040f56024b027e"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "63200c9244308cea87cd7734"
    },
    "name": "Sword Gai",
    "image": "https://cdn.myanimelist.net/images/anime/8/76898.jpg",
    "votes": 1,
    "votation": {
      "$oid": "63200c9244308cea87cd772e"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "632095b2563ab3725d87cb9a"
    },
    "name": "Owari no Seraph: Nagoya Kessen-hen",
    "image": "https://cdn.myanimelist.net/images/anime/9/76632.jpg",
    "votes": 2,
    "votation": {
      "$oid": "632095b1563ab3725d87cb94"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6325fdd1d5040f56024b0285"
    },
    "name": "jugo de zanahorias",
    "image": "https://t2.uc.ltmcdn.com/es/posts/9/8/1/como_hacer_zumo_de_zanahoria_26189_orig.jpg",
    "votes": 2,
    "votation": {
      "$oid": "6325fdd1d5040f56024b027e"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "631ffc2bbc6f7aa0cd0916f7"
    },
    "name": "Sword Art Online II: Sword Art Offline II",
    "image": "https://cdn.myanimelist.net/images/anime/3/68219.jpg",
    "votes": 0,
    "votation": {
      "$oid": "631ffc2abc6f7aa0cd0916f3"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "63200c9244308cea87cd7733"
    },
    "name": "Sword of Phantasia",
    "image": "https://cdn.myanimelist.net/images/anime/11/84319.jpg",
    "votes": 1,
    "votation": {
      "$oid": "63200c9244308cea87cd772e"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "63200c9244308cea87cd7730"
    },
    "name": "Sword Art Online: Sword Art Offline",
    "image": "https://cdn.myanimelist.net/images/anime/8/43461.jpg",
    "votes": 2,
    "votation": {
      "$oid": "63200c9244308cea87cd772e"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "63253a1f0fec54dfd60d1a9b"
    },
    "name": "react",
    "image": "https://cms-assets.tutsplus.com/cdn-cgi/image/width=400/uploads/users/1125/posts/30546/preview_image/RN.jpg",
    "votes": 6,
    "votation": {
      "$oid": "63253a1f0fec54dfd60d1a99"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "63253a1f0fec54dfd60d1a9c"
    },
    "name": "vue",
    "image": "https://www.dotcom-monitor.com/blog/wp-content/uploads/sites/3/2020/05/Vue-logo-1.png",
    "votes": 4,
    "votation": {
      "$oid": "63253a1f0fec54dfd60d1a99"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "632014e944308cea87cd775a"
    },
    "name": "Yuru Camp△",
    "image": "https://cdn.myanimelist.net/images/anime/4/89877.jpg",
    "votes": 2,
    "votation": {
      "$oid": "632014e944308cea87cd7758"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6325fdd1d5040f56024b0284"
    },
    "name": "juego de platanos",
    "image": "https://cdn7.kiwilimon.com/recetaimagen/20383/16777.jpg",
    "votes": 1,
    "votation": {
      "$oid": "6325fdd1d5040f56024b027e"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "632613cdfb0f049d9c270a37"
    },
    "name": "School Rumble",
    "image": "https://cdn.myanimelist.net/images/anime/4/75488.jpg",
    "votes": 0,
    "votation": {
      "$oid": "632613cdfb0f049d9c270a32"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "632014e944308cea87cd775d"
    },
    "name": "Yuru Yuri San☆Hai!",
    "image": "https://cdn.myanimelist.net/images/anime/7/76667.jpg",
    "votes": 3,
    "votation": {
      "$oid": "632014e944308cea87cd7758"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "651a2dd0edeabcdf1287bdfc"
    },
    "name": "AI no Idenshi",
    "image": "https://cdn.myanimelist.net/images/anime/1706/136176.jpg",
    "votes": 1,
    "votation": {
      "$oid": "651a2dd0edeabcdf1287bdf9"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "651a2dd0edeabcdf1287bdfd"
    },
    "name": "Ayaka",
    "image": "https://cdn.myanimelist.net/images/anime/1406/136367.jpg",
    "votes": 1,
    "votation": {
      "$oid": "651a2dd0edeabcdf1287bdf9"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "651a2dd0edeabcdf1287bdfe"
    },
    "name": "BanG Dream! It's MyGO!!!!!",
    "image": "https://cdn.myanimelist.net/images/anime/1891/136948.jpg",
    "votes": 0,
    "votation": {
      "$oid": "651a2dd0edeabcdf1287bdf9"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "651a2dd0edeabcdf1287be02"
    },
    "name": "Dark Gathering",
    "image": "https://cdn.myanimelist.net/images/anime/1346/138731.jpg",
    "votes": 2,
    "votation": {
      "$oid": "651a2dd0edeabcdf1287bdf9"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "651a2dd0edeabcdf1287be01"
    },
    "name": "Cardfight!! Vanguard: will+Dress Season 3",
    "image": "https://cdn.myanimelist.net/images/anime/1739/136945.jpg",
    "votes": 0,
    "votation": {
      "$oid": "651a2dd0edeabcdf1287bdf9"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "651a2dd0edeabcdf1287be03"
    },
    "name": "Dekiru Neko wa Kyou mo Yuuutsu",
    "image": "https://cdn.myanimelist.net/images/anime/1074/136720.jpg",
    "votes": 1,
    "votation": {
      "$oid": "651a2dd0edeabcdf1287bdf9"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "651a2dd0edeabcdf1287be04"
    },
    "name": "Eiyuu Kyoushitsu",
    "image": "https://cdn.myanimelist.net/images/anime/1179/136000.jpg",
    "votes": 1,
    "votation": {
      "$oid": "651a2dd0edeabcdf1287bdf9"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "651a2dd0edeabcdf1287be05"
    },
    "name": "Genjitsu no Yohane: Sunshine in the Mirror",
    "image": "https://cdn.myanimelist.net/images/anime/1208/133335.jpg",
    "votes": 1,
    "votation": {
      "$oid": "651a2dd0edeabcdf1287bdf9"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "651a2dd0edeabcdf1287be06"
    },
    "name": "Hataraku Maou-sama!! 2nd Season",
    "image": "https://cdn.myanimelist.net/images/anime/1392/136670.jpg",
    "votes": 0,
    "votation": {
      "$oid": "651a2dd0edeabcdf1287bdf9"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "651a2dd0edeabcdf1287be07"
    },
    "name": "Helck",
    "image": "https://cdn.myanimelist.net/images/anime/1002/138524.jpg",
    "votes": 0,
    "votation": {
      "$oid": "651a2dd0edeabcdf1287bdf9"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "651a2dd0edeabcdf1287be08"
    },
    "name": "Hibike! Euphonium: Ensemble Contest-hen",
    "image": "https://cdn.myanimelist.net/images/anime/1952/135162.jpg",
    "votes": 0,
    "votation": {
      "$oid": "651a2dd0edeabcdf1287bdf9"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "651a2dd0edeabcdf1287be09"
    },
    "name": "Higeki no Genkyou to Naru Saikyou Gedou Last Boss Joou wa Tami no Tame ni Tsukushimasu. Mini",
    "image": "https://cdn.myanimelist.net/images/anime/1620/137131.jpg",
    "votes": 0,
    "votation": {
      "$oid": "651a2dd0edeabcdf1287bdf9"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "651a2dd0edeabcdf1287be0a"
    },
    "name": "Horimiya: Piece",
    "image": "https://cdn.myanimelist.net/images/anime/1007/136277.jpg",
    "votes": 1,
    "votation": {
      "$oid": "651a2dd0edeabcdf1287bdf9"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "651a2dd0edeabcdf1287be0b"
    },
    "name": "Jidou Hanbaiki ni Umarekawatta Ore wa Meikyuu wo Samayou",
    "image": "https://cdn.myanimelist.net/images/anime/1653/136097.jpg",
    "votes": 1,
    "votation": {
      "$oid": "651a2dd0edeabcdf1287bdf9"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "651a2dd0edeabcdf1287be0d"
    },
    "name": "Jujutsu Kaisen 2nd Season",
    "image": "https://cdn.myanimelist.net/images/anime/1792/138022.jpg",
    "votes": 1,
    "votation": {
      "$oid": "651a2dd0edeabcdf1287bdf9"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "651a2dd0edeabcdf1287be0c"
    },
    "name": "Jitsu wa Ore, Saikyou deshita?",
    "image": "https://cdn.myanimelist.net/images/anime/1963/138464.jpg",
    "votes": 0,
    "votation": {
      "$oid": "651a2dd0edeabcdf1287bdf9"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "651a2dd0edeabcdf1287be0e"
    },
    "name": "Kanojo, Okarishimasu 3rd Season",
    "image": "https://cdn.myanimelist.net/images/anime/1696/136634.jpg",
    "votes": 1,
    "votation": {
      "$oid": "651a2dd0edeabcdf1287bdf9"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "651a2dd0edeabcdf1287be0f"
    },
    "name": "Level 1 dakedo Unique Skill de Saikyou desu",
    "image": "https://cdn.myanimelist.net/images/anime/1579/136295.jpg",
    "votes": 0,
    "votation": {
      "$oid": "651a2dd0edeabcdf1287bdf9"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "651a2dd0edeabcdf1287be10"
    },
    "name": "Liar Liar",
    "image": "https://cdn.myanimelist.net/images/anime/1571/134525.jpg",
    "votes": 0,
    "votation": {
      "$oid": "651a2dd0edeabcdf1287bdf9"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "651a2dd0edeabcdf1287bdff"
    },
    "name": "Bleach: Sennen Kessen-hen - Ketsubetsu-tan",
    "image": "https://cdn.myanimelist.net/images/anime/1164/138058.jpg",
    "votes": 0,
    "votation": {
      "$oid": "651a2dd0edeabcdf1287bdf9"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "651a2dd0edeabcdf1287be00"
    },
    "name": "Bungou Stray Dogs 5th Season",
    "image": "https://cdn.myanimelist.net/images/anime/1161/136691.jpg",
    "votes": 0,
    "votation": {
      "$oid": "651a2dd0edeabcdf1287bdf9"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "651a2dd0edeabcdf1287be13"
    },
    "name": "Masamune-kun no Revenge R",
    "image": "https://cdn.myanimelist.net/images/anime/1667/135587.jpg",
    "votes": 0,
    "votation": {
      "$oid": "651a2dd0edeabcdf1287bdf9"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "651a2dd0edeabcdf1287be14"
    },
    "name": "Mononogatari 2nd Season",
    "image": "https://cdn.myanimelist.net/images/anime/1111/135927.jpg",
    "votes": 0,
    "votation": {
      "$oid": "651a2dd0edeabcdf1287bdf9"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "651a2dd0edeabcdf1287be15"
    },
    "name": "Mushoku Tensei II: Isekai Ittara Honki Dasu",
    "image": "https://cdn.myanimelist.net/images/anime/1898/138005.jpg",
    "votes": 1,
    "votation": {
      "$oid": "651a2dd0edeabcdf1287bdf9"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "651a2dd0edeabcdf1287be16"
    },
    "name": "Nanatsu no Maken ga Shihai suru",
    "image": "https://cdn.myanimelist.net/images/anime/1396/136273.jpg",
    "votes": 1,
    "votation": {
      "$oid": "651a2dd0edeabcdf1287bdf9"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "651a2dd0edeabcdf1287be19"
    },
    "name": "Ryza no Atelier: Tokoyami no Joou to Himitsu no Kakurega",
    "image": "https://cdn.myanimelist.net/images/anime/1079/136949.jpg",
    "votes": 1,
    "votation": {
      "$oid": "651a2dd0edeabcdf1287bdf9"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "651a2dd0edeabcdf1287be18"
    },
    "name": "Rurouni Kenshin: Meiji Kenkaku Romantan (2023)",
    "image": "https://cdn.myanimelist.net/images/anime/1599/136532.jpg",
    "votes": 1,
    "votation": {
      "$oid": "651a2dd0edeabcdf1287bdf9"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "651a2dd0edeabcdf1287be17"
    },
    "name": "Okashi na Tensei",
    "image": "https://cdn.myanimelist.net/images/anime/1251/136232.jpg",
    "votes": 0,
    "votation": {
      "$oid": "651a2dd0edeabcdf1287bdf9"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "651a2dd0edeabcdf1287be11"
    },
    "name": "Love Live! Nijigasaki Gakuen School Idol Doukoukai: Next Sky",
    "image": "https://cdn.myanimelist.net/images/anime/1515/134847.jpg",
    "votes": 0,
    "votation": {
      "$oid": "651a2dd0edeabcdf1287bdf9"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "651a2dd0edeabcdf1287be12"
    },
    "name": "Lv1 Maou to One Room Yuusha",
    "image": "https://cdn.myanimelist.net/images/anime/1879/136721.jpg",
    "votes": 0,
    "votation": {
      "$oid": "651a2dd0edeabcdf1287bdf9"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6694a4fe8bf5cb71674f2a5f"
    },
    "name": "Tsue to Tsurugi no Wistoria",
    "image": "https://cdn.myanimelist.net/images/anime/1281/144104.jpg",
    "votes": 6,
    "votation": {
      "$oid": "6694a4fd8bf5cb71674f2a5c"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6694a4fe8bf5cb71674f2a60"
    },
    "name": "Tokidoki Bosotto Russia-go de Dereru Tonari no Alya-san",
    "image": "https://cdn.myanimelist.net/images/anime/1825/142258.jpg",
    "votes": 7,
    "votation": {
      "$oid": "6694a4fd8bf5cb71674f2a5c"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6694a4fe8bf5cb71674f2a61"
    },
    "name": "Kami no Tou: Ouji no Kikan",
    "image": "https://cdn.myanimelist.net/images/anime/1107/143536.jpg",
    "votes": 3,
    "votation": {
      "$oid": "6694a4fd8bf5cb71674f2a5c"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6694a4fe8bf5cb71674f2a65"
    },
    "name": "Hazurewaku no \"Joutai Ijou Skill\" de Saikyou ni Natta Ore ga Subete wo Juurin suru made",
    "image": "https://cdn.myanimelist.net/images/anime/1914/143630.jpg",
    "votes": 1,
    "votation": {
      "$oid": "6694a4fd8bf5cb71674f2a5c"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6694a4fe8bf5cb71674f2a64"
    },
    "name": "Giji Harem",
    "image": "https://cdn.myanimelist.net/images/anime/1607/143547.jpg",
    "votes": 2,
    "votation": {
      "$oid": "6694a4fd8bf5cb71674f2a5c"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6694a4fe8bf5cb71674f2a66"
    },
    "name": "Senpai wa Otokonoko",
    "image": "https://cdn.myanimelist.net/images/anime/1716/142875.jpg",
    "votes": 0,
    "votation": {
      "$oid": "6694a4fd8bf5cb71674f2a5c"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6694a4fe8bf5cb71674f2a68"
    },
    "name": "Isekai Shikkaku",
    "image": "https://cdn.myanimelist.net/images/anime/1252/143457.jpg",
    "votes": 2,
    "votation": {
      "$oid": "6694a4fd8bf5cb71674f2a5c"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6694a4fe8bf5cb71674f2a67"
    },
    "name": "\"Oshi no Ko\" 2nd Season",
    "image": "https://cdn.myanimelist.net/images/anime/1006/143302.jpg",
    "votes": 3,
    "votation": {
      "$oid": "6694a4fd8bf5cb71674f2a5c"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6694a4fe8bf5cb71674f2a69"
    },
    "name": "Mayonaka Punch",
    "image": "https://cdn.myanimelist.net/images/anime/1700/143395.jpg",
    "votes": 4,
    "votation": {
      "$oid": "6694a4fd8bf5cb71674f2a5c"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6694a4fe8bf5cb71674f2a6a"
    },
    "name": "Shinmai Ossan Boukensha, Saikyou Party ni Shinu hodo Kitaerarete Muteki ni Naru.",
    "image": "https://cdn.myanimelist.net/images/anime/1007/141625.jpg",
    "votes": 2,
    "votation": {
      "$oid": "6694a4fd8bf5cb71674f2a5c"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6694a4fe8bf5cb71674f2a6b"
    },
    "name": "Shy 2nd Season",
    "image": "https://cdn.myanimelist.net/images/anime/1518/143558.jpg",
    "votes": 0,
    "votation": {
      "$oid": "6694a4fd8bf5cb71674f2a5c"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6694a4fe8bf5cb71674f2a6c"
    },
    "name": "Tasuuketsu",
    "image": "https://cdn.myanimelist.net/images/anime/1482/143629.jpg",
    "votes": 0,
    "votation": {
      "$oid": "6694a4fd8bf5cb71674f2a5c"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6694a4fe8bf5cb71674f2a6e"
    },
    "name": "Ore wa Subete wo \"Parry\" suru: Gyaku Kanchigai no Sekai Saikyou wa Boukensha ni Naritai",
    "image": "https://cdn.myanimelist.net/images/anime/1747/143101.jpg",
    "votes": 0,
    "votation": {
      "$oid": "6694a4fd8bf5cb71674f2a5c"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6694a4fe8bf5cb71674f2a6d"
    },
    "name": "Megami no Café Terrace 2nd Season",
    "image": "https://cdn.myanimelist.net/images/anime/1606/141394.jpg",
    "votes": 0,
    "votation": {
      "$oid": "6694a4fd8bf5cb71674f2a5c"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6694a4fe8bf5cb71674f2a6f"
    },
    "name": "Na Nare Hana Nare",
    "image": "https://cdn.myanimelist.net/images/anime/1430/143526.jpg",
    "votes": 1,
    "votation": {
      "$oid": "6694a4fd8bf5cb71674f2a5c"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6694a4fe8bf5cb71674f2a70"
    },
    "name": "Yozakura-san Chi no Daisakusen",
    "image": "https://cdn.myanimelist.net/images/anime/1674/143715.jpg",
    "votes": 0,
    "votation": {
      "$oid": "6694a4fd8bf5cb71674f2a5c"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6694a4fe8bf5cb71674f2a71"
    },
    "name": "Fairy Tail: 100-nen Quest",
    "image": "https://cdn.myanimelist.net/images/anime/1087/144083.jpg",
    "votes": 0,
    "votation": {
      "$oid": "6694a4fd8bf5cb71674f2a5c"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6694a4fe8bf5cb71674f2a72"
    },
    "name": "VTuber Nandaga Haishin Kiri Wasuretara Densetsu ni Natteta",
    "image": "https://cdn.myanimelist.net/images/anime/1575/143115.jpg",
    "votes": 1,
    "votation": {
      "$oid": "6694a4fd8bf5cb71674f2a5c"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6694a4fe8bf5cb71674f2a63"
    },
    "name": "Gimai Seikatsu",
    "image": "https://cdn.myanimelist.net/images/anime/1420/143707.jpg",
    "votes": 2,
    "votation": {
      "$oid": "6694a4fd8bf5cb71674f2a5c"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6694a4fe8bf5cb71674f2a62"
    },
    "name": "Shikanoko Nokonoko Koshitantan",
    "image": "https://cdn.myanimelist.net/images/anime/1094/143324.jpg",
    "votes": 2,
    "votation": {
      "$oid": "6694a4fd8bf5cb71674f2a5c"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6694a4fe8bf5cb71674f2a76"
    },
    "name": "Nige Jouzu no Wakagimi",
    "image": "https://cdn.myanimelist.net/images/anime/1386/140401.jpg",
    "votes": 1,
    "votation": {
      "$oid": "6694a4fd8bf5cb71674f2a5c"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6694a4fe8bf5cb71674f2a75"
    },
    "name": "Make Heroine ga Oosugiru!",
    "image": "https://cdn.myanimelist.net/images/anime/1332/143513.jpg",
    "votes": 3,
    "votation": {
      "$oid": "6694a4fd8bf5cb71674f2a5c"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6694a4fe8bf5cb71674f2a77"
    },
    "name": "Naze Boku no Sekai wo Daremo Oboeteinai no ka?",
    "image": "https://cdn.myanimelist.net/images/anime/1780/142909.jpg",
    "votes": 0,
    "votation": {
      "$oid": "6694a4fd8bf5cb71674f2a5c"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6694a4fe8bf5cb71674f2a78"
    },
    "name": "Mob kara Hajimaru Tansaku Eiyuutan",
    "image": "https://cdn.myanimelist.net/images/anime/1578/143664.jpg",
    "votes": 0,
    "votation": {
      "$oid": "6694a4fd8bf5cb71674f2a5c"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6694a4fe8bf5cb71674f2a79"
    },
    "name": "Madougushi Dahliya wa Utsumukanai",
    "image": "https://cdn.myanimelist.net/images/anime/1572/144060.jpg",
    "votes": 0,
    "votation": {
      "$oid": "6694a4fd8bf5cb71674f2a5c"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6694a4fe8bf5cb71674f2a7a"
    },
    "name": "Tensui no Sakuna-hime",
    "image": "https://cdn.myanimelist.net/images/anime/1888/143803.jpg",
    "votes": 0,
    "votation": {
      "$oid": "6694a4fd8bf5cb71674f2a5c"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6694a4fe8bf5cb71674f2a7b"
    },
    "name": "Boku no Tsuma wa Kanjou ga Nai",
    "image": "https://cdn.myanimelist.net/images/anime/1101/143646.jpg",
    "votes": 0,
    "votation": {
      "$oid": "6694a4fd8bf5cb71674f2a5c"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6694a4fe8bf5cb71674f2a7c"
    },
    "name": "Kono Sekai wa Fukanzen Sugiru",
    "image": "https://cdn.myanimelist.net/images/anime/1187/141847.jpg",
    "votes": 0,
    "votation": {
      "$oid": "6694a4fd8bf5cb71674f2a5c"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6694a4fe8bf5cb71674f2a7d"
    },
    "name": "Dungeon no Naka no Hito",
    "image": "https://cdn.myanimelist.net/images/anime/1026/143505.jpg",
    "votes": 0,
    "votation": {
      "$oid": "6694a4fd8bf5cb71674f2a5c"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6694a4fe8bf5cb71674f2a7e"
    },
    "name": "Bye Bye, Earth",
    "image": "https://cdn.myanimelist.net/images/anime/1262/142076.jpg",
    "votes": 0,
    "votation": {
      "$oid": "6694a4fd8bf5cb71674f2a5c"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6694a4fe8bf5cb71674f2a7f"
    },
    "name": "NieR:Automata Ver1.1a Part 2",
    "image": "https://cdn.myanimelist.net/images/anime/1364/143539.jpg",
    "votes": 0,
    "votation": {
      "$oid": "6694a4fd8bf5cb71674f2a5c"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6694a4fe8bf5cb71674f2a80"
    },
    "name": "Elf-san wa Yaserarenai.",
    "image": "https://cdn.myanimelist.net/images/anime/1382/143437.jpg",
    "votes": 0,
    "votation": {
      "$oid": "6694a4fd8bf5cb71674f2a5c"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6694a4fe8bf5cb71674f2a81"
    },
    "name": "Monogatari Series: Off & Monster Season",
    "image": "https://cdn.myanimelist.net/images/anime/1741/140952.jpg",
    "votes": 1,
    "votation": {
      "$oid": "6694a4fd8bf5cb71674f2a5c"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6694a4fe8bf5cb71674f2a73"
    },
    "name": "Shoushimin Series",
    "image": "https://cdn.myanimelist.net/images/anime/1164/143459.jpg",
    "votes": 4,
    "votation": {
      "$oid": "6694a4fd8bf5cb71674f2a5c"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6694a4fe8bf5cb71674f2a74"
    },
    "name": "Atri: My Dear Moments",
    "image": "https://cdn.myanimelist.net/images/anime/1825/143408.jpg",
    "votes": 1,
    "votation": {
      "$oid": "6694a4fd8bf5cb71674f2a5c"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "66984399eb55824bef1d904e"
    },
    "name": "Shoushimin Series",
    "image": "https://cdn.myanimelist.net/images/anime/1164/143459.jpg",
    "votes": 2,
    "votation": {
      "$oid": "66984399eb55824bef1d904a"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "66984399eb55824bef1d9051"
    },
    "name": "Tsue to Tsurugi no Wistoria",
    "image": "https://cdn.myanimelist.net/images/anime/1281/144104.jpg",
    "votes": 3,
    "votation": {
      "$oid": "66984399eb55824bef1d904a"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "66984399eb55824bef1d9052"
    },
    "name": "Tokidoki Bosotto Russia-go de Dereru Tonari no Alya-san",
    "image": "https://cdn.myanimelist.net/images/anime/1825/142258.jpg",
    "votes": 2,
    "votation": {
      "$oid": "66984399eb55824bef1d904a"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "66984399eb55824bef1d9050"
    },
    "name": "Make Heroine ga Oosugiru!",
    "image": "https://cdn.myanimelist.net/images/anime/1332/143513.jpg",
    "votes": 1,
    "votation": {
      "$oid": "66984399eb55824bef1d904a"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "66984399eb55824bef1d904f"
    },
    "name": "Fairy Tail: 100-nen Quest",
    "image": "https://cdn.myanimelist.net/images/anime/1087/144083.jpg",
    "votes": 1,
    "votation": {
      "$oid": "66984399eb55824bef1d904a"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6698556ceb55824bef1d90a5"
    },
    "name": "Druaga no Tou: The Sword of Uruk",
    "image": "https://cdn.myanimelist.net/images/anime/9/75647.jpg",
    "votes": 0,
    "votation": {
      "$oid": "6698556ceb55824bef1d90a1"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6698556ceb55824bef1d90a6"
    },
    "name": "Bleach: The Sealed Sword Frenzy",
    "image": "https://cdn.myanimelist.net/images/anime/1/834.jpg",
    "votes": 0,
    "votation": {
      "$oid": "6698556ceb55824bef1d90a1"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6698556ceb55824bef1d90a8"
    },
    "name": "Sword Art Online II",
    "image": "https://cdn.myanimelist.net/images/anime/1223/121999.jpg",
    "votes": 0,
    "votation": {
      "$oid": "6698556ceb55824bef1d90a1"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6698556ceb55824bef1d90a7"
    },
    "name": "High & Low: G-Sword",
    "image": "https://cdn.myanimelist.net/images/anime/2/84765.jpg",
    "votes": 0,
    "votation": {
      "$oid": "6698556ceb55824bef1d90a1"
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "6698556ceb55824bef1d90a9"
    },
    "name": "Sword Art Online: Alicization",
    "image": "https://cdn.myanimelist.net/images/anime/1993/93837.jpg",
    "votes": 0,
    "votation": {
      "$oid": "6698556ceb55824bef1d90a1"
    },
    "__v": 0
  }];

  const insertItems = async () => {
    try {
    
        // Limpia la colección antes de insertar
        await Item.deleteMany({});
    
        // Itera sobre el array y guarda cada item
        for (const item of itemsSeed) {
          const newItem = new Item({
            _id: item._id.$oid,
            name: item.name,
            image: item.image,
            votes: item.votes,
            votation: item.votation.$oid,
          });
          await newItem.save();
        }
    
        console.log("Items insertados correctamente");
      } catch (error) {
        console.error("Error al insertar los items:", error);
      } finally {
        // Desconecta de la base de datos
      }
  };

  module.exports={
    insertItems
  };