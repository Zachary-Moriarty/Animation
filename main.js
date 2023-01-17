const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload('./assets/LinkSprite.png');
ASSET_MANAGER.queueDownload('./assets/TileTestMap.png');

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	let link = new Link();
	gameEngine.addEntity(link);
	gameEngine.addEntity(new map(link));

	gameEngine.init(ctx);

	gameEngine.start();
});
