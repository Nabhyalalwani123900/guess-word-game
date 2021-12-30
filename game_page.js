player1score=0
player2score=0
question_turn="player1"
answer_turn="player2"
player1name=localStorage.getItem("player1name")
player2name=localStorage.getItem("player2name")
document.getElementById("player1_name").innerHTML=player1name+" : "
document.getElementById("player2_name").innerHTML=player2name+" : "
document.getElementById("player1_score").innerHTML=player1score
document.getElementById("player2_score").innerHTML=player2score
document.getElementById("player_question").innerHTML="Question Turn- "+player1name
document.getElementById("player_answer").innerHTML="Answer Turn- "+player2name
function send(){
    get_word=document.getElementById("word").value 
    word=get_word.toLowerCase()
    console.log("word in lowercase"+word)
    charatone=word.charAt(1)
    console.log(charatone)
    lengthDivide2=Math.floor(word.length/2)
    charattwo=word.charAt(lengthDivide2)
    console.log(charattwo)
    lengthMinus1=word.length-1
    charatthree=word.charAt(lengthMinus1)
    console.log(charatthree)
    removecharat1=word.replace(charatone,"_")
    removecharat2=removecharat1.replace(charattwo,"_")
    removecharat3=removecharat2.replace(charatthree,"_")
    console.log(removecharat3)
    question_word="<h4 id='word_display'> question. "+ removecharat3+"</h4>"
    inputbox="<br> answer: <input type='text' id='input_check_box'>"
    check_button="<br> <br> <button onclick='check()' class='btn btn-info'> check </button>"
    row= question_word+inputbox+check_button 
    document.getElementById("output").innerHTML=row
    document.getElementById("word").value=""
} 

function check(){
    get_answer=document.getElementById("input_check_box").value 
    answer= get_answer.toLowerCase()
    console.log(answer)
    if (answer==word) {
        if (answer_turn == "player1") {
        player1score=player1score+1
        document.getElementById("player1_score").innerHTML=player1score
            
        } else {
            player2score=player2score+1
            document.getElementById("player2_score").innerHTML=player2score  
        }
    }
    if (question_turn=="player1") {
            question_turn="player2"
            document.getElementById("player_question").innerHTML="question turn - "+player2name
    } else {
        question_turn="player1"
        document.getElementById("player_question").innerHTML="question turn - "+player1name
    }

    if (answer_turn=="player1") {
        answer_turn="player2"
        document.getElementById("player_answer").innerHTML="answer turn - "+player2name
} else {
    answer_turn="player1"
    document.getElementById("player_answer").innerHTML="answer turn - "+player1name
}
}