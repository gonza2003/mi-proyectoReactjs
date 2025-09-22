import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemList = ({ data }) => {
    const navigate = useNavigate();

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {data.map((item) => (
                <div key={item.id}>
                    <h2>{item.nombre}</h2>
                    <img src={item.img} alt={item.nombre} style={{ width: "150px" }} />
                    <p>Precio: ${item.precio}</p>
                    <button
                        className="btn btn-primary"
                        onClick={() => navigate(`/item/${item.id}`)}
                    >
                        Obtener más detalles
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ItemList;