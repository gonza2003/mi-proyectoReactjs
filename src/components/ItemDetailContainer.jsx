import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import LoaderComponent from "./LoaderComponent";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const productData = { id: docSnap.id, ...docSnap.data() };
          setDetalle(productData);
        } else {
          setError("Producto no encontrado");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
        setError("Error al cargar el producto");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    } else {
      setError("ID de producto no válido");
      setLoading(false);
    }
  }, [id]);

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

  return (
    <div>
      <ItemDetail detalle={detalle} />
    </div>
  );
};

export default ItemDetailContainer;
