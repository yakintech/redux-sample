import TodoCreate from "./components/TodoCreate";
import Todolist from "./components/Todolist";
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import TodoReducer from './state/reducers/todo.reducer'

const store = createStore(
  TodoReducer
)


function App() {
  return (
    <>
      <Provider store={store}>
        <TodoCreate></TodoCreate>
        <Todolist></Todolist>
      </Provider>

    </>
  );
}

export default App;
