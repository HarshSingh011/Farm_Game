var gameBoxes = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36"];
var gamePattern = [];
var userChosen = [];
let long=15;
let game;
console.log("hello harsh");
function Starter(){
    let gameBoxChoosen = Math.floor((Math.random()*36)+1);
    let flag = 0;
    console.log("game:"+gameBoxChoosen);
    let length = gamePattern.length;
    for( var i = 0;i<length;i++){
        if( gamePattern[i] === gameBoxChoosen){
           flag = 1;
           Starter();
        }
    }
    if( flag === 0){
        gamePattern.push(gameBoxChoosen);
        console.log( "long:"+long);
        $("#"+gameBoxChoosen).fadeIn(2*long).fadeOut(2*long).fadeIn(4)
        long--;
        // if( long === 0){
        //     win();
        // }
    }
    $("button").text("👍Games Running");
};

$(".box").click(function(){
    var userClick =  $(this).attr("id");
    userChosen.push(userClick);
    var length = userChosen.length;
    check(length);
});

function check(a){
    if( gamePattern[a-1] != userChosen[a-1] ){
        var b = gamePattern[a-1];
        // console.log("value of b:",+b);
        $("#"+b).attr("src","./assets/chomper.gif");
        game++;
        Starter();
        //failed(a);
    }
    else{
        Starter();
        game ++;
        if( game <=12 ){
            failed();
        }
    }
}

// function win(){
//     $("button").text("YOU WIN!!!!");
// }

function failed(){
    for( var i = 0;i<12;i++){
        gamePattern.pop();
        userChosen.pop();
    }
    setTimeout(() => {
        $("button").text("You Failed!!");
    }, 100);
}

$("button").click(function(){
    Starter();
});

