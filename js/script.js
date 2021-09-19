document.addEventListener("DOMContentLoaded", function () {
  //function anonymous to return a text
  let textTransform = () => {
    let text = document.querySelector("#text").value.trim();
    if (text == "") {
      document.querySelector("#result").innerHTML = "Texto vazio";
    } else {
      document.querySelector("#result").innerHTML = word(text);
    }
  };

  //Click button transform-word(transformar-palavra)
  document.querySelector("#btn-transform").addEventListener("click", () => {
    textTransform();
  });

  //When Press enter textTransform 
  document.addEventListener("keydown", update);
  function update(event) {
    if (event.keyCode == 13) {
      textTransform();
    }
  }

  document.querySelector("#clear").addEventListener("click", () => {
    document.querySelector("#text").value = "";
    document.querySelector("#result").innerHTML = "";
  });

  let word = (text) => {
    let words = text.split(" ");

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
