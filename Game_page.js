function send(){

    number1 = document.getElementById("number1").value;
    
    number2 = document.getElementById("number2").value ;
    actual_answer = parseInt(number1) * parseInt(number2);
    
    document.getElementById("number1").value="";   
    document.getElementById("number2").value="";   
    
    question_number = "<h4>" + number1 + "X"+ number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-success' onclick='check()'>check</button>";
    row = question_number + input_box + check_button
    document.getElementById("output").innerHTML = row;
}
p1=localStorage.getItem("p1name");
p2=localStorage.getItem("p2name");
document.getElementById("player1_name").innerHTML="player 1 name: " + p1;
document.getElementById("player2_name").innerHTML="player 2 name: " + p2;