/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addForm": () => (/* binding */ addForm),
/* harmony export */   "formVisibilityToggle": () => (/* binding */ formVisibilityToggle)
/* harmony export */ });
function priorityButtonActivate(button) {
  let buttons = Array.from(document.getElementsByClassName("priorityButton"));
  buttons.forEach(generalButton => {
    if (generalButton == button) {
      button.classList.add("active");
      switch (button.innerHTML) {
        case "High":
          button.style.backgroundColor = "#ff9999";
          break;
        case "Med":
          button.style.backgroundColor = "#99d3ff";
          break;
        case "Low":
          button.style.backgroundColor = "#99ff99";
          break;
      }
    } else {
      generalButton.classList.remove("active");
      generalButton.style.backgroundColor = "rgba(0,0,0,0.05)";
    }
  });
}

function priorityListener() {
  let buttons = Array.from(document.getElementsByClassName("priorityButton"));
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      priorityButtonActivate(button);
    });
  });
}

function addForm() {
  let topBar = document.getElementById("topBar");
  let body = document.querySelector("body");
  let newItemButton = document.createElement("button");
  newItemButton.id = "newItemButton";
  newItemButton.innerHTML = "+";

  newItemButton.addEventListener("click", () => {
    formVisibilityToggle();
  });

  topBar.appendChild(newItemButton);

  let addItemContainer = document.createElement("div");
  addItemContainer.id = "form-container";
  addItemContainer.style.visibility = "hidden";

  let inputTitle = document.createElement("input");
  inputTitle.id = "inputTitle";
  inputTitle.setAttribute("type", "text");
  inputTitle.setAttribute("name", "title");

  let labelTitle = document.createElement("label");
  labelTitle.setAttribute("for", "title");
  labelTitle.innerHTML = "Title:";

  let inputDesc = document.createElement("input");
  inputDesc.id = "inputDesc";
  inputDesc.setAttribute("type", "text");
  inputDesc.setAttribute("name", "desc");

  let labelDesc = document.createElement("label");
  labelDesc.setAttribute("for", "desc");
  labelDesc.innerHTML = "Description:";

  let inputDate = document.createElement("input");
  inputDate.id = "inputDate";
  inputDate.setAttribute("type", "date");
  inputDate.setAttribute("name", "dueDate");

  let labelDate = document.createElement("label");
  labelDate.setAttribute("for", "dueDate");
  labelDate.innerHTML = "Due Date:";

  let prioritySelector = document.createElement("div");
  prioritySelector.id = "prioritySelector";

  let priorityLabel = document.createElement("p");
  priorityLabel.innerHTML = "Priority: <br>";

  let priorityButtons = document.createElement("div");
  priorityButtons.id = "priorityButtons";

  let highPriority = document.createElement("button");
  highPriority.classList.add("priorityButton");
  highPriority.innerHTML = "High";

  let medPriority = document.createElement("button");
  medPriority.classList.add("priorityButton");
  medPriority.innerHTML = "Med";

  let lowPriority = document.createElement("button");
  lowPriority.classList.add("priorityButton");
  lowPriority.innerHTML = "Low";

  let submitButton = document.createElement("button");
  submitButton.id = "submitButton";
  submitButton.innerHTML = "Add Task";

  prioritySelector.appendChild(priorityLabel);
  priorityButtons.appendChild(highPriority);
  priorityButtons.append(medPriority);
  priorityButtons.append(lowPriority);
  prioritySelector.appendChild(priorityButtons);

  addItemContainer.appendChild(labelTitle);
  addItemContainer.appendChild(inputTitle);

  addItemContainer.appendChild(labelDesc);
  addItemContainer.appendChild(inputDesc);

  addItemContainer.appendChild(labelDate);
  addItemContainer.appendChild(inputDate);

  addItemContainer.appendChild(prioritySelector);

  addItemContainer.appendChild(submitButton);

  body.appendChild(addItemContainer);

  priorityListener();
}

