/*
@title: Sokoban+
@author: Leonard (Omay)
@tags: ['puzzle']
@addedOn: 2022-09-06

25 levels
3 types of boxes and 3 types of goals

Press WASD to move, J to restart and K to toggle trails
Get A boxes (cyan) to A goals (green)
Get B boxes (magenta) to B goals (red)
Get normal boxes (gray) to either goal
*/
const player = "p";
const traila = "t";
const trailb = "s";
const boxa = "c";
const boxb = "d";
const boxn = "e";
const goala = "a";
const goalb = "b";
const goaln = "o";
const wall1 = "0";
const wall2 = "1";
const wall3 = "2";
const wall4 = "3";
const wall5 = "4";
const wall6 = "5";
const wall7 = "6";
const wall8 = "7";
const wall9 = "8";
const wall10 = "9";
const wall11 = "u";
const wall12 = "v";
const wall13 = "w";
const wall14 = "x";
const wall15 = "y";
const wall16 = "z";
const wall17 = "f";
const wall18 = "g";
const wall19 = "h";
const wall20 = "i";
const wall21 = "j";
const wall22 = "k";
const wall23 = "l";
const wall24 = "m";
const wall25 = "n";
const wall26 = "q";
const hack = "r";
setLegend(
  [player, bitmap`
................
................
.....000000.....
....00....00....
...00......00...
...0..0..0..0...
...0........0...
...00..00..00...
....00....00....
.....000000.....
.....0....0.....
.....0....0.....
...000....000...
................
................
................`],
  [traila, bitmap`
................
................
.....LLLLLL.....
....LL....LL....
...LL......LL...
...L..L..L..L...
...L........L...
...LL..LL..LL...
....LL....LL....
.....LLLLLL.....
.....L....L.....
.....L....L.....
...LLL....LLL...
................
................
................`],
  [trailb, bitmap`
................
................
.....111111.....
....11....11....
...11......11...
...1..1..1..1...
...1........1...
...11..11..11...
....11....11....
.....111111.....
.....1....1.....
.....1....1.....
...111....111...
................
................
................`],
  [boxa, bitmap`
................
................
..777777777777..
..7..........7..
..7..........7..
..7..........7..
..7....77....7..
..7...7..7...7..
..7...7777...7..
..7...7..7...7..
..7..........7..
..7..........7..
..7..........7..
..777777777777..
................
................`],
  [boxb, bitmap`
................
................
..888888888888..
..8..........8..
..8..........8..
..8....88....8..
..8....8.8...8..
..8....88....8..
..8....8.8...8..
..8....8.8...8..
..8....88....8..
..8..........8..
..8..........8..
..888888888888..
................
................`],
  [boxn, bitmap`
................
................
..LLLLLLLLLLLL..
..L....LL....L..
..L..1.LL..1.L..
..L.1..LL.1..L..
..L....LL....L..
..LLLLLLLLLLLL..
..LLLLLLLLLLLL..
..L....LL....L..
..L..1.LL..1.L..
..L.1..LL.1..L..
..L....LL....L..
..LLLLLLLLLLLL..
................
................`],
  [goala, bitmap`
................
................
................
......4444......
....444..444....
....4......4....
...44..44..44...
...4..4..4..4...
...4..4444..4...
...44.4..4.44...
....4......4....
....444..444....
......4444......
................
................
................`],
  [goalb, bitmap`
................
................
................
......3333......
....333..333....
....3..33..3....
...33..3.3.33...
...3...33...3...
...3...3.3..3...
...33..3.3.33...
....3..33..3....
....333..333....
......3333......
................
................
................`],
  [goaln, bitmap`
................
................
................
......LLLL......
....LLL..LLL....
....L......L....
...LL......LL...
...L........L...
...L........L...
...LL......LL...
....L......L....
....LLL..LLL....
......LLLL......
................
................
................`],
  [wall1, bitmap`
0000000000000000
0LLLLLLLLLLLLLL0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0LLLLLLLLLLLLLL0
0000000000000000`],
  [wall2, bitmap`
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0LLLLLLLLLLLLLL0
0000000000000000`],
  [wall3, bitmap`
0000000000000000
0LLLLLLLLLLLLLLL
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0LLLLLLLLLLLLLLL
0000000000000000`],
  [wall4, bitmap`
0000000000000000
0LLLLLLLLLLLLLL0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0`],
  [wall5, bitmap`
0000000000000000
LLLLLLLLLLLLLLL0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
LLLLLLLLLLLLLLL0
0000000000000000`],
  [wall6, bitmap`
0L000000000000L0
0L000000000000LL
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0LLLLLLLLLLLLLLL
0000000000000000`],
  [wall7, bitmap`
0000000000000000
0LLLLLLLLLLLLLLL
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L000000000000LL
0L000000000000L0`],
  [wall8, bitmap`
0000000000000000
LLLLLLLLLLLLLLL0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
LL000000000000L0
0L000000000000L0`],
  [wall9, bitmap`
0L000000000000L0
LL000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
LLLLLLLLLLLLLLL0
0000000000000000`],
  [wall10, bitmap`
0L000000000000L0
LL000000000000LL
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
LLLLLLLLLLLLLLLL
0000000000000000`],
  [wall11, bitmap`
0L000000000000L0
0L000000000000LL
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L000000000000LL
0L000000000000L0`],
  [wall12, bitmap`
0000000000000000
LLLLLLLLLLLLLLLL
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
LL000000000000LL
0L000000000000L0`],
  [wall13, bitmap`
0L000000000000L0
LL000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
LL000000000000L0
0L000000000000L0`],
  [wall14, bitmap`
0L000000000000L0
LL000000000000LL
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
LL000000000000LL
0L000000000000L0`],
  [wall15, bitmap`
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0`],
  [wall16, bitmap`
0000000000000000
LLLLLLLLLLLLLLLL
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
LLLLLLLLLLLLLLLL
0000000000000000`],
  [wall17, bitmap`
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0LLLLLLLLLLLLLLL
0000000000000000`],
  [wall18, bitmap`
0000000000000000
0LLLLLLLLLLLLLLL
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000`],
  [wall19, bitmap`
0000000000000000
LLLLLLLLLLLLLLL0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0`],
  [wall20, bitmap`
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
LLLLLLLLLLLLLLL0
0000000000000000`],
  [wall21, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
LLLLLLLLLLLLLLLL
0000000000000000`],
  [wall22, bitmap`
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000
0L00000000000000`],
  [wall23, bitmap`
0000000000000000
LLLLLLLLLLLLLLLL
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`],
  [wall24, bitmap`
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0
00000000000000L0`],
  [wall25, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`],
  [wall26, bitmap`
0000000000000000
LLLLLLLLLLLLLLLL
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
LL00000000000000
0L00000000000000`],//lol
  [hack, bitmap`
0000000000000000
0LLLLLLLLLLLLLLL
0L33333333333300
0L33223333333300
0L33223333333300
0L33223333333300
0L33223333333300
0L33222222233300
0L33222222223300
0L33222332223300
0L33223333223300
0L33223333223300
0L33223333223300
0L33333333333300
0L00000000000000
0L00000000000000`]
);
const levels = [
  map`
pc.a`,
  map`
p..
.c.
..a`,
  map`
p..a
.c..
....
....`,
  map`
p...
...c
...c
.cca`,
  map`
cc..
..c.
.cp.
.cca`,
  map`
ay.p..f
c54.3..
....uzq
zz4.1.f
.......
.2zvz4.
.cayac.`,
  map`
p.y.
.c1a
....
....`,
  map`
p.y.
.c1a
....
..ca`,
  map`
....a
.cc2z
4....
a...p`,
  map`
p.ca
.gll
dknn
bknn`,
  map`
a..p
h.3d
mc1.
mp.b`,
  map`
...yb
.0.1.
.ca.d
.3.0.
py...`,
  map`
.ay.p
..ydc
b.y.a
dcy..
p.yb.`,
  map`
..k
..f
aca
.c.
.3.
c1.
a.p`,
  map`
b..y..a
.d.y.c.
..pyp..
zzzxzzz
..pyp..
.c.y.d.
a..y..b`,
  map`
p....
..d..
..e.b
.....
..a..`,
  map`
p....
..dba
.c.e.
..a.e
..b..`,
  map`
....
...b
.0.2
..ca
lhe2
nm.p`,
  map`
p....
.c.e.
.....
z4.2z
.....
..o..`,
  map`
p...
..ce
.caa
.ebb`,
  map`
afip
..e.
.d..
pghb`,
  map`
...p
ee..
abc.
bac.`,
  map`
p.p.p
eeeee
.p.p.
ooooo
.....`,
  map`
pe..op
ogllhe
.knnm.
.knnm.
efjjio
po..ep`,
  map`
.......p
..cddc..
.cabaac.
.dbbabd.
.daabbd.
.cabbac.
..cddc..
........`,
  map`
rllllh
knnnnm
knnnnm
knnnnm
knnnnm
fjjjji`
];
const texts = [
  "Use WASD to move\nand push boxes to\nthe goal.",
  "Use K to hide trail",
  "",
  "Boxes can push\nother boxes.",
  "",
  "",
  "Use J to restart",
  "Don't go straight there...",
  "",
  "A boxes to A goals\nB boxes to B goals",
  "Both players are\ncontrolled\nsimultaneously",
  "",
  "",
  "",
  "",
  "Gray boxes go anywhere",
  "",
  "Loop",
  "Gray goals take any box",
  "This will be common",
  "",
  "See?",
  "Wiggle around. (:",
  "Loop again",
  "Final Level!",
  ""
];
let muted = false;
let level = 0;
const currentLevel = levels[level];
setMap(currentLevel);
addText(texts[level], {x:1, color:color`1`});
setSolids([player, boxa, boxb, boxn, wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall11, wall20, wall21, wall22, wall23, wall24, wall25]);
setPushables({
  [player]: [boxa, boxb, boxn],
  [boxa]: [boxa, boxb, boxn],
  [boxb]: [boxa, boxb, boxn],
  [boxn]: [boxa, boxb, boxn]
});
const playerstep = tune`
166.66666666666666,
166.66666666666666: a4^166.66666666666666,
5000`;
const bg = tune`
375: b4~375 + g5/375 + c4^375,
375: b5/375,
375: b4~375 + g5/375 + d4^375,
375: c5~375 + a5/375,
375,
375: b4~375 + g5/375 + e4^375,
375,
375: b4~375 + b5/375,
375: a4~375 + g5/375 + d4^375,
375: a5/375,
375: b4~375 + g5/375 + c4^375,
375,
375: b4~375 + g5/375 + d4^375,
375: c5~375 + b5/375,
375: b4~375 + g5/375,
375: a4~375 + a5/375 + e4^375,
375: g4~375,
375: g5/375,
375: g4~375 + d4^375,
375: b5/375,
375: g4~375 + g5/375 + d4^375,
375: a4~375 + a5/375,
375`;
const reset = tune`
166.66666666666666,
166.66666666666666: c5-166.66666666666666,
166.66666666666666: b4-166.66666666666666,
4833.333333333333`;
const cont = tune`
500,
500: c5~500,
500: d5~500,
500: e5~500,
14000`;
const win = tune`
166.66666666666666,
166.66666666666666: c5~166.66666666666666,
166.66666666666666: d5~166.66666666666666,
166.66666666666666: e5~166.66666666666666,
166.66666666666666: b4~166.66666666666666,
166.66666666666666: c5~166.66666666666666,
166.66666666666666: d5~166.66666666666666,
166.66666666666666: e5~166.66666666666666,
166.66666666666666: d5~166.66666666666666,
166.66666666666666: c5~166.66666666666666,
166.66666666666666,
166.66666666666666: b4~166.66666666666666,
166.66666666666666: e5~166.66666666666666,
166.66666666666666: c5~166.66666666666666,
3000`;
let bgi = playTune(bg, Infinity);

