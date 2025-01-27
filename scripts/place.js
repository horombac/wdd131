// Wind Chill Calculation
function calculateWindChill(temperature, windSpeed) {
    return (
        13.12 +
        0.6215 * temperature -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temperature * Math.pow(windSpeed, 0.16)
    ).toFixed(1);
}

// static data
const temp = 10; // °C
const windSpeed = 5; // km/h

const windChill = temp <= 10 && windSpeed > 4.8 ? calculateWindChill(temp, windSpeed) : "N/A";
document.getElementById("wind-chill").textContent = `${windChill}°C`;