function formVisibilityToggle() {
  let form = document.getElementById("form-container");
  form.style.visibility =
    form.style.visibility == "visible" ? "hidden" : "visible";
  let itemListContainer = document.getElementById("itemListContainer");
  if (form.style.visibility == "visible") {
    itemListContainer.style.filter = "blur(3px)";
  } else {
    itemListContainer.style.filter = "none";
  }
}



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Zvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUV5QyIsImZpbGUiOiJmb3JtLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZnVuY3Rpb24gcHJpb3JpdHlCdXR0b25BY3RpdmF0ZShidXR0b24pIHtcbiAgbGV0IGJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcmlvcml0eUJ1dHRvblwiKSk7XG4gIGJ1dHRvbnMuZm9yRWFjaChnZW5lcmFsQnV0dG9uID0+IHtcbiAgICBpZiAoZ2VuZXJhbEJ1dHRvbiA9PSBidXR0b24pIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgc3dpdGNoIChidXR0b24uaW5uZXJIVE1MKSB7XG4gICAgICAgIGNhc2UgXCJIaWdoXCI6XG4gICAgICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmOTk5OVwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiTWVkXCI6XG4gICAgICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzk5ZDNmZlwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiTG93XCI6XG4gICAgICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzk5ZmY5OVwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBnZW5lcmFsQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICBnZW5lcmFsQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLDAsMCwwLjA1KVwiO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHByaW9yaXR5TGlzdGVuZXIoKSB7XG4gIGxldCBidXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJpb3JpdHlCdXR0b25cIikpO1xuICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHByaW9yaXR5QnV0dG9uQWN0aXZhdGUoYnV0dG9uKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEZvcm0oKSB7XG4gIGxldCB0b3BCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvcEJhclwiKTtcbiAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgbGV0IG5ld0l0ZW1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBuZXdJdGVtQnV0dG9uLmlkID0gXCJuZXdJdGVtQnV0dG9uXCI7XG4gIG5ld0l0ZW1CdXR0b24uaW5uZXJIVE1MID0gXCIrXCI7XG5cbiAgbmV3SXRlbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGZvcm1WaXNpYmlsaXR5VG9nZ2xlKCk7XG4gIH0pO1xuXG4gIHRvcEJhci5hcHBlbmRDaGlsZChuZXdJdGVtQnV0dG9uKTtcblxuICBsZXQgYWRkSXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFkZEl0ZW1Db250YWluZXIuaWQgPSBcImZvcm0tY29udGFpbmVyXCI7XG4gIGFkZEl0ZW1Db250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG5cbiAgbGV0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0VGl0bGUuaWQgPSBcImlucHV0VGl0bGVcIjtcbiAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGl0bGVcIik7XG5cbiAgbGV0IGxhYmVsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsVGl0bGUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGl0bGVcIik7XG4gIGxhYmVsVGl0bGUuaW5uZXJIVE1MID0gXCJUaXRsZTpcIjtcblxuICBsZXQgaW5wdXREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dERlc2MuaWQgPSBcImlucHV0RGVzY1wiO1xuICBpbnB1dERlc2Muc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIGlucHV0RGVzYy5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGVzY1wiKTtcblxuICBsZXQgbGFiZWxEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbERlc2Muc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGVzY1wiKTtcbiAgbGFiZWxEZXNjLmlubmVySFRNTCA9IFwiRGVzY3JpcHRpb246XCI7XG5cbiAgbGV0IGlucHV0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXREYXRlLmlkID0gXCJpbnB1dERhdGVcIjtcbiAgaW5wdXREYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICBpbnB1dERhdGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImR1ZURhdGVcIik7XG5cbiAgbGV0IGxhYmVsRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWxEYXRlLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImR1ZURhdGVcIik7XG4gIGxhYmVsRGF0ZS5pbm5lckhUTUwgPSBcIkR1ZSBEYXRlOlwiO1xuXG4gIGxldCBwcmlvcml0eVNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJpb3JpdHlTZWxlY3Rvci5pZCA9IFwicHJpb3JpdHlTZWxlY3RvclwiO1xuXG4gIGxldCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByaW9yaXR5TGFiZWwuaW5uZXJIVE1MID0gXCJQcmlvcml0eTogPGJyPlwiO1xuXG4gIGxldCBwcmlvcml0eUJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcmlvcml0eUJ1dHRvbnMuaWQgPSBcInByaW9yaXR5QnV0dG9uc1wiO1xuXG4gIGxldCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBoaWdoUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5QnV0dG9uXCIpO1xuICBoaWdoUHJpb3JpdHkuaW5uZXJIVE1MID0gXCJIaWdoXCI7XG5cbiAgbGV0IG1lZFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbWVkUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5QnV0dG9uXCIpO1xuICBtZWRQcmlvcml0eS5pbm5lckhUTUwgPSBcIk1lZFwiO1xuXG4gIGxldCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGxvd1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eUJ1dHRvblwiKTtcbiAgbG93UHJpb3JpdHkuaW5uZXJIVE1MID0gXCJMb3dcIjtcblxuICBsZXQgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3VibWl0QnV0dG9uLmlkID0gXCJzdWJtaXRCdXR0b25cIjtcbiAgc3VibWl0QnV0dG9uLmlubmVySFRNTCA9IFwiQWRkIFRhc2tcIjtcblxuICBwcmlvcml0eVNlbGVjdG9yLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICBwcmlvcml0eUJ1dHRvbnMuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5KTtcbiAgcHJpb3JpdHlCdXR0b25zLmFwcGVuZChtZWRQcmlvcml0eSk7XG4gIHByaW9yaXR5QnV0dG9ucy5hcHBlbmQobG93UHJpb3JpdHkpO1xuICBwcmlvcml0eVNlbGVjdG9yLmFwcGVuZENoaWxkKHByaW9yaXR5QnV0dG9ucyk7XG5cbiAgYWRkSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbFRpdGxlKTtcbiAgYWRkSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dFRpdGxlKTtcblxuICBhZGRJdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsRGVzYyk7XG4gIGFkZEl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXREZXNjKTtcblxuICBhZGRJdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsRGF0ZSk7XG4gIGFkZEl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXREYXRlKTtcblxuICBhZGRJdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0b3IpO1xuXG4gIGFkZEl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcblxuICBib2R5LmFwcGVuZENoaWxkKGFkZEl0ZW1Db250YWluZXIpO1xuXG4gIHByaW9yaXR5TGlzdGVuZXIoKTtcbn1cblxuZnVuY3Rpb24gZm9ybVZpc2liaWxpdHlUb2dnbGUoKSB7XG4gIGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLWNvbnRhaW5lclwiKTtcbiAgZm9ybS5zdHlsZS52aXNpYmlsaXR5ID1cbiAgICBmb3JtLnN0eWxlLnZpc2liaWxpdHkgPT0gXCJ2aXNpYmxlXCIgPyBcImhpZGRlblwiIDogXCJ2aXNpYmxlXCI7XG4gIGxldCBpdGVtTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXRlbUxpc3RDb250YWluZXJcIik7XG4gIGlmIChmb3JtLnN0eWxlLnZpc2liaWxpdHkgPT0gXCJ2aXNpYmxlXCIpIHtcbiAgICBpdGVtTGlzdENvbnRhaW5lci5zdHlsZS5maWx0ZXIgPSBcImJsdXIoM3B4KVwiO1xuICB9IGVsc2Uge1xuICAgIGl0ZW1MaXN0Q29udGFpbmVyLnN0eWxlLmZpbHRlciA9IFwibm9uZVwiO1xuICB9XG59XG5cbmV4cG9ydCB7IGFkZEZvcm0sIGZvcm1WaXNpYmlsaXR5VG9nZ2xlIH07XG4iXSwic291cmNlUm9vdCI6IiJ9