Player_1 = localStorage.getItem("Player_1");
Player_2 = localStorage.getItem("Player_2");
Player_1_score = 0;
Player_2_score = 0;
Question_Turn = Player_1;
Answer_Turn = Player_2;

document.getElementById("player_1").innerHTML = Player_1 + ":";
document.getElementById("player_2").innerHTML = Player_2 + ":";

document.getElementById("player1_score").innerHTML = Player_1_score;
document.getElementById("player2_score").innerHTML = Player_2_score;

document.getElementById("Player_question").innerHTML = "Question Turn - " + Player_1;
document.getElementById("Player_answer").innerHTML = "Answer Turn - " + Player_2;

function Send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("Word in Lowercase - " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    length_divide = Math.floor(word.length / 2);

    charAt2 = word.charAt(length_divide);
    console.log(charAt2);

    charAt3 = word.charAt(word.length - 1);
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);

    question_1Word = "<h4 id='word_display'>Q. " + remove_charAt3 + "</h4>";
    input_box = "<br> Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onClick='check();'>Check</button>";
    row = question_1Word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
function check() {
    var answer = document.getElementById("input_check_box").value;
    console.log(answer.toLowerCase());
    if (answer.toLowerCase() == word) {
        if (Question_Turn == Player_1) {
            Player_2_score = Player_2_score + 1;
            document.getElementById("player2_score").innerHTML = Player_2_score;
            Question_Turn = Player_2;
            Answer_Turn = Player_1;
            document.getElementById("Player_question").innerHTML = "Question Turn - " + Question_Turn;
            document.getElementById("Player_answer").innerHTML = "Answer Turn - " + Answer_Turn;
        }
        else {
            Player_1_score = Player_1_score + 1;
            document.getElementById("player1_score").innerHTML = Player_1_score;
            Question_Turn = Player_1;
            Answer_Turn = Player_2;
            document.getElementById("Player_question").innerHTML = "Question Turn - " + Question_Turn;
            document.getElementById("Player_answer").innerHTML = "Answer Turn - " + Answer_Turn;
        }
    }
    document.getElementById("output").innerHTML="";
}