let trails = true;
// START - PLAYER MOVEMENT CONTROLS
function everyMove() {
  let trailsb = getAll(trailb);
  for (let i of trailsb) {
    i.remove();
  }
  let trailsa = getAll(traila);
  for (i of trailsa) {
    i.type = trailb;
  }
  for(let i of getAll(player)){
    if(trails){
      addSprite(i.x, i.y, traila);
    }
  }
  if(!muted){
    playTune(playerstep);
  }
}
let players;
let i;
onInput("s", () => {
  players = getAll(player);
  everyMove();
  for (i of players) {
    i.y += 1;
  }
});
onInput("d", () => {
  players = getAll(player);
  everyMove();
  for (i of players) {
    i.x += 1;
  }
});
onInput("w", () => {
  players = getAll(player);
  everyMove();
  for (i of players) {
    i.y -= 1;
  }
});
onInput("a", () => {
  players = getAll(player);
  everyMove();
  for (i of players) {
    i.x -= 1;
  }
});
// END - PLAYER MOVEMENT CONTROLS
onInput("j", () => {
  const currentLevel = levels[level];
  playTune(reset);
  if (currentLevel !== undefined) {
    clearText("");
    setMap(currentLevel);
  }
});
onInput("k", () => {
  let trailsb = getAll(trailb);
  let trailsa = getAll(traila);
  for(let i of trailsa){
    i.remove();
  }
  for(let i of trailsb){
    i.remove();
  }
  trails = !trails;
});
onInput("i", () => {
  muted = !muted;
  if(muted){
    bgi.end();
  }else{
    bgi = playTune(bg, Infinity);
  }
});
afterInput(() => {
  const targetNumber = tilesWith(goala).length + tilesWith(goalb).length + tilesWith(goaln).length;
  const numberCovered = tilesWith(goala, boxa).length + tilesWith(goalb, boxb).length + tilesWith(goala, boxn).length + tilesWith(goalb, boxn).length + tilesWith(goaln, boxa).length + tilesWith(goaln, boxb).length + tilesWith(goaln, boxn).length;
  if (numberCovered === targetNumber && !(level === levels.length-1)) {
    level = level + 1;
    clearText();
    addText(texts[level], {x:1, color:color`1`});
    const currentLevel = levels[level];
    if(!muted){
      playTune(cont);
    }
    setMap(currentLevel);
  }
  if (level === levels.length-1) {
    addText("You win!", {
      y: 4,
      color: color`4`
    });
    if(!muted){
      playTune(win);
    }
  }
});
