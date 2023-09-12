import { useReducer, useRef, useState, useCallback } from 'react'

import './App.css'
import Header from './components/Header'
import TodoEditor from './components/TodoEditor'
import { TodoList } from './components/TodoList'
import { TodoContext } from './TodoContext'

const mockData = [
  {
    id : 0,
    isDone : true,
    content : "React 공부하기",
    createdDate : new Date().getTime(),
  },
  {
    id : 1,
    isDone : false,
    content : "Deep dive 공부하기",
    createdDate : new Date().getTime(),
  },
  {
    id : 2,
    isDone : true,
    content : "TS 공부하기",
    createdDate : new Date().getTime(),
  },
];

function reducer(state, action) { // state : 현재 todos 배열을 받음
  switch(action.type) {
    case 'CREATE': {
      return [...state, action.data];
    }
    case 'UPDATE': {
      return state.map((it) => it.id === action.data ? {...it, isDone: !it.isDone} : it)
    }
    case 'DELETE': {
      return state.filter((it) => it.id !== action.data)
    }
  }
}

function App() {

  // const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type : "CREATE",
      data : {
        id : idRef.current++,
        isDone : false,
        content,
        createdDate : new Date().getTime(),
      },
    })
    // setTodos(
    //   [newTodo, ...todos]
    // );
  }

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type : "UPDATE",
      data : targetId
    })
    // setTodos(
      // todos.map((todo) => {
      //   if(todo.id === targetId) {
      //     return {
      //       ...todo,
      //       isDone: !todo.isDone,
      //     };
      //   } else {
      //     return todo;
      //   }
      // })
      // todos.map((todo) => todo.id === targetId ? {...todo, isDone: !todo.isDone} : todo)
    // )
  },[]);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type : "DELETE",
      data : targetId
    })
    // setTodos(todos.filter((todo) => todo.id !== targetId))
  },[]);

  return (
    <div className='App'>
      <Header/>
      <TodoContext.Provider value={{
        todos, onCreate, onUpdate, onDelete
      }}>
        <TodoEditor/>
        <TodoList/>
      </TodoContext.Provider>
    </div>
  )
}

export default App
