import React, { useState } from 'react'
import logo from '../redux.svg'
import TaskList from './TaskList'

const TASKS_STATUSES = ['Unstarted', 'In Progress', 'Completed']

const TasksPage = (props) => {
  const [cardForm, showCardForm] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const onChangeTitle = e => {
    setTitle(e.target.value)
  }

  const onChangeDescription = e => {
    setDescription(e.target.value)
  }

  const formToggler = () => {
    showCardForm(!cardForm)
  }

  const resetForm = () => {
    setTitle('')
    setDescription('')
    showCardForm(false)
  }

  const onCreateTask = e => {
    e.preventDefault()
    props.onCreateTask({
      title,
      description
    })
    
    resetForm()
  }

  const renderTaskLists = () => {
    const {tasks} = props
    return TASKS_STATUSES.map((status, id) => {
      const statusTasks = tasks.filter(task => task.status === status)
      return (
        <div className="col-md-3 card m-2 p-0" key={id}>
          <TaskList 
            key={status} 
            status={status} 
            tasks={statusTasks} 
            onStatusChange={props.onStatusChange}
            onDeleteTask={props.onDeleteTask}
          />
        </div>
      )
    })
  }

  return (
    <div className="container my-5">
      <div className="jumbotron py-3">
        <div className="row">
          <div className="col-md-2">
            <button className="btn btn-success m-3" onClick={formToggler}>
              <img src={logo} alt="redux-logo" style={{height: "35px", width: "35px"}} />
            </button>
          </div>
          <div className="col-md-10">
            <h2 className="display-4 text-center text-uppercase">
               Task Manager 
            </h2> 
          </div>
        </div>
        {cardForm && (
          <form onSubmit={onCreateTask}>
            <div className="form-group">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Task" 
                onChange={onChangeTitle}
              />
            </div>
            <div className="form-group">
              <textarea 
                type="submit" 
                className="form-control" 
                placeholder="Description"
                onChange={onChangeDescription}
              ></textarea>
              <button className="btn-primary mt-3">Add Task</button>
            </div>
          </form>
        )}
      </div>
      <div 
        className="row d-flex justify-content-center position-relative" 
        style={{background: "#e9ecef"}}
      >
        {renderTaskLists()}
      </div>
    </div>
  )
}

export default TasksPage
