// Business Logic
var arrayX = [];
var arrayO = [];

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

 function arrayXPush(number) {
   if (Space.mark === "X")
   arrayX.push(number);
 }


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
    $("#img0").attr("src","img/donut.jpeg");
    }
    var a = new Space(0, newGame.turn)
    if (a.mark === "X"){
      arrayX.push(a.coordinate);
    } else {
      arrayO.push(a.coordinate);
    }
    newGame.playerSwitch();
    // console.log(boardArray);
  });

  $(".b").one("click", function(){
    if(newGame.turn === "X"){
      $("#img1").attr("src","img/x1.png");
    } else {
    $("#img1").attr("src","img/donut.jpeg");
    }
    var b = new Space(1, newGame.turn)
    if (b.mark === "X"){
      arrayX.push(b.coordinate);
    } else {
      arrayO.push(b.coordinate);
    }
    newGame.playerSwitch();
  });

  $(".c").one("click", function(){
    if(newGame.turn === "X"){
      $("#img2").attr("src","img/x1.png");
    } else {
    $("#img2").attr("src","img/donut.jpeg");
  }
    var c = new Space(2, newGame.turn)
    if (c.mark === "X"){
      arrayX.push(c.coordinate);
    } else {
      arrayO.push(c.coordinate);
    }
    newGame.playerSwitch();
  });

  $(".d").one("click", function(){
    if(newGame.turn === "X"){
      $("#img3").attr("src","img/x1.png");
    } else {
    $("#img3").attr("src","img/donut.jpeg");
    }
    var d = new Space(3, newGame.turn)
    if (d.mark === "X"){
      arrayX.push(d.coordinate);
    } else {
      arrayO.push(d.coordinate);
    }
    newGame.playerSwitch();
  });
  $(".e").one("click", function(){
    if(newGame.turn === "X"){
      $("#img4").attr("src","img/x1.png");
    } else {
    $("#img4").attr("src","img/donut.jpeg");
    }
    var e = new Space(4, newGame.turn)
    if (e.mark === "X"){
      arrayX.push(e.coordinate);
    } else {
      arrayO.push(e.coordinate);
    }
    newGame.playerSwitch();
  });
  $(".f").one("click", function(){
    if(newGame.turn === "X"){
      $("#img5").attr("src","img/x1.png");
    } else {
    $("#img5").attr("src","img/donut.jpeg");
    }
    var f = new Space(5, newGame.turn)
    if (f.mark === "X"){
      arrayX.push(f.coordinate);
    } else {
      arrayO.push(f.coordinate);
    }
    newGame.playerSwitch();
  });
  $(".g").one("click", function(){
    if(newGame.turn === "X"){
      $("#img6").attr("src","img/x1.png");
    } else {
    $("#img6").attr("src","img/donut.jpeg");
    }
    var g = new Space(6, newGame.turn)
    if (g.mark === "X"){
      arrayX.push(g.coordinate);
    } else {
      arrayO.push(g.coordinate);
    }
    newGame.playerSwitch();
  });
  $(".h").one("click", function(){
    if(newGame.turn === "X"){
      $("#img7").attr("src","img/x1.png");
    } else {
    $("#img7").attr("src","img/donut.jpeg");
    }
    var h = new Space(7, newGame.turn)
    if (h.mark === "X"){
      arrayX.push(h.coordinate);
    } else {
      arrayO.push(h.coordinate);
    }
    newGame.playerSwitch();
  });
  $(".i").one("click", function(){
    if(newGame.turn === "X"){
      $("#img8").attr("src","img/x1.png");
    } else {
    $("#img8").attr("src","img/donut.jpeg");
    }
    var i = new Space(8, newGame.turn)
    if (i.mark === "X"){
      arrayX.push(i.coordinate);
    } else {
      arrayO.push(i.coordinate);
    }
    newGame.playerSwitch();
  });
  console.log(arrayX);
  console.log(arrayO);

});
