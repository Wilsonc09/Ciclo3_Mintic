import 'styles/App.css';
import Layout from "layouts/Layout";
import Layout2 from 'layouts/Layout2';

import Index from 'pages/index'
import Tienda1 from 'pages/tienda1'
import Tienda2 from 'pages/tienda2';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";


function App() {
  return (
    <div classNameName="App">
        <Router>
            <Layout>
                <Routes>
                    <Route path='/tienda1' element={<Tienda1/>}></Route>
                    <Route path='/' element={<Index/>}></Route>
                    <Route path='/tienda2' element={<Tienda2/>}></Route>
                </Routes>
            </Layout>

            
        </Router>
    </div>
  );
}

export default App;
