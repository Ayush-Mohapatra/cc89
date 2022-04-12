function login()
{
    Player1_Name=document.getElementById("player1 input").value;
    Player2_Name=document.getElementById("player2 input").value;
    localStorage.setItem("Player1 Name",Player1_Name);
    localStorage.setItem("Player2 Name",Player2_Name);
    window.location="game_page.html";
}