var myp5 = null;

function changeCanvas(file) {
	if (myp5 != null) {
		myp5.remove();
	}
	$('#sketch-card').show();
	$('#remove-sketch').show();
	$.getScript(file);
}

function removeCanvas() {
	myp5.remove();
	$('#sketch-card').hide();
	$('#remove-sketch').hide();
}

$(document).ready(function() {

	$('#sketch-card').hide();
	$('#remove-sketch').hide();
	$('.dropdown-trigger').dropdown();
	$('.fixed-action-btn').floatingActionButton();
	$('.sidenav').sidenav();

	
	
})

