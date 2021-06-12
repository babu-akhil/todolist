function itemFactory(index, title, desc, due, priority){
    return {index, title, desc, due, priority}
}

function ProjectFactory(index, name) {
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

    let viewProject = function(index){
        return (projects[index])
    }
    addProject('default')
    projects[0].addItem('blaa', 'blingblopo', 'TODAY', 'high')
    return {projects, addProject, removeProject, viewProject}
})();

function addItemToProject(index, title, desc, date, priority) {
    supremeDataLeader.projects[index].addItem(title, desc, date, priority)
}

export {ProjectFactory, addItemToProject, supremeDataLeader}