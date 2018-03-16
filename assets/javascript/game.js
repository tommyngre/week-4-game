//var players = ["p1", "p2", "p3", "p4"]

var players = [
  p1 = {
    key: "p1",
    name: "Mandy",
    pic: "./assets/images/mandy.png",
    bio: "Even before Mandy conquered the realm, she was brilliant and she knew it. \
  But she needed to let the world know. She had to... one-up them all.",
  },
  p2 = {
    key: "p2",
    name: "Tuan",
    pic: "./assets/images/tuan.png",
    bio: "Outwardly, Tuan seemed humble and content enough: an earnest worker; an honest man. \
  But his humility was a facade, and he intended make those pay who took it for granted. \
  Possibly even his closet allies.",
  },
  p3 = {
    key: "p3",
    name: "Sonic",
    pic: "./assets/images/dahlke.png",
    bio: "Sonic was the more outspoken of the duo he comprised with Tuan, and for that reason \
  his ostensible \"sidekick,\" Tuan, escaped notice more often than not. Thus, while Sonic did not run \
  the Dang Gang, he enabled Tuan's running of it. And he knew it.",

  },
  p4 = {
    key: "p4",
    name: "Mr. Sun",
    pic: "./assets/images/mrsun.png",
    bio: "Ham & Cheese, as Tuan and Sonic were once known, quickly recognized Mr. Sun's value as an asset \
  and took him under their wings. Thusly, the duo became a trio and the Dang Gang became a powerful organization,\
  and perhaps the only viable threat to Mandy's supremacy. Mr. Sun knew his value too.",
  }
]

var game = {
  player: '',
  foes: [],
  foe1: '',
  foe2: '',
  foe3: '',
  start: function () {
    this.player = '';
    this.foes = [];
    this.foe1 = '';
    this.foe2 = '';
    this.foe3 = '';
    this.choosePlayer();
  },
  choosePlayer: function () {
    $(".char-button").on("click", function () {
      game.player = this.id;

      players.forEach(function (player) {
        if (player.key == game.player) {
          game.player = player;
        } else {
          game.foes.push(player);
        }
      })

      game.clearChoosePlayer();
    })
  },
  clearChoosePlayer: function () {
    $("#chars-selection-wrapper").removeClass("animated bounceInDown")
      .addClass("animated bounceOutUp");
    setTimeout(function () {
      $("#chars-selection-wrapper").css("display", "none");
    }, 1000);
    this.chooseFoe();
  },
  clearChooseFoe: function () {
    $("#foes-wrapper").removeClass("animated bounceInDown")
      .addClass("animated bounceOutUp");
    setTimeout(function () {
      $("#foe-selection-wrapper").css("display", "none");
    }, 1000);
  },
  clearBios: function () {
    console.log("clearChooseFoe()");
    $("#bios-wrapper").removeClass("animated bounceInDown")
      .addClass("animated bounceOutUp");
    setTimeout(function () {
      $("#bios-wrapper").css("display", "none");
    }, 1000);
  },
  story: function () {
    setTimeout(function () {

      var btn = $("<button>").text("Continue").addClass("continue-btn");

      $("#bios-wrapper").append(`<h2> ${game.player.bio} </h2>`)
        .append(`<h2> ${game.foe1.bio} "</h2>`)
        .append(btn)
        .addClass("animated bounceInDown")
        .css("display", "block")
    }, 1000);

    //had to bind to body for some reason... hm...
    $("body").on("click", ".continue-btn", function () {
      game.clearBios();
    })
  },
  chooseFoe: function () {
    setTimeout(function () {
      $("#foe-selection-wrapper").addClass("animated bounceInDown")
        .css("display", "block")
    }, 1000);

    game.foes.forEach(function (foe) {

      var html = `
        <div class="char-button-wrapper col-md-3 col-sm-6">
          <div id=" ${foe.key} " class="char-button">
            <div class="char">
              <h3 class="char-name mx-auto"> ${foe.name} </h3>
              <img class="char-pic mx-auto" src=" ${foe.pic} ">
            </div>
          </div>
        </div>
        `;

      $("#foes-wrapper").append(html);

    })

    if (game.foe1 == "") {

      $(".char-button").on("click", function () {
        var foeId = $.trim(this.id);

        game.foes.forEach(function (foe) {
          //console.log(foe.key);
          if (foe.key == foeId) {
            //console.log("here");
            game.foe1 = foe;
          }
        })

        game.clearChooseFoe();
        game.story();
        game.fight(game.foe1);
      })
    }
    else if (game.foe2 == "") {
      $(".char-button").on("click", function () {
        game.foe2 = this.id;
        console.log(game.foe2);
        fight();
      })
    }
    else if (game.foe3 == "") {
      $(".char-button").on("click", function () {
        game.foe3 = this.id;
        console.log(game.foe3);
        fight();
      })
    }
    else {
      //gameover handling
    }

  },
  fight: function (foe) {
    //to be continued
  }
}

$(document).ready(function () {

  game.start();

});