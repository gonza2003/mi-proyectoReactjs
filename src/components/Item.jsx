import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Item = ({ item }) => {
    const navigate = useNavigate();

    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={item.img} alt={item.nombre} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <div className="card-body">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">{item.descripcion}</p>
                <p>Precio: ${item.precio}</p>
                <button
                    className="btn btn-primary"
                    onClick={() => navigate(`/item/${item.id}`)}
                >
                    Obtener más detalles
                </button>
            </div>
        </div>
    );
};

export default Item;