(function(exports) {
	function Boot() {}

	Boot.prototype = {
		preload: function() {
			this.load.image('loading-bar', 'assets/img/loading bar.png');
			this.load.image('loading-bar-bg', 'assets/img/loading bar bg.png');
		},
		create: function() {
			this.state.start('preload');
		}
	}

	exports.Boot = Boot;
})(this);

(function(exports) {
	function Preload() {}

	Preload.prototype = {
		preload: function() {
			var x = 490,
				y = 356,
				add = this.add,
				load = this.load;

			add.sprite(x, y, 'loading-bar-bg');

			var loadingBar = add.sprite(x, y, 'loading-bar');
			load.setPreloadSprite(loadingBar);

			load.bitmapFont('minecraftia', 'assets/font/minecraftia.png', 'assets/font/minecraftia.xml');
			// Preload content here

			load.onLoadComplete.addOnce(this.onLoadComplete, this);					
		},
		create: function() {
			this.stage.backgroundColor = '#000000';
		},
		onLoadComplete: function() {
			this.state.start('game');
		}
	};

	exports.Preload = Preload;
})(this);
(function(exports) {
	function Game() {}

	Game.prototype = {
		create: function() {
			
		},
		update: function() {

		}
	}

	exports.Game = Game;	
})(this);
var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'game-container');

game.state.add('boot', Boot);
game.state.add('preload', Preload);
game.state.add('game', Game);

game.state.start('boot');