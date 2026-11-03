```javascript
// =========================================
// WDD 131 – Dynamic Web Fundamentals
// Author: Julius Conteh
// =========================================


// Display the current copyright year.

document.getElementById("currentyear").textContent =
    new Date().getFullYear();


// Display the document's last modified date and time.

document.getElementById("lastModified").textContent =
    `Last Modification: ${ document.lastModified } `;
```