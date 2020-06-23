import { EDIT_TASK } from '../actions/types'
import { CREATE_TASK } from '../actions/types'
import { DELETE_TASK } from '../actions/types'

const initialState = [
  // {
  //   id: 1,
  //   title: 'ReactJS',
  //   description: 'Let\'s learn ReactJS',
  //   status: "Completed"
  // },
  // {
  //   id: 2,
  //   title: 'Redux',
  //   description: 'Let\'s learn Redux',
  //   status: "In Progress"
  // },
  // {
  //   id: 3,
  //   title: 'GraphQL',
  //   description: 'Let\'s learn GraphQL',
  //   status: "In Progress"
  // },
  // {
  //   id: 4,
  //   title: 'React-Context',
  //   description: 'Let\'s learn React-Context-API',
  //   status: "Completed"
  // },
  // {
  //   id: 5,
  //   title: 'Gatsby',
  //   description: 'Let\'s learn Gatsby',
  //   status: "Unstarted"
  // },
  // {
  //   id: 6,
  //   title: 'Bootstrap',
  //   description: 'Let\'s learn Bootstrap',
  //   status: "Completed"
  // },
]

const tasks = (state = {tasks: initialState}, action) => {
  /************************************************************
   *                    if / else version
  *************************************************************/

  // if(action.type === EDIT_TASK) {
  //   const {payload} = action
  //   return {
  //     tasks: state.tasks.map(task => {
  //       if(task.id === payload.id) {
  //         return Object.assign({}, task, payload.params)
  //       }
  //       return task
  //     })
  //   }
  // }
  // return state

  /************************************************************
   *                    switch version
  *************************************************************/

  const { payload } = action
  switch(action.type) {
    
    case EDIT_TASK : {
      return {
        tasks: state.tasks.map(task => {
          if(task.id === payload.id) {
            return Object.assign({}, task, payload.params)
          }
          return task
        })  
      }
    }

    case CREATE_TASK : {
      return {
        tasks: state.tasks.concat(action.payload)
      }
    }

    case DELETE_TASK : {
      return {
        // filter out tasks except of the one selected
        tasks: state.tasks.filter(task => task.id !== action.id)
      }
    }

    default: 
      return state
  }
}

export default tasks