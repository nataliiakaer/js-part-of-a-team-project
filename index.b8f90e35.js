!function(){var e=document.querySelector("body"),t=document.querySelector(".switch__input");t.addEventListener("change",(function(s){var a=null;t.checked?(a="dark",e.classList.remove("light-theme"),e.classList.add("dark-theme")):(a="light",e.classList.remove("dark-theme"),e.classList.add("light-theme"));localStorage.setItem("theme",a)}));var s=localStorage.getItem("theme");null===s||"light"===s?(t.removeAttribute("checked"),e.classList.remove("dark-theme"),e.classList.add("light-theme")):"dark"===s&&(t.setAttribute("checked","checked"),e.classList.remove("light-theme"),e.classList.add("dark-theme"))}();
//# sourceMappingURL=index.b8f90e35.js.map