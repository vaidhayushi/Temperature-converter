function convertTemperature() {
    var temperatureInput = parseFloat(document.getElementById("temperature").value);
    var conversionType = document.getElementById("conversion-type").value;
    var result = document.getElementById("result");
    var convertedTemperature;
  
    if (conversionType === "celsius") {
      convertedTemperature = {
        fahrenheit: (temperatureInput * 9/5) + 32,
        kelvin: temperatureInput + 273.15
      };
    } else if (conversionType === "fahrenheit") {
      convertedTemperature = {
        celsius: (temperatureInput - 32) * 5/9,
        kelvin: (temperatureInput + 459.67) * 5/9
      };
    } else if (conversionType === "kelvin") {
      convertedTemperature = {
        celsius: temperatureInput - 273.15,
        fahrenheit: (temperatureInput * 9/5) - 459.67
      };
    }
  
    result.innerHTML = `
      ${temperatureInput}° ${conversionType.charAt(0).toUpperCase() + conversionType.slice(1)} is equal to:
      <ul>
        ${convertedTemperature.fahrenheit ? `<li>${convertedTemperature.fahrenheit.toFixed(2)}°F</li>` : ''}
        ${convertedTemperature.celsius ? `<li>${convertedTemperature.celsius.toFixed(2)}°C</li>` : ''}
        ${convertedTemperature.kelvin ? `<li>${convertedTemperature.kelvin.toFixed(2)}K</li>` : ''}
      </ul>
    `;
  
    setBackground(conversionType);
  }
  
  function setBackground(conversionType) {
    var body = document.body;
    var backgroundColor;
  
    if (conversionType === "celsius") {
      backgroundColor = "#ffcc66";
    } else if (conversionType === "fahrenheit") {
      backgroundColor = "#66ccff";
    } else if (conversionType === "kelvin") {
      backgroundColor = "#ff6666";
    }
  
    body.style.backgroundColor = backgroundColor;
  }
  