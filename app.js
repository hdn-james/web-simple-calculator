// select all the buttons
const buttons = document.querySelectorAll("button");
// select the <input type="text" class="display" disabled> element
const display = document.querySelector(".display");

// calculate function
const calculate = (event) => {
	// current clicked buttons value
	const clickedButtonValue = event.target.value;

	if (clickedButtonValue === "=") {
		// check if the display is not empty then only do the calculation
		if (display.value !== "") {
			// calculate and show the answer to display
			display.value = eval(display.value.replace("÷", "/"));
		}
	} else if (clickedButtonValue === "AC") {
		// clear everything on display
		display.value = "";
	} else {
		// otherwise concatenate it to the display
		display.value += clickedButtonValue;
	}
};

// add eventListener to each button
buttons.forEach((button) => {
	button.addEventListener("click", calculate);
});
