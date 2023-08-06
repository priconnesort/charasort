dataSetVersion = "2023-08-04"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Guild",
    key: "Guild",
    tooltip: "Check this to restrict to certain Guilds.",
    checked: false,
    sub: [
      { name: "Bishokuden", key: "Bishokuden" },
      { name: "Twinkle Wish", key: "TW" },
	  { name: "Labyrinth", key: "Laby" },
	  { name: "Carmina", key: "Carmina" },
	  { name: "Little Lyrical", key: "LL" },
	  { name: "Forestier", key: "Forest" },
	  { name: "Diabolos", key: "Diabolos" },
	  { name: "Nightmare", key: "Nightmare" },
	  { name: "Sarendia", key: "Sarendia" },
	  { name: "Caon", key: "Caon" },
	  { name: "Elizabeth Park", key: "Park" },
	  { name: "Mercurius Foundation", key: "Merc" },
	  { name: "Twilight Caravan", key: "Caravan" },
	  { name: "Lucent Academy", key: "Lucent" },
	  { name: "Weißflügel", key: "weiss" },
	  { name: "Nakayoshi-bu", key: "nakayoshi" },
	  { name: "Dragon's Nest", key: "dragon" },
	  { name: "Rage Legion", key: "rage" },
	  { name: "Alter Maiden", key: "alter" },
	  { name: "Geo Theogonia", key: "geo" },
 	  { name: "Manaria Friends", key: "manaria" },
	  { name: "unaffiliated", key: "other" },
	  { name: "collabs", key: "collab" }
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Pecorine",
    img: "l0ub3i.webp",
    opts: { Guild: ["Bishokuden"]
    }
  },
  
  {
    name: "Kokkoro",
    img: "w88d0d.webp",
    opts: { Guild: ["Bishokuden"]
    }
  },
  
  {
    name: "Kyaru",
    img: "sptwgr.webp",
    opts: { Guild: ["Bishokuden"]
    }
  },
  
  {
    name: "Sheffi",
    img: "bijyht.webp",
    opts: { Guild: ["Bishokuden"]
    }
  },
  
  {
    name: "Yui",
    img: "5fzmb9.webp",
    opts: { Guild: ["TW"] }
  },
  
  {
    name: "Hiyori",
    img: "gnp3yg.webp",
    opts: { Guild: ["TW"] }
  },
  
  {
    name: "Rei",
    img: "fhv3kz.webp",
    opts: { Guild: ["TW"] }
  },
  
  {
    name: "Rino",
    img: "e6e39x.webp",
    opts: { Guild: ["Laby"] }
  },
  
  {
    name: "Shizuru",
    img: "4wfnni.webp",
    opts: { Guild: ["Laby"] }
  },
  
  {
    name: "Labyrista",
    img: "awf710.webp",
    opts: { Guild: ["Laby"] }
  },
  
  {
    name: "Tsumugi",
    img: "fxxqab.webp",
    opts: { Guild: ["Carmina"] }
  },
  
   {
    name: "Chika",
    img: "b4jsh8.webp",
    opts: { Guild: ["Carmina"] }
  },
  
  {
    name: "Nozomi",
    img: "seiswa.webp",
    opts: { Guild: ["Carmina"] }
  },
  
    {
    name: "Mimi",
    img: "b4alxx.webp",
    opts: { Guild: ["LL"] }
  },
  
   {
    name: "Misogi",
    img: "20oksz.webp",
    opts: { Guild: ["LL"] }
  },
  
  {
    name: "Kyouka",
    img: "cyzqxu.webp",
    opts: { Guild: ["LL"] }
  },
  
  {
    name: "Hatsune",
    img: "mhh3xd.webp",
    opts: { Guild: ["Forest"] }
  },
  
  {
    name: "Aoi",
    img: "7oyi2t.webp",
    opts: { Guild: ["Forest"] }
  },
  
  {
    name: "Misato",
    img: "2z0w98.webp",
    opts: { Guild: ["Forest"] }
  },
  
  {
    name: "Akari",
    img: "j0dknu.webp",
    opts: { Guild: ["Diabolos"] }
  },
  
   {
    name: "Yori",
    img: "kyef85.webp",
    opts: { Guild: ["Diabolos"] }
  },
  
    {
    name: "Illya",
    img: "c98xk7.webp",
    opts: { Guild: ["Diabolos"] }
  },
  
    {
    name: "Shinobu",
    img: "x5cmlt.webp",
    opts: { Guild: ["Diabolos"] }
  },
  
    {
    name: "Miyako",
    img: "lm4gub.webp",
    opts: { Guild: ["Diabolos"] }
  },
  
   {
    name: "Christina",
    img: "1m2x2v.webp",
    opts: { Guild: ["Nightmare"] }
  },
  
  {
    name: "Jun",
    img: "nl3bk9.webp",
    opts: { Guild: ["Nightmare"] }
  },
  
    {
    name: "Tomo",
    img: "l82576.webp",
    opts: { Guild: ["Nightmare"] }
  },
  
    {
    name: "Matsuri",
    img: "it9lku.webp",
    opts: { Guild: ["Nightmare"] }
  },
  
   {
    name: "Kurumi",
    img: "1f8wa3.webp",
    opts: { Guild: ["Sarendia"] }
  },
  
   {
    name: "Saren",
    img: "r4jzut.webp",
    opts: { Guild: ["Sarendia"] }
  },
  
  {
    name: "Suzume",
    img: "g9m41f.webp",
    opts: { Guild: ["Sarendia"] }
  },
  
  {
    name: "Ayane",
    img: "k3dasq.webp",
    opts: { Guild: ["Sarendia"] }
  },
  
  {
    name: "Makoto",
    img: "dtirg9.webp",
    opts: { Guild: ["Caon"] }
  },
  
  {
    name: "Maho",
    img: "w0vj4q.webp",
    opts: { Guild: ["Caon"] }
  },
  
  {
    name: "Kasumi",
    img: "gz6s7e.webp",
    opts: { Guild: ["Caon"] }
  },
  
  {
    name: "Kaori",
    img: "34zj0t.webp",
    opts: { Guild: ["Caon"] }
  },
  
  {
    name: "Rin",
    img: "5j2v9y.webp",
    opts: { Guild: ["Park"] }
  },
  
  {
    name: "Mahiru",
    img: "fre8k0.webp",
    opts: { Guild: ["Park"] }
  },
  
  {
    name: "Rima",
    img: "eprnbn.webp",
    opts: { Guild: ["Park"] }
  },
  
  {
    name: "Shiori",
    img: "ezo7a7.webp",
    opts: { Guild: ["Park"] }
  },
  
  {
    name: "Yukari",
    img: "5xo5vu.webp",
    opts: { Guild: ["Merc"] }
  },
  
  {
    name: "Mifuyu",
    img: "mlsd7s.webp",
    opts: { Guild: ["Merc"] }
  },
  
  {
    name: "Akino",
    img: "85g05p.webp",
    opts: { Guild: ["Merc"] }
  },
  
  {
    name: "Tamaki",
    img: "s0n1de.webp",
    opts: { Guild: ["Merc"] }
  },
  
  {
    name: "Anna",
    img: "b0a5xo.webp",
    opts: { Guild: ["Caravan"] }
  },
  
  {
    name: "Eriko",
    img: "kkgfwt.webp",
    opts: { Guild: ["Caravan"] }
  },
  
  {
    name: "Ruka",
    img: "a3uvvo.webp",
    opts: { Guild: ["Caravan"] }
  },
  
  {
    name: "Mitsuki",
    img: "qp970u.webp",
    opts: { Guild: ["Caravan"] }
  },
  
  {
    name: "Nanaka",
    img: "wqsziv.webp",
    opts: { Guild: ["Caravan"] }
  },
  
  {
    name: "Suzuna",
    img: "chc7qu.webp",
    opts: { Guild: ["Lucent"] }
  },
  
  {
    name: "Io",
    img: "vpgqy2.webp",
    opts: { Guild: ["Lucent"] }
  },
  
  {
    name: "Misaki",
    img: "5sv13f.webp",
    opts: { Guild: ["Lucent"] }
  },
  
  {
    name: "Kuuka",
    img: "ezjutr.webp",
    opts: { Guild: ["weiss"] }
  },
  
  {
    name: "Ninon",
    img: "1lt48c.webp",
    opts: { Guild: ["weiss"] }
  },
  
  {
    name: "Monica",
    img: "u33c55.webp",
    opts: { Guild: ["weiss"] }
  },
  
  {
    name: "Ayumi",
    img: "hd93bb.webp",
    opts: { Guild: ["weiss"] }
  },
  
  {
    name: "Yuki",
    img: "18yqfh.webp",
    opts: { Guild: ["weiss"] }
  },
  
  {
    name: "Chloe",
    img: "gotnqf.webp",
    opts: { Guild: ["nakayoshi"] }
  },
  
  {
    name: "Yuni",
    img: "ojfujs.webp",
    opts: { Guild: ["nakayoshi"] }
  },
  
  {
    name: "Chieru",
    img: "fjymon.webp",
    opts: { Guild: ["nakayoshi"] }
  },
  
  {
    name: "Inori",
    img: "zsylem.webp",
    opts: { Guild: ["dragon"] }
  },
  
  {
    name: "Homare",
    img: "uxbb3x.webp",
    opts: { Guild: ["dragon"] }
  },
  
  {
    name: "Kaya",
    img: "e1onlx.webp",
    opts: { Guild: ["dragon"] }
  },
  
  {
    name: "Creditta",
    img: "curyp0.webp",
    opts: { Guild: ["other"] }
  },
  
  {
    name: "Nea",
    img: "o8355w.webp",
    opts: { Guild: ["rage"] }
  },
  
  {
    name: "Misora",
    img: "ybdf6c.webp",
    opts: { Guild: ["rage"] }
  },
  
  {
    name: "Ranpha",
    img: "mjmt3o.webp",
    opts: { Guild: ["rage"] }
  },
  
  {
    name: "Riri",
    img: "zvc7i0.webp",
    opts: { Guild: ["alter"] }
  },
  
  {
    name: "Croce",
    img: "rxjlxk.webp",
    opts: { Guild: ["geo"] }
  },
  
  {
    name: "Djeeta",
    img: "l442xw.webp",
    opts: { Guild: ["other"] }
  },
  
  {
    name: "Vikala",
    img: "4beg15.webp",
    opts: { Guild: ["other"] }
  },
  
  {
    name: "Arisa",
    img: "ak03h3.webp",
    opts: { Guild: ["other"] }
  },
  
  {
    name: "Luna",
    img: "9y6g2h.webp",
    opts: { Guild: ["other"] }
  },
  
  {
    name: "Lou",
    img: "vgj7j6.webp",
    opts: { Guild: ["manaria"] }
  },
  
  {
    name: "Anne",
    img: "5va9dz.webp",
    opts: { Guild: ["manaria"] }
  },
  
  {
    name: "Grea",
    img: "y7bxa6.webp",
    opts: { Guild: ["manaria"] }
  },
  
  {
    name: "Vampy",
    img: "ixhvhw.webp",
    opts: { Guild: ["other"] }
  },
  
  {
    name: "Mio",
    img: "3d0wnk.webp",
    opts: { Guild: ["collab"] }
  },
  
  {
    name: "Rin (Deremasu)",
    img: "ugddgk.webp",
    opts: { Guild: ["collab"] }
  },
  
  {
    name: "Uzuki",
    img: "smn9t8.webp",
    opts: { Guild: ["collab"] }
  },
  
  {
    name: "Rem",
    img: "fsttfb.webp",
    opts: { Guild: ["collab"] }
  },
  
  {
    name: "Ram",
    img: "pf4mc7.webp",
    opts: { Guild: ["collab"] }
  },
  
  {
    name: "Emilia",
    img: "bebi9x.webp",
    opts: { Guild: ["collab"] }
  },
  
  {
    name: "Muimi",
    img: "zsc85h.webp",
    opts: { Guild: ["other"] }
  },
  
  {
    name: "Mana",
    img: "1bmy2a.webp",
    opts: { Guild: ["other"] }
  },
  
  {
    name: "Ameth",
    img: "uwec5z.webp",
    opts: { Guild: ["other"] }
  },
  
  {
    name: "Neneka",
    img: "yk2uk8.webp",
    opts: { Guild: ["other"] }
  },
  
  {
    name: "Karin",
    img: "06tfvz.webp",
    opts: { Guild: ["other"] }
  }
	
];
