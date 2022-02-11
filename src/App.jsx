import 'styles/App.css';
import Index from 'pages/index'
import Tienda1 from 'pages/tienda1'

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";


function App() {
  return (
    <div classNameName="App">
        <Router>
            <Routes>
                <Route path='/tienda1' element={<Tienda1/>}></Route>
                <Route path='/' element={<Index/>}></Route>
            </Routes>
            
        </Router>
    </div>
  );
}

export default App;
