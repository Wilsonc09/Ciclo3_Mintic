import CardTienda from 'components/CardTienda';

import tienda1 from 'media/Tienda1.jpg'
import tienda2 from 'media/Tienda2.jpg'
import tienda3 from 'media/Tienda3.jpg'
import tienda4 from 'media/Tienda4.jpg'

function Index(){
    return(
        <section>
                <div className="titulo">
                    <h1>Tiendas destacadas</h1>
                </div>
                <ul className="cards">
                    <CardTienda nombre="Tienda 1" imgtienda={tienda1} path="/tienda1"/>
                    <CardTienda nombre="Tienda 2" imgtienda={tienda2} path="/tienda2"/>
                    <CardTienda nombre="Tienda 3" imgtienda={tienda3} path="/tienda1"/>
                    <CardTienda nombre="Tienda 4" imgtienda={tienda4} path="/tienda2"/>
                </ul>
        </section>
    )
}

export default Index;