import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import * as data from "../../utils/constants";

//state
initialState = {
  level: "",
  moves: [],
  visible: false,
  VisibilityFilters: {
    ALL: "ALL",
    COMPLETED: "COMPLETE"
  }
};

// action types

const SET_LEVEL = "SET_LEVEL";
const ADD_MOVE = "ADD_MOVE";
const COMPLETE_MOVE = "COMPLETE_MOVE";
const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
const SET_ADD_MODAL_VISIBILITY = "SET_ADD_MODAL_VISIBILITY";

const VisibilityFilters = {
  ALL: "ALL",
  COMPLETED: "COMPLETED"
};

// action creators

export function setLevel(level) {
  const action = {
    type: SET_LEVEL,
    level
  };
  return action;
}

export function addMove(move, completed) {
  const action = {
    type: ADD_MOVE,
    todo: {
      id: _.uniqueId("todo_"),
      move: move,
      completed: completed === true
    }
  };
  return action;
}

export function completeMove(id) {
  const action = {
    type: COMPLETE_MOVE,
    id: id
  };
  return action;
}

export function showModal() {
  const action = {
    type: SET_ADD_MODAL_VISIBILITY,
    visible: true
  };
  return action;
}

export function hideModal() {
  const action = {
    type: SET_ADD_MODAL_VISIBILITY,
    visible: false
  };
  return action;
}

export function showAll() {
  const action = {
    type: SET_VISIBILITY_FILTER,
    filter: VisibilityFilters.ALL
  };
  return action;
}

export function showCompleted() {
  const action = {
    type: SET_VISIBILITY_FILTER,
    filter: VisibilityFilters.COMPLETED
  };
  return action;
}

// reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_LEVEL:
      return {
        ...state,
        level: getLevel,
        moves: ALLMOVES.map(move => move.move)
      };
    case SET_ADD_MODAL_VISIBILITY:
      return {
        ...state,
        visible: action.visible
      };
    case SET_VISIBILITY_FILTER:
      return action.filter;
    case COMPLETE_MOVE:
      let index = _.findIndex(moves, move => move.id === action.id);
      if (index === -1) {
        return moves;
      }
      return [
        ...moves.slice(0, index),
        Object.assign({}, moves[index], {
          completed: true
        }),
        ...moves.slice(index + 1)
      ];
    case ADD_MOVE:
      return [...state.moves, action.moves];
    default:
      return state;
  }
}

const middleware = applyMiddleware(thunkMiddleware);

const store = createStore(reducer, middleware);

export default store;
