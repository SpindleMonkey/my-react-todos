import $ from 'jquery'

class TodoModel {
  static all() {
    let request = $.ajax({
      url: 'https://super-crud.herokuapp.com/todos',
      method: 'GET'
    })
    return request
  }

  static create(todo) {
    let request = $.ajax({
      url: 'https://super-crud.herokuapp.com/todos',
      method: 'POST',
      data: todo
    })
    return request
  }

  static delete(todo) {
    let request = $.ajax({
      url: 'https://super-crud.herokuapp.com/todos/' + todo._id,
      method: 'DELETE'
    })
    return request
  }

  static update(todo, id) {
    console.log('update model', todo, id)
    let updateUrl = 'https://super-crud.herokuapp.com/todos/' + id
    console.log(updateUrl)
    let request = $.ajax({
      url: updateUrl,
      method: 'PUT',
      data: { "body": todo }
    })
    return request
  }
}

export default TodoModel