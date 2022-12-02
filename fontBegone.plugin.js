/**
 * @name FontBegone
 * @author Psychpsyo
 * @description Makes font be not new
 * @version 0.0.1
 */

module.exports = class FontPlugin {
	start() {
		var fontPluginStyleElem = document.createElement('style');
		document.head.appendChild(fontPluginStyleElem);
		fontPluginStyleElem.sheet.insertRule("* {font-family: sans-serif !important;}", 0);
	}

	stop() {
		fontPluginStyleElem.remove();
	}
}