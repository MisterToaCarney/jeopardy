function constrain(v, min, max) {
    return (Math.min(max, Math.max(min, v)));
}

function playerInit() {
  numberPlayers = document.getElementById("playerCount").value;
  numberPlayers = Number(numberPlayers);
  numberPlayers = constrain(numberPlayers, 2, 10);
  numberPlayers = String(numberPlayers);
  document.getElementById("players").innerHTML = "";
  for (playerNumber=1; playerNumber<=numberPlayers; playerNumber++) {
    var player = document.getElementById("playerHTML").innerHTML;

    player = player.replace("__PLAYER_NAME__", "Player " + playerNumber);
    player = player.replace("__PLAYER_NAME_ID__", "playerName" + playerNumber);
    player = player.replace("__PLAYER_SCORE__", "0");
    player = player.replace("__PLAYER_SCORE_ID__", "playerScore" + playerNumber);

    list = document.getElementById("players");
    var playerItem = document.createElement("li");
    playerItem.innerHTML = player;
    list.appendChild(playerItem);
  }
}

playerInit();
document.getElementById("playerCount").addEventListener("input", playerInit);
