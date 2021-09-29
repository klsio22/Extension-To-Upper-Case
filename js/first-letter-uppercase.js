
export let word = (text) => {
  let words = text.split(" ");

  for (let i = 0; i < words.length; i++) {
    let newWord = words[i];
    let fistLetter = newWord[0];
    newWord = fistLetter.toUpperCase() + newWord.slice(1).toLowerCase();
    words[i] = newWord;
  }

  return words.join(" ");
};