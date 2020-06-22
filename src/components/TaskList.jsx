import React from 'react'
import Task from './Task'

const TaskList = (props) => {
  return (
    <div>
      <div className="card-header text-uppercase font-weight-bold">
        {props.status}
      </div>
      {props.tasks.map(task => (
        <Task 
          key={task.id} 
          task={task} 
          onStatusChange={props.onStatusChange}
          onDeleteTask={props.onDeleteTask}
        />
      ))}
    </div>
    
  )
}

export default TaskList
