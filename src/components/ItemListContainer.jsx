import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getProducts } from "../mock/AsyncService";
import { useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";

const ItemListContainer = ({ mensaje }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const { categoria } = useParams();

    useEffect(() => {
        setLoading(true);
        getProducts().then(productos => {
            if (categoria) {
                setData(productos.filter(p => p.categoria === categoria));
            } else {
                setData(productos.filter(p => p.categoria === "home"));
            }
            setLoading(false);
        });
    }, [categoria]);

    return (
        <>
            {loading ? <LoaderComponent /> : <ItemList data={data} />}
        </>
    )
}
export default ItemListContainer;