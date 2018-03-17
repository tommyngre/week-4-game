//var players = ["p1", "p2", "p3", "p4"]

var players = [
  p1 = {
    key: "p1",
    name: "Mandy",
    pic: "./assets/images/mandy.png",
    foePic: "./assets/images/mandy-foe.png",
    bio: "Even before Mandy conquered the realm, she was brilliant and she knew it. \
  But she needed to let the world know. She needed to... one-up them all.",
    sayings: [
      "I'm the best!",
      "My office-mate was the best!",
      "I made drawing questions!"
    ],
    hp: 250,
    attack: 42,
  },
  p2 = {
    key: "p2",
    name: "Tuan",
    pic: "./assets/images/tuan.png",
    foePic: "./assets/images/tuan-foe.png",
    bio: "Outwardly, Tuan seemed humble and content enough: an earnest worker; an honest man. \
  But his humility was a facade, and he intended make those pay who took it for granted. \
  Possibly even his closet allies.",
    sayings: [
      "Three are better than one!",
      "I bested the Jiang Gang!",
      "I made HTML-enabled notes!"
    ],
    hp: 245,
    attack: 43,
  },
  p3 = {
    key: "p3",
    name: "Sonic",
    pic: "./assets/images/dahlke.png",
    foePic: "./assets/images/dahlke-foe.png",
    bio: "Sonic was the more outspoken of the duo he comprised with Tuan, and for that reason \
  his ostensible \"sidekick,\" Tuan, escaped notice more often than not. Thus, while Sonic did not run \
  the Dang Gang, he enabled Tuan's running of it. And he knew it.",
    sayings: [
      "Nobody knows accessibility like me!",
      "I have the best character tees!",
      "My opinions are heard the loudest!"
    ],
    hp: 230,
    attack: 45,
  },
  p4 = {
    key: "p4",
    name: "Mr. Sun",
    pic: "./assets/images/mrsun.png",
    foePic: "./assets/images/mrsun-foe.png",
    bio: "Ham & Cheese, as Tuan and Sonic were once known, quickly recognized Mr. Sun's value as an asset \
  and took him under their wings. Thusly, the duo became a trio and the Dang Gang became a powerful organization,\
  and perhaps the only viable threat to Mandy's supremacy. Mr. Sun knew his value too.",
    sayings: [
      "My art is great than all but Mandy's old office-mate!",
      "The mentee of the one-up master becomes the mentor!",
      "Shh! Listen. This is the sound of you being one-upped!"
    ],
    hp: 210,
    attack: 44,
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

      game.clear("#chars-selection-wrapper");
    })
  },
  clear: function (div) {
    $(div).removeClass("animated bounceInDown")
      .addClass("animated bounceOutUp");
    setTimeout(function () {
      $(div).css("display", "none");
    }, 1000);
    $("#subtitle").css("display", "none");
    if (div == "#chars-selection-wrapper" ){
      this.chooseFoe();

    }
  },
  story: function (f) {
    setTimeout(function () {

      var btn = $("<button>").text("Continue").addClass("continue-btn");

      $("#bios-wrapper").append(`<h2> ${game.player.bio} </h2>`)
        .append(`<h2> ${f.bio} "</h2>`)
        .append(btn)
        .addClass("animated bounceInDown")
        .css("display", "block")
    }, 1000);

    //had to bind to body for some reason... hm...
    $("body").on("click", ".continue-btn", function () {
      game.clear("#bios-wrapper");
      game.fight(f);

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

    $(".char-button").on("click", function () {
      var foeId = $.trim(this.id);
      var f;

      game.foes.forEach(function (foe) {
        if (foe.key == foeId) {
          f = foe;

          if (game.foe1 == "") {
            game.foe1 = f;
            game.clear("#foe-selection-wrapper");
            game.story(game.foe1);
          }
          else if (game.foe2 == "") {
            game.foe2 = f;
            game.clear("#foe-selection-wrapper");
            game.fight(game.foe2);
          }
          else if (game.foe3 == "") {
            game.foe3 = f;
            game.clear("#foe-selection-wrapper");
            game.fight(game.foe3);
          }
          else {
            //gameover handling
          }

        }
      })
    })

  },
  fight: function (f) {
    //console.log("who fightin?")
    //console.log(game.player.name + " be fightin " + f.name);

    setTimeout(function () {
      $("#game-player").append(`
      <img id="player" src="${game.player.pic}" class="battle-pic img-fluid">
    `)
      $("#player-hp").append(`
      <span id="php" class="hp text-center pixel-font">${game.player.hp}</span>
    `)

      $("#game-foe").append(`
    <img id="foe" src="${f.foePic}" class="battle-pic img-fluid">
    `)
      $("#foe-hp").append(`
    <span id="fhp" class="hp text-center pixel-font">${f.hp}</span>
    `)

      var btn = $("<button>").text("One-up Attack!")
        .addClass("attack-btn")
        .attr("id", "one-up")

      $("#attack-btn").append(btn).css("margin-top","20px");

      $("#battle-wrapper").addClass("animated bounceInDown")
        .css("display", "block")
    }, 1000);

    $("body").on("click", "#one-up", function () {
      var php = $("#player-hp").text();
      php -= f.attack;
      var fhp = $("#foe-hp").text()
      fhp -= game.player.attack;

      console.log(php);
      console.log(fhp);

      if (fhp > 0) {
        var rnd = Math.floor(Math.random() * game.player.sayings.length);
        console.log(php);
        $("#player").toggleClass("animated tada");
        $("#player-sayings").addClass("sayings pixel-font").text(game.player.sayings[rnd]);

        if (php > 0) {
          setTimeout(function () {
            var rnd = Math.floor(Math.random() * game.player.sayings.length);
            $("#foe").toggleClass("animated tada");
            $("#foe-sayings").addClass("sayings pixel-font").text(f.sayings[rnd]);
            $("#player").toggleClass("animated tada")
            $("#fhp").text(fhp).addClass("hp-flash");
            setTimeout(function () {
              $("#foe").toggleClass("animated tada");
              $("#php").text(php).addClass("hp-flash");
              $("#fhp").toggleClass("hp-flash");
              setTimeout(function(){
                $("#php").toggleClass("hp-flash");
              }, 500)
            }, 500)
          }, 500)
        }
      }
      else {
        game.chooseFoe();
      }

    })
  },
}

$(document).ready(function () {

  game.start();

});