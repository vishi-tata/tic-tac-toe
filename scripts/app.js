let editedPlayer = 0;
const players = [
  { name: "", symbol: "X" },
  { name: "", symbol: "O" },
];

let tileNumber;
let turnNumber = 0;
let count = 0;

const configurationModalElement = document.getElementById("config-overlay");
const backdropModalElement = document.getElementById("backdrop");

const playerOneNameAddButtonElement = document.getElementById(
  "player-1-name-edit-button"
);
const playerTwoNameAddButtonElement = document.getElementById(
  "player-2-name-edit-button"
);

const modalCancelButtonElement = document.getElementById("config-cancel");
const modalSubmitButtonElement = document.getElementById("config-submit");

const formInConfigurationElement = document.querySelector("form");

const playerNameDisplayOneElement = document.getElementById("player-1");
const playerNameDisplayTwoElement = document.getElementById("player-2");
const playerNameInputElement = document.getElementById("player-name");

const errorMessageElement = document.getElementById("config-error");

const gameStartButtonElement = document.getElementById("start-game-button");

const gamePlayAreaSection = document.getElementById("gameplay-area");

const gameEndDisplayArticle = document.getElementById("game-end-article");
const gameDrawDisplayElement = document.getElementById(
  "game-draw-display-message"
);
const gameWonDisplayElement = document.getElementById(
  "game-won-display-message"
);
const winnerNameDisplayElement = document.getElementById("winner-name");
const newGameSuggestionElement = document.getElementById("new-game-suggestion");

const turnIndicatorElement = document.getElementById("turn-indicator");
const activePlayerNameElement = document.getElementById("active-player-name");
const gameZoneGridElement = document.getElementById("game-zone-grid");
const gameZoneTilesElement = document.querySelectorAll("#game-zone-grid li");

const namesNotEnteredDisplayElement = document.getElementById(
  "names-not-entered-warning"
);

playerOneNameAddButtonElement.addEventListener("click", modalDisplay);
playerTwoNameAddButtonElement.addEventListener("click", modalDisplay);

modalCancelButtonElement.addEventListener("click", modalDisplayCancel);
backdropModalElement.addEventListener("click", modalDisplayCancel);

formInConfigurationElement.addEventListener("submit", savePlayerConfig);

gameStartButtonElement.addEventListener("click", startNewGame);
