```javascript
// =========================================
// WDD 131 – Dynamic Web Fundamentals
// Author: Julius Conteh
// =========================================


// Get the current year.

const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;


// Get the document's last modified date.

const lastModified = document.lastModified;

document.getElementById("lastModified").textContent =
    `Last Modification: ${ lastModified } `;
```