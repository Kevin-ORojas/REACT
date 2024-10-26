console.log("USE REDUCER");

const initialValue = [
  {
    id: 1,
    todo: "Piedra del alma",
    done: false,
  },
];

const todoReducer = (state = initialValue, action = {}) => {
  if (action.type === "[TODO] add todo") {
    return [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "recolectar piedra del poder",
  done: false,
};

const addTodoAction = {
  type: "[TODO] add todo", // esta va hacer la accion
  payload: newTodo, // y esto es lo que va adentro de la accion y si es para borrar todos no hace falta esta linea.
};

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });
