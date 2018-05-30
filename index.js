var theBeatlesPlay = function(musicians, instruments) {
  var artist_instruments = [];
  for (let i = 0; i < musicians.length; i++) {
    artist_instruments.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return artist_instruments;
};

var johnLennonFacts = function(facts) {
  var extreme_facts = [];
  let i = 0;
  while (i < facts.length) {
    extreme_facts[i] = `${facts[i]}!!!`;
    i++;
  }
  return extreme_facts;
};

var iLoveTheBeatles = function(n) {
  var phrases = [];
  let i = 0;
  do {
    phrases.push("I love the Beatles!");
    i++;
  } while (i < 15);
  return phrases;
};