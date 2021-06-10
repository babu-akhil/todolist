import './style.css'
import {addForm} from './form.js'
import {ProjectFactory} from './dataUtils.js'


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

addForm();

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
    })
}


submitButtonListener();



