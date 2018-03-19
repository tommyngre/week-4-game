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
    hp: 100,
    ap: 10,
    bonus: 1,
    yay: "But that's no surprise. You're the best.\
    You conquered the realm and kept the Dang Gang at bay - to no one's surprise, \
    with that great intellect of yours!",
    womp: "You always win, so this must be crushing. \
    But you'll get em next time!"
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
      "I made HTML-enabled notes!",
      "I trained Dandan Wang!",
    ],
    hp: 90,
    ap: 14,
    bonus: 2,
    yay: "You did the impossible. You one-upped Mandy! And on the way, \
    you held the ang Gang together despite a spirited insurrection. \
    Tuandangit you're good, but don't get cocky; gambling me say that's when Mandy'll getcha.",
    womp: "No one can fault you for trying. \
    You thought you had a winning team - the Dang Gang! \
    Maybe you do. Maybe next time."
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
      "I know accessibility best!",
      "I have the best character tees!",
      "I speak screen-reader!"
    ],
    hp: 80,
    ap: 18,
    bonus: 3,
    yay: "Incredible! You showed Tuan who's boss. Now you run the Dang Gang! \
    Not only that, you managed to one-up Mandy on the way. \
    But keep an eye out; Mandy's not the type to go gently into that good night. ",
    womp: "You might have thought the Dang Gang was stifling, \
    that you ought to just do it on your own. \
    But you fell short. Maybe next time."
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
      "I write the smallest!",
      "The mentee will become the mentor!",
      "My parking spots are best! Handicap!"
    ],
    hp: 70,
    ap: 22,
    bonus: 4,
    yay: "Very impressive, Mr. Sun! You bested your mentor, Mandy \
    and have placed in a formidable headlock those who took you under their wings. \
    You command the Dang Dang. Tuan and Sonic answer to you now... for now.",
    womp: "As your mentor, Mandy set a high bar for you. \
    You might have thought you were ready to take her on, \
    but you're not quite ready yet. \
    Maybe next time."
  }
];

var startover = document.getElementById("startover");

