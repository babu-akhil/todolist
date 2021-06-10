/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
let itemFactory = function(index, title, desc, due, priority){
    return {index, title, desc, due, priority}
}

let ProjectFactory = function(index, name) {
    let items = []
    let addItem = function(title, desc, due, priority){
        items.push(itemFactory(items.length,title, desc, due,priority))
    }

    let removeItem = function(index){
        items.splice(index, 1)
    }

    return {index, name, items, addItem, removeItem}
}

let supremeDataLeader = (function() {
    let projects = []
    let addProject = function(name){
        projects.push(ProjectFactory(projects.length, name))
    }
    let removeProject = function(index){
        projects.splice(index, 1)
    }
    addProject('default')
    return {projects, addProject, removeProject}
})();

console.log(supremeDataLeader)

// ABOVE THIS LINE: DATA MANIPULATION~~~~~~~~~~~BELOW THIS LINE DOM STUFF

let body = document.querySelector('body')

let addItemContainer = document.createElement('div')
addItemContainer.id = 'item-container'

let inputTitle = document.createElement('input')
inputTitle.setAttribute('type', 'text')
inputTitle.setAttribute('name', 'title')

let labelTitle = document.createElement('label')
labelTitle.setAttribute('for', 'title')
labelTitle.innerHTML = 'Title:'

let inputDesc = document.createElement('input')
inputDesc.setAttribute('type', 'text')
inputDesc.setAttribute('name', 'desc')

let labelDesc = document.createElement('label')
labelDesc.setAttribute('for', 'desc')
labelDesc.innerHTML = 'Description:'



addItemContainer.appendChild(labelTitle)
addItemContainer.appendChild(inputTitle)

addItemContainer.appendChild(labelDesc)
addItemContainer.appendChild(inputDesc)
body.appendChild(addItemContainer)



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBpdGVtRmFjdG9yeSA9IGZ1bmN0aW9uKGluZGV4LCB0aXRsZSwgZGVzYywgZHVlLCBwcmlvcml0eSl7XG4gICAgcmV0dXJuIHtpbmRleCwgdGl0bGUsIGRlc2MsIGR1ZSwgcHJpb3JpdHl9XG59XG5cbmxldCBQcm9qZWN0RmFjdG9yeSA9IGZ1bmN0aW9uKGluZGV4LCBuYW1lKSB7XG4gICAgbGV0IGl0ZW1zID0gW11cbiAgICBsZXQgYWRkSXRlbSA9IGZ1bmN0aW9uKHRpdGxlLCBkZXNjLCBkdWUsIHByaW9yaXR5KXtcbiAgICAgICAgaXRlbXMucHVzaChpdGVtRmFjdG9yeShpdGVtcy5sZW5ndGgsdGl0bGUsIGRlc2MsIGR1ZSxwcmlvcml0eSkpXG4gICAgfVxuXG4gICAgbGV0IHJlbW92ZUl0ZW0gPSBmdW5jdGlvbihpbmRleCl7XG4gICAgICAgIGl0ZW1zLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG5cbiAgICByZXR1cm4ge2luZGV4LCBuYW1lLCBpdGVtcywgYWRkSXRlbSwgcmVtb3ZlSXRlbX1cbn1cblxubGV0IHN1cHJlbWVEYXRhTGVhZGVyID0gKGZ1bmN0aW9uKCkge1xuICAgIGxldCBwcm9qZWN0cyA9IFtdXG4gICAgbGV0IGFkZFByb2plY3QgPSBmdW5jdGlvbihuYW1lKXtcbiAgICAgICAgcHJvamVjdHMucHVzaChQcm9qZWN0RmFjdG9yeShwcm9qZWN0cy5sZW5ndGgsIG5hbWUpKVxuICAgIH1cbiAgICBsZXQgcmVtb3ZlUHJvamVjdCA9IGZ1bmN0aW9uKGluZGV4KXtcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgICBhZGRQcm9qZWN0KCdkZWZhdWx0JylcbiAgICByZXR1cm4ge3Byb2plY3RzLCBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0fVxufSkoKTtcblxuY29uc29sZS5sb2coc3VwcmVtZURhdGFMZWFkZXIpXG5cbi8vIEFCT1ZFIFRISVMgTElORTogREFUQSBNQU5JUFVMQVRJT05+fn5+fn5+fn5+fkJFTE9XIFRISVMgTElORSBET00gU1RVRkZcblxubGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcblxubGV0IGFkZEl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuYWRkSXRlbUNvbnRhaW5lci5pZCA9ICdpdGVtLWNvbnRhaW5lcidcblxubGV0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG5pbnB1dFRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbmlucHV0VGl0bGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RpdGxlJylcblxubGV0IGxhYmVsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG5sYWJlbFRpdGxlLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlJylcbmxhYmVsVGl0bGUuaW5uZXJIVE1MID0gJ1RpdGxlOidcblxubGV0IGlucHV0RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbmlucHV0RGVzYy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG5pbnB1dERlc2Muc2V0QXR0cmlidXRlKCduYW1lJywgJ2Rlc2MnKVxuXG5sZXQgbGFiZWxEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxubGFiZWxEZXNjLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2MnKVxubGFiZWxEZXNjLmlubmVySFRNTCA9ICdEZXNjcmlwdGlvbjonXG5cblxuXG5hZGRJdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsVGl0bGUpXG5hZGRJdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0VGl0bGUpXG5cbmFkZEl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWxEZXNjKVxuYWRkSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dERlc2MpXG5ib2R5LmFwcGVuZENoaWxkKGFkZEl0ZW1Db250YWluZXIpXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==