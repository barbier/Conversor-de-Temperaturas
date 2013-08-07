function showFarenheitCalc(){
	var calc = document.getElementById("FarenheitCalc");
	var otherCalc = document.getElementById("CelsiusCalc");
	var showButton = document.getElementById("ShowFarenheitCalc");
	
	showButton.onclick = function(){
		otherCalc.style.display = 'none';
		calc.style.display = 'block';
	}
}

function showCelsiusCalc(){
	var calc = document.getElementById("CelsiusCalc");
	var otherCalc = document.getElementById("FarenheitCalc");
	var showButton = document.getElementById("ShowCelsiusCalc");
	
	showButton.onclick = function(){
		otherCalc.style.display = 'none';
		calc.style.display = 'block';
	}
}

function convertToFarenheit() {
	var temp = document.getElementById("CelsiusValue");
	var convertButton = document.getElementById("ToFarenheitButton");
	var result = document.getElementById("FarenheitResult");
	var newTemp; /* Receive the Farenheit value */

	convertButton.onclick = function(){
		newTemp = temp.value * 9 / 5 + 32;
		newTemp.toString();
		result.innerHTML += newTemp += "ºF";
	}
}

function convertToCelsius() {
	var temp = document.getElementById("FarenheitValue");
	var convertButton = document.getElementById("ToCelsiusButton");
	var result = document.getElementById("CelsiusResult");
	var newTemp; /* Receive the Farenheit value */

	convertButton.onclick = function(){
		newTemp = temp.value * 5 / 9 - 32;
		newTemp = parseFloat(Math.round(newTemp * 100) / 100).toFixed(1); /* Round for only 1 decimal */
		newTemp.toString();
		result.innerHTML += newTemp += "ºC";
	}
}

showFarenheitCalc();
showCelsiusCalc();
convertToFarenheit();
convertToCelsius();