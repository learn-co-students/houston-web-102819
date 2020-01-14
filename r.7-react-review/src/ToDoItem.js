import React, { Component } from 'react'

class ToDoItem extends Component {

    render(){
      return (
        <div>
          <label>{this.props.task.content}</label>
          <input onClick={(e) => this.props.toggleTask(this.props.task)} type="checkbox" />
        </div>
      )
    }
  
  }

export default ToDoItem