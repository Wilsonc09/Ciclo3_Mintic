
import CardTienda from 'components/CardTienda';

import tienda1 from 'media/Tienda1.jpg'
import tienda2 from 'media/Tienda2.jpg'
import tienda3 from 'media/Tienda3.jpg'
import tienda4 from 'media/Tienda4.jpg'
import logo22 from 'media/logo.png'

function Index(){
    return(
        <div className='Index'>
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
                    <CardTienda nombre="Tienda 1" imgtienda={tienda1}/>
                    <CardTienda nombre="Tienda 2" imgtienda={tienda2}/>
                    <CardTienda nombre="Tienda 3" imgtienda={tienda3}/>
                    <CardTienda nombre="Tienda 4" imgtienda={tienda4}/>
                </ul>
            </section>
            <section></section>
        </main>
        <footer></footer>
        </div>
    )
}

export default Index;