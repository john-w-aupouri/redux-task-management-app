import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const TASKS_STATUSES = ['Unstarted', 'In Progress', 'Completed']

const Task = (props) => {

  function onStatusChange(e) {
    props.onStatusChange(props.task.id, e.target.value)
  }

  function onDeleteTask() {
    props.onDeleteTask(props.task.id)
  }

  return (
    <>
      <form onChange={onStatusChange}>
        <select defaultValue={props.task.status}>
          {TASKS_STATUSES.map(status => (
            <option value={status} key={status}>{status}</option>
          ))}
        </select>
      </form>
      <h2 
        className="card-title mt-3 text-uppercase px-2"
        style={{color: "#3a4"}}
      >
        {props.task.title}
      </h2>
      <p className="card-text mb-3 text-muted font-weight-bold px-2">
        {props.task.description}
      </p>
      <FaTrashAlt 
        // className="float-right m-5" 
        style={{color: "red", cursor: "pointer"}}
        onClick={() => onDeleteTask(props.task.id)}
      />
    </>
  )
}

export default Task
