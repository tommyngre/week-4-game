var players = ["p1", "p2", "p3", "p4"]


var p1 = {
  name: "Mandy",
  bio: "Even before she conquered the realm, she was brilliant and she knew it. \
  But she needed to let the world know. She had to... one-up them all.",

}

var p2 = {
  name: "Tuan",
  bio: "Outwardly, he seemed humble and content enough: an earnest worker; a honest man. \
  But his humility was a facade, and he intended make those pay who took it for granted.",

}

var p3 = {
  name: "Mr. Sun",
  bio: "Ham & Cheese, as Tuan and Sonic were once known, quickly recognized Mr. Sun's value as an asset \
  and took him under their wings. Thusly, the duo became a trio and the Dang Gang became a powerful organization,\
  and perhaps the only viable threat to Mandy's supremacy.",

}

var p4 = {
  name: "Sonic",
  bio: "He was the more outspoken of the duo he comprised with Tuan, and for that reason \
  his ostensible \"sidekick,\" Tuan, escaped notice more often than not. Thus, while Sonic did not run \
  the Dang Gang, he made it possible.",

}

var game = {
  player: '',
  start: function () {
    console.log("start()");
    this.choosePlayer();

    // way to wait until var set?

  },
  choosePlayer: function () {
    console.log("choosePlayer()");
    $("#p1").on("click", function () {
      game.setPlayer("p1");
      console.log("choosePlayer() -> mandy");
      return true;
    });
    $("#p2").on("click", function () {
      game.setPlayer("p2");
      return true;
    });
    $("#p3").on("click", function () {
      game.setPlayer("p3");
      return true;
    });
    $("#p4").on("click", function () {
      game.setPlayer("p4");
      return true;
    });
  },
  setPlayer: function (player) {
    this.player = player;
    console.log("setPlayer()" + " --> " + this.player)
    this.clearPlayerSelection();
  },
  clearPlayerSelection: function () {
    console.log("clearPlayerSelection");
    $("#chars-selection-wrapper").removeClass("animated bounceInDown")
      .addClass("animated bounceOutUp");
    setTimeout(function () {
      $("#chars-selection-wrapper").css("display", "none");
    }, 1000);
    this.chooseFoe();
  },
  chooseFoe: function () {
    console.log("intro()");
    setTimeout(function(){
    $("#foe-selection-wrapper").addClass("animated bounceInDown")
    .css("display","block")
  }, 1000);  
  }
}

$(document).ready(function () {

  game.start();

});