export default {
  GGS: {
    name: "GGS",

    upNeighbour: "B1",
    downNeighbour: "HO",
    leftNeighbour: null,
    rightNeighbour: null,

    locationPics: "GGSS",
    locationPicl: "GGSL",

    upVideo: "GGSB1",
    downVideo: "GGSHO",
    leftVideo: null,
    rightVideo: null,

    juice:
      "The Golden Gate Stairs - where all Eusoffians start their journeys, some chose to roll down this flight of stairs."
  },
  B1: {
    name: "B1",

    upNeighbour: "ABB",
    downNeighbour: "GGS",
    leftNeighbour: null,
    rightNeighbour: "L1C",

    locationPics: "B1S",
    locationPicl: "B1S",

    upVideo: "B1ABB",
    downVideo: "B1GGS",
    leftVideo: null,
    rightVideo: "B1L1C",

    juice: "The bridge connecting all blocks in Eusoff (except C block where we blast music @Temasek)."
  },

  ABB: {
    name: "ABB",

    upNeighbour: null,
    downNeighbour: "B1",
    leftNeighbour: "BL",
    rightNeighbour: "AS",

    locationPics: "ABBS",
    locationPicl: "ABBS",

    upVideo: null,
    downVideo: "ABBB1",
    leftVideo: "ABBBL",
    rightVideo: "ABBAS",

    juice: "The link bridge between A and B block, best place to grab your sunset instagram story."
  },

  BL: {
    name: "BL",

    upNeighbour: null,
    downNeighbour: "ABB",
    leftNeighbour: null,
    rightNeighbour: null,

    locationPics: "BLS",
    locationPicl: "BLL",

    upVideo: null,
    downVideo: "BLABB",
    leftVideo: null,
    rightVideo: null,

    juice: "Residential Lounge - Another place to chill and study with your mates. Different lounges are equipped with different goodies like PS4, darts and mini table tennis tables."
  },
  AS: {
    name: "AS",

    upNeighbour: "APAN",
    downNeighbour: "ABB",
    leftNeighbour: null,
    rightNeighbour: "MPC",

    locationPics: "ASS",
    locationPicl: "ASL",

    upVideo: "ASAPAN",
    downVideo: "ASABB",
    leftVideo: null,
    rightVideo: "ASMPC",

    juice: "Stairs leading to A block and the Multi-purpose court."
  },

  APAN: {
    name: "APAN",

    upNeighbour: null,
    downNeighbour: "AS",
    leftNeighbour: null,
    rightNeighbour: null,

    locationPics: "APANS",
    locationPicl: "APANL",

    upVideo: null,
    downVideo: "APANAS",
    leftVideo: null,
    rightVideo: null,

    juice: "Where meal prep happens."
  },
  MPC: {
    name: "MPC",

    upNeighbour: null,
    downNeighbour: "AS",
    leftNeighbour: null,
    rightNeighbour: null,

    locationPics: "MPCS",
    locationPicl: "MPCL",

    upVideo: null,
    downVideo: "MPCAS",
    leftVideo: null,
    rightVideo: null,

    juice: "MPC - The cradle of (most) elite atheletes. You can use it with your friends whenever it is free (which is a rare occurance, come on it is Eusoff)"
  },

  L1C: {
    name: "L1C",

    upNeighbour: "L1S",
    downNeighbour: "B1",
    leftNeighbour: null,
    rightNeighbour: null,

    locationPics: "L1CS",
    locationPicl: "L1CL",

    upVideo: "L1CL1S",
    downVideo: "L1CB1",
    leftVideo: null,
    rightVideo: null,

    juice: null
  },

  L1S: {
    name: "L1S",

    upNeighbour: "DSS",
    downNeighbour: "L1C",
    leftNeighbour: null,
    rightNeighbour: "FHS",

    locationPics: "L1SS",
    locationPicl: "L1SL",

    upVideo: "L1SDSS",
    downVideo: "L1SL1C",
    leftVideo: null,
    rightVideo: "L1SFHS",

    juice: "The entrance of Admin block."
  },
  DSS: {
    name: "DSS",

    upNeighbour: "DS",
    downNeighbour: "L1S",
    leftNeighbour: "GYM",
    rightNeighbour: null,

    locationPics: "DSSS",
    locationPicl: "DSSL",

    upVideo: "DSSDS",
    downVideo: "DSSL1S",
    leftVideo: "DSSGYM",
    rightVideo: null,

    juice: "Stairs leading to the gym, dance studio and band room."
  },
  BR: {
    name: "BR",

    upNeighbour: null,
    downNeighbour: "DSS",
    leftNeighbour: null,
    rightNeighbour: null,

    locationPics: "BRS",
    locationPicl: "BRL",

    upVideo: null,
    downVideo: "BRDSS",
    leftVideo: null,
    rightVideo: null,

    juice: "Our treasured band room. We treat various performing arts as seriously as sports."
  },  
  DS: {
    name: "DS",

    upNeighbour: null,
    downNeighbour: "DSS",
    leftNeighbour: null,
    rightNeighbour: null,

    locationPics: "DSS",
    locationPicl: "DSL",

    upVideo: null,
    downVideo: "DSDSS",
    leftVideo: null,
    rightVideo: null,

    juice: "Air conditioned dance room - birthplace of great performances, and a place for camp OGs to chill."
  },
  GYM: {
    name: "GYM",

    upNeighbour: null,
    downNeighbour: "DSS",
    leftNeighbour: null,
    rightNeighbour: null,

    locationPics: "GYMS",
    locationPicl: "GYML",

    upVideo: null,
    downVideo: "GYMDSS",
    leftVideo: null,
    rightVideo: null,

    juice: "Always full..."
  },
  FHS: {
    name: "FHS",

    upNeighbour: "FH",
    downNeighbour: null,
    leftNeighbour: "DHS",
    rightNeighbour: "L1S",

    locationPics: "FHSS",
    locationPicl: "FHSL",

    upVideo: "FHSFH",
    downVideo: null,
    leftVideo: "FHSDHS",
    rightVideo: "FHSL1S",

    juice: "Level two of admin block (Function Hall)."
  },
  FH: {
    name: "FH",

    upNeighbour: null,
    downNeighbour: "FHS",
    leftNeighbour: null,
    rightNeighbour: null,

    locationPics: "FHS",
    locationPicl: "FHL",

    upVideo: null,
    downVideo: "FHFHS",
    leftVideo: null,
    rightVideo: null,

    juice: "The fourth most visited place after Dining Hall, MPC and Reading Room. A lot of things happen here."
  },

  RRS: {
    name: "RRS",

    upNeighbour: "DHS",
    downNeighbour: "HO",
    leftNeighbour: null,
    rightNeighbour: "RR",

    locationPics: "RRSS",
    locationPicl: "RRSL",

    upVideo: "RRSDHS",
    downVideo: "RRSHO",
    leftVideo: null,
    rightVideo: "RRSRR",

    juice: "Go straight to explore the dining hall and other parts of the Admin Block, Turn right to check out the reading room."
  },

  RR: {
    name: "RR",

    upNeighbour: null,
    downNeighbour: "RRS",
    leftNeighbour: null,
    rightNeighbour: null,

    locationPics: "RRS",
    locationPicl: "RRL",

    upVideo: null,
    downVideo: "RRRRS",
    leftVideo: null,
    rightVideo: null,

    juice: "Average CAP in Eusoff is 4.8."
  }, 

  DHS: {
    name: "DHS",

    upNeighbour: null,
    downNeighbour: "RRS",
    leftNeighbour: "DH",
    rightNeighbour: "FHS",

    locationPics: "DHSS",
    locationPicl: "DHSL",

    upVideo: null,
    downVideo: "DHSRRS",
    leftVideo: "DHSDH",
    rightVideo: "DHSFHS",

    juice: "Level three of admin block. Connects hall office and dining hall."
  },
  DH: {
    name: "DH",

    upNeighbour: null,
    downNeighbour: "DHS",
    leftNeighbour: null,
    rightNeighbour: null,

    locationPics: "DHS",
    locationPicl: "DHL",

    upVideo: null,
    downVideo: "DHDHS",
    leftVideo: null,
    rightVideo: null,

    juice: "Second most important place in Eusoff (right after supper stretch)"
  },

  HO: {
    name: "HO",

    upNeighbour: null,
    downNeighbour: null,
    leftNeighbour: "GGS",
    rightNeighbour: "RRS",

    locationPics: "HOS",
    locationPicl: "HOL",

    upVideo: null,
    downVideo: null,
    leftVideo: "HOGGS",
    rightVideo: "HORRS",

    juice: "Hall Office - you only visit once an academic year (or unless you break something)."
  }
};
