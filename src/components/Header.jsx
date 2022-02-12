import logo22 from 'media/logo.png'

const Header=()=>{
    return(
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
    )
}

export default Header;