function checkpntalgo(ch) {
  var vol = 0;
  var esp = 0;
  var log = 0;
  nbrWords = []
  for (var i = 0; i < ch.length; i++) {
    if (ch[i] == " ") {
      esp += 1;
    }
  }
  log = ch.length - esp;
  var crtvl = /[aeiouyAEOYUI]/g;
  var  test = ch.match(regex);
  vol = test.length
  nbrWords = ch.split(" ")
  return console.log(
    "number de voyelles:"+vol ,
    "longeur de la phrase est :" + log + "nombre des mots =" +nbrWords.length
  );
}
