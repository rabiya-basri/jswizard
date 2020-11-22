var readlineSync = require('readline-sync');
const chalk = require('chalk');

var userName = readlineSync.question("Hey! What Is Your Name? ");

console.log("Welcome " + userName + " to Test Your Knowledge on JavaScript!");
    
//user excitement 
    var userAgree = readlineSync.question("Are You exicited to take quiz(Yes or No)? ");
    var userAgreeYes = "yes";

    if(userAgree == userAgreeYes){
        console.log(chalk.bgBlue.whiteBright("YAY..! lets start the quiz...\n"));

        }else{
        console.log(chalk.bgYellow.whiteBright("Let's explore something new...:)"));
    }
var score = 0;
    
//play quiz function
    function play(question,answer){
        var userAnswer = readlineSync.question(question);
            if(userAnswer === answer){
                console.log(chalk.green("Right!"));
                score = score+1;
            }else{
                console.log(chalk.red("Wrong"));
        }
        console.log("_______________________\n");
}
    
//array declaration of questions
    var questions = [{
        question:"1.who developed JavaScript?\n  a.Brendan Eich\n  b.James Gosling\n  c.Bjarne Stroustrup\n  d.Dennis M.Ritchie\n",
        answer:"a",
        },
    {
        question:"2.How do we comment in javascript?\n  a.**\n  b.//\n  c.<>\n  d.&\n",
        answer:"b",
    },
    {
        question:"3.Comments are executable statements?\n  a.True\n  b.False\n",
        answer:"b",
    },
    {
        question:"4.Functions are breaking large program into sub program?\n  a.True\n  b.False\n",
        answer:"a",
    },
    {
        question:"5.which of the following is used to print message on output screen?\n  a.printf()\n  b.console.login()\n  c.console.log()\n  d.none of the above\n ",
        answer:"c",
    },
    {
        question:"6.Does every browser have javascript engine install in it?\n  a.True\n  b.False\n",
        answer:"a",
    },
    {
        question:"7.What will be the output for the following function?\n function pro()\n  {\n  var num1 = 2;\n  var num2 = 67;\n  var product = num1 * num2;\n  return product;\n  }\n  a.137\n  b.134\n  c.123\n  d.132\n",
        answer:"b",
    },
    {
        question:"8.We use dot(.) operator to access value?\n  a.True\n  b.False\n",
        answer:"a",
    },
    {
        question:"9.Identify the correct declaration of array\n  a.var a = [item1,item2,..]\n  b.var a={item1,item2,...}\n  c.var a[iteam1,item2,..]\n  d.none of the above\n",
        answer:"a",
    },
    {
        question:"10.Datatype specify the type of value that a variable can hold\n  a.True\n  b.False\n",
        answer:"a",
    },
    ];

    for(var i=0; i<questions.length;i++){
        var currentQuestion = questions[i];
        play(currentQuestion.question, currentQuestion.answer);
        }
        if(score<=5){
            console.log(" Hey! " +userName+ " You scored " +score+ " /10\n Please retake quiz to improve your scores.\n");
            
            }else{
            console.log("Amazing! " +userName+ " You SCORED: ", score,"/10\n");
    }
    var player1 = {
    name:"afiya",
    score:"    10",
    }
    var player2={
    name:"raj",
    score:"    6",
    }
    var player3={
    name:"rab",
    score:"      9",
    }
    var scorelist=[player1,player2,player3];
    console.log(chalk.bgBlue.whiteBright.bold("SCORE BOARD"));
    console.log(chalk.bgYellow.whiteBright("Players   Scores"));
    console.log("****************")
    for(var i=0;i<scorelist.length;i++){
        var higestScore = scorelist[i];
            if(scorelist[i].score >= 7){ 
            console.log(higestScore.name,higestScore.score);
    }  
    }