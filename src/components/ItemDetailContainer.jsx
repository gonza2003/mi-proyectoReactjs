import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { getOneProduct } from '../mock/AsyncService'

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const { id } = useParams()

    useEffect(() => {
        getOneProduct(id)
        .then((res) => setDetalle(res))
        .catch((error) => console.log(error))
    }, [id])

    return (
        <div>
            <ItemDetail detalle={detalle}/>
        </div>
    )
}

export default ItemDetailContainer