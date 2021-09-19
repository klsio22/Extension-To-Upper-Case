document.addEventListener("DOMContentLoaded", function () {
  //Click button transform-word(transformar-palavra)
  document.querySelector("#btn").addEventListener("click", () => {
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

  //click button copiar(copy)

  document.querySelector("#copy").addEventListener("click", () => {
    document.querySelector("#result").select();
    document.execCommand("copy");

    document.querySelector("#sucess-copy").innerHTML = "Copied";
  });
});
