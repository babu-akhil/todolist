import { supremeDataLeader } from "./dataUtils";

function itemView() {
    
    let container = document.getElementById('itemListContainer')
    container.innerHTML = ''

    supremeDataLeader.viewProject(0).items.forEach(item => {
        let itemContainer = document.createElement('li')
        itemContainer.dataset.index = item.index 
        itemContainer.classList.add('itemContainer')
        let itemPreview = document.createElement('div')
        itemPreview.dataset.index = item.index
        itemPreview.classList.add('itemPreview')
        let itemTitle = document.createElement('div')
        itemTitle.classList.add('itemTitle')
        let itemDue = document.createElement('div')
        itemDue.classList.add('itemDue')
        itemTitle.innerHTML = item.title
        itemDue.innerHTML = item.due 
        itemPreview.appendChild(itemTitle)
        itemPreview.appendChild(itemDue)
        itemContainer.appendChild(itemPreview)
        container.appendChild(itemContainer)
        console.log(item)
    })

}

export { itemView }