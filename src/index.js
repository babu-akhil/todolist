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

// ABOVE THIS LINE: DATA MANIPULATION~~~~~~~~~~~BELOW THIS LINE DOM STUFF

let body = document.querySelector('body')

let addItemContainer = document.createElement('div')

