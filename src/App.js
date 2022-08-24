import React, {useEffect} from 'react';
import Context from './context';
import './App.css';
import TodoList from './Todo/TodoList';
import TodoHeader from './Todo/TodoHeader';
import Modal from "./Modal/Modal";

const AddTodo = React.lazy(() => import('./Todo/AddTodo'));


function App() {

    const [todos, setTodos] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(response => response.jsone())
        .then(todos => {
            setTimeout(() => {
                setTodos(todos);
                setLoading(false);
                }, 2000
            )
        })
    }, [])
    
   function toggleTodo(id) {

       setTodos(
           todos.map(todo => {
           if (todo.id === id) {
               todo.completed = !todo.completed;
           }
           return todo;
           })
       )
   }

   function removeTodo(id) {
       setTodos(todos.filter(todo => todo.id !== id))
   }

   function addTodo(title) {
       setTodos(
           todos.concat([
               {
                   title,
                   id: Date.now(),
                   completed: false,
                   deadline: '2 days',
                   status: 'not started',
               }
           ])
       )
   }
    
  return (
      <Context.Provider value={{ removeTodo }}>
          <div className="wrapper">
              <TodoHeader/>

              <Modal/>

              <React.Suspense fallback={<p>Loading...</p>}>
                  <AddTodo onCreate={addTodo}/>
              </React.Suspense>


              {loading && <Loader/>}
              {todos.length ? (
                      <TodoList todosList={todos} onToggle={toggleTodo}/>
                  ):(
                      loading ? null : <p>No todos</p>
                  )

              }

          </div>
      </Context.Provider>
  );
}

export default App;

































