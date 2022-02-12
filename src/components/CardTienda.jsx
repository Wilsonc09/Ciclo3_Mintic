import {Link} from "react-router-dom"

function CardTienda(props){
    return(
        <li className="card">
            <Link to={props.path}>
                <div className="contImg">
                    <img src={props.imgtienda} alt={props.nombre}/>
                </div>
            </Link>
            <span className="btitle">{props.nombre}</span>
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
    );
}

export default CardTienda;