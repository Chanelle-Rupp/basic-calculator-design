function takeValue(x) {
	document.getElementById('input-window').value += x;
}

function clearInput(y) {
    document.getElementById('input-window').value = y;
}

function calculateResult() {
	var result = eval(document.getElementById('input-window').value);
	document.getElementById('input-window').value = result;
}