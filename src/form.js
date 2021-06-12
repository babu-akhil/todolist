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

export {addForm, formVisibilityToggle};