import logo from './logo.svg';
import './styles/App.css';

import tienda1 from './media/Tienda1.jpg'
import tienda2 from './media/Tienda2.jpg'
import tienda3 from './media/Tienda3.jpg'
import tienda4 from './media/Tienda4.jpg'
import logo22 from './media/logo.png'

function App() {
  return (
    <div classNameName="App">
      <header>
        <ul className="navbar">
            <li><img src={logo22} alt="Logo de la pag" className="logo"/></li>
            <li><button className="button mainbutton">Nuevo post</button></li>
            <li>
                <div className="buscar">
                    <input type="text" placeholder="busca una tienda"/>
                    <i className="fa-solid fa-magnifying-glass button iconsea"></i>
                </div>
            </li>
            <li><button className="button secobutton">Iniciar sesion</button></li>
            <li><button className="button mainbutton">Registrar</button></li>
        </ul>
    </header>
    <main>
        <section>
            <div className="titulo">
                <h1>Tiendas destacadas</h1>
            </div>
            <ul className="cards">
                <li className="card">
                    <div className="contImg">
                        <img src={tienda1} alt="Tienda 1"/>
                    </div>
                    <span className="btitle">Tienda 1</span>
                    <div className="social">
                        <div>
                            <i className="fa-solid fa-heart"></i>
                            <span>100</span>
                        </div>
                        <div>
                            <i className="fa-regular fa-comment"></i>
                            <span>20</span>
                        </div>
                        <div>
                            <i className="fa-solid fa-eye"></i>
                            <span>300</span>
                        </div>
                        
                    </div>
                    
                </li>
                <li className="card">
                    <div className="contImg">
                        <img src={tienda2} alt="Tienda 2"/>
                    </div>
                    <span className="btitle">Tienda 2</span>
                    <div className="social">
                        <div>
                            <i className="fa-solid fa-heart"></i>
                            <span>100</span>
                        </div>
                        <div>
                            <i className="fa-regular fa-comment"></i>
                            <span>20</span>
                        </div>
                        <div>
                            <i className="fa-solid fa-eye"></i>
                            <span>300</span>
                        </div>
                        
                    </div>
                </li>
                <li className="card">
                    <div className="contImg">
                        <img src={tienda3} alt="Tienda 3"/>
                    </div>
                    <span className="btitle">Tienda 3</span>
                    <div className="social">
                        <div>
                            <i className="fa-solid fa-heart"></i>
                            <span>100</span>
                        </div>
                        <div>
                            <i className="fa-regular fa-comment"></i>
                            <span>20</span>
                        </div>
                        <div>
                            <i className="fa-solid fa-eye"></i>
                            <span>300</span>
                        </div>
                        
                    </div>
                </li>
                <li className="card">
                    <div className="contImg">
                        <img src={tienda4} alt="Tienda 4"/>
                    </div>
                    <span className="btitle">Tienda 4</span>
                    <div className="social">
                        <div>
                            <i className="fa-solid fa-heart"></i>
                            <span>100</span>
                        </div>
                        <div>
                            <i className="fa-regular fa-comment"></i>
                            <span>20</span>
                        </div>
                        <div>
                            <i className="fa-solid fa-eye"></i>
                            <span>300</span>
                        </div>
                        
                    </div>
                </li>
            </ul>
        </section>
        <section></section>
    </main>
    <footer></footer>
    </div>
  );
}

export default App;
