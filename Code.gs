function onOpen() {
	DocumentApp.getUi()
		.createMenu('EaglerCraft 1.8.8')
		.addItem('Play', 'showSidebar')
		.addToUi();
}


function showSidebar() {
	var html = HtmlService.createTemplateFromFile('Index')
		.evaluate()
		.setWidth(1920)
		.setHeight(1080);
	DocumentApp.getUi().showModalDialog(html, 'EaglerCraft 1.8.8');
}


// Helper function to include other HTML files
function include(filename) {
	return HtmlService.createHtmlOutputFromFile(filename).getContent();
}