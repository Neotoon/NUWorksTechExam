
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Todo from './todo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Todo />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;