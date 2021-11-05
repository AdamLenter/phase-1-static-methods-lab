class Formatter {
  //add static methods here
  static capitalize(word) {
    const newWord = String(word.substring(0, 1).toUpperCase() + word.substring(1, word.length));
    return newWord;
  }

  static sanitize(word) {
    return word.replace(/[^A-Za-z0-9-' ]+/g, "");
  }

  static titleize(sentence) {
    const wordsToLowercase = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];

    let newSentence = sentence.substring(0, 1).toUpperCase();
    let testWord;

    if(sentence.substring(1, 2) != " ") {
      //The first word has more than one letter:
      for(let i = 1; i < sentence.length; i++) {
        if(sentence.substring(i, i + 1) === " ") {
          //We are at a space:
          newSentence += sentence.substring(1, i);
          break;
        }
      }
    }

    for(let i = 2; i < (sentence.length - 1); i++) {
      if(sentence.substring((i - 1), i) === " ") {
        //We are at a new word:
        newSentence += " ";
        
        for(let j = i + 1; j < sentence.length; j++) {
          if(j === (sentence.length - 1)) {
            //This is the last word:
            testWord = sentence.substring(i);
            break;
          }
          else if(sentence.substring(j, (j + 1)) === " ") {
            //We are at a new space:
            testWord = String(sentence.substring(i, j));
            break;
          }
        }
      if(wordsToLowercase.indexOf(testWord) >= 0) {
        //The word is on the list:
        newSentence += testWord.substring(0, 1);
      }
      else {
        //The word is ont on the list. Make it uppercase:
        newSentence += testWord.substring(0, 1).toUpperCase();
      }

      if(testWord.length > 1) {
        newSentence += testWord.substring(1);
      }
      }        
    }
  return newSentence;
  }
}