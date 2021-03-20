import TodoCreate from "./components/TodoCreate";
import Todolist from "./components/Todolist";
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import TodoReducer from './state/reducers/todo.reducer'
import TodoBulk from "./components/TodoBulk";

const store = createStore(
  TodoReducer
)


function App() {
  console.log(store)
  return (
    <>
      <Provider store={store}>
        <TodoBulk></TodoBulk>
        <TodoCreate></TodoCreate>
        <Todolist></Todolist>
      </Provider>

    </>
  );
}

export default App;
