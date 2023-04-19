
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Todo from './todo';
import CreateTodo from './CreateTodo';
import UpdateTodo from './UpdateTodo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Todo />}></Route>
          <Route path='/create' element={<CreateTodo />}></Route>
          <Route path='/update/:id' element={<UpdateTodo />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
