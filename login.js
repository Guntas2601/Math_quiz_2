function addUser(){
    player1name=document.getElementById("player1_name_input").value ;
    player2name=document.getElementById("player2_name_input").value ;

    localStorage.setItem("p1name",player1name);
    localStorage.setItem("p2name",player2name);

window.location="game_page.html";

}
