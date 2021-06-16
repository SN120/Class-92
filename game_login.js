function AddUser() {
    Player_1 = document.getElementById("player1_name").value;
    Player_2 = document.getElementById("player2_name").value;
    console.log("Player 1 name=" + Player_1);
    console.log("Player 2 name=" + Player_2);
    if (Player_1 != Player_2) {
        localStorage.setItem("Player_1", Player_1);
        localStorage.setItem("Player_2", Player_2);
        window.location = "game_page.html";
    }
}
localStorage.removeItem("Score");