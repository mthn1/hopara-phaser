/*
 *
 * each screen of prototype corresponds to a game state object.
 * each generates text, and buttons with input events 
 *
 */
var screen1 = {
    init: function () {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    },
    preload: function () {
    },
    create: function () {
        this.stage.backgroundColor = '#fff';

        var headingStyle1 = { font: "bold 24px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
        var heading1 = this.add.text(0, 0, "History of the Waikato", headingStyle1);
        var style = { font: "12px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "top" };
        text = this.add.text(0, 30,
            "Within the ha boundaries of Hamilton lie several significant historic Maori sites. These sites range" +
            "in type from Pa, Urupa and Papakainga. The majority of these sites were constructed by the " +
            "people of Ngati Wairere or  its sub-tribes. Many of the sites are in close  proximity to the Waikato " +
            "river and Hamilton  CBD, and are either designated as parks or reserves. Some sites are " +
            "currently occupied by  buildings. Pukete Pa is one example of a fortified Pa located at " +
            "Braithwaite park, on the west bank of the waikato river at Pukete Road. Another Major Pa site" +
            " located within the  Hamilton CBD on London street is  Kirikiriroa Pa",
            style);
        text.wordWrap = true;
        text.wordWrapWidth = 350;

        var buttonStyle = { font: "bold 16px Arial", fill: "#00F", boundsAlignH: "center", boundsAlignV: "middle" };
        var tbs = [
            { x: 0, y: 250, text: "Terminology", target: "detailscreen1" },
            { x: 0, y: 280, text: "Pukete Pa", target: "detailscreen2" },
            { x: 0, y: 310, text: "Kirikiriroa Pa", target: "detailscreen3" }
        ];
        for (var i = 0; i < tbs.length; i++) {
            var tb = tbs[i];
            tb.button = this.add.text(tb.x, tb.y, tb.text, buttonStyle);
            tb.button.inputEnabled = true;
            tb.button.data.target = tb.target;
            tb.button.events.onInputUp.add(this.showDetailsScreen, this);
        }
    },

    showDetailsScreen: function (button) {
        this.state.start(button.data.target, true, false, "screen1");
    },

    update: function () {
    }
};

// definitions
var detailScreen1 = {
    init: function (callingScreen) {
        this.callingScreen = callingScreen;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    },
    preload: function () {
    },
    create: function () {
        this.stage.backgroundColor = '#fff';
        var style = { font: "12px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
        var headingStyle1 = { font: "bold 24px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
        var headingStyle2 = { font: "bold 18px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
        var heading1 = this.add.text(0, 0, "Terminology", headingStyle1);
        var heading2 = this.add.text(0, 40, "Pa", headingStyle2);
        var text1 = this.add.text(0, 60, "A pa is a fortified village where Maori Chiefs and Warriors lived.  It was a place of refuge" +
            "when invading war parties came.  In general fortified Pa was constructed by levelling an area of " +
            "ground. Holes were dug around the perimeter of the site and large, heavy, adzed wooden poles or split" +
            "logs would be set close together with manuka stakes leaving a sufficient gap to allow spears to be" +
            "thrust between them.", style);
        text1.wordWrap = true;
        text1.wordWrapWidth = 350;
        var heading2 = this.add.text(0, 220, "Papakainga", headingStyle2);
        var text2 = this.add.text(0, 245, "A Papakainga was an unfortified and undefended village or hamlet. In pre-European times Papakainga" +
            "were associated with food production and storage and inhabited by the people involved in these processes.", style);
        text2.wordWrap = true;
        text2.wordWrapWidth = 350;
        var heading3 = this.add.text(0, 340, "Urupa", headingStyle2);
        var text3 = this.add.text(0, 370, "Urupa are burial grounds where bodies of tribe members were buried with elaborate ceremonies and " +
            "rituals. Often the bodies were buried with items of personal adornment or greenstone artefacts.", style);
        text3.wordWrap = true;
        text3.wordWrapWidth = 350;
        var buttonStyle = { font: "bold 24px Arial", fill: "#0A0", boundsAlignH: "center", boundsAlignV: "middle" };
        var textButton = this.add.text(this.world.centerX, 520, " Back ", buttonStyle);
        textButton.anchor.x = 0.5;
        textButton.inputEnabled = true;
        textButton.events.onInputUp.add(this.close, this);

    },
    close: function () {
        this.state.start(this.callingScreen);
    },
    update: function () {
    }
};

// pukete pa
var detailScreen2 = {
    init: function (callingScreen) {
        this.callingScreen = callingScreen;
        console.log(arguments);
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    },
    preload: function () {
        this.load.image('teRoore', 'images/tr.png');
    },
    create: function () {
        this.stage.backgroundColor = '#fff';
        var headingStyle = { font: "bold 24px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
        var heading1 = this.add.text(0, 0, "Pukete Pa", headingStyle);
        var style = { font: "12px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
        var text = this.add.text(0, 40,
            "Pukete was a fortified Pa, believed to have been constructed by Nga Iwi. " +
            "Ngati Koura conquered the Nga Iwi inhabitants and took over the pa and surrounding lands." +
            "Pukete Pa was occupied by Ngati Koura under the leadership of Te Roore Tatangi when they" +
            "abandoned the Pa prior to the land wars of 1863. However, by this time the wooden palisade" +
            "fortifications of the Pa had disappeared only the ditch remained",
            style);
        text.wordWrap = true;
        text.wordWrapWidth = 350;
        sprite = this.add.sprite(this.game.width / 2, 210, 'teRoore');
        sprite.anchor.x = 0.5;
        var buttonStyle = { font: "bold 24px Arial", fill: "#0A0", boundsAlignH: "center", boundsAlignV: "middle" };
        var textButton = this.add.text(this.world.centerX, 520, " Back ", buttonStyle);
        textButton.anchor.x = 0.5;
        textButton.inputEnabled = true;
        textButton.events.onInputUp.add(this.close, this);

    },
    close: function () {
        this.state.start(this.callingScreen);
    },
    update: function () {
    }
};

// kirikiriroa pa
var detailScreen3 = {
    init: function (callingScreen) {
        this.callingScreen = callingScreen;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    },
    preload: function () {
        this.load.image('kirikiriroaPa', 'images/kp.png');
    },
    create: function () {
        this.stage.backgroundColor = '#fff';
        var headingStyle = { font: "bold 24px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
        headingText = this.add.text(0, 0, "Kirikiriroa Pa", headingStyle);

        var style = { font: "12px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
        text = this.add.text(0, 30,
            "Kirikiriroa Pa is the most significant Pa within the Hamilton City area. " +
            "It was a fully fortified Pa Whakairo (Pa with carved \npalisades). It was an half oval " +
            "in shape with the riverbank as theflat side and the curved front stretching from " +
            "London Street toClaudelands Road. The curved front was fortified by a ditch and " +
            "mound structure with an elaborate wooden palisade atop the mound." +
            "Unfortunately, most of the surface features of the Kirikiriroa Pa site were " +
            "destroyed during the early development of Hamilton City before they were accurately " +
            "recorded or mapped.",
            style);
        text.wordWrap = true;
        text.wordWrapWidth = 350;
        sprite = this.add.sprite(this.world.centerX, 250, 'kirikiriroaPa');
        sprite.anchor.x = 0.5;
        var buttonStyle = { font: "bold 24px Arial", fill: "#0A0", boundsAlignH: "center", boundsAlignV: "middle" };
        var textButton = this.add.text(this.world.centerX, 500, " Back ", buttonStyle);
        textButton.anchor.x = 0.5;
        textButton.inputEnabled = true;
        textButton.events.onInputUp.add(this.close, this);

    },
    close: function () {
        this.state.start(this.callingScreen);
    },
    update: function () {
    }
}; 



/*
 *
 * instantiate phaser game and load game states and invoke starting game state on device ready event
 *
 */
function init() {
    "use strict";
    
    var game = new Phaser.Game(384, 640, Phaser.AUTO);
    game.state.add('screen1', screen1);
    game.state.add('detailscreen1', detailScreen1);
    game.state.add('detailscreen2', detailScreen2);
    game.state.add('detailscreen3', detailScreen3);


    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        
        game.state.start('screen1');
    };

    
};

init();