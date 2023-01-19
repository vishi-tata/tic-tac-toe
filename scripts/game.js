function startNewGame() {
  if (players[0].name && players[1].name) {
    namesNotEnteredDisplayElement.textContent = "";
    gameEndDisplayArticle.style.display = "none";
    gameDrawDisplayElement.textContent = "";
    winnerNameDisplayElement.textContent = "";
    gamePlayAreaSection.style.display = "block";
    gameWonDisplayElement.style.display = "block";
    gameDrawDisplayElement.textContent = "";
    activePlayerNameElement.textContent = players[0].name;
    turnIndicatorElement.style.display = "block";
    turnNumber = 0;
    count = 0;
    for (tile of gameZoneTilesElement) {
      tile.classList.remove("disabled");
      tile.textContent = "";
    }
    for (let tile of gameZoneTilesElement) {
      tile.addEventListener("click", game);
    }
  } else
    namesNotEnteredDisplayElement.textContent = "Please Enter Player Names";
}

function game(event) {
  var li = event.target,
    tileNumber = 1;
  while (li.previousElementSibling) {
    li = li.previousElementSibling;
    tileNumber += 1;
  }
  if (turnNumber % 2 == 0 && turnNumber < 8) {
    activePlayerNameElement.textContent = players[0].name;
    gameZoneTilesElement[tileNumber - 1].classList.add("disabled");
    gameZoneTilesElement[tileNumber - 1].textContent = players[0].symbol;
    gameZoneTilesElement[tileNumber - 1].removeEventListener("click", game);
    activePlayerNameElement.textContent = players[1].name;
    turnNumber++;
  } else if (turnNumber % 2 == 1 && turnNumber < 9) {
    activePlayerNameElement.textContent =
      playerNameDisplayTwoElement.textContent;
    gameZoneTilesElement[tileNumber - 1].classList.add("disabled");
    gameZoneTilesElement[tileNumber - 1].textContent = players[1].symbol;
    gameZoneTilesElement[tileNumber - 1].removeEventListener("click", game);
    activePlayerNameElement.textContent = players[0].name;
    turnNumber++;
  } else if (turnNumber == 8) {
    gameZoneTilesElement[tileNumber - 1].classList.add("disabled");
    gameZoneTilesElement[tileNumber - 1].textContent = players[0].symbol;
    activePlayerNameElement.textContent = "PLAYER NAME";
    turnIndicatorElement.style.display = "none";
    turnNumber++;
  }

  for (let i = 0; i < 3; i++) {
    for (let j = i; j < 9; j += 3) {
      if (gameZoneTilesElement[j].textContent === "X") {
        count++;
      } else if (gameZoneTilesElement[j].textContent === "O") {
        count--;
      }
    }
    if (count === 3) {
      playerOneWon();
      return;
    } else if (count === -3) {
      playerTwoWon();
      return;
    } else count = 0;
  }

  for (let i = 0; i < 7; i += 3) {
    for (let j = i; j < i + 3; j++) {
      if (gameZoneTilesElement[j].textContent === "X") {
        count++;
      } else if (gameZoneTilesElement[j].textContent === "O") {
        count--;
      }
    }
    if (count === 3) {
      playerOneWon();
      return;
    } else if (count === -3) {
      playerTwoWon();
      return;
    } else count = 0;
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 9; j += 4) {
      if (gameZoneTilesElement[j].textContent === "X") {
        count++;
      } else if (gameZoneTilesElement[j].textContent === "O") {
        count--;
      }
    }
    if (count === 3) {
      playerOneWon();
      return;
    } else if (count === -3) {
      playerTwoWon();
      return;
    } else count = 0;
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 2; j < 7; j += 2) {
      if (gameZoneTilesElement[j].textContent === "X") {
        count++;
      } else if (gameZoneTilesElement[j].textContent === "O") {
        count--;
      }
    }
    if (count === 3) {
      playerOneWon();
      return;
    } else if (count === -3) {
      playerTwoWon();
      return;
    } else count = 0;
  }

  if (turnNumber == 9 && count == 0) {
    gameEndedAsDraw();
  }
}

function playerOneWon() {
  for (tile of gameZoneTilesElement) {
    tile.removeEventListener("click", game);
    tile.style.cursor = "default";
  }
  gameEndDisplayArticle.style.display = "block";
  winnerNameDisplayElement.textContent =
    playerNameDisplayOneElement.textContent;
  turnIndicatorElement.style.display = "none";
  // playerNameDisplayOneElement.textContent = "PLAYER ONE NAME";
  // playerNameDisplayTwoElement.textContent = "PLAYER TWO NAME";
  gameZoneGridElement.classList.remove("game-grid");
}
function playerTwoWon() {
  for (tile of gameZoneTilesElement) {
    tile.removeEventListener("click", game);
    tile.style.cursor = "default";
  }
  gameEndDisplayArticle.style.display = "block";
  winnerNameDisplayElement.textContent =
    playerNameDisplayTwoElement.textContent;
  turnIndicatorElement.style.display = "none";
  // playerNameDisplayOneElement.textContent = "PLAYER ONE NAME";
  // playerNameDisplayTwoElement.textContent = "PLAYER TWO NAME";
  gameZoneGridElement.classList.remove("game-grid");
}

function gameEndedAsDraw() {
  gameEndDisplayArticle.style.display = "block";
  gameDrawDisplayElement.textContent = "Game is Draw";
  gameWonDisplayElement.style.display = "none";
  gameZoneGridElement.classList.remove("game-grid");
  // playerNameDisplayOneElement.textContent = "PLAYER ONE NAME";
  // playerNameDisplayTwoElement.textContent = "PLAYER TWO NAME";
}
