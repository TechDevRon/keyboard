function keypress(event) {
  document.addEventListener('keydown', function(e) {
    //number row
    if (e.key === '1') {
      oneKey.style.backgroundColor = "grey";
    }
    if (e.key === '2') {
      twoKey.style.backgroundColor = "grey";
    }
    if (e.key === '3') {
      threeKey.style.backgroundColor = "grey";
    }
    if (e.key === '4') {
      fourKey.style.backgroundColor = "grey";
    }
    if (e.key === '5') {
      fiveKey.style.backgroundColor = "grey";
    }
    if (e.key === '6') {
      sixKey.style.backgroundColor = "grey";
    }
    if (e.key === '7') {
      sevenKey.style.backgroundColor = "grey";
    }
    if (e.key === '8') {
      eightKey.style.backgroundColor = "grey";
    }
    if (e.key === '9') {
      nineKey.style.backgroundColor = "grey";
    }
    if (e.key === '0') {
      zeroKey.style.backgroundColor = "grey";
    }
    //top row
    if (e.key === 'Tab') {
      tabKey.style.backgroundColor = "grey";
    }
    if (e.key === 'q' || e.key === 'Q') {
      qKey.style.backgroundColor = "grey";
    }
    if (e.key === 'w' || e.key === 'W') {
      wKey.style.backgroundColor = "grey";
    }
    if (e.key === 'e' || e.key === 'E') {
      eKey.style.backgroundColor = "grey";
    }
    if (e.key === 'r' || e.key === 'R') {
      rKey.style.backgroundColor = "grey";
    }
    if (e.key === 't' || e.key === 'T') {
      tKey.style.backgroundColor = "grey";
    }
    if (e.key === 'y' || e.key === 'Y') {
      yKey.style.backgroundColor = "grey";
    }
    if (e.key === 'u' || e.key === 'U') {
      uKey.style.backgroundColor = "grey";
    }
    if (e.key === 'i' || e.key === 'I') {
      iKey.style.backgroundColor = "grey";
    }
    if (e.key === 'o' || e.key === 'O') {
      oKey.style.backgroundColor = "grey";
    }
    if (e.key === 'p' || e.key === 'P') {
      pKey.style.backgroundColor = "grey";
    }
    //home row
    if (e.key === 'a' || e.key === 'A') {
      aKey.style.backgroundColor = "grey";
    }
    if (e.key === 's' || e.key === 'S') {
      sKey.style.backgroundColor = "grey";
    }
    if (e.key === 'd' || e.key === 'D') {
      dKey.style.backgroundColor = "grey";
    }
    if (e.key === 'f' || e.key === 'F') {
      fKey.style.backgroundColor = "grey";
    }
    if (e.key === 'g' || e.key === 'G') {
      gKey.style.backgroundColor = "grey";
    }
    if (e.key === 'h' || e.key === 'H') {
      hKey.style.backgroundColor = "grey";
    }
    if (e.key === 'j' || e.key === 'J') {
      jKey.style.backgroundColor = "grey";
    }
    if (e.key === 'k' || e.key === 'K') {
      kKey.style.backgroundColor = "grey";
    }
    if (e.key === 'l' || e.key === 'L') {
      lKey.style.backgroundColor = "grey";
    }
    if (e.key === 'Enter' || e.key === 'L') {
      enterKey.style.backgroundColor = "grey";
    }
    //bottom row
    if (e.key === 'Shift') {
      shiftLKey.style.backgroundColor = "grey";
      shiftRKey.style.backgroundColor = "grey";
    }
    if (e.key === 'z' || e.key === 'Z') {
      zKey.style.backgroundColor = "grey";
    }
    if (e.key === 'x' || e.key === 'X') {
      xKey.style.backgroundColor = "grey";
    }
    if (e.key === 'c' || e.key === 'C') {
      cKey.style.backgroundColor = "grey";
    }
    if (e.key === 'v' || e.key === 'V') {
      vKey.style.backgroundColor = "grey";
    }
    if (e.key === 'b' || e.key === 'B') {
      bKey.style.backgroundColor = "grey";
    }
    if (e.key === 'x' || e.key === 'X') {
      xKey.style.backgroundColor = "grey";
    }
    if (e.key === 'n' || e.key === 'N') {
      nKey.style.backgroundColor = "grey";
    }
    if (e.key === 'm' || e.key === 'M') {
      mKey.style.backgroundColor = "grey";
    }
    //lowest row
    if (e.key === 'Control') {
      ctrlLKey.style.backgroundColor = "grey";
      ctrlRKey.style.backgroundColor = "grey";
    }
    if (e.key === 'Alt') {
      altLKey.style.backgroundColor = "grey";
      altRKey.style.backgroundColor = "grey";
    }
    if (e.key === ' ') {
      spaceBar.style.backgroundColor = "grey";
    }
    if (e.key === 'Backspace') {
      backSpace.style.backgroundColor = "grey";
    }
    if (e.key === 'CapsLock') {
      capsLock.style.backgroundColor = "grey";
    }
    //keys with two functions
    if (e.key === '\`' || e.key === '~') {
      thinupThing.style.backgroundColor = "grey";
    }
    if (e.key === '-' || e.key === '_') {
      minusKey.style.backgroundColor = "grey";
    }
    if (e.key === '=' || e.key === '+') {
      equalKey.style.backgroundColor = "grey";
    }
    if (e.key === '[' || e.key === '{') {
      rightBracketKey.style.backgroundColor = "grey";
    }
    if (e.key === ']' || e.key === '}') {
      leftBracketKey.style.backgroundColor = "grey";
    }
    if (e.key === '\\' || e.key === '|') {
      backDash.style.backgroundColor = "grey";
    }
    if (e.key === ':' || e.key === ';') {
      cemicolen.style.backgroundColor = "grey";
    }
    if (e.key === '\"' || e.key === '\'') {
      topthingy.style.backgroundColor = "grey";
    }
    if (e.key === ',' || e.key === '<') {
      lowthingyKey.style.backgroundColor = "grey";
    }
    if (e.key === '.' || e.key === '>') {
      periodKey.style.backgroundColor = "grey";
    }
    if (e.key === '/' || e.key === '?') {
      dashKey.style.backgroundColor = "grey";
    }
    console.log(e.key)
  })
}
function keyrelease() {
  //number row
  oneKey.style.backgroundColor = "black";
  twoKey.style.backgroundColor = "black";
  threeKey.style.backgroundColor = "black";
  fourKey.style.backgroundColor = "black";
  fiveKey.style.backgroundColor = "black";
  sixKey.style.backgroundColor = "black";
  sevenKey.style.backgroundColor = "black";
  eightKey.style.backgroundColor = "black";
  nineKey.style.backgroundColor = "black";
  zeroKey.style.backgroundColor = "black";
  //top row
  tabKey.style.backgroundColor = "black";
  qKey.style.backgroundColor = "black";
  wKey.style.backgroundColor = "black";
  eKey.style.backgroundColor = "black";
  rKey.style.backgroundColor = "black";
  tKey.style.backgroundColor = "black";
  yKey.style.backgroundColor = "black";
  uKey.style.backgroundColor = "black";
  iKey.style.backgroundColor = "black";
  oKey.style.backgroundColor = "black";
  pKey.style.backgroundColor = "black";
  //home row
  aKey.style.backgroundColor = "black";
  sKey.style.backgroundColor = "black";
  dKey.style.backgroundColor = "black";
  fKey.style.backgroundColor = "black";
  gKey.style.backgroundColor = "black";
  hKey.style.backgroundColor = "black";
  jKey.style.backgroundColor = "black";
  kKey.style.backgroundColor = "black";
  lKey.style.backgroundColor = "black";
  enterKey.style.backgroundColor = "black";
  //bottom row
  zKey.style.backgroundColor = "black";
  xKey.style.backgroundColor = "black";
  cKey.style.backgroundColor = "black";
  vKey.style.backgroundColor = "black";
  bKey.style.backgroundColor = "black";
  nKey.style.backgroundColor = "black";
  mKey.style.backgroundColor = "black";
  //lowest row
  spaceBar.style.backgroundColor = "black";
  altLKey.style.backgroundColor = "black";
  altRKey.style.backgroundColor = "black";
  ctrlLKey.style.backgroundColor = "black";
  ctrlRKey.style.backgroundColor = "black";
  shiftLKey.style.backgroundColor = "black";
  shiftRKey.style.backgroundColor = "black";
  backSpace.style.backgroundColor = "black";
  capsLock.style.backgroundColor = "black";
  //two key functions
  thinupThing.style.backgroundColor = "black";
  minusKey.style.backgroundColor = "black";
  equalKey.style.backgroundColor = "black";
  rightBracketKey.style.backgroundColor = "black";
  leftBracketKey.style.backgroundColor = "black";
  backDash.style.backgroundColor = "black";
  cemicolen.style.backgroundColor = "black";
  topthingy.style.backgroundColor = "black";
  lowthingyKey.style.backgroundColor = "black";
  periodKey.style.backgroundColor = "black";
  dashKey.style.backgroundColor = "black";
}
