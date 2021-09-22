document.addEventListener("DOMContentLoaded", function () {
  const desableResult = document.querySelector("#result");

  //Disable textarea on click to avoid application bugs
  desableResult.onclick = () => {
    desableResult.disabled = true;
  };

  //function anonymous to return a text
  const textTransform = () => {
    let text = document.querySelector("#text").value.trim();
    if (text == "") {
      document.querySelector("#result").innerHTML = "Caixa de texto vazia";
    } else {
      document.querySelector("#result").innerHTML = word(text);
    }
  };

  document.querySelector("#btn-join").addEventListener("click", () => {
    let text = document.querySelector("#result").innerHTML;
    let newText = text.replaceAll(" ", "");
    document.querySelector("#result").innerHTML = newText;
  });

  let word = (text) => {
    let words = text.split(" ");

    for (let i = 0; i < words.length; i++) {
      let newWord = words[i];
      let fistLetter = newWord[0];
      newWord = fistLetter.toUpperCase() + newWord.slice(1).toLowerCase();

      words[i] = newWord;
    }

    return words.join(" ");
  };

  //Click button transform-word(transformar-palavra)
  document.querySelector("#btn-transform").addEventListener("click", () => {
    desableResult.disabled = false;
    textTransform();
  });

  //When Press enter textTransform
  document.addEventListener("keydown", (event) => {
    if (event.keyCode == 13) {
      textTransform();
    }
  });
  //click button to clear (Limpar)
  document.querySelector("#clear").addEventListener("click", () => {
    document.querySelector("#text").value = "";
    document.querySelector("#result").innerHTML = "";
  });

  //click button copy(copiar)
  document.querySelector("#copy").addEventListener("click", () => {
    desableResult.disabled = false;
    document.querySelector("#result").select();
    document.execCommand("copy");
    document.querySelector("#sucess-copy").innerHTML = "Copiado";
  });
});
