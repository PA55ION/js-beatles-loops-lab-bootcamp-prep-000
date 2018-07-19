function theBeatlesPlay(musician, instruments) {
  var arr = [];
  for(let i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + ' play' + instruments[i]);
  }
  return arr; 
}
