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
// Game.prototype.players = function ()

//UI Logic
$(document).ready(function(){
  var playerOne = new Player ("", "X");
  var playerTwo = new Player ("", "O");
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
  $(".a").click(function(){
    $("#img0").attr("src","img/donut.jpeg")
  });
  $(".b").click(function(){
    $("#img1").attr("src","img/donut.jpeg")
  });
  $(".c").click(function(){
    $("#img2").attr("src","img/donut.jpeg")
  });
  $(".d").click(function(){
    $("#img3").attr("src","img/donut.jpeg")
  });
  $(".e").click(function(){
    $("#img4").attr("src","img/donut.jpeg")
  });
  $(".f").click(function(){
    $("#img5").attr("src","img/donut.jpeg")
  });
  $(".g").click(function(){
    $("#img6").attr("src","img/donut.jpeg")
  });
  $(".h").click(function(){
    $("#img7").attr("src","img/donut.jpeg")
  });
  $(".i").click(function(){
    $("#img8").attr("src","img/donut.jpeg")
  });
})
