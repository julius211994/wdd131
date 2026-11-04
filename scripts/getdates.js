// WDD 131 – Dynamic Web Fundamentals
// Author: Julius Conteh

// Display the current copyright year
const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").textContent = currentYear;

// Display the date and time the document was last modified
const lastModified = document.lastModified;

document.querySelector("#lastModified").textContent =
    `Last Modification: ${lastModified} `;
