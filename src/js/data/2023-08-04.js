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
      { name: "Twinkle Wish", tooltip: "15 - Kanjuden", key: "TW" },
	  { name: "Labyrinth", key: "Laby" }
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
  }
];
