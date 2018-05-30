var theBeatlesPlay = function(musicians, instruments) {
  var artist_instruments = [];
  for (let i = 0; i < musicians.length; i++) {
    artist_instruments.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return artist_instruments;
}