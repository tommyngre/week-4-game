var players = ["p1", "p2", "p3", "p4"]


var p1 = {
  name: "Mandy",
  pic: "./assets/images/mandy.png",
  bio: "Even before she conquered the realm, she was brilliant and she knew it. \
  But she needed to let the world know. She had to... one-up them all.",
}

var p2 = {
  name: "Tuan",
  pic: "./assets/images/tuan.png",
  bio: "Outwardly, he seemed humble and content enough: an earnest worker; an honest man. \
  But his humility was a facade, and he intended make those pay who took it for granted.",

}

var p3 = {
  name: "Mr. Sun",
  pic: "./assets/images/mrsun.png",
  bio: "Ham & Cheese, as Tuan and Sonic were once known, quickly recognized Mr. Sun's value as an asset \
  and took him under their wings. Thusly, the duo became a trio and the Dang Gang became a powerful organization,\
  and perhaps the only viable threat to Mandy's supremacy.",

}

var p4 = {
  name: "Sonic",
  pic: "./assets/images/dahlke.png",
  bio: "He was the more outspoken of the duo he comprised with Tuan, and for that reason \
  his ostensible \"sidekick,\" Tuan, escaped notice more often than not. Thus, while Sonic did not run \
  the Dang Gang, he made it possible.",

}

var game = {
  player: '',
  foes: [],
  foe1: '',
  foe2: '',
  foe3: '',
  start: function () {
    console.log("start()");
    this.choosePlayer();

    // way to wait until var set?

  },
  choosePlayer: function () {
    console.log("choosePlayer()");
    $(".char-button").on("click", function () {
      game.player = this.id;
      //add remaining players to foes ary
      for (i = 0; i < players.length; i++) {
        if (!(players[i] == game.player)) {
          game.foes.push(players[i]);
        }
      }
      game.clearChoosePlayer();
    })
  },
  clearChoosePlayer: function () {
    console.log("clearChoosePlayer()");
    $("#chars-selection-wrapper").removeClass("animated bounceInDown")
      .addClass("animated bounceOutUp");
    setTimeout(function () {
      $("#chars-selection-wrapper").css("display", "none");
    }, 1000);
    this.chooseFoe();
  },
  chooseFoe: function () {
    console.log("intro()");
    setTimeout(function () {
      $("#foe-selection-wrapper").addClass("animated bounceInDown")
        .css("display", "block")
    }, 1000);
    for (i = 0; i < game.foes.length; i++) {

      if (game.foes[i] == "p1") { var foe = p1; }
      else if (game.foes[i] == "p2") { var foe = p2; }
      else if (game.foes[i] == "p3") { var foe = p3; }
      else if (game.foes[i] == "p4") { var foe = p4; }
      else {
        // nothin
      }

      var html = "<div class=\"char-button-wrapper col-md-3 col-sm-6\">";
      html += "<div id=\"" + game.foes[i] + "\" class=\"char-button\">";
      html += "<div class=\"char\">";
      html += "<h3 class=\"char-name mx-auto\">" + foe.name + "</h3>";
      html += "<img class=\"char-pic mx-auto\" src=\"" + foe.pic + "\">";
      html += "</div></div></div>";
      $("#foes-wrapper").append(html);
    }

    if (game.foe1 == "") {
      $(".char-button").on("click", function () {
        game.foe1 = this.id;
        console.log("foe1 - " + game.foe1)
        //round1();
      })
    }
    else if (game.foe2 == "") {
      $(".char-button").on("click", function () {
        game.foe2 = this.id;
        console.log(game.foe2)
        //round2();
      })
    }
    else if (game.foe3 == "") {
      $(".char-button").on("click", function () {
        game.foe3 = this.id;
        console.log(game.foe3)
        //round3();
      })
    }
    else {
      //gameover handling
    }

  }
}

$(document).ready(function () {

  game.start();

});