// Business Logic
var arrayX = [];
var arrayO = [];
var boardArray = ["0","1","2","3","4","5","6","7","8"];

function Player (name, markType){
  this.name = name;
  this.marktype = markType;
}

function Space (coordinate, mark){
  this.coordinate = coordinate;
  this.mark = mark;
}

function Game (turn) {
  this.turn = turn;
}

//
Game.prototype.playerSwitch = function() {
  if (this.turn === "X"){
    this.turn = "O";
  } else {
    this.turn = "X";
  }
}

 // function arrayXPush(number) {
 //   if (Space.mark === "X")
 //   arrayX.push(number);
 // }

function winCheck(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === array[i+3] && array[i] === array[i+6]){
      alert("you win");
    } else if (array[i] === array[i+1] && array[i] === array[i+2]){
      alert("you win");
    }
  }
  if (array[0] === array[4] && array[0] === array[8]){
    alert("you win");
  } else if (array[2] === array[4] && array[4] === array[6]){
    alert("you win");
  }  
}
// // for (var i = 0; i < array.length; i++){
//   if (array[i] === 0 && array[i+1] === 1 && array[i+2] === 2) {
//     alert("you win");
//   } else if (array[i] === 0 && array[i+1] === 3 && array[i+2] === 6) {
//     alert("you win");
//   } else if (array[i] === 0 && array[i+1] === 4 && array[i+2] === 8 || array[i] === 6 && array[i+1] === 4 && array[i+2] === 0) {
//     alert("you win");
//   } else if (array[i] === 1 && array[i+1] === 4 && array[i+2] === 7) {
//     alert("you win");
//   } else if (array[i] === 2 && array[i+1] === 5 && array[i+2] === 8) {
//     alert("you win");
//   } else if (array[i] === 6 && array[i+1] === 4 && array[i+2] === 2 || array[i] === 2 && array[i+1] === 4 && array[i+2] === 6) {
//     alert("you win");
//   } else if (array[i] === 3 && array[i+1] === 4 && array[i+2] === 5) {
//     alert("you win");
//   } else if (array[i] === 2 && array[i+1] === 5 && array[i+2] === 8) {
//     alert("you win");
//   } else if (array[i] === 6 && array[i+1] === 7 && array[i+2] === 8) {
//     alert("you win");
//   } else {
//   }
// }

//UI Logic
$(document).ready(function(){
  var playerOne = new Player ("", "X");
  var playerTwo = new Player ("", "O");
  var newGame = new Game ("X")
  // var boardArray =[];

//name entry behavior
  $("#player-1").submit(function(event){
    event.preventDefault();
    playerOne.name = $("#pOneName").val();
    $("#pOneName").text("");
  })
  $("#player-2").submit(function(event){
    event.preventDefault();
    playerTwo.name = $("#pTwoName").val();
    $("#pTwoName").text("");
  })

//box click behavior
  $(".a").one("click", function(){
    if(newGame.turn === "X"){
      $("#img0").attr("src","img/x1.png");
    } else {
    $("#img0").attr("src","img/homer.gif");
    }
    var a = new Space(0, newGame.turn);
    boardArray.splice(0,1, a.mark);
    newGame.playerSwitch();
    winCheck(boardArray);
  });

  $(".b").one("click", function(){
    if(newGame.turn === "X"){
      $("#img1").attr("src","img/x1.png");
    } else {
    $("#img1").attr("src","img/homer.gif");
    }
    var b = new Space(1, newGame.turn);
    boardArray.splice(1,1, b.mark);
    newGame.playerSwitch();
    winCheck(boardArray);
  });

  $(".c").one("click", function(){
    if(newGame.turn === "X"){
      $("#img2").attr("src","img/x1.png");
    } else {
    $("#img2").attr("src","img/homer.gif");
  }
    var c = new Space(2, newGame.turn);
    boardArray.splice(2,1, c.mark);
    newGame.playerSwitch();
    winCheck(boardArray);
  });

  $(".d").one("click", function(){
    if(newGame.turn === "X"){
      $("#img3").attr("src","img/x1.png");
    } else {
    $("#img3").attr("src","img/homer.gif");
    }
    var d = new Space(3, newGame.turn);
    boardArray.splice(3,1, d.mark);
    newGame.playerSwitch();
    winCheck(boardArray);
  });

  $(".e").one("click", function(){
    if(newGame.turn === "X"){
      $("#img4").attr("src","img/x1.png");
    } else {
    $("#img4").attr("src","img/homer.gif");
    }
    var e = new Space(4, newGame.turn);
    boardArray.splice(4,1, e.mark);
    newGame.playerSwitch();
    winCheck(boardArray);
  });

  $(".f").one("click", function(){
    if(newGame.turn === "X"){
      $("#img5").attr("src","img/x1.png");
    } else {
    $("#img5").attr("src","img/homer.gif");
    }
    var f = new Space(5, newGame.turn);
    boardArray.splice(5,1, f.mark);
    newGame.playerSwitch();
    winCheck(boardArray);
  });

  $(".g").one("click", function(){
    if(newGame.turn === "X"){
      $("#img6").attr("src","img/x1.png");
    } else {
    $("#img6").attr("src","img/homer.gif");
    }
    var g = new Space(6, newGame.turn);
    boardArray.splice(6,1, g.mark);
    newGame.playerSwitch();
    winCheck(boardArray);
  });

  $(".h").one("click", function(){
    if(newGame.turn === "X"){
      $("#img7").attr("src","img/x1.png");
    } else {
    $("#img7").attr("src","img/homer.gif");
    }
    var h = new Space(7, newGame.turn);
    boardArray.splice(7,1, h.mark);
    newGame.playerSwitch();
    winCheck(boardArray);
  });

  $(".i").one("click", function(){
    if(newGame.turn === "X"){
      $("#img8").attr("src","img/x1.png");
    } else {
    $("#img8").attr("src","img/homer.gif");
    }
    var i = new Space(8, newGame.turn)
    boardArray.splice(8,1, i.mark);
    newGame.playerSwitch();
    winCheck(boardArray);
  });
  console.log(boardArray);
});
