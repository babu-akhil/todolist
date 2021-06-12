import './style.css'
import {addForm, formVisibilityToggle} from './form.js'
import {ProjectFactory, addItemToProject, supremeDataLeader} from './dataUtils.js'
import {itemView} from './itemView.js'
import folderIcon from './folderIcon.png'
// Color Palette : https://colors.muz.li/palette/99ff99/ff9999/b36b6b/99d3ff/6b94b3


// ABOVE THIS LINE: DATA MANIPULATION~~~~~~~~~~~BELOW THIS LINE DOM STUFF

let topBar = document.createElement('div')
topBar.id = 'topBar'

let projectsMenu = document.createElement('img')
projectsMenu.id = 'projectsMenuButton'
projectsMenu.src = folderIcon

topBar.appendChild(projectsMenu)

let appTitle = document.createElement('div')
appTitle.id = 'appTitle'
appTitle.innerHTML = 'To Do List'
topBar.appendChild(appTitle)
document.querySelector('body').appendChild(topBar)

addForm();

let container = document.createElement('ul')
container.id = 'itemListContainer'

document.querySelector('body').appendChild(container)

function submitButtonListener() {
    let button = document.getElementById('submitButton')
    button.addEventListener('click', () =>{
        let title  = document.getElementById('inputTitle')
        let desc = document.getElementById('inputDesc')
        let date = document.getElementById('inputDate')
        let priority = Array.from(document.getElementsByClassName('active'))[0].innerHTML
        console.log(title.value)
        console.log(desc.value)
        console.log(date.value)
        console.log(priority)
        formVisibilityToggle();
        addItemToProject(0, title.value, desc.value, date.value, priority)
        
        let itemView_ = itemView()    
    })
}



submitButtonListener();





