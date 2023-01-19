function modalDisplay(event) {
  editedPlayer = +event.target.dataset.playerid;
  configurationModalElement.style.display = "block";
  backdropModalElement.style.display = "block";
}

function modalDisplayCancel() {
  configurationModalElement.style.display = "none";
  backdropModalElement.style.display = "none";
  formInConfigurationElement.firstElementChild.classList.remove("error");
  errorMessageElement.classList.remove("error");
  playerNameInputElement.value = "";
  errorMessageElement.textContent = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const playerName = formData.get("name-player").trim();
  const updatedPlayerNameDisplayElement = document.getElementById(
    "player-" + editedPlayer
  );
  if (!playerName) {
    event.target.firstElementChild.classList.add("error");
    errorMessageElement.classList.add("error");
    errorMessageElement.textContent = "Please enter a valid name!";
    return;
  }
  updatedPlayerNameDisplayElement.textContent = playerName;
  players[editedPlayer - 1].name = playerName;
  modalDisplayCancel();
}
