document.addEventListener("DOMContentLoaded", function () {
  let desableResult  = document.querySelector("#result")

  //Disable textarea on click to avoid application bugs
  desableResult.onclick = () => {
    desableResult.disabled = true;
  };

  //function anonymous to return a text
  let textTransform = () => {
    let text = document.querySelector("#text").value.trim();
    if (text == "") {
      document.querySelector("#result").innerHTML = "Caixa de texto vazia";
    } else {
      document.querySelector("#result").innerHTML = word(text);
    }
  };

  //Click button transform-word(transformar-palavra)
  document.querySelector("#btn-transform").addEventListener("click", () => {
    desableResult.disabled = false;
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
    desableResult.disabled = false;
    document.querySelector("#result").select();
    document.execCommand("copy");

    document.querySelector("#sucess-copy").innerHTML = "Copiado";
  });
});
