import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Index from './pages/index';
import Task1_2 from "./pages/Task1_2/index";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />}></Route>
        <Route path='/Task1_2/Task1_2' element={<Task1_2 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
