document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#btn").addEventListener("click", function () {
    let text = document.querySelector("#text").value;
    document.querySelector("#result").innerHTML = word(text);
  });

  let word = (text) => {
    let words = text.split(" ");
    let lowerdText = text.toLowerCase();

    for (let i = 0; i < words.length; i++) {
      let newWord = words[i];

      let fistLetter = newWord[0];
      newWord = fistLetter.toUpperCase() + newWord.slice(1);

      words[i] = newWord;
    }

    return words.join("");
  };

});
