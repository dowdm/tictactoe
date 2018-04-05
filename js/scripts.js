// Business Logic
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

//UI Logic
$(document).ready(function(){
  var playerOne = new Player ("", "X");
  var playerTwo = new Player ("", "O");
  var newGame = new Game ("X")
  $("#player-1").submit(function(event){
    event.preventDefault();
    playerOne.name = $("#pOneName").val();
    $("#pOneName").text("");
    console.log(playerOne.name);
  })
  $("#player-2").submit(function(event){
    event.preventDefault();
    playerTwo.name = $("#pTwoName").val();
    $("#pTwoName").text("");
    console.log(playerTwo.name);
  })

  $(".a").one("click", function(){
    if(newGame.turn === "X"){
      $("#img0").attr("src","img/x1.png");
    } else {
    $("#img0").attr("src","img/donut.jpeg");
    }
    newGame.playerSwitch();
  });
  $(".b").one("click", function(){
    if(newGame.turn === "X"){
      $("#img1").attr("src","img/x1.png");
    } else {
    $("#img1").attr("src","img/donut.jpeg");
    }
    newGame.playerSwitch();
  });
  $(".c").one("click", function(){
    if(newGame.turn === "X"){
      $("#img2").attr("src","img/x1.png");
    } else {
    $("#img2").attr("src","img/donut.jpeg");
    }
    newGame.playerSwitch();
  });
  $(".d").one("click", function(){
    if(newGame.turn === "X"){
      $("#img3").attr("src","img/x1.png");
    } else {
    $("#img3").attr("src","img/donut.jpeg");
    }
    newGame.playerSwitch();
  });
  $(".e").one("click", function(){
    if(newGame.turn === "X"){
      $("#img4").attr("src","img/x1.png");
    } else {
    $("#img4").attr("src","img/donut.jpeg");
    }
    newGame.playerSwitch();
  });
  $(".f").one("click", function(){
    if(newGame.turn === "X"){
      $("#img5").attr("src","img/x1.png");
    } else {
    $("#img5").attr("src","img/donut.jpeg");
    }
    newGame.playerSwitch();
  });
  $(".g").one("click", function(){
    if(newGame.turn === "X"){
      $("#img6").attr("src","img/x1.png");
    } else {
    $("#img6").attr("src","img/donut.jpeg");
    }
    newGame.playerSwitch();
  });
  $(".h").one("click", function(){
    if(newGame.turn === "X"){
      $("#img7").attr("src","img/x1.png");
    } else {
    $("#img7").attr("src","img/donut.jpeg");
    }
    newGame.playerSwitch();
  });
  $(".i").one("click", function(){
    if(newGame.turn === "X"){
      $("#img8").attr("src","img/x1.png");
    } else {
    $("#img8").attr("src","img/donut.jpeg");
    }
    newGame.playerSwitch();
  });
})
