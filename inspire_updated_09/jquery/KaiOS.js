(function (app) {
	//input mapping
	document.addEventListener('keydown', handleKeydown);
	document.addEventListener('keyup', handleKeyup);


	// var keyOverlay = document.getElementById('keyOverlay');
	var overlayTimeout;

	function handleKeydown(e) {
		// enable key overlay
		// keyOverlay.style.display = 'block';
		// keyOverlay.innerHTML += '<span>' + e.key + '</span>';
		console.log('Button pressed:', e.key);

		// clear overlay
		clearTimeout(overlayTimeout);
		overlayTimeout = setTimeout(function () {
			// keyOverlay.innerHTML = ' ';
			// keyOverlay.style.display = 'none';
		}, 1000);

		switch (e.key) {
			case 'Backspace':
				e.preventDefault(); // prevent the app from closing
				break;

			case '1':
				userInput = 1;

				// console.log("you pressed one man");
				processAnswer();
				break;
			case '2':
				userInput = 2;
				processAnswer();
				break;
			case '3':
				userInput = 3;
				processAnswer();
				break;
			case '4':
				userInput = 4;
				processAnswer();
				break;
			case '5':
				showAward();
				break;
		}
	}

	function handleKeyup(e) {
		switch (e.key) {
			case 'ArrowUp':
			case '2': /* num pad navigation */
				app.keyCallback.dUp();
				break;
			case 'ArrowDown':
			case '8': /* num pad navigation */
				app.keyCallback.dDown();
				break;
			case 'ArrowLeft':
			case '4': /* num pad navigation */
				app.keyCallback.dLeft();
				break;
			case 'ArrowRight':
			case '6': /* num pad navigation */
				app.keyCallback.dRight();
				break;
			case 'SoftLeft':
			case 'Control': /* use on PC */
				app.keyCallback.softLeft();
				break;
			case 'SoftRight':
			case 'Alt': /* use on PC */
				app.keyCallback.softRight();
				break;
			case 'Enter':
			// case '5':
				app.keyCallback.enter();
				break;
			case 'ContextMenu':
				app.keyCallback.menu();
				break;
			case 'Backspace':
				app.keyCallback.back();
				break;
			case 'EndCall':
				window.history.back();
				//app.keyCallback.quit();
				break;
			default:
				app.keyCallback.other(e.key);
		}
	}

	// display ad when app is loaded

	// the escape key will dismiss the ad on the PC
	// on the device or simulator press left soft key
	var fullscreenAd = false; /* switch between fullscreen and responsive ad */
	var testMode = 1; /* set to 0 for real ads */


	return app;
}(MODULE));
