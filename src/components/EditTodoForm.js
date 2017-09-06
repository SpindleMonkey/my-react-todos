import React, {Component} from 'react'

class EditTodoForm extends Component {
  constructor() {
    super()
    this.state = {
      updatedTodoBody: ''
    }
  }

  onInputChange(event) {
    console.log('edit todo input changed')
    this.setState({
      updatedTodoBody: event.target.value
    })
  }

  onFormSubmit(event) {
    console.log('change submitted')
    console.log(event)
    event.preventDefault()
    this.props.onUpdateTodo(this.state.updatedTodoBody, this.props.todo._id)
    this.setState({
      updatedTodoBody: ''
    })
  }

  render() {
    return (
      <div className='editTodoForm'>
        <form onSubmit={event => this.onFormSubmit(event)}>
          <input
            onChange={event => this.onInputChange(event)}
            type='text'
            placeholder='updated todo...'
            value={this.state.updatedTodoBody}
          />
          <button type='submit'>Update Todo!</button>
        </form>
      </div>
    )
  }
}

export default EditTodoForm