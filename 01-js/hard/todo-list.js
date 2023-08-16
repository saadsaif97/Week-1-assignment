/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  
  constructor() {
    this.todoList = []
  }
  
  /** @param {string} todo  */
  add(todo) {
    this.todoList.push(todo)
  }
  
  /**
   * 
   * @param {number} index 
   * @param {string} updatedTodo 
   */
  update(index, updatedTodo) {
    if (index >= this.todoList.length) return null
    this.todoList[index] = updatedTodo
    return updatedTodo
  }
  
  /**
   * 
   * @param {number} indexOfTodo 
   * @returns {string}
   */
  get(indexOfTodo) {
    if (indexOfTodo >= this.todoList.length) return null
    return this.todoList[indexOfTodo]
  }
  
  clear() {
    this.todoList = []
  }
  
  /** @param {number} indexOfTodo  */
  remove(indexOfTodo) {
    if (indexOfTodo >= this.todoList.length) return null
    return this.todoList.splice(indexOfTodo, 1)
  }
  
  /** @returns {string[]} */
  getAll() {
    return this.todoList
  }

}

module.exports = Todo;
