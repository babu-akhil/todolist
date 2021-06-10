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

export {itemFactory, ProjectFactory}