import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import LoaderComponent from "./LoaderComponent";
import { useParams } from "react-router-dom";
import { db } from "../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({ mensaje }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoria } = useParams();

useEffect(() => {
    setLoading(true);
    setError(null);
    
    const prodCollection = categoria
        ? query(collection(db, "productos"), where("categoria", "==", categoria))
        : collection(db, "productos");
    
    getDocs(prodCollection)
        .then((res) => {
            const list = res.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));

            // 🔹 Si no hay categoría, mostrar solo los de home
            const filtered = categoria
                ? list
                : list.filter((prod) => prod.categoria === "home");

            setData(filtered);
        })
        .catch((error) => {
            console.error("Error al cargar productos:", error);
            setError("Error al cargar los productos");
        })
        .finally(() => {
            setLoading(false);
        });
}, [categoria]);

  if (loading) {
    return <LoaderComponent />;
  }

  if (error) {
    return (
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <div className="alert alert-danger">
              <h3>Error</h3>
              <p>{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <div className="alert alert-info">
              <h3>No hay productos disponibles</h3>
              <p>No se encontraron productos en esta categoría.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <ItemList data={data} />;
};

export default ItemListContainer;
