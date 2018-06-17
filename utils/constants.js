export const IMAGES = {
  backbend: require("../img/pdbackbend.png"),
  ballerina: require("../img/pdballerina.jpg"),
  butterfly: require("../img/pdbutterfly.jpg"),
  buttman: require("../img/pdbuttman.jpg"),
  chiropractor: require("../img/pdchiro.jpg"),
  gargoyle: require("../img/pdgargoyle.jpg"),
  headstand: require("../img/pdheadstand.jpg"),
  lara: require("../img/pdlara.jpg"),
  martini: require("../img/pdmartini.jpg"),
  plank: require("../img/pdplank.jpg"),
  remibridge: require("../img/pdremibridge.jpg"),
  spidermonkey: require("../img/pdspidermonkey.jpg"),
  superman: require("../img/pdsuperman.jpg")
};

export const MOVES = {
  backbend: "intro",
  ballerina: "intermediate",
  butterfly: "intermediate",
  buttman: "intermediate",
  chiropractor: "advanced",
  gargoyle: "intermediate",
  headstand: "intermediate",
  lara: "intermediate",
  martini: "intermediate",
  plank: "beginner",
  remibridge: "advanced",
  spidermonkey: "advanced",
  superman: "intermediate",
  polesit: "intro",
  spatchcock: "pro",
  rainbowmarchenko: "pro",
  superpain: "pro",
  flamingo: "intro",
  shouldermount: "advanced",
  embrace: "intermediate",
  crossknee: "beginner",
  cocoon: "advanced"
};

export const INTRO = [
  {
    move: "pole sit",
    image: "https://www.dropbox.com/s/9l9y3ornxqz5r6n/pdpolesit.jpg?dl=0"
  },

  {
    move: "backbend",
    image: "https://www.dropbox.com/s/udhbrhy1bowd4t9/pdbackbend.png?dl=0"
  },
  {
    move: "flamingo stand",
    image: "https://www.dropbox.com/s/1quvksxau2f7dvw/pdflamingo.jpg?dl=0"
  }
];

export const BEGINNER = [
  { move: "plank", level: "beginner", image: require("../img/pdplank.jpg") },

  {
    move: "cross knee release",
    level: "beginner",
    image: "https://www.dropbox.com/s/ng2spt302zfpul1/pdcrossknee.jpg?dl=0"
  }
];

export const INTERMEDIATE = [
  {
    move: "ballerina",
    level: "intermediate",
    image: "https://www.dropbox.com/s/vqyu7da5kl1g8qx/pdballerina.jpg?dl=0"
  },
  {
    move: "butterfly",
    level: "intermediate",
    image: "https://www.dropbox.com/s/z1cw9b6ub59i7iy/pdbutterfly.jpg?dl=0"
  },
  {
    move: "buttman",
    level: "intermediate",
    image: "https://www.dropbox.com/s/t64yjooixdgkquh/pdbuttman.jpg?dl=0"
  },
  {
    move: "embrace",
    level: "intermediate",
    image: "https://www.dropbox.com/s/8jt958ghfdf5esl/pdembrace.jpg?dl=0"
  },
  {
    move: "gargoyle",
    level: "intermediate",
    image: "https://www.dropbox.com/s/6wwm90s7ccuwcul/pdgargoyle.jpg?dl=0"
  },
  {
    move: "headstand",
    level: "intermediate",
    image: "https://www.dropbox.com/s/md4auoa5q4l7ciu/pdheadstand.jpg?dl=0"
  },
  {
    move: "lara",
    level: "intermediate",
    image: require("../img/pdlara.jpg")
  },
  {
    move: "martini",
    level: "intermediate",
    image: require("../img/pdmartini.jpg")
  },
  {
    move: "superman",
    level: "intermediate",
    image: require("../img/pdsuperman.jpg")
  }
];

export const ADVANCED = [
  {
    move: "shoulder mount",
    level: "advanced",
    image: require("../img/pdshouldermount.jpg")
  },
  {
    move: "chiropractor",
    level: "advanced",
    image: "https://www.dropbox.com/s/6snl5htd30bvmnw/pdchiro.jpg?dl=0"
  },
  {
    move: "cocoon",
    level: "advanced",
    image: "https://www.dropbox.com/s/xx05mzj6lyy1n9b/pdcocoon.jpg?dl=0"
  },
  {
    move: "remi bridge",
    level: "advanced",
    image: require("../img/pdremibridge.jpg")
  },
  {
    move: "spider monkey",
    level: "advanced",
    image: require("../img/pdspidermonkey.jpg")
  }
];

export const PRO = [
  {
    move: "spatchcock",
    level: "pro",
    image: require("../img/pdspatchcock.jpg")
  },
  {
    move: "rainbow marchenko",
    level: "pro",
    image: require("../img/pdrainbowmarchenko.jpg")
  },
  { move: "superpain", level: "pro", image: require("../img/pdsuperpain.jpg") }
];

export const getLevel = currLevel => {
  currLevel = Object.values(MOVES);
  if (currLevel.length === 0) {
    return null;
  }
  let modeMap = {};
  let maxEl = currLevel[0],
    maxCount = 1;
  for (let i = 0; i < currLevel.length; i++) {
    let el = currLevel[i];
    if (modeMap[el] === null) {
      modeMap[el] = 1;
    } else {
      modeMap[el]++;
    }
    if (modeMap[el] > maxCount) {
      maxEl = el;
      maxCount = modeMap[el];
    }
  }
  return maxEl;
};

export function uniqueArr(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
