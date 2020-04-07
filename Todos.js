const TodoListFactory = function(element) {
    let root = null
    let todos = []

    if(element != '') {
        root = document.getElementById(element)
    }


    let displayTodos = () => {
        root.innerHTML = ''
        for(let i = 0; i < todos.length; i++) {
            let myTodo = document.createElement('li')
            let myTodoCheckBox = document.createElement('input')
            let deleteBtn = document.createElement('button')
            deleteBtn.id = 'delete'
            let btnText = document.createTextNode('Delete')
            deleteBtn.appendChild(btnText)
            myTodoCheckBox.onclick = () => {
                toggleCompleted(i)
            }
            deleteBtn.onclick = () => {
                deleteTodo(i)
            }
            myTodoCheckBox.type = 'checkbox'
            if(todos[i].completed === true) {
                myTodoCheckBox.checked = true
            }
            let myTodoContent = document.createElement('span')
            myTodoContent.id = 'content'
            myTodoContent.textContent = todos[i].content
            myTodo.appendChild(myTodoCheckBox)
            myTodo.appendChild(myTodoContent)
            myTodo.appendChild(deleteBtn)
            root.appendChild(myTodo)
        }
    }
    let addTodo = todo => {
        if(todo.content === '') {
            alert('You must write something!')
        } else {
            todos.push(todo)
            displayTodos()
        }
    }
    let deleteTodo = position => {
        todos.splice(position, 1)
        displayTodos()
    }
    let toggleCompleted = position => {
        todos[position].completed = !todos[position].completed
    }

    Object.defineProperty(this, 'render', {
        get: () => displayTodos
    })

    Object.defineProperty(this, 'addTodo', {
        get: () => addTodo
    })
}