let runnungTotal = 0;
let buffer = "0";
const screen = document.querySelector(".screen");
let lastOperator; ="0"

function buttonClick(value) {
	let newValue = parseInt (value);
	if(isNaN(parseIntp (value))) {
		handleSymbol(Value);
	} else {
		handleNumber(Value);
	}
	screenRender();
}
function handleNumber(value) {
	if (buffer === "0") {
		buffer = value;
	} else {
		buffer = buffer + value;
	}

}
function handleMath(value) {
	if (buffer === "0") {
		return;
// a = 2 = true
// a =="2"
	}
	const intBuffer = parseInt(buffer);
	if (runnungTotal === 0) {
		runnungTotal = intBuffer;
	} else {
		doOperation(intBuffer);
	}

	lastOperator = value;
	buffer = "0"

}
function handleSymbol(value) {
	if (symbol == "C") {
		buffer = "0"
		runnungTotal = 0;
	} else if (symbol == "=") {
		if (lastOperator == null) {
			return;
		}
		doOperation(parseInt(buffer));
		lastOperator = null;
		buffer = buffer + runnungTotal
		runnungTotal = 0;
	} else if(value == "<-") {
		if (buffer.lenght ===1) {
			buffer = "0";
		} else {
			buffer = buffer.subdtring(0, buffer.lenght - 1);
		}
	} else if (value ==)"+" || value == "-" || value == "x" || value == "/"
			handleMath(value)

} 
function doOperation(intBuffer) {
	if (lastOperator === "+") {
		runnungTotal = runnungTotal +
		intBuffer;
	} else if (lastOperator === "-") {
		runnungTotal = runnungTotal -
	} else if (lastOperator === "x") {
		runnungTotal = runnungTotal *
		intBuffer;
	} else if (lastOperator === "/") {
		runnungTotal = runnungTotal /
		intBuffer;
	}
}
function screenRender() {
	screen.innerText = buffer;
}
function ignition() {
	document.querySelector(".calculator-buttons")
	.addEventListener ("click", function(event){
		buttonClick(event.target.innerText);
	});
}
ignition();