var game = {
  player: '',
  foes: [],
  foe1: '',
  foe2: '',
  foe3: '',
  cleanup: function () {
    this.player = '';
    this.foes = [];
    this.foe1 = '';
    this.foe2 = '';
    this.foe3 = '';
    $("#foes-wrapper").html("");
    $("#bios-content-wrapper").html("");
    game.clearBattle();
  },
  load: function (div) {
    setTimeout(function () {
      $(div).addClass("animated bounceInDown")
        .css("display", "block")
    }, 1000);
  },
  start: function (i) {
    //battle
    if (i == "new") {
      this.cleanup();
      this.load("#chars-selection-wrapper");
    } else {
      this.choosePlayer();
    }
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
    $(div).removeClass("bounceInDown")
      .addClass("animated bounceOutUp");
    setTimeout(function () {
      $(div).removeClass("bounceOutUp") //fixed?
      $(div).css("display", "none");
    }, 1000);
    $("#subtitle").css("display", "none");
    if (div == "#chars-selection-wrapper") {
      this.chooseFoe();

    }
  },
  story: function (f) {
    setTimeout(function () {

      var btn = $("<button>").text("Continue").addClass("mx-auto continue-btn");

      $("#bios-content-wrapper").append(`<h2> ${game.player.bio} </h2>`)
        .append(`<h2> ${f.bio} "</h2>`)
        .append(btn)
        .addClass("animated bounceInDown");
      $("#bios-wrapper").css("display", "block")
    }, 1000);

    $("body").on("click", ".continue-btn", function () {
      game.clear("#bios-wrapper");
      game.fight(f);

    })
  },
  chooseFoe: function () {
    this.load("#foe-selection-wrapper");

    //customize messae on foe selection scrn
    if (game.foes.length == 1) {
      $("#next").text("final ");
    }
    else if (game.foes.length < players.length - 1) {
      $("#next").text("next ");
    }

    //draw foe buttons
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

      //funnel foes into battle
      game.foes.forEach(function (foe) {
        if (foe.key == foeId) {
          f = foe;
          //f should always be set

          if (game.foe1 == "") {
            game.foe1 = f;
            game.clear("#foe-selection-wrapper");
            game.story(game.foe1);
          }
          else if (game.foe2 == "") {
            //give player bonus
            game.player.ap += game.player.bonus;
            game.foe2 = f;
            game.clear("#foe-selection-wrapper");
            game.fight(game.foe2);
          }
          else if (game.foe3 == "") {
            //another bonus
            game.player.ap += game.player.bonus;
            game.foe3 = f;
            game.clear("#foe-selection-wrapper");
            game.fight(game.foe3);
          }
          else {
            //shouldn't arrive here
          }

        }
      })
    })

  },
  clearBattle: function () {
    //cleanup battle-wrapper between battles
    $("#php").removeClass("hp-flash");
    $("#game-player").html("");
    $("#player-sayings").html("");
    $("#player-hp").html("");
    $("#game-foe").html("");
    $("#fhp").removeClass("hp-flash");
    $("#foe-sayings").html("");
    $("#foe-hp").html("");
    $("#attack-btn").html("");

  },
  stageBattle: function (f) {
    console.log("staging battle with 'f'")
    console.log(f.name);
    setTimeout(function () {
      $("#game-player").html(`
      <img id="player" src="${game.player.pic}" class="battle-pic img-fluid">
    `)
      $("#player-hp").html(`
      <span id="php" class="hp text-center pixel-font">${game.player.hp}</span>
    `)

      $("#game-foe").html(`
    <img id="foe" src="${f.foePic}" class="battle-pic img-fluid">
    `)
      $("#foe-hp").html(`
    <span id="fhp" class="hp text-center pixel-font">${f.hp}</span>
    `)

      $("#attack-btn").html(`<button id="one-up" class="attack-btn">One-up!</button>`);

      $("#battle-wrapper").addClass("animated bounceInDown")
        .css("display", "block")
    }, 1000);
  },
  attack: function (player, sayings, f) {
    if (player == "#player") {
      var rnd = Math.floor(Math.random() * game.player.sayings.length + 1);
      $(player).addClass("animated tada");
      $(sayings).addClass("sayings pixel-font").text(game.player.sayings[rnd]);
    } else {
      var rnd = Math.floor(Math.random() * f.sayings.length + 1);
      $(player).addClass("animated tada");
      $(sayings).addClass("sayings pixel-font").text(f.sayings[rnd]);
    }

    setTimeout(function () {
      $(player).removeClass("tada");
    }, 400);
  },
  hpflash: function (hp) {
    setTimeout(function () {
      $(hp).removeClass("hp-flash");
    }, 300);
  },
  fight: function (f) {
    this.stageBattle(f);

    //count var to handle bonus 
    var cnt = -1;

    $("body").off("click").on("click", "#one-up", function () {

      cnt++;

      //calculate outcome of attack
      var php = $("#php").text();
      php -= f.ap;      
      var fhp = $("#fhp").text()
      fhp -= (game.player.ap + (game.player.bonus*cnt));
      console.log(game.player.ap + " " + (game.player.bonus * cnt));

      //battle logic
      //if the foe will survive the next attack, launch
      if (fhp > 0) {
        game.attack("#player", "#player-sayings", f);
        $("#fhp").text(fhp).addClass("animated hp-flash");
        game.hpflash("#fhp");
        //if player will survive counter-attack, launch
        if (php > 0) {
          setTimeout(function () {
            game.attack("#foe", "#foe-sayings", f);
            $("#php").text(php).addClass("animated hp-flash");
            game.hpflash("#php");
          }, 500)
        //if player will not survive counter-attack, handle loss-gameover
        } else {
          $("#fhp").text("0").addClass("hp-flash")
            .css("color", "red");
          game.removeFoe(f);
          game.lose();
        }
      }
      //if foe will not survice attack, handle win
      else {
        //if foe 3 not set, go to next battle
        if (game.foe3 != "") {
          $("#fhp").text("0").addClass("hp-flash")
          .css("color", "red");
          game.clear("#battle-wrapper");
          game.removeFoe(f);
          game.win();
        }
        //if foe 3 set, then handle win-gameover
        else {
          $("#fhp").text("0").addClass("hp-flash")
            .css("color", "red");

          //prep for next foe selection
          $("#foes-wrapper").html("");
          game.clear("#battle-wrapper");
          //clear elements while display:none
          setTimeout(function () {
            game.clearBattle();
          }, 500);
          //remove foe from foe ary
          game.removeFoe(f);
          game.chooseFoe();
        }
      }

    })
  },
  removeFoe: function (f) {
    //remove defeated f from game.foes array
    game.foes.forEach((foe, i) => {
      if (foe.key == f.key) {
        console.log("foe gettin spliced:");
        console.log(foe.name);
        game.foes.splice(i, 1);
      }
    })
  }
  ,
  win: function () {
    this.load("#win-wrapper");
    var html = `<h3>${game.player.yay}</h3>`;

    var btn = $("<button>").text("Play Again").attr("id", "play-agn-btn")
      .addClass("mx-auto play-agn-btn");

    $("#win-content").html(html).append(btn);

    $("body").on("click", "#play-agn-btn", function () {
      game.clear("#win-wrapper");
      game.start("new");
    })
  },
  lose: function (f) {
    $("#attack-btn").prop("disabled", true);
    $("#womp").text(game.player.womp);
    this.load("#gameover-modal");

    window.onclick = function (e) {
      if (e.target == startover) {
        $("#gameover-modal").css("display", "none");
        game.clear("#battle-wrapper");
        game.start("new");
      } else {
        $("#gameover-modal").css("display", "none");
      }
    }
  }
}

$(document).ready(function () {

  game.start();

});