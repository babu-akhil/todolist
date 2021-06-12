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
    let buttons = Array.from(document.getElementsByClassName('priorityButton'))
    buttons.forEach(generalButton => {
        if (generalButton == button) {
            button.classList.add('active')
            switch(button.innerHTML) {
                case 'High':
                    button.style.backgroundColor = '#ff9999'
                    break;
                case 'Med':
                    button.style.backgroundColor = '#99d3ff'
                    break;
                case 'Low':
                    button.style.backgroundColor = '#99ff99'
                    break;
            }
        }

        else {
            generalButton.classList.remove('active')
            generalButton.style.backgroundColor = 'rgba(0,0,0,0.05)'
        }
    })
}

function priorityListener(){
    let buttons = Array.from(document.getElementsByClassName('priorityButton'))
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            priorityButtonActivate(button)
        })
    })
}

function addForm(){

    let topBar = document.getElementById('topBar')
    let body = document.querySelector('body')
    let newItemButton = document.createElement('button')
    newItemButton.id = 'newItemButton'
    newItemButton.innerHTML ='+'

    newItemButton.addEventListener('click', ()=> {
        formVisibilityToggle()
    })

    topBar.appendChild(newItemButton)

    let addItemContainer = document.createElement('div')
    addItemContainer.id = 'form-container'
    addItemContainer.style.visibility = 'hidden'

    let inputTitle = document.createElement('input')
    inputTitle.id = 'inputTitle'
    inputTitle.setAttribute('type', 'text')
    inputTitle.setAttribute('name', 'title')

    let labelTitle = document.createElement('label')
    labelTitle.setAttribute('for', 'title')
    labelTitle.innerHTML = 'Title:'

    let inputDesc = document.createElement('input')
    inputDesc.id = 'inputDesc'
    inputDesc.setAttribute('type', 'text')
    inputDesc.setAttribute('name', 'desc')

    let labelDesc = document.createElement('label')
    labelDesc.setAttribute('for', 'desc')
    labelDesc.innerHTML = 'Description:'

    let inputDate = document.createElement('input')
    inputDate.id = 'inputDate'
    inputDate.setAttribute('type', 'date')
    inputDate.setAttribute('name', 'dueDate')

    let labelDate = document.createElement('label')
    labelDate.setAttribute('for', 'dueDate')
    labelDate.innerHTML = 'Due Date:'

    let prioritySelector = document.createElement('div')
    prioritySelector.id = 'prioritySelector'

    let priorityLabel = document.createElement('p')
    priorityLabel.innerHTML = 'Priority: <br>'

    let priorityButtons = document.createElement('div')
    priorityButtons.id = 'priorityButtons'

    let highPriority = document.createElement('button')
    highPriority.classList.add('priorityButton')
    highPriority.innerHTML = 'High'

    let medPriority = document.createElement('button')
    medPriority.classList.add('priorityButton')
    medPriority.innerHTML = 'Med'

    let lowPriority = document.createElement('button')
    lowPriority.classList.add('priorityButton')
    lowPriority.innerHTML = 'Low'

    let submitButton = document.createElement('button')
    submitButton.id = 'submitButton'
    submitButton.innerHTML = 'Add Task'

    prioritySelector.appendChild(priorityLabel)
    priorityButtons.appendChild(highPriority)
    priorityButtons.append(medPriority)
    priorityButtons.append(lowPriority)
    prioritySelector.appendChild(priorityButtons)

    addItemContainer.appendChild(labelTitle)
    addItemContainer.appendChild(inputTitle)

    addItemContainer.appendChild(labelDesc)
    addItemContainer.appendChild(inputDesc)

    addItemContainer.appendChild(labelDate)
    addItemContainer.appendChild(inputDate)

    addItemContainer.appendChild(prioritySelector)

    addItemContainer.appendChild(submitButton)

    body.appendChild(addItemContainer)

    priorityListener()
}

function formVisibilityToggle() {
    let form = document.getElementById('form-container')
    form.style.visibility = (form.style.visibility=='visible')?'hidden':'visible'
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Zvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJmb3JtLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZnVuY3Rpb24gcHJpb3JpdHlCdXR0b25BY3RpdmF0ZShidXR0b24pIHtcbiAgICBsZXQgYnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJpb3JpdHlCdXR0b24nKSlcbiAgICBidXR0b25zLmZvckVhY2goZ2VuZXJhbEJ1dHRvbiA9PiB7XG4gICAgICAgIGlmIChnZW5lcmFsQnV0dG9uID09IGJ1dHRvbikge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICBzd2l0Y2goYnV0dG9uLmlubmVySFRNTCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ0hpZ2gnOlxuICAgICAgICAgICAgICAgICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZjk5OTknXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ01lZCc6XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzk5ZDNmZidcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnTG93JzpcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjOTlmZjk5J1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZ2VuZXJhbEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICAgICAgZ2VuZXJhbEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLDAsMCwwLjA1KSdcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHByaW9yaXR5TGlzdGVuZXIoKXtcbiAgICBsZXQgYnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJpb3JpdHlCdXR0b24nKSlcbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcHJpb3JpdHlCdXR0b25BY3RpdmF0ZShidXR0b24pXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gYWRkRm9ybSgpe1xuXG4gICAgbGV0IHRvcEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3BCYXInKVxuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gICAgbGV0IG5ld0l0ZW1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIG5ld0l0ZW1CdXR0b24uaWQgPSAnbmV3SXRlbUJ1dHRvbidcbiAgICBuZXdJdGVtQnV0dG9uLmlubmVySFRNTCA9JysnXG5cbiAgICBuZXdJdGVtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gICAgICAgIGZvcm1WaXNpYmlsaXR5VG9nZ2xlKClcbiAgICB9KVxuXG4gICAgdG9wQmFyLmFwcGVuZENoaWxkKG5ld0l0ZW1CdXR0b24pXG5cbiAgICBsZXQgYWRkSXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWRkSXRlbUNvbnRhaW5lci5pZCA9ICdmb3JtLWNvbnRhaW5lcidcbiAgICBhZGRJdGVtQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xuXG4gICAgbGV0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXRUaXRsZS5pZCA9ICdpbnB1dFRpdGxlJ1xuICAgIGlucHV0VGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIGlucHV0VGl0bGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RpdGxlJylcblxuICAgIGxldCBsYWJlbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsVGl0bGUuc2V0QXR0cmlidXRlKCdmb3InLCAndGl0bGUnKVxuICAgIGxhYmVsVGl0bGUuaW5uZXJIVE1MID0gJ1RpdGxlOidcblxuICAgIGxldCBpbnB1dERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXREZXNjLmlkID0gJ2lucHV0RGVzYydcbiAgICBpbnB1dERlc2Muc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIGlucHV0RGVzYy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGVzYycpXG5cbiAgICBsZXQgbGFiZWxEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsRGVzYy5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjJylcbiAgICBsYWJlbERlc2MuaW5uZXJIVE1MID0gJ0Rlc2NyaXB0aW9uOidcblxuICAgIGxldCBpbnB1dERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXREYXRlLmlkID0gJ2lucHV0RGF0ZSdcbiAgICBpbnB1dERhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKVxuICAgIGlucHV0RGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZHVlRGF0ZScpXG5cbiAgICBsZXQgbGFiZWxEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsRGF0ZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkdWVEYXRlJylcbiAgICBsYWJlbERhdGUuaW5uZXJIVE1MID0gJ0R1ZSBEYXRlOidcblxuICAgIGxldCBwcmlvcml0eVNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcmlvcml0eVNlbGVjdG9yLmlkID0gJ3ByaW9yaXR5U2VsZWN0b3InXG5cbiAgICBsZXQgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHByaW9yaXR5TGFiZWwuaW5uZXJIVE1MID0gJ1ByaW9yaXR5OiA8YnI+J1xuXG4gICAgbGV0IHByaW9yaXR5QnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJpb3JpdHlCdXR0b25zLmlkID0gJ3ByaW9yaXR5QnV0dG9ucydcblxuICAgIGxldCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGhpZ2hQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eUJ1dHRvbicpXG4gICAgaGlnaFByaW9yaXR5LmlubmVySFRNTCA9ICdIaWdoJ1xuXG4gICAgbGV0IG1lZFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBtZWRQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eUJ1dHRvbicpXG4gICAgbWVkUHJpb3JpdHkuaW5uZXJIVE1MID0gJ01lZCdcblxuICAgIGxldCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgbG93UHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHlCdXR0b24nKVxuICAgIGxvd1ByaW9yaXR5LmlubmVySFRNTCA9ICdMb3cnXG5cbiAgICBsZXQgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBzdWJtaXRCdXR0b24uaWQgPSAnc3VibWl0QnV0dG9uJ1xuICAgIHN1Ym1pdEJ1dHRvbi5pbm5lckhUTUwgPSAnQWRkIFRhc2snXG5cbiAgICBwcmlvcml0eVNlbGVjdG9yLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpXG4gICAgcHJpb3JpdHlCdXR0b25zLmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eSlcbiAgICBwcmlvcml0eUJ1dHRvbnMuYXBwZW5kKG1lZFByaW9yaXR5KVxuICAgIHByaW9yaXR5QnV0dG9ucy5hcHBlbmQobG93UHJpb3JpdHkpXG4gICAgcHJpb3JpdHlTZWxlY3Rvci5hcHBlbmRDaGlsZChwcmlvcml0eUJ1dHRvbnMpXG5cbiAgICBhZGRJdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsVGl0bGUpXG4gICAgYWRkSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dFRpdGxlKVxuXG4gICAgYWRkSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbERlc2MpXG4gICAgYWRkSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dERlc2MpXG5cbiAgICBhZGRJdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsRGF0ZSlcbiAgICBhZGRJdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0RGF0ZSlcblxuICAgIGFkZEl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3RvcilcblxuICAgIGFkZEl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKVxuXG4gICAgYm9keS5hcHBlbmRDaGlsZChhZGRJdGVtQ29udGFpbmVyKVxuXG4gICAgcHJpb3JpdHlMaXN0ZW5lcigpXG59XG5cbmZ1bmN0aW9uIGZvcm1WaXNpYmlsaXR5VG9nZ2xlKCkge1xuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY29udGFpbmVyJylcbiAgICBmb3JtLnN0eWxlLnZpc2liaWxpdHkgPSAoZm9ybS5zdHlsZS52aXNpYmlsaXR5PT0ndmlzaWJsZScpPydoaWRkZW4nOid2aXNpYmxlJ1xufVxuXG5leHBvcnQge2FkZEZvcm0sIGZvcm1WaXNpYmlsaXR5VG9nZ2xlfTsiXSwic291cmNlUm9vdCI6IiJ9