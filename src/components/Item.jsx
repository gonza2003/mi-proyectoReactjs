import react from 'react';

const Item = ({ item }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">{item.description}</p>
            </div>
        </div>
    );
};

export default Item;
