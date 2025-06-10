function dodajBlur() {
  const obraz = document.getElementById("obraz");
  obraz.classList.add("blur");
}

function usunEfekty() {
  const obraz = document.getElementById("obraz");
  obraz.classList.remove("blur", "szary");
}

function zamienNaSzary() {
  const obraz = document.getElementById("obraz");
  obraz.classList.replace("blur", "szary");
}