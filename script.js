/* =====================================================
   1. LAST MODIFIED DATE
===================================================== */

const lastModified = document.getElementById("lastModified");

lastModified.textContent =
    `Last Modified: ${document.lastModified}`;


/* =====================================================
   2. WIND CHILL VARIABLES
===================================================== */

// Temperature in degrees Celsius
const temperature = 10;

// Wind speed in kilometres per hour
const windSpeed = 5;


/* =====================================================
   3. WIND CHILL FUNCTION
===================================================== */

function calculateWindChill(temp, speed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1) + "°C";
}


/* =====================================================
   4. DISPLAY WIND CHILL
===================================================== */

const windChill = document.getElementById("windChill");

// Call the function only when the conditions are satisfied
if (temperature <= 10 && windSpeed > 4.8) {

    windChill.textContent =
        calculateWindChill(temperature, windSpeed);

} else {

    windChill.textContent = "N/A";

}
