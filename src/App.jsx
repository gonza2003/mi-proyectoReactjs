import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function NotFound() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>404 - Página no encontrada</h2>
      <p>La ruta que buscas no existe.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <NavBar />
<Routes>
  <Route path='/' element={<ItemListContainer mensaje="Bienvenidos a mi tienda!" />} />
  <Route path='/productos' element={<ItemListContainer mensaje="Estos son nuestros productos" />} />
  <Route path='/productos/:categoria' element={<ItemListContainer mensaje="Catálogo por categoría" />} />
  <Route path='/item/:id' element={<ItemDetailContainer />} />
  <Route path='*' element={<NotFound />} />
</Routes>
    </BrowserRouter>
  )
}

export default App