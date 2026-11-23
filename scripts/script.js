// ==========================================================
// LAST MODIFIED DATE
// ==========================================================

document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;


// ==========================================================
// WIND CHILL CALCULATION
// ==========================================================

const temperature = 29; // Celsius
const windSpeed = 14;   // km/h


function calculateWindChill(temp, speed) {

    /*
     * The Celsius wind-chill formula is applicable when:
     * temperature <= 10°C
     * wind speed > 4.8 km/h
     */

    if (temp <= 10 && speed > 4.8) {

        return (
            13.12 +
            0.6215 * temp -
            11.37 * Math.pow(speed, 0.16) +
            0.3965 * temp * Math.pow(speed, 0.16)
        ).toFixed(1) + "°C";
    }

    return "N/A";
}


document.getElementById("windChill").textContent =
    calculateWindChill(temperature, windSpeed);