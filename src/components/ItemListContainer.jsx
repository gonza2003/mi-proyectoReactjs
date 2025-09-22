import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getProducts } from "../mock/AsyncService";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ mensaje }) => {
    const [data, setData] = useState([]);
    const { categoria } = useParams();

    useEffect(() => {
        getProducts().then(productos => {
            if (categoria) {
                setData(productos.filter(p => p.categoria === categoria));
            } else {
                setData(productos.filter(p => p.categoria === "home"));
            }
        });
    }, [categoria]);

    return (
        <div>
            <h2>{mensaje}</h2>
            <ItemList data={data} />
        </div>
    );
};

export default ItemListContainer;