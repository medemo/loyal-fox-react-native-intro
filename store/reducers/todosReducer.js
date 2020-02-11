import {
  ADD_TODO,
  UPDATE_TODO,
  RESET_TODOS,
  FETCH_TODOS_START,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE
} from '../actionTypes'

const initialState = {
  data: [],
  loading: false,
  error: null
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS_START:
      return {
        ...state,
        loading: true
      }
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.todos
      }
    case FETCH_TODOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case ADD_TODO:
      return {
        ...state,
        data: [...state.data, action.todo]
      }
    case UPDATE_TODO:
      const index = state.data.findIndex(todo => todo.id === action.id)
      const updated = Object.assign({}, state.data[index], action.data)
      return {
        ...state,
        data: [
          ...state.data.slice(0, index),
          updated,
          ...state.data.slice(index + 1)
        ]
      }
    case RESET_TODOS:
      return {
        ...state,
        data: []
      }
    default:
      return state
  }
}