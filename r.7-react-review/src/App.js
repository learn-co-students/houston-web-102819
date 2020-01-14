import React, { Component } from 'react'
import ToDoItem from './ToDoItem'

class App extends Component {

  state = {
    tasks: [],
    completedTasks: []
  }

  componentDidMount(){
    fetch('http://localhost:4000/tasks')
      .then( res => res.json())
      .then( tasks => this.setState({ tasks: tasks }))

      fetch('http://localhost:4000/completedTasks')
      .then( res => res.json())
      .then( completedTasks => this.setState({ completedTasks: completedTasks }))
  }
  
  // Step 1: Define a function in the same component that state is defined
  // Step 2: Send that function to the component you want to run that function from
  // Step 3: Invoke that function inside the child
  // Step 4: Inside the function change state

  toggleTask = (selectedTask) => {
    // Is the task not completed
    if(this.state.tasks.includes(selectedTask)){
      // Complete it
      fetch('http://localhost:4000/completedTasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(selectedTask)
      })
      fetch(`http://localhost:4000/tasks/${selectedTask.id}`, {
        method: 'DELETE'
      })
      this.setState({
        tasks: this.state.tasks.filter( task => task !== selectedTask),
        completedTasks: [ ...this.state.completedTasks, selectedTask ]
      })
    } else {
      // Uncomplete it 
      this.setState({
        completedTasks: this.state.completedTasks.filter( task => task !== selectedTask),
        tasks: [ ...this.state.tasks, selectedTask ]
      })
    }
  }


  render(){
    return (
      <div>
        In Progress:
        {this.state.tasks.map( task => {
          return <ToDoItem key={task.id} task={task} toggleTask={this.toggleTask} />
        })}
        <br />
        Completed Tasks:
        {this.state.completedTasks.map( task => {
          return <ToDoItem key={task.id} task={task} toggleTask={this.toggleTask} />
        })}
      </div>
    )
  }
}

export